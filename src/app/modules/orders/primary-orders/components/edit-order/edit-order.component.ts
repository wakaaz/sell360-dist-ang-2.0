import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { PrimaryOrdersService } from '../../services/primary-orders.service';
import { IPrimaryOrder, PrimaryOrder } from '../../_models/order';
import {
  getNewPrimaryOderItem,
  IPrimaryOrderItem,
  PrimaryOrderItem,
} from '../../_models/orderItems';
import {
  freeProductsRules,
  schemes,
  SCHEME_RULES,
} from 'src/app/core/constants/schemes.constant';
import { DataService } from 'src/app/modules/shared/services';
import { IOrderItemDto } from '../../_models/orderItemDtos';
import { catchError, EMPTY, of, Subscription, switchMap, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
  standalone: false,
})
export class EditOrderComponent implements OnInit, OnDestroy {
  //#region Fields and Construct on int
  BASE_URL = environment.apiDomain;
  subscriptions: Subscription[] = [];
  order: PrimaryOrder;
  orderItemDtos: IOrderItemDto[];
  showProducts = false;
  dispProducts: Array<any> = [];
  selectedProductsIds: Array<any> = [];
  showQuantityModal = false;
  merchantDiscount: any;
  loadingProducts = false;
  specialDiscounts: Array<any> = [];
  productSearchText: string;
  allProducts: Array<any> = [];
  subInventory: Array<any> = [];
  tradeoffers: Array<any> = [];
  selectedProduct: any = {};
  selectedProducts: Array<any> = [];
  selectedRegion: number;
  selectedSegment: number;
  grossAmount: number;
  isAdded: boolean = false;
  alreadyAdded: boolean = false;
  loading: boolean = false;
  saving: boolean = false;
  status: string;
  isNew: boolean;
  distributor: any;
  productsMetaDataDistributor: any;
  subDistributor: any;
  selectedSubDistributor: number;
  subDistributors: any[];
  taxClasses: any[];
  isReturn = false;
  title: string;
  showEditFields = false;

  constructor(
    @Inject(LocalStorageService) private storageService: LocalStorageService,
    private actr: ActivatedRoute,
    public primarySrvc: PrimaryOrdersService,
    private toastService: ToasterService,
    private dataService: DataService,
    private router: Router
  ) {
    this.order = new PrimaryOrder();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.distributor = this.storageService.getItem(
      localStorageKeys.distributor
    );
    const orderId = this.actr.snapshot.params['orderId'];
    this.showEditFields = orderId > 0 ? true : false;
    this.status = this.actr.snapshot.params['status'];
    this.getProductsMetaData();
    this.isReturn =
      this.actr.snapshot.params['new'] === 'return' ? true : false;

    this.isNewOrder();
    if (this.isNew) {
      this.loading = true;
      this.getOrderbyOrderId(orderId);
    }
    this.title = this.isNew ? 'Edit' : 'Create';
    if (this.isReturn) {
      this.title = 'Return';
    }
    if (!this.isNew || this.isReturn) {
      this.getDistributorsEmployees(this.distributor.id);
    }
  }
  getDistributorsEmployees(id: number) {
    const sub = this.primarySrvc.getSubDistributors().subscribe((emp) => {
      this.subDistributors = emp.data;
    });
    this.subscriptions.push(sub);
  }

  isNewOrder() {
    this.isNew = this.actr.snapshot.params['new'] !== 'new' ? true : false;
  }

  correctIamgeURL() {
    this.allProducts.forEach((x) => {
      const urlArray = x.thumbnail?.split('/');
      if (urlArray && urlArray.length && urlArray[0] === 'https:') {
        x.thumbnail =
          this.BASE_URL + '/' + x.thumbnail?.split('/').splice(3).join('/') ||
          '';
      } else {
        x.thumbnail = this.BASE_URL + '/' + x.thumbnail;
      }
    });
  }
  onSubDistributorChanged(): void {
    this.subDistributor = this.subDistributors.find(
      (x) => x.id === this.selectedSubDistributor
    );
  }

