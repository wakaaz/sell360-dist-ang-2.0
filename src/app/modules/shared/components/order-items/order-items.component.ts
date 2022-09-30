import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { PaymentDetail } from 'src/app/modules/orders/models/counter-sale.model';
import { DataService } from '../../services';

@Component({
  selector: 'app-order-items-list',
  templateUrl: 'order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsListComponent implements OnInit, OnChanges {
  @Input() stockAllocation: any;
  @Input() orderType: string;
  @Input() returnAmount: number;
  @Input() isChequeAdded: boolean;
  @Input() isCreditAdded: boolean;
  @Input() currentTab: number;
  @Input() recoveryAmount: number;
  @Input() receivableAmount: number;
  @Input() dueAmount: number;
  @Input() totalPayment: number;
  @Input() cheque: PaymentDetail;
  @Input() credit: PaymentDetail;
  @Input() cash: PaymentDetail;
  @Input() orderDetail: any;
  @Input() selectedRetailer: any;
  @Input() merchantDiscount: any;
  @Input() schemes: any;
  @Input() newProduct: any;
  @Input() returnedProduct: any;
  @Input() specialDiscounts: Array<any>;
  @Input() orders: Array<any>;
  @Input() allProducts: Array<any>;

  showProducts: boolean;

  grossAmount: number;
  netAmount: number;
  totalBookerDiscount: number;
  totalSchemeDiscount: number;
  totalSpecialDiscount: number;
  totalMerchantDiscount: number;
  selectedProductQuantities: number;
  totalTax: number;

  selectedItem: any;
  permissions: any;

  @Output() openDrawer: EventEmitter<boolean> = new EventEmitter();
  @Output() openReturnedModal: EventEmitter<boolean> = new EventEmitter();
  @Output() saveCurrentOrder: EventEmitter<any> = new EventEmitter();
  @Output() cancelCurrentOrder: EventEmitter<any> = new EventEmitter();
  @Output() deleteReturned: EventEmitter<any> = new EventEmitter();
  @Output() productUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private toastService: ToasterService,
    private dataService: DataService,
    private storageService: LocalStorageService
  ) {
    this.resetValues();
    this.permissions = this.storageService.getItem(
      localStorageKeys.permissions
    );
  }

  ngOnInit(): void {
    this.showProducts = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.orderDetail && changes.orderDetail.currentValue?.items) {
      this.calculateTotalBill();
    }
    if (changes.newProduct?.currentValue) {
      this.orderDetail.items.push(this.newProduct);
      this.setQuantity(this.newProduct);
    }
    if (changes.savingOrder?.currentValue) {
      this.resetValues();
    }
  }

  resetValues(): void {
    this.totalTax = 0;
    this.netAmount = 0;
    this.grossAmount = 0;
    this.totalBookerDiscount = 0;
    this.totalSchemeDiscount = 0;
    this.totalSpecialDiscount = 0;
    this.totalMerchantDiscount = 0;
    this.selectedProductQuantities = 0;
  }

  openProductsList(event: Event): void {
    event.stopPropagation();
    if (this.selectedRetailer?.retailer_id) {
      this.openDrawer.emit();
    } else {
      this.toastService.showToaster({
        type: 'error',
        title: 'Error:',
        message: 'Please select order to add products!',
      });
    }
  }

  openReturnedProduct(event: Event): void {
    event.stopPropagation();
    if (this.selectedRetailer?.retailer_id) {
      this.openReturnedModal.emit();
    } else {
      this.toastService.showToaster({
        type: 'error',
        title: 'Error:',
        message: 'Please select order to add returned products!',
      });
    }
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  deleteProduct(): void {
    if (this.selectedItem.productType === 'returned') {
      this.deleteReturned.emit(this.selectedItem);
    } else {
      if (this.selectedItem.id) {
        this.selectedItem.stockQty = 0;
        this.setQuantity(this.selectedItem);
        this.selectedItem.isDeleted = true;
        // this.selectedItem.item_status = 0;
      } else {
        this.orderDetail.items = this.orderDetail.items.filter(
          (x) => x.item_id !== this.selectedItem.item_id
        );
        this.grossAmount = this.grossAmount - this.selectedItem.original_amount;
        this.applySlabOnAllProducts();
      }
      this.productUpdated.emit();
      document.getElementById('close-prod-del').click();
    }
  }

  setQuantity(product: any): void {
    debugger;
    const foundProd = this.stockAllocation.find(
      (x) => x.item_id === product.item_id
    );
    if (+product.stockQty > foundProd.current_load_allocated_qty) {
      product.stockQty = foundProd.current_load_allocated_qty;
    }
    if (this.orderType === 'execution') {
      const prod = this.allProducts.find((x) => x.item_id === product.item_id);
      if (
        (product.id &&
          +product.stockQty > prod.available_qty + product.executed_qty) ||
        (!product.id && +product.stockQty > prod.available_qty)
      ) {
        const toast: Toaster = {
          message:
            'Executed quantity cannot be greater than available quantity!',
          type: 'error',
          title: 'Quantity Error:',
        };
        this.toastService.showToaster(toast);
        product.stockQty = 0;
      }
    }
    if (product.item_trade_price) {
      if (
        this.orderType !== 'execution' &&
        product.item_quantity_booker > 0 &&
        +product.stockQty === 0
      ) {
        product.isDeleted = true;
      } else if (
        this.orderType === 'execution' &&
        product.dispatch_qty > 0 &&
        +product.stockQty === 0
      ) {
        product.isDeleted = true;
      } else {
        product.isDeleted = false;
      }
      if (this.orderDetail.items.find((x) => x.item_id === product.item_id)) {
        this.grossAmount = this.grossAmount - product.original_amount;
      }
      product.parent_qty_sold = this.dataService.getParentQty(
        +product.stockQty,
        product.parent_quantity || product.quantity
      );
      this.calculateProductDiscounts(product);
      this.calculateProductPrice(product);
      this.calculateTotalBill();
      this.applySlabOnAllProducts();
      this.productUpdated.emit();
    }
  }

  setReturnedQty(product: any): void {
    const productAvalableQty = this.allProducts.find(
      (x) => x.item_id === product.item_id
    )?.available_qty;
    if (
      productAvalableQty < product.quantity_returned &&
      +product.stockQty < product.quantity_returned &&
      product.return_type !== 'damage'
    ) {
      this.toastService.showToaster({
        title: 'Returned Product:',
        message:
          'The selected product is part of other order please remove from other orders to update the quantity!',
        type: 'error',
      });
      product.stockQty = product.quantity_returned;
      return;
    }
    if (+product.stockQty > 1000) {
      product.stockQty = product.quantity_returned;
    }
    product.gross_amount = -(product.item_trade_price * product.stockQty);
    product.original_amount = -(product.item_trade_price * product.stockQty);
    product.total_retail_price = -(
      product.item_retail_price * product.stockQty
    );
    if (product.extra_discount) {
      product.booker_discount = +product.extra_discount;
      product.unit_price_after_individual_discount =
        product.item_trade_price - product.booker_discount;
    }
    product.net_amount = -(
      product.unit_price_after_individual_discount * product.stockQty
    );
    this.productUpdated.emit();
  }

  setExtraDiscount(product: any): void {
    if (product.stockQty) {
      if (this.checkDiscount(product)) {
        product.booker_discount = +product.extra_discount;
        product.unit_price_after_individual_discount =
          product.item_trade_price - product.booker_discount;
        product.net_amount = -(
          product.unit_price_after_individual_discount * product.stockQty
        );
        this.productUpdated.emit();
      }
    }
  }

  checkDiscount(product: any): boolean {
    if (
      product.extra_discount &&
      +product.extra_discount > product.item_trade_price
    ) {
      this.resetDiscount(product);
      return false;
    }
    return true;
  }

  resetDiscount(product: any): void {
    const toast: Toaster = {
      type: 'error',
      title: 'Incorrect discount:',
      message: `Discount should not be greater than item price!`,
    };
    this.toastService.showToaster(toast);
    product.extra_discount = 0;
    this.setExtraDiscount(product);
  }

  applySlabOnAllProducts(): void {
    if (
      this.merchantDiscount &&
      this.merchantDiscount.discount_filter === 'slab'
    ) {
      this.orderDetail.items = this.orderDetail.items.map((product) => {
        product = this.dataService.applySlabForTotal(
          product,
          this.merchantDiscount,
          this.grossAmount
        );
        product = this.calculateProductSpecialDiscount(product);
        if (product.extra_discount) {
          product.price =
            product.unit_price_after_special_discount - +product.extra_discount;
        }
        this.calculateNetAmountOfProduct(product);
        return product;
      });
      this.calculateTotalBill();
    }
  }

  calculateProductPrice(product): void {
    product.original_amount = this.dataService.calculateUnitPrice(
      +product.stockQty,
      product.item_trade_price
    );
    product.gross_amount =
      product.unit_price_after_scheme_discount * +product.stockQty;
  }

  calculateProductDiscounts(product: any, scheme?: any): void {
    // Trade Offer
    if (scheme) {
      product.selectedScheme = scheme;
    }
    if (product.selectedScheme) {
      product = this.applyScheme(product);
    } else {
      product.scheme_discount = 0;
      product.price = JSON.parse(JSON.stringify(product.item_trade_price));
      product.unit_price_after_scheme_discount = JSON.parse(
        JSON.stringify(product.item_trade_price)
      );
    }

    // Trade Discount
    if (this.merchantDiscount) {
      product = this.dataService.applyMerchantDiscountForSingleProduct(
        this.merchantDiscount,
        product,
        this.grossAmount
      );
    } else {
      product.trade_discount = 0;
      product.trade_discount_pkr = 0;
      product.unit_price_after_merchant_discount = JSON.parse(
        JSON.stringify(product.price)
      );
    }

    // Special Discount
    product = this.calculateProductSpecialDiscount(product);

    // Extra Discount => Booker Discount
    if (!product.extra_discount || +product.stockQty < 1) {
      product.extra_discount = 0;
      product.extra_discount_pkr = 0;
      this.calculateNetAmountOfProduct(product);
    } else {
      this.calculateExtraDiscount(product);
    }
  }

  calculateProductSpecialDiscount(product: any): any {
    return this.dataService.getSpecialDiscounts(
      this.selectedRetailer.segment_id,
      this.selectedRetailer.region_id,
      product,
      this.specialDiscounts
    );
  }

  calculateExtraDiscount(product: any): void {
    if (+product.extra_discount < product.unit_price_after_special_discount) {
      product.price =
        product.unit_price_after_special_discount - +product.extra_discount;
      product.extra_discount_pkr = +product.stockQty * +product.extra_discount;
    } else {
      product.extra_discount = 0;
      product.extra_discount_pkr = 0;
      product.price = product.unit_price_after_special_discount;
      const toast: Toaster = {
        type: 'error',
        message: 'Discount should not be greater than item price!',
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    }
    this.calculateNetAmountOfProduct(product);
    this.productUpdated.emit();
    this.calculateTotalBill();
  }

  calculateNetAmountOfProduct(product: any): any {
    product.net_amount = this.dataService.calculateUnitPrice(
      product.price,
      +product.stockQty
    );
    this.calculateProductTax(product);
  }

  calculateProductTax(product: any): void {
    if (product.tax_class_amount) {
      product.tax_amount_value =
        (product.tax_class_amount / 100) * product.item_retail_price;
      product.tax_amount_pkr = product.tax_amount_value * product.stockQty;
      product.net_amount = product.net_amount + product.tax_amount_pkr;
    } else {
      product.tax_amount_value = 0;
      product.tax_amount_pkr = 0;
    }
  }

  applyScheme(product: any): any {
    switch (product.selectedScheme.scheme_type) {
      case 'free_product':
        product = this.applyFreeProductScheme(product);
        break;
      case 'dotp':
        product = this.applyDOTPScheme(product);
        break;
      default:
        product = this.applyGiftScheme(product);
        break;
    }
    return product;
  }

  applyFreeProductScheme(product: any): any {
    product = this.dataService.applyFreeProductScheme(product);
    return product;
  }

  applyDOTPScheme(product: any): any {
    return this.dataService.getSDForDOTP(product);
  }

  applyGiftScheme(product: any): any {
    return this.dataService.getSDForGift(product);
  }

  checkRecovery(): void {
    if (+this.orderDetail.recovered > this.recoveryAmount) {
      this.toastService.showToaster({
        title: 'Recovery Error:',
        message: `The recovered amount cannot be greater than the credit (${this.recoveryAmount})`,
        type: 'error',
      });
      this.orderDetail.recovered = 0;
    }
    this.productUpdated.emit();
  }

  calculateTotalBill(): void {
    if (this.orderDetail.items.length) {
      this.selectedProductQuantities = this.orderDetail.items
        .map((product) => +product.parent_qty_sold)
        .reduce((a, b) => a + b);
    }
    // Gross Amount
    let prices = this.orderDetail.items.map(
      (product) => product.original_amount
    );
    this.grossAmount = this.dataService.calculateItemsBill(prices);
    // Net Amount
    prices = this.orderDetail.items.map((product) => product.net_amount);
    this.netAmount = this.dataService.calculateItemsBill(prices);
    if (this.selectedRetailer && this.orderType !== 'execution') {
      // this.selectedRetailer.order_total = this.netAmount;
      this.orders.find((x) => x.id === this.selectedRetailer.id).order_total =
        this.netAmount;
    }
    // Total Retail Price
    prices = this.orderDetail.items.map(
      (product) => +product.stockQty * product.item_retail_price
    );
    const totalRetailPrice = this.dataService.calculateItemsBill(prices);
    // Scheme Discount
    let discount = this.orderDetail.items.map(
      (product) => +product.stockQty * product.scheme_discount
    );
    this.totalSchemeDiscount = this.dataService.calculateItemsBill(discount);
    // Trade Discount
    discount = this.orderDetail.items.map(
      (product) => +product.stockQty * product.trade_discount_pkr
    );
    this.totalMerchantDiscount = this.dataService.calculateItemsBill(discount);
    // Special Discount
    discount = this.orderDetail.items.map(
      (product) => +product.stockQty * product.special_discount_pkr
    );
    this.totalSpecialDiscount = this.dataService.calculateItemsBill(discount);
    // Extra Discount
    discount = this.orderDetail.items.map(
      (product) => +product.extra_discount_pkr
    );
    this.totalBookerDiscount = this.dataService.calculateItemsBill(discount);
    // Tax
    const taxes = this.orderDetail.items.map(
      (product) => product.tax_amount_pkr
    );
    this.totalTax = this.dataService.calculateItemsBill(taxes);
    this.orderDetail.total_amount_after_tax = this.netAmount;
    if (this.orderType === 'execution') {
      if (this.selectedRetailer) {
        // this.selectedRetailer.order_total = this.totalPayment;
        let order;
        if (this.currentTab === 1) {
          order = this.orders.find((x) => x.id === this.selectedRetailer.id);
        } else {
          order = this.orders.find(
            (x) => x.retailer_id === this.selectedRetailer.retailer_id
          );
        }
        if (order) {
          order.order_total = this.dueAmount;
        }
      }
      this.orderDetail.order_total = this.dueAmount;
      this.orderDetail.total_amount_after_tax = this.dueAmount;
    }

    this.orderDetail.total_discount =
      this.totalSchemeDiscount +
      this.totalMerchantDiscount +
      this.totalSpecialDiscount +
      this.totalBookerDiscount;
    this.orderDetail.gross_sale_amount = this.grossAmount;
    this.orderDetail.total_retail_price = totalRetailPrice;
    this.orderDetail.ttl_qty_sold = this.selectedProductQuantities;
    this.orderDetail.ttl_products_sold = this.orderDetail.items.length;
  }
}
