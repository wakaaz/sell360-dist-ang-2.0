import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimaryOrdersService } from '../../../orders/primary-orders/services/primary-orders.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { PrimaryOrder } from '../../../orders/primary-orders/_models/order';
import { PrimaryOrderItem } from '../../../orders/primary-orders/_models/orderItems';
import * as moment from 'moment';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';

@Component({
  selector: 'app-received-order-edit',
  templateUrl: './received-order-edit.component.html',
  styleUrls: ['./received-order-edit.component.css'],
  standalone: false,
})
export class ReceivedOrderEditComponent implements OnInit, OnDestroy {
  loading = false;
  orderId: number;
  order: PrimaryOrder = new PrimaryOrder();
  items: PrimaryOrderItem[] = [];
  saving = false;
  freight_price: number = 0;
  taxClasses: any[];
  productsMetaDataDistributor: any;
  distributor: any;
  private metaReady: boolean = false;

  constructor(
    private actr: ActivatedRoute,
    private router: Router,
    private primarySrvc: PrimaryOrdersService,
    private toastService: ToasterService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.orderId = +this.actr.snapshot.params['orderId'];
    this.distributor = this.storageService.getItem(
      localStorageKeys.distributor
    );
    this.getProductsMetaData();
    if (this.orderId > 0) {
      this.fetchOrder(this.orderId);
    }
  }

  ngOnDestroy(): void {}