  //#region get order by orderId
  getOrderbyOrderId(orderId: number) {
    const sub = this.primarySrvc
      .getOderDetailById(orderId)
      .subscribe((x: any) => {
        const orderRes = { ...x.data.order };
        this.order.distributor_name = orderRes.distributor_name;
        this.order.employee_name = orderRes.employee_name;
        this.order.date = orderRes.date;
        this.order.id = orderRes.id;
        this.order.frieght_price = orderRes.frieght_price;
        this.order.orderContent = this.primarySrvc.getPrimaryOrderItem([
          ...x.data.content,
        ]);
        this.loading = false;
      });
    this.subscriptions.push(sub);
  }

  //#endregion

  //#region  show product list
  showProductsList(event: Event): void {
    event.stopPropagation();

    // Skip sub distributor validation in edit mode since distributor is already selected
    if (!this.showEditFields && !this.subDistributor?.id) {
      this.showToastMessage('Error:', 'Please select sub distributor', 'error');
      return;
    }

    this.allProducts = this.allProducts.map((product) => {
      return product;
    });
    this.dispProducts = [...this.allProducts];
    this.showProducts = true;
    document.body.classList.add('no-scroll');
    const overlayEls = document.getElementsByClassName('overlay-blure');
    if (overlayEls && overlayEls.length > 0) {
      (overlayEls[0] as HTMLElement).classList.add('d-block');
    }
    const blurEl = document.getElementById('blureEffct-1');
    if (blurEl) {
      blurEl.classList.add('blur-div');
    }
  }
  //#endregion

  //#region API call get products meta data

  getProductsMetaData(): void {
    this.loadingProducts = true;

    const sub = this.primarySrvc
      .getProductsMetaData()
      .pipe(
        tap((res: any) => {
          if (res?.status === 200) {
            if (this.showEditFields) {
              for (let i = 0; i < this.order.orderContent.length; i++) {
                this.allProducts = res.data.inventory.map((pr) => {
                  if (this.order.orderContent[i].item_id === pr.item_id) {
                    pr.isAdded = true;
                  } else {
                    pr.isAdded = false;
                  }
                  pr.net_amount = 0.0;
                  return pr;
                });
              }
            } else {
              this.allProducts = res.data.inventory.map((pr) => {
                pr.isAdded = false;
                pr.net_amount = 0.0;
                return pr;
              });
            }

            this.correctIamgeURL();
            this.specialDiscounts = res.data.special_discount;
            // this.prefrences = res.data.prefs;
            this.dispProducts = [...this.allProducts];
            this.subInventory = res.data.sub_inventory;
            this.tradeoffers = res.data.tradeoffers;
            this.loadingProducts = false;
            this.productsMetaDataDistributor = res?.data?.distributor;
          } else {
            // const toast: Toaster = {
            //   type: 'error',
            //   message: res.message,
            //   title: 'Error:',
            // };
            // this.toastService.showToaster(toast);
            this.showToastMessage('Error:', res.message, 'error');
          }
        }),
        switchMap((res: any) => {
          const province_id = res?.data?.distributor?.province_id;

          if (res?.status === 200 && province_id) {
            return this.primarySrvc.getTaxClasses(province_id);
          } else {
            return of(null);
          }
        }),
        catchError((error: any) => {
          this.loadingProducts = false;
          if (error.status !== 1 && error.status !== 401) {
            // const toast: Toaster = {
            //   type: 'error',
            //   message: 'Cannot fetch counter sale data. Please try again',
            //   title: 'Error:',
            // };
            // this.toastService.showToaster(toast);
            this.showToastMessage(
              'Error:',
              'Cannot fetch counter sale data. Please try again',
              'error'
            );
          }
          return of(null);
        })
      )
      .subscribe((tax_classes: any) => {
        if (tax_classes?.status === 200) {
          this.taxClasses = tax_classes.data;
        } else {
          // const toast: Toaster = {
          //   type: 'error',
          //   message: tax_classes.message,
          //   title: 'Error:',
          // };
          // this.toastService.showToaster(toast);
          this.showToastMessage('Error:', tax_classes.message, 'error');
        }
      });

    this.subscriptions.push(sub);
  }

  //#endregion

  //#region click outside event when side bar prod opened
  clickedOutSide(event: Event): void {
    if (
      this.showProducts &&
      !this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-products')
    ) {
      this.closeProductsList();
    }
  }
  //#endregion

  //#region close product list event
  closeProductsList(): void {
    this.showProducts = false;
    document.body.classList.remove('no-scroll');
    const overlayEls = document.getElementsByClassName('overlay-blure');
    if (overlayEls && overlayEls.length > 0) {
      (overlayEls[0] as HTMLElement).classList.remove('d-block');
    }
    const blurEl = document.getElementById('blureEffct-1');
    if (blurEl) {
      blurEl.classList.remove('blur-div');
    }
  }
  //#endregion

  //#region search inventory product
  searchProduct(): void {
    if (this.productSearchText) {
      this.dispProducts = this.allProducts.filter((prod) =>
        prod.item_name
          .toLowerCase()
          .includes(this.productSearchText.toLowerCase())
      );
    } else {
      this.dispProducts = this.allProducts.filter((prod) =>
        prod.item_name
          .toLowerCase()
          .includes(this.productSearchText.toLowerCase())
      );
    }
  }
  //#endregion

  //#region isAdded true or false for the display Product
  displayProductsIsAddedStatus(value: boolean = false, itemId: number = 0) {
    const dispProductsLength = this.dispProducts.length;
    for (let i = 0; i < dispProductsLength; i++) {
      if (this.dispProducts[i].item_id === itemId) {
        this.dispProducts[i].isAdded = value;
        break;
      }
    }
  }
  //#endregion

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.onerror = null;
      img.src = 'assets/images/default_product.jpg';
    }
  }

  //#region  add prioduct to order
  addProductToOrder(event: Event): void {
    if (!this.order.orderContent && !this.isNew) {
      this.order.orderContent = new Array<PrimaryOrderItem>();
    }

    let primary_order = getNewPrimaryOderItem(this.selectedProduct);

    if (primary_order.scheme_id) {
      primary_order = this.applySchemesNew(this.selectedProduct, primary_order);
    }

    if (this.selectedProduct.is_tax) {
      primary_order = this.applyTaxesNew(this.selectedProduct, primary_order);
    }

    primary_order = this.applyTotalBill(primary_order);

    this.order.orderContent.push(primary_order);
    this.displayProductsIsAddedStatus(true, this.selectedProduct.item_id);
    this.showQuantityModal = false;
  }

  //#endregion

  //#region Remove product from order
  removeProductFromOrder(product: any): void {
    this.selectedProducts = this.selectedProducts.filter((x) => {
      if (x.item_id === product.item_id && x.unit_name !== product.unit_name) {
        return x;
      } else if (x.item_id !== product.item_id) {
        return x;
      }
    });
    this.allProducts = this.allProducts.map((prod) => {
      if (prod.item_id === product.item_id) {
        prod.isAdded = false;
      }
      return prod;
    });
    this.dispProducts = this.dispProducts.map((prod) => {
      if (prod.item_id === product.item_id) {
        prod.isAdded = false;
      }
      return prod;
    });
    this.selectedProductsIds = this.selectedProductsIds.filter(
      (x) => x !== product.item_id
    );
  }
  //#endregion

  //#region close qty model
  closeQuantityModal(event: Event): void {
    if (
      this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-quantity')
    ) {
      this.showQuantityModal = false;
      this.selectedProduct = {};
    }
  }
  //#endregion

  //#region open Quantity model
  openQuantityModal(product: any): void {
    this.showQuantityModal = true;
    if (product.schemes?.length) {
      product.schemes = product.schemes.map((scheme) => {
        scheme.isAvailable = false;
        switch (scheme.scheme_type) {
          case 'free_product':
            scheme.name = schemes.free_products;
            scheme.rule_name = freeProductsRules[scheme.scheme_rule];
            break;
          case 'dotp':
            scheme.name = schemes.dotp;
            break;
          case 'comp_product':
            product = this.dataService.applyComplementaryScheme(product);
            break;
          case 'bundle_offer': //it will be applied on after item added to order details because it depends on multiple items
            break;
          case 'mix_match': //it will be applied on after item added to order details because it depends on multiple items
            break;
          default:
            scheme.name = schemes.gift;
            break;
        }
        return scheme;
      });
    }
    this.selectedProduct = { ...product };
    this.selectedProduct.selectedScheme = null;
    // this.selectedProduct.units = this.prefrences.filter(x => x.item_id === product.item_id);
  }
  //#endregion

  //#region set Quantity model
  setQuantity(
    product: any,
    isUpdate: boolean = false,
    field: string = ''
  ): void {
    if (+product.stockQty > 1000) {
      product.stockQty = 0;
    }

    const { parent, available_stock } = product || {};
    const { quantity } = parent || {};

    if (!isUpdate) {
      const defaultUnit = quantity || 1;
      if (field === 'parent_qty_sold') {
        const parentPacks = +product.stockQty || 0;
        const unitPerPack = defaultUnit;
        let totalUnits = parentPacks * unitPerPack;
        const maxUnits = +available_stock || 0;
        if (maxUnits > 0 && totalUnits > maxUnits) {
          totalUnits = maxUnits;
          const adjustedPacks = unitPerPack ? totalUnits / unitPerPack : 0;
          product.stockQty = adjustedPacks;

          // const toast: Toaster = {
          //   type: 'error',
          //   title: 'Error:',
          //   message: 'Quantity exceeds available stock',
          // };
          // this.toastService.showToaster(toast);
          this.showToastMessage(
            'Error:',
            'Quantity exceeds available stock',
            'error'
          );
        }
        product.primary_qty_sold = +product.stockQty || 0;
        product.parent_qty_sold = totalUnits;
        product.unit_quantity = totalUnits;
      } else if (field === 'unit_qty_sold') {
        const unitPerPack = defaultUnit;
        let totalUnits = +product.unit_quantity || 0;
        const maxUnits = +available_stock || 0;

        if (maxUnits > 0 && totalUnits > maxUnits) {
          totalUnits = maxUnits;
          product.unit_quantity = totalUnits;
          // const toast: Toaster = {
          //   type: 'error',
          //   title: 'Error:',
          //   message: 'Quantity exceeds available stock',
          // };
          // this.toastService.showToaster(toast);
          this.showToastMessage(
            'Error:',
            'Quantity exceeds available stock',
            'error'
          );
        }
        product.parent_qty_sold = totalUnits;
        const parentPacks = unitPerPack ? totalUnits / unitPerPack : 0;
        product.primary_qty_sold = parentPacks;
        product.stockQty = parentPacks;
      }
    } else {
      const maxUnits = +available_stock || 0;
      const unitQty = +product.unit_quantity || 1; // units per pack in update mode

      if (field && field === 'primary_qty_sold') {
        let packs = +product.primary_qty_sold || 0;
        let totalUnits = packs * unitQty;

        if (maxUnits > 0 && totalUnits > maxUnits) {
          totalUnits = maxUnits;
          packs = unitQty ? totalUnits / unitQty : 0;
          product.primary_qty_sold = packs;
          // const toast: Toaster = {
          //   type: 'error',
          //   title: 'Error:',
          //   message: 'Quantity exceeds available stock',
          // };
          // this.toastService.showToaster(toast);
          this.showToastMessage(
            'Error:',
            'Quantity exceeds available stock',
            'error'
          );
        }
        product.parent_qty_sold = totalUnits;
      } else if (field && field === 'parent_qty_sold') {
        let totalUnits = +product.parent_qty_sold || 0;

        if (maxUnits > 0 && totalUnits > maxUnits) {
          totalUnits = maxUnits;
          product.parent_qty_sold = totalUnits;
          // const toast: Toaster = {
          //   type: 'error',
          //   title: 'Error:',
          //   message: 'Quantity exceeds available stock',
          // };
          // this.toastService.showToaster(toast);
          this.showToastMessage(
            'Error:',
            'Quantity exceeds available stock',
            'error'
          );
        }
        const packs = unitQty ? totalUnits / unitQty : 0;
        product.primary_qty_sold = packs;
      }
    }

    if (isUpdate && product.selectedScheme?.id) {
      product = this.applySchemesNew(null, product, true);
    }

    if (isUpdate) {
      product = this.applyTaxesNew(null, product, true);
    }

    product = this.applyTotalBill(product);
  }
  //#endregion

  //#region validatio isNumber
  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }
  //#endregion

  //#region  apply gift scheme
  applyGiftScheme(product: any): any {
    return this.dataService.getSDForGift(product);
  }
  //#endregion

  //#region deleteOrderItem
  deleteOrderItem(itemId: number) {
    this.order.orderContent = this.order.orderContent.filter(
      (item) => item.item_id !== itemId
    );

    this.displayProductsIsAddedStatus(false, itemId);
  }

  //#endregion

  //#region saveOrder()

  saveOrder(): void {
    this.saving = true;
    if (this.showEditFields) {
      this.primarySrvc.updateOrder(this.order).subscribe(
        (res) => {
          if (res.status === 200) {
            this.showToastMessage(
              'Success:',
              'Order updated successfully!',
              'success'
            );
            this.router.navigate(['/primaryOrders/booked']);
          } else {
            this.showToastMessage('Error:', res.message, 'error');
          }
          this.saving = false;
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            this.showToastMessage(
              'Error:',
              'Cannot save order. Please try again',
              'error'
            );

            this.saving = false;
          }
        }
      );
    } else {
      if (
        this.selectedSubDistributor &&
        this.order.orderContent &&
        this.order.orderContent?.length
      ) {
        this.order.distributor_id = this.selectedSubDistributor;
        this.order.employee_id = this.subDistributor.tsm_id;
        // TODO: fields needs to be remove from order model too
        // this.order.status = 'completed';
        // this.order.booker_lats = 0;
        // this.order.booker_longs = 0;
        // this.order.within_radius = 0;
        // this.order.phone_order = 1;
        // this.order.offline_order = 0;
        // this.order.created_at = new Date();
        this.primarySrvc
          .saveOrReturnOrder(this.order, this.distributor.id, this.isReturn)
          .subscribe(
            (res) => {
              if (res.status === 200) {
                this.showToastMessage(
                  'Success:',
                  'Order created successfully!',
                  'success'
                );
                this.router.navigate(['/primaryOrders/booked']);
              } else {
                this.showToastMessage('Error:', res.message, 'error');
              }
              this.saving = false;
            },
            (error) => {
              if (error.status !== 1 && error.status !== 401) {
                this.showToastMessage(
                  'Error:',
                  'Cannot save order. Please try again',
                  'error'
                );
                this.saving = false;
              }
            }
          );
      } else if (!this.selectedSubDistributor) {
        this.showToastMessage(
          'Error:',
          'Please select sub distributor',
          'error'
        );
        this.saving = false;
      } else if (!this.order.orderContent?.length) {
        this.showToastMessage(
          'Error:',
          'Please add atleast one product',
          'error'
        );
        this.saving = false;
      }
    }
  }

  calculateProductDiscounts(product: any, scheme?: any): any {
    // Trade Offer
    product.scheme_id = 0;
    product.scheme_type = 0;
    product.scheme_rule = 0;
    product.scheme_min_quantity = 0;
    product.scheme_discount_type = 0;
    product.discount_on_tp = 0;
    product.scheme_quantity_free = 0;
    product.scheme_discount = 0;
    product.scheme_free_items = [];
    if (scheme) {
      product.selectedScheme = scheme;
    }

    if (product.selectedScheme) {
      product.scheme_id = product.selectedScheme.id;
      product.scheme_type = product.selectedScheme.scheme_type;
      product.scheme_rule = product.selectedScheme.scheme_rule;
      product.scheme_min_quantity = product.selectedScheme.min_qty;
      product.scheme_discount_type = product.selectedScheme.discount_type;
      product.discount_on_tp = product.selectedScheme.discount_on_tp;
      product = this.applyScheme(product);
    } else {
      product.scheme_discount = 0;
      product.price = JSON.parse(JSON.stringify(product.item_trade_price));
      product.unit_price_after_scheme_discount = JSON.parse(
        JSON.stringify(product.item_trade_price)
      );
    }
    return product;
  }

  calculateProductSpecialDiscount(product: any): any {
    return this.dataService.getSpecialDiscounts(
      this.selectedSegment,
      this.selectedRegion,
      product,
      this.specialDiscounts
    );
  }

  applyScheme(product: any): any {
    switch (product.selectedScheme.scheme_type) {
      case 'free_product':
        // product = this.dataService.applyFreeProductScheme(product);
        product = this.applyFreeProductScheme(product);
        break;
      case 'dotp':
        product = this.applyDOTP(product);
        break;
      // case 'dotp':
      //   product = this.dataService.getSDForDOTP(product);
      //   break;
      // case 'comp_product':
      //   product = this.dataService.applyComplementaryScheme(product);
      //   break;
      // case 'bundle_offer': //it will be applied on after item added to order details because it depends on multiple items
      //   break;
      // case 'mix_match': //it will be applied on after item added to order details because it depends on multiple items
      //   break;
      default:
        product = this.dataService.getSDForGift(product);
        break;
    }
    return product;
  }

  applySchemesNew(
    selectedProduct: any,
    createdPrimaryOrder: any,
    isUpdate: boolean = false
  ): any {
    const { selectedScheme, stockQty, parent_qty_sold, parent_tp } = !isUpdate
      ? selectedProduct
      : createdPrimaryOrder || {};
    // Use parent.item_trade_price for schemes when adding new product
    const item_trade_price = isUpdate
      ? createdPrimaryOrder?.unit_item_trade_price || parent_tp
      : selectedProduct.parent?.item_trade_price ||
        selectedProduct.item_trade_price;
    const { scheme_rule, scheme_type, min_qty, quantity_free, discount_on_tp } =
      selectedScheme || {};

    // When adding new product, use parent_qty_sold (actual quantity) instead of stockQty (carton quantity)
    // parent_qty_sold is already calculated as stockQty * parent.item_quantity in getNewPrimaryOderItem
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
          } else {
            this.showToastMessage(
              'Error:',
              'Please select sub distributor',
              'error'
            );
          }
        } else if (scheme_rule === 1) {
          if (this.isSchemeValid(selectedScheme)) {
            createdPrimaryOrder['scheme_quantity_free'] = 0;

            let TO = 0;
            const quantityToUse = quantityToUseForSchemes;
            if (quantityToUse >= min_qty) {
              const tp_after_scheme =
                (item_trade_price * min_qty) / (min_qty + quantity_free);
              const discount_on_tp = item_trade_price - tp_after_scheme;
              TO = discount_on_tp * quantityToUse;
            } else {
              TO = 0;
              this.showToastMessage(
                'Error:',
                `Minimum quantity is not met . Please select more than ${min_qty} quantity`,
                'error'
              );
            }
            createdPrimaryOrder['trade_offer'] = TO;
            createdPrimaryOrder['selectedScheme'] = selectedScheme;
          } else {
            this.showToastMessage(
              'Error:',
              'Please select sub distributor',
              'error'
            );
          }
        }
        break;
      case 'dotp':
        if (this.isSchemeValid(selectedScheme)) {
          const quantityToUse = quantityToUseForSchemes;

          let TO = 0;
          if (quantityToUse >= min_qty) {
            TO = quantityToUse * discount_on_tp;
          } else {
            this.showToastMessage(
              'Error:',
              `Minimum quantity is not met . Please select more than ${min_qty} quantity`,
              'error'
            );
          }

          createdPrimaryOrder['trade_offer'] = TO;
          createdPrimaryOrder['selectedScheme'] = selectedScheme;
        } else {
          this.showToastMessage(
            'Error:',
            'Please select sub distributor',
            'error'
          );
        }
        break;
      default:
        break;
    }

    return createdPrimaryOrder;
  }

  isSchemeValid(scheme: any): boolean {
    const current_date = moment().format('YYYY-MM-DD');
    const { start_date, end_date } = scheme || {};
    const id = scheme?.id || 0;

    if (current_date >= start_date && current_date <= end_date) {
      return true;
    } else {
      return false;
    }
  }

  applyTaxesNew(
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
      this.productsMetaDataDistributor.filer_status === 1;
    const tax_class = this.taxClasses?.find(
      (tax_class) => tax_class.tax_class_id === tax_class_id
    );

    const {
      adv_inc_filer_distributor_value,
      adv_inc_nonfiler_distributor_value,
      gst_filer_distributor_value,
      gst_nonfiler_distributor_value,
      tax_applied_on,
    } = tax_class || {};

    switch (tax_applied_on) {
      case 'net_price':
        // Base = Net amount after distributor and booker discounts on TP*Qty
        const gross_amount =
          (+createdPrimaryOrder.unit_item_trade_price || 0) *
          (+createdPrimaryOrder.parent_qty_sold || 0);

        const trade_offer_total =
          +createdPrimaryOrder.trade_offer ||
          0;
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
            (+createdPrimaryOrder.booker_discount || 0)
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
      case 'retail_price':
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
      default:
        break;
    }

    return createdPrimaryOrder;
  }

  applyTotalBill(primary_order: any) {
    let total_bill = 0;

    const {
      distributor_discount,
      parent_tp,
      parent_qty_sold,
      gst_tax,
      advance_income_tax,
      booker_discount,
    } = primary_order || {};

    const gross_amount = parent_tp * parent_qty_sold;

    const distributor_discount_amount =
      (gross_amount * (+distributor_discount || 0)) / 100;

    total_bill =
      gross_amount -
      distributor_discount_amount +
      (gst_tax + advance_income_tax) -
      (+booker_discount || 0);

    primary_order['total_bill'] = total_bill;

    return primary_order;
  }

  applyDOTP(product: any): any {
    if (
      this.isEligibleForMinimumQuantity(
        product.unit_quantity,
        product.selectedScheme.min_qty
      )
    ) {
      product.scheme_id = product.selectedScheme.id;
      product.scheme_type = product.selectedScheme.scheme_type;
      product.scheme_rule = product.selectedScheme.scheme_rule;
      product.scheme_discount = product.selectedScheme.discount_on_tp;
    } else {
      this.schemeCannotApplied();
    }
    return product;
  }

  applyFreeProductScheme(product: any): any {
    let productWithScheme: any = {};

    switch (product.selectedScheme.scheme_rule) {
      case 1:
        productWithScheme = this.applyFPDOTP(product);
        break;
      case 4:
        productWithScheme = this.applyFPMinQty(product);
        break;

      default:
        productWithScheme = product;
        break;
    }
    return productWithScheme;
  }

  applyFPMinQty(product: any): any {
    if (
      this.isEligibleForMinimumQuantity(
        product.unit_quantity,
        product.selectedScheme.min_qty
      )
    ) {
      product.scheme_free_items = [];
      const freeQtyInterval = Math.floor(
        product.unit_quantity / product.selectedScheme.min_qty
      );
      const orderFreeQty =
        freeQtyInterval * product.selectedScheme.quantity_free;
      product.scheme_quantity_free = orderFreeQty;
      product.selectedScheme = product.selectedScheme;
      product.scheme_id = product.selectedScheme.id;
      product.scheme_type = product.selectedScheme.scheme_type;
      product.scheme_rule = product.selectedScheme.scheme_rule;
      product.scheme_discount = 0;
      product.price = product.original_price; //discounted.singleItemPrice;
      product.unit_price_after_scheme_discount = product.original_price;
      product.scheme_free_items = [
        {
          item_id: +product.item_id,
          free_qty: +product.scheme_quantity_free,
        },
      ];
      product.selectedScheme.applied = true;
    } else {
      product.scheme_quantity_free = 0;
      product.selectedScheme.applied = false;
      product.scheme_discount = 0;
      product.price = product.original_price;
      product.scheme_free_items = null;
      product.unit_price_after_scheme_discount = product.original_price;

      this.schemeCannotApplied();
    }
    return product;
  }

  applyFPDOTP(product: any): any {
    if (
      this.isEligibleForMinimumQuantity(
        product.unit_quantity,
        product.selectedScheme.min_qty
      )
    ) {
      const discounted = this.getSDForFPTradePriceScheme(
        product.original_price,
        product.stockQty,
        product.selectedScheme.min_qty,
        product.selectedScheme.quantity_free
      );
      product.scheme_id = product.selectedScheme.id;
      product.scheme_type = product.selectedScheme.scheme_type;
      product.scheme_rule = product.selectedScheme.scheme_rule;
      product.scheme_discount = discounted.schemeDiscount;
      product.price = discounted.singleItemPrice;
      product.unit_price_after_scheme_discount = discounted.singleItemPrice;
      product.selectedScheme.applied = true;
    } else {
      this.schemeCannotApplied();
    }

    return product;
  }

  getSDForFPTradePriceScheme(
    itemTradePrice: number,
    userQty: number,
    minimumQty: number,
    freeQty: number
  ): { singleItemPrice: number; schemeDiscount: number } {
    const schemeUnitDscount = this.getSchemeAmount(
      itemTradePrice,
      minimumQty,
      freeQty
    );
    const singleItemPrice = itemTradePrice - schemeUnitDscount;
    return {
      singleItemPrice: singleItemPrice,
      schemeDiscount: schemeUnitDscount,
    };
  }

  getSchemeAmount(itemTP: number, minQty: number, freeQty: number): number {
    //
    const totalTpMinQty = itemTP * minQty;
    const totalItemBeingGiven = freeQty + minQty;
    const ItemDiscountedTP = totalTpMinQty / totalItemBeingGiven;
    const unitdiscount = itemTP - ItemDiscountedTP;
    return unitdiscount;
  }

  isEligibleForMinimumQuantity(userQty: number, minimumQty: number): boolean {
    return +userQty >= minimumQty;
  }

  schemeCannotApplied(): void {
    this.showToastMessage(
      'Scheme Not Applied',
      'Selected Scheme cannot applied to the product because of minimum quantity contraints!',
      'error'
    );
  }

  showToastMessage(
    title: string = 'Error:',
    message: string,
    type: 'error' | 'success' = 'error'
  ): void {
    const toast: Toaster = {
      title: title,
      message: message,
      type: type,
    };
    this.toastService.showToaster(toast);

    return;
  }
}