  fetchOrder(id: number): void {
    this.loading = true;
    this.primarySrvc.getOderDetailById(id).subscribe(
      (res: any) => {
        const { status, data, message } = res || {};
        if (status === 200) {
          const orderRes = { ...(data?.order || {}) };
          this.order.id = orderRes.id;

          this.order.distributor_name = orderRes.distributor_name;
          this.order.employee_name = orderRes.employee_name;
          this.order.employee_id = orderRes.employee_id;
          this.order.date = orderRes.date;
          this.order.parent_id = orderRes.parent_id;
          this.order.distributor_id = orderRes.distributor_id;
          this.order.frieght_price = orderRes.frieght_price;
          this.freight_price = +orderRes.frieght_price || 0;
          // Map items using the same service mapper used in edit-order
          this.order.orderContent = this.primarySrvc.getPrimaryOrderItem([
            ...(data?.content || []),
          ]);
          this.items = this.order.orderContent;
          // Initialize received quantities to 0 for UI (does not affect calculations)
          this.items.forEach((it: any) => {
            it.received_unit_quantity = it.parent_qty_sold || 0;

            if (this.metaReady) {
              this.onReceivedUnitChange(it);
            }
          });
        } else {
          this.toastService.showToaster({
            type: 'error',
            title: 'Error:',
            message: message || 'Failed to fetch order',
          });
        }

        if (this.metaReady) {
          this.loading = false;
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            title: 'Error:',
            message: 'Cannot fetch order. Please try again',
          });
        }
      }
    );
  }

  onPackChange(item: any): void {
    const packs = +item.primary_qty_sold || 0;
    const unitsPerPack = +item.unit_quantity || +item.parent_unit_quantity || 1;
    item.parent_qty_sold = packs * unitsPerPack;
  }

  onUnitChange(item: any): void {
    const units = +item.parent_qty_sold || 0;
    const unitsPerPack = +item.unit_quantity || +item.parent_unit_quantity || 1;
    item.primary_qty_sold = unitsPerPack ? units / unitsPerPack : 0;
  }

  onReceivedUnitChange(item: any, event?: Event): void {
    // Use received units for display calculations; keep original order quantities intact
    let receivedUnits: number;
    if (event && (event.target as HTMLInputElement)) {
      const raw = (event.target as HTMLInputElement).value;
      receivedUnits = +raw || 0;
    } else {
      receivedUnits = +item.received_unit_quantity || 0;
    }
    const unitsPerPack = +item.unit_quantity || +item.parent_unit_quantity || 1;
    const maxUnits = +item.parent_qty_sold || 0;
    if (maxUnits > 0 && receivedUnits > maxUnits) {
      receivedUnits = maxUnits;
      item.received_unit_quantity = maxUnits;
      if (event && (event.target as HTMLInputElement)) {
        (event.target as HTMLInputElement).value = String(maxUnits);
      }
    }
    // Effective units should follow exactly what user entered (including 0)
    const effectiveUnits = receivedUnits;
    const effectivePacks = unitsPerPack ? effectiveUnits / unitsPerPack : 0;

    // Build selectedScheme from existing scheme fields if any
    if (item.scheme_id) {
      item.selectedScheme = {
        ...item.selectedScheme,
        id: item.scheme_id,
        scheme_type: item.scheme_type,
        scheme_rule: item.scheme_rule,
        min_qty: item.scheme_min_quantity,
        scheme_quantity_free: item.scheme_quantity_free,
        discount_on_tp: item.scheme_discount_on_tp || item.scheme_discount,
        discount_type: item.scheme_discount_type,
      };
    } else {
      item.selectedScheme = null;
    }

    // Prepare calc object for scheme/tax application (do not mutate original item)
    const baseUnits = +item.parent_qty_sold || 0;
    const bookerPerUnit =
      baseUnits > 0 ? (+item.booker_discount_value || 0) / baseUnits : 0;
    const effectiveBookerValue = bookerPerUnit * effectiveUnits;
    const calc: any = {
      unit_item_trade_price:
        +item.unit_item_trade_price || +item.parent_tp || 0,
      unit_item_retail_price: +item.unit_item_retail_price || 0,
      parent_tp: +item.parent_tp || 0,
      parent_qty_sold: effectiveUnits,
      primary_qty_sold: effectivePacks,
      distributor_discount: +item.distributor_discount || 0,
      booker_discount: +item.booker_discount || 0,
      booker_discount_value: effectiveBookerValue,
      gst_tax: 0,
      advance_income_tax: 0,
      tax_class_id: item.tax_class_id,
      is_tax: item.is_tax,
      scheme_quantity_free: +item.scheme_quantity_free || 0,
      selectedScheme: item.scheme_id
        ? {
            id: item.scheme_id,
            scheme_type: item.scheme_type,
            scheme_rule: +item.scheme_rule || 0,
            min_qty: +item.scheme_min_quantity || 0,
            quantity_free:
              +item?.quantity_free || +item.scheme_quantity_free || 0,
            discount_on_tp:
              item.scheme_discount_on_tp || item.scheme_discount || 0,
            discount_type: item.scheme_discount_type,
            start_date: item.start_date,
            end_date: item.end_date,
          }
        : null,
    };

    // Apply schemes and taxes using the same flow as edit-order (update mode)
    const afterScheme = this.applySchemesNew(
      null,
      {
        ...calc,
      },
      true
    );
    const afterTax = this.applyTaxesNew(null, { ...afterScheme }, true);

    // Compute effective display values based on effectiveUnits
    const gross =
      (+item.unit_item_trade_price || +item.parent_tp || 0) * effectiveUnits;
    const tradeOffer = +afterTax.trade_offer || 0;
    const distValue =
      ((gross - tradeOffer) * (+item.distributor_discount || 0)) / 100;
    const bookerValue = (+item.booker_discount || 0) * effectiveUnits;
    const gst = +afterTax.gst_tax || 0;
    const ait = +afterTax.advance_income_tax || 0;
    const totalBill = gross - distValue - tradeOffer + gst + ait - bookerValue;

    // Store ephemeral calculated fields for template consumption
    (item as any)._calc_gross_amount = gross;
    (item as any)._calc_trade_offer = tradeOffer;
    (item as any)._calc_scheme_free = +afterTax.scheme_quantity_free || 0;
    (item as any)._calc_dist_discount_value = distValue;
    (item as any)._calc_booker_discount_value = bookerValue;
    (item as any)._calc_gst_tax = gst;
    (item as any)._calc_ait_tax = ait;
    (item as any)._calc_total_bill = totalBill;
  }

  // ====== Copied/adapted calculation helpers from edit-order.component.ts ======
  private getProductsMetaData(): void {
    this.primarySrvc.getProductsMetaData().subscribe((res: any) => {
      if (res?.status === 200) {
        this.productsMetaDataDistributor = res?.data?.distributor;
        // Load tax classes for distributor province if available
        const province_id = res?.data?.distributor?.province_id;
        if (province_id) {
          this.primarySrvc
            .getTaxClasses(province_id)
            .subscribe((tax_classes: any) => {
              if (tax_classes?.status === 200) {
                this.taxClasses = tax_classes.data;
                this.metaReady = true;
                if (this.items?.length) {
                  this.items.forEach((it: any) =>
                    this.onReceivedUnitChange(it)
                  );
                }
                this.loading = false;
              }
            });
        } else {
          // No province -> still allow calculations (may default to 0 if no classes)
          this.metaReady = true;
          if (this.items?.length) {
            this.items.forEach((it: any) => this.onReceivedUnitChange(it));
          }
          this.loading = false;
        }
      }
    });
  }

  private isSchemeValid(scheme: any): boolean {
    const current_date = moment().format('YYYY-MM-DD');
    const { start_date, end_date } = scheme || {};
    if (!start_date || !end_date) {
      return true;
    }
    if (current_date >= start_date && current_date <= end_date) {
      return true;
    } else {
      return false;
    }
  }

  private applySchemesNew(
    selectedProduct: any,
    createdPrimaryOrder: any,
    isUpdate: boolean = false
  ): any {
    const { selectedScheme, stockQty, parent_qty_sold, parent_tp } = !isUpdate
      ? selectedProduct
      : createdPrimaryOrder || {};
    const item_trade_price = isUpdate
      ? createdPrimaryOrder?.unit_item_trade_price || parent_tp
      : selectedProduct?.parent?.item_trade_price ||
        selectedProduct?.item_trade_price;
    const { scheme_rule, scheme_type, min_qty, quantity_free, discount_on_tp } =
      selectedScheme || {};

    const quantityToUseForSchemes = isUpdate
      ? parent_qty_sold
      : createdPrimaryOrder?.parent_qty_sold || +stockQty;

    switch (scheme_type) {
      case 'free_product':
        if (scheme_rule === 4) {
          if (this.isSchemeValid(selectedScheme)) {
            const freeQtyInterval = Math.floor(
              quantityToUseForSchemes / min_qty
            );

            const orderFreeQty = freeQtyInterval * quantity_free;
            createdPrimaryOrder['scheme_quantity_free'] = orderFreeQty;
            createdPrimaryOrder['selectedScheme'] = selectedScheme;
          }
        } else if (scheme_rule === 1) {
          if (this.isSchemeValid(selectedScheme)) {
            createdPrimaryOrder['scheme_quantity_free'] = 0;
            let TO = 0;
            const quantityToUse = quantityToUseForSchemes;
            if (quantityToUse >= min_qty) {
              const tp_after_scheme =
                (item_trade_price * min_qty) / (min_qty + quantity_free);
              const discount_on_tp_calc = item_trade_price - tp_after_scheme;
              TO = discount_on_tp_calc * quantityToUse;
            } else {
              TO = 0;
            }
            createdPrimaryOrder['trade_offer'] = TO;
            createdPrimaryOrder['selectedScheme'] = selectedScheme;
          }
        }
        break;
      case 'dotp':
        if (this.isSchemeValid(selectedScheme)) {
          const quantityToUse = quantityToUseForSchemes;
          let TO = 0;
          if (quantityToUse >= min_qty) {
            TO = quantityToUse * discount_on_tp;
          }
          createdPrimaryOrder['trade_offer'] = TO;
          createdPrimaryOrder['selectedScheme'] = selectedScheme;
        }
        break;
      default:
        break;
    }
    return createdPrimaryOrder;
  }

  private applyTaxesNew(
    selectedProduct: any,
    createdPrimaryOrder: any,
    isUpdate: boolean = false
  ) {
    const { is_tax, tax_class_id } = isUpdate
      ? createdPrimaryOrder
      : selectedProduct || {};
    createdPrimaryOrder['tax_class_id'] = tax_class_id;
    createdPrimaryOrder['is_tax'] = is_tax;

    const is_distributor_filer =
      this.productsMetaDataDistributor?.filer_status === 1;
    const tax_class = this.taxClasses?.find(
      (taxc: any) => taxc.tax_class_id === tax_class_id
    );

    const {
      adv_inc_filer_distributor_value,
      adv_inc_nonfiler_distributor_value,
      gst_filer_distributor_value,
      gst_nonfiler_distributor_value,
      tax_applied_on,
    } = tax_class || {};

    switch (tax_applied_on) {
      case 'net_price': {
        const gross_amount =
          (+createdPrimaryOrder.unit_item_trade_price || 0) *
          (+createdPrimaryOrder.parent_qty_sold || 0);
        const trade_offer_total = +createdPrimaryOrder.trade_offer || 0;
        const gross_amount_after_to = gross_amount - trade_offer_total;
        const distributor_discount_amount =
          (gross_amount_after_to *
            (+createdPrimaryOrder.distributor_discount || 0)) /
          100;
        const net_amount = Math.max(
          0,
          gross_amount -
            trade_offer_total -
            distributor_discount_amount -
            (+createdPrimaryOrder.booker_discount_value || 0)
        );
        if (is_distributor_filer) {
          const gst_tax =
            (net_amount * (gst_filer_distributor_value || 0)) / 100;
          const advance_income_tax =
            ((adv_inc_filer_distributor_value || 0) / 100) *
            (gst_tax + net_amount);
          createdPrimaryOrder['gst_tax'] = gst_tax;
          createdPrimaryOrder['advance_income_tax'] = advance_income_tax;
          createdPrimaryOrder.tax_amount = gst_tax + advance_income_tax;
        } else {
          const gst_tax =
            (net_amount * (gst_nonfiler_distributor_value || 0)) / 100;
          const advance_income_tax =
            ((adv_inc_nonfiler_distributor_value || 0) / 100) *
            (gst_tax + net_amount);
          createdPrimaryOrder['gst_tax'] = gst_tax;
          createdPrimaryOrder['advance_income_tax'] = advance_income_tax;
          createdPrimaryOrder.tax_amount = gst_tax + advance_income_tax;
        }
        break;
      }
      case 'retail_price': {
        if (is_distributor_filer) {
          const single_gst =
            (1 *
              +createdPrimaryOrder.unit_item_retail_price *
              gst_filer_distributor_value) /
            100;
          const gst_tax =
            single_gst *
            ((+createdPrimaryOrder?.scheme_quantity_free || 0) +
              +createdPrimaryOrder.parent_qty_sold);
          const single_advance_income_tax =
            (adv_inc_filer_distributor_value / 100) *
            (single_gst + createdPrimaryOrder.unit_item_retail_price);
          const advance_income_tax =
            single_advance_income_tax *
            ((+createdPrimaryOrder?.scheme_quantity_free || 0) +
              +createdPrimaryOrder.parent_qty_sold);
          createdPrimaryOrder['gst_tax'] = gst_tax;
          createdPrimaryOrder['advance_income_tax'] = advance_income_tax;
          createdPrimaryOrder.tax_amount = gst_tax + advance_income_tax;
        } else {
          const single_gst =
            (1 *
              +createdPrimaryOrder.unit_item_retail_price *
              gst_nonfiler_distributor_value) /
            100;
          const gst_tax =
            single_gst *
            ((+createdPrimaryOrder?.scheme_quantity_free || 0) +
              +createdPrimaryOrder.parent_qty_sold);
          const single_advance_income_tax =
            (adv_inc_nonfiler_distributor_value / 100) *
            (single_gst + createdPrimaryOrder.unit_item_retail_price);
          const advance_income_tax =
            single_advance_income_tax *
            ((+createdPrimaryOrder?.scheme_quantity_free || 0) +
              +createdPrimaryOrder.parent_qty_sold);
          createdPrimaryOrder['gst_tax'] = gst_tax;
          createdPrimaryOrder['advance_income_tax'] = advance_income_tax;
        }
        break;
      }
      default:
        break;
    }

    return createdPrimaryOrder;
  }

  // totals (footer)
  get totalItems(): number {
    return this.order?.orderContent?.length || 0;
  }
  get totalGrossAmount(): number {
    return (this.items || []).reduce(
      (acc: number, it: any) => acc + (+it._calc_gross_amount || 0),
      0
    );
  }
  get totalDiscount(): number {
    return (this.items || []).reduce(
      (acc: number, it: any) =>
        acc +
        (+it._calc_trade_offer || 0) +
        (+it._calc_dist_discount_value || 0) +
        (+it._calc_booker_discount_value || 0),
      0
    );
  }
  get subTotal(): number {
    return this.totalGrossAmount - this.totalDiscount;
  }
  get subTotalPlusFreight(): number {
    return this.subTotal + (+this.freight_price || 0);
  }
  get totalTax(): number {
    return (this.items || []).reduce(
      (acc: number, it: any) =>
        acc + (+it._calc_gst_tax || 0) + (+it._calc_ait_tax || 0),
      0
    );
  }
  get totalPKR(): number {
    const itemsTotal = (this.items || []).reduce(
      (acc: number, it: any) => acc + (+it._calc_total_bill || 0),
      0
    );
    return itemsTotal + (+this.freight_price || 0);
  }

  save(): void {
    if (this.saving) return;
    this.saving = true;
    // Ensure freight sync
    this.order.frieght_price = this.freight_price || 0;
    // Mark as receivable order so backend sets correct status
    (this.order as any).is_receivable_order =
      (this.order as any).is_receivable_order || 'yes';

    // Call same update flow as edit page
    this.primarySrvc
      .updateOrderV2(
        this.order,
        this.distributor,
        this.order.employee_id,
        this.taxClasses,
        true
      )
      .subscribe(
        (res) => {
          const { status, message } = res || {};
          if (status === 'success' || status === 200) {
            this.toastService.showToaster({
              type: 'success',
              title: 'Success:',
              message: message || 'Order updated successfully!',
            });
            this.router.navigate(['/inventory/received-order']);
          } else {
            this.toastService.showToaster({
              type: 'error',
              title: 'Error:',
              message: (res as any)?.message || 'Failed to update order',
            });
          }
          this.saving = false;
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            this.toastService.showToaster({
              type: 'error',
              title: 'Error:',
              message: 'Cannot save order. Please try again',
            });
          }
          this.saving = false;
        }
      );
  }

  cancel(): void {
    this.router.navigate(['/inventory/received-order']);
  }
}
