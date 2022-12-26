import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { MustMatch } from 'src/app/core/validators/amount-validator';
import { OrdersService } from '../../services/orders.service';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services/data.service';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { GeneralDataService } from '../../../shared/services';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { IEmployee } from '../../primary-orders/_models/IEmployee';
import { PrimaryOrder } from '../../primary-orders/_models/order';
import { environment } from '../../../../../environments/environment';
import { IRoute } from '../../primary-orders/_models/IRoute';
import { IRetailer } from '../../primary-orders/_models/IRetailer';
import { Inventory } from '../../primary-orders/_models/inventory';
import {
  freeProductsRules,
  schemes,
} from 'src/app/core/constants/schemes.constant';
import { getNewPrimaryOderItem } from '../../primary-orders/_models/orderItems';
import { SecondaryOrder } from '../../primary-orders/_models/secondaryOrder.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterSale } from '../../models/counter-sale.model';
import { OrderItem } from '../../models/order-item.model';
import { SecondaryOrderItems } from '../../primary-orders/_models/secondaryOrderItems';
import { ComplimentoryProdut } from '../../primary-orders/_models/complimentoryProdut';

@Component({
  selector: 'app-counter-sale',
  templateUrl: './new-counter-sale.component.html',
  styleUrls: ['./new-counter-sale.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewCounterSaleComponent implements OnInit {
  permissions: any;
  searchProd: string = '';
  isSavingOrder: boolean;
  secondaryOrder: SecondaryOrder;
  selectedProduct: Inventory = null;
  showQuantityModal: boolean = false;
  loadingProducts: boolean = false;
  showProducts: boolean = false;
  distributorId: number;
  orderBookers: IEmployee[];
  selectedEmployee: IEmployee;
  order: SecondaryOrder;
  selectedRoute: IRoute;
  routes: IRoute[];
  retailers: IRetailer[];
  selectedRetailer: IRetailer;
  allProducts: Inventory[];
  specialDiscounts: any;
  dispProducts: Inventory[];
  discountSlabs: any;
  schemes: any;
  paymentForm: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private generalDataService: GeneralDataService,
    private storageService: LocalStorageService,
    private ordersService: OrdersService,
    private toastService: ToasterService,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.permissions = this.storageService.getItem(
      localStorageKeys.permissions
    );
    // this.order = new PrimaryOrder();
    this.order = SecondaryOrder.getInstance;
    this.secondaryOrder = SecondaryOrder.getInstance;

    // this.order.orderType = environment.ORDER_TYPE.COUNTER_SALE;
    this.distributorId = this.storageService.getItem('distributor').id;
  }

  ngOnInit(): void {
    this.getOrderBookers();
    this.generalDataService.getCounterSaleData();
    this.getSchemesData();
    const sub = this.generalDataService.dispProducts$.subscribe((products) => {
      this.allProducts = products;
      this.showProducts = false;
      this.secondaryOrder.allItems = this.allProducts;
      // this.isAddProduct = true;
      // const prodWithSchemes = this.allProducts.filter((x) => x.schemes.length);
      // console.log('prodWithSchemes => ', prodWithSchemes);
    });
    this.initializeForm();
  }

  getOrderBookers(): void {
    this.generalDataService.getOrderBookers(this.distributorId).subscribe(
      (res) => {
        if (res.status === 200) {
          this.orderBookers = res.data;
        } else {
          const toast: Toaster = {
            type: 'error',
            message: res.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch order bookers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getRoutes(): void {
    this.order.employee_id = this.selectedEmployee.employee_id;
    this.order.retailerRegionId = this.selectedEmployee.region_id;
    this.order.employee_name = this.selectedEmployee.employee_full_name;
    this.generalDataService
      .getOrderBookerRoutes(this.selectedEmployee.employee_id)
      .subscribe(
        (res) => {
          if (res.status === 200) {
            this.routes = res.data;
          } else {
            const toast: Toaster = {
              type: 'error',
              message: res.message,
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch order booker routes. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }

  getRetailerByRoute(): void {
    this.order.route_id = this.selectedRoute.route_id;
    this.generalDataService
      .getRetailersByRoute(this.selectedRoute.route_id)
      .subscribe(
        (res) => {
          if (res.status === 200) {
            this.retailers = res.data;
          } else {
            const toast: Toaster = {
              type: 'error',
              message: res.message,
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch retailers. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }

  getSchemesData(): void {
    this.generalDataService.getProdSchemes();
  }
  // getSchemesData(): void {
  //   this.ordersService.getSchemes().subscribe(
  //     (res) => {
  //       if (res.status === 200) {
  //         this.schemes = res.data;
  //         this.allProducts;
  //       } else {
  //         const toast: Toaster = {
  //           type: 'error',
  //           message: res.message,
  //           title: 'Error:',
  //         };
  //         this.toastService.showToaster(toast);
  //       }
  //     },
  //     (error) => {
  //       if (error.status !== 1 && error.status !== 401) {
  //         const toast: Toaster = {
  //           type: 'error',
  //           message: 'Cannot fetch Trade Offers. Please try again',
  //           title: 'Error:',
  //         };
  //         this.toastService.showToaster(toast);
  //       }
  //     }
  //   );
  // }
  showProductsList(event: Event): void {
    event.stopPropagation();
    // if (
    //   this.paymentTypeCheque === 'full' ||
    //   this.paymentTypeCredit === 'full'
    // ) {
    //   const toast: Toaster = {
    //     type: 'error',
    //     message: `You selected Full payment for ${this.addedPayment} please remove it if you want to add more products!`,
    //     title: `Full Payment selected for ${this.addedPayment}`,
    //   };
    //   this.toastService.showToaster(toast);
    // } else {
    if (this.selectedRetailer) {
      // this.allProducts = this.allProducts.map((product) => {
      //   product.schemes = this.dataService.getSchemes(
      //     product.item_id,
      //     product.unit_id,
      //     product.pref_id,
      //     this.schemes,
      //     this.selectedRetailer.type_id,
      //     this.selectedRetailer.id
      //   );

      //   if (product.schemes?.length) {
      //     product.schemes = product.schemes.map((scheme) => {
      //       switch (scheme.scheme_type) {
      //         case 'free_product':
      //           scheme.name = schemes.free_products;
      //           scheme.rule_name = freeProductsRules[scheme.scheme_rule];
      //           break;
      //         case 'dotp':
      //           scheme.name = schemes.dotp;
      //           break;
      //         default:
      //           scheme.name = schemes.gift;
      //           break;
      //       }
      //       return scheme;
      //     });
      //   }
      //   return product;
      // });

      this.secondaryOrder.assignedRouteId = this.selectedRoute.route_id;

      // set primaryOrder employeeId
      this.secondaryOrder.regionId = this.selectedEmployee.region_id;
      this.secondaryOrder.employeeId = this.selectedEmployee.employee_id;
      this.secondaryOrder.retailerId = this.selectedRetailer.retailer_id;
      this.secondaryOrder.retailer = this.selectedRetailer;
      // this.secondaryOrder.creditOrderType = this.selectedOrderCreditType;
      // this.secondaryOrder.orderContext = this.selectedOrderContext;

      this.generalDataService.setShowProducts$ = true;

      this.generalDataService.mergeSchemesIntoProducts();
      // this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
      this.showProducts = true;
      document.body.classList.add('no-scroll');
      document
        .getElementsByClassName('overlay-blure')[0]
        .classList.add('d-block');
      document.getElementById('counter-sale').classList.add('blur-div');
    } else {
      this.toastService.showToaster({
        type: 'error',
        message: 'Please select Retailer first!',
        title: 'Fill required fields:',
      });
    }
  }

  clickedOutSide(event: Event): void {
    if (
      this.showProducts &&
      !this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-products')
    ) {
      this.closeProductsList();
    }
  }
  closeProductsList(): void {
    this.showProducts = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document.getElementById('counter-sale').classList.remove('blur-div');
  }
  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }
  // getCounterSaleData(): void {
  //   this.loadingProducts = true;
  //   this.ordersService.getCounterSaleData().subscribe(
  //     (res: any) => {
  //       this.loadingProducts = false;
  //       if (res.status === 200) {
  //         this.allProducts = res.data.inventory.map((pr) => {
  //           pr.net_amount = 0.0;
  //           pr.isAdded = false;
  //           return pr;
  //         });
  //         console.log('this.allProducts.length', this.allProducts.length);
  //         this.specialDiscounts = res.data.special_discount;
  //         // this.prefrences = res.data.prefs;
  //         this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
  //         // this.subInventory = res.data.sub_inventory;
  //       } else {
  //         const toast: Toaster = {
  //           type: 'error',
  //           message: res.message,
  //           title: 'Error:',
  //         };
  //         this.toastService.showToaster(toast);
  //       }
  //     },
  //     (error) => {
  //       this.loadingProducts = false;
  //       if (error.status !== 1 && error.status !== 401) {
  //         const toast: Toaster = {
  //           type: 'error',
  //           message: 'Cannot fetch counter sale data. Please try again',
  //           title: 'Error:',
  //         };
  //         this.toastService.showToaster(toast);
  //       }
  //     }
  //   );
  // }

  // getDiscountSlabs(): void {
  //   // this.selectedSegment = this.selectedRetailer.segment_id;
  //   // this.resetValues();
  //   this.order.retailerSegmentId = this.selectedRetailer.segment_id;
  //   this.order.retailerTypeId = this.selectedRetailer.type_id;
  //   this.ordersService.getDiscountSlabs().subscribe(
  //     (res) => {
  //       if (res.status === 200) {
  //         this.discountSlabs = res.data;
  //         this.order.discountslabs = res.data;
  //         // this.merchantDiscount = this.discountSlabs.find(
  //         //   (x) =>
  //         //     x.region_id === this.selectedRegion &&
  //         //     this.selectedSegment === x.segment_id &&
  //         //     x.channel_id === this.selectedRetailer.type_id
  //         // );
  //       }
  //     },
  //     (error) => {
  //       if (error.status !== 1 && error.status !== 401) {
  //         const toast: Toaster = {
  //           type: 'error',
  //           message: 'Cannot fetch Trade Discount. Please try again',
  //           title: 'Error:',
  //         };
  //         this.toastService.showToaster(toast);
  //       }
  //     }
  //   );
  // }

  removeProductFromOrder(product: Inventory) {
    this.secondaryOrder.items = this.secondaryOrder.items.filter(
      (x) => x.itemId !== product.item_id
    );
    this.generalDataService.displayProductsIsAddedStatus(
      false,
      product.item_id
    );
  }
  openQuantityModal(product: any): void {
    this.showQuantityModal = true;
    console.log('product -> ', product);
    // if (product.schemes?.length) {
    //   product.schemes = product.schemes.map((scheme) => {
    //     switch (scheme.scheme_type) {
    //       case 'free_product':
    //         scheme.name = schemes.free_products;
    //         scheme.rule_name = freeProductsRules[scheme.scheme_rule];
    //         break;
    //       case 'dotp':
    //         scheme.name = schemes.dotp;
    //         break;
    //       default:
    //         scheme.name = schemes.gift;
    //         break;
    //     }
    //     return scheme;
    //   });
    // }
    this.selectedProduct = { ...product };
    // this.selectedProduct.selectedScheme = null;
  }

  addProductToOrder() {
    console.log('this.selectedProduct -> ', this.selectedProduct);
    // const orderItem = getNewPrimaryOderItem(this.selectedProduct);
    // console.log('orderItem -> ', orderItem);

    this.generalDataService.pushOrderItem(this.selectedProduct);
    this.showQuantityModal = false;
  }

  currentFullPayment(isFull: boolean) {
    this.paymentForm.patchValue({ isfullAmount: isFull });
    if (isFull) {
      this.paymentForm.patchValue({
        cheque_amount: this.secondaryOrder.totalDueAmount,
      });
    } else {
      this.paymentForm.patchValue({ cheque_amount: '' });
    }
  }

  onPaymentsubmit(isCheck: boolean) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      return;
    }
    console.log('this.paymentForm.value =>', this.paymentForm.value);

    // const isFullAmount = this.paymentForm.value.isfullAmount;
    // if (isFullAmount) {
    // const paymentDetail = new PaymentDetail();
    if (isCheck) {
      this.secondaryOrder.checkPayment = this.f.cheque_amount.value;
      this.secondaryOrder.isCheckAdded = true;
      this.secondaryOrder.bankName = this.f.bank_name.value;
      this.secondaryOrder.chequeNumber = this.f.cheque_number.value;
      this.secondaryOrder.chequeDate = this.f.cheque_date.value;

      document.getElementById('close-payment-modal').click();
      // if (this.f.isfullAmount) {
      //   this.secondaryOrder.isCreditPaymentFullAmount = true;
      // }
    } else {
      this.secondaryOrder.creditPayment = this.f.cheque_amount.value;
      this.secondaryOrder.isCreditPaymentAdded = true;
      document.getElementById('close-payment-modal').click();

      // if (this.f.isfullAmount) {
      //   this.secondaryOrder.isCreditPaymentFullAmount = true;
      // }
    }

    this.paymentForm.reset();

    // const paymentSubDetail = {
    //   bank_name: this.f.bank_name,
    //   cheque_amount: this.f.cheque_amount,
    //   cheque_date: this.f.cheque_date,
    //   cheque_number: this.f.cheque_number,
    // };

    // const paymnetDetail = {
    //   amountReceived: this.paymentForm.value.cheque_amount,
    //   dispatched_bill_amount: 0,
    //   distributor_id: this.DISTRIBUTOR_ID,
    //   payment_mode: 'Cheque',
    //   recovery: 0,
    //   retailer_id: this.primaryOrder.retailerId,
    //   type: 'Counter',
    //   payment_detail: paymentSubDetail,
    // };
    // const cashDetail = {
    //   amount_received: 0,
    //   dispatched_bill_amount: 0,
    //   distributor_id: this.DISTRIBUTOR_ID,
    //   payment_detail: '',
    //   payment_mode: 'Cash',
    //   recovery: 0,
    //   retailer_id: this.primaryOrder.retailerId,
    //   type: 'Counter',
    // };

    // const payment = {
    //   total_payment: this.paymentForm.value.cheque_amount,
    //   detail: [paymnetDetail, cashDetail],
    // };

    // this.primaryOrder.payment = payment;
    // }
  }
  getDiscountSlabs() {
    this.generalDataService.getDiscountSlabs();
  }

  onCredit() {
    this.paymentForm.reset();
    this.submitted = false;
    this.paymentForm.patchValue({ isCredit: true });
    console.log('isCredit => ', this.f.isCredit.value);
    this.paymentForm.patchValue({ isCheck: false });
    this.onCreditPaymentValuesSettings();
    if (this.secondaryOrder.isShowCreditBtn) {
      this.paymentForm.patchValue({ isfullAmount: false });
    }
  }

  onCreditPaymentValuesSettings() {
    this.paymentForm.patchValue({ bank_name: 'pp' });
    this.paymentForm.patchValue({ cheque_number: 'pp' });
    this.paymentForm.patchValue({ cheque_date: 'pp' });
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.paymentForm.controls;
  }

  initializeForm(): void {
    this.paymentForm = this.formBuilder.group(
      {
        isCheck: [''],
        isCredit: [''],
        isfullAmount: ['', Validators.required],
        bank_name: ['', Validators.required],
        cheque_amount: ['', Validators.required],
        cheque_date: ['', Validators.required],
        cheque_number: ['', Validators.required],
      },
      {
        // validation for matching password
        validator: MustMatch(
          'cheque_amount',
          this.secondaryOrder.totalDueAmount
        ),
      }
    );
  }
  onCheck() {
    this.paymentForm.reset();
    this.submitted = false;
    this.paymentForm.patchValue({ isCheck: true });
    this.paymentForm.patchValue({ isCredit: false });
  }
  onRemoveCheck() {
    this.secondaryOrder.isCheckAdded = false;
  }
  onCreditFullPayment(isFull: boolean) {
    this.paymentForm.patchValue({ isfullAmount: isFull });
    if (isFull) {
      this.paymentForm.patchValue({
        cheque_amount: this.secondaryOrder.totalDueAmount,
      });
    } else {
      this.paymentForm.patchValue({ cheque_amount: '' });
    }
  }
  onPaymentCancel() {
    this.paymentForm.reset();
  }
  onRemoveCredit() {
    this.secondaryOrder.isCreditPaymentAdded = false;
  }

  onSaveOrder(): void {
    this.isSavingOrder = true;
    this.setOrderFields();
  }

  isDataValid(): boolean {
    if (
      (this.secondaryOrder.items && !this.secondaryOrder.items.length) ||
      (!this.selectedEmployee && !this.selectedRoute) ||
      !this.selectedRetailer
    ) {
      return false;
    } else {
      return true;
    }
  }

  setOrderFields(): void {
    const distributorId = this.storageService.getItem('distributor').id;

    if (!this.isDataValid()) {
      const toast: Toaster = {
        type: 'error',
        message:
          'Please select Employee, Route, Retailer and Products to place the order!',
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    } else {
      // const employee = this.orderBookers.find(
      //   (x) => x.employee_id === this.selectedEmployee
      // );
      const newOrder: CounterSale = {
        area_id: this.selectedEmployee.area_id,
        assigned_route_id: this.secondaryOrder.assignedRouteId,
        booked_order_value: 0,
        booked_total_qty: 0,
        booked_total_skus: 0,
        booking_area: this.selectedEmployee.area_id,
        booking_locality_id: this.selectedRetailer.locality_id,
        booking_neighbourhood_id: this.selectedRetailer.neighbourhood_id,
        booking_region: this.selectedEmployee.region_id,
        booking_territory: this.selectedEmployee.territory_id,
        booking_zone: this.selectedEmployee.area_id,
        counter_sale: 1,
        // credit_order_type: '0',
        // this.selectedOrderCreditType.toString(),
        // creditsales_at:
        //   this.selectedOrderCreditType === this.CREDIT_ORDER_TYPE.Regular_Order
        //     ? null
        //     : new Date(),
        distributor_id: distributorId,
        employee_id: this.selectedEmployee.employee_id,
        freight_charges: 0,
        gross_sale_amount: this.secondaryOrder.grossPrice,
        invoice_date: new Date().toISOString(),
        invoice_number: '',
        items: [], // this. will be added
        // order_context: this.secondaryOrder.order,
        order_total: this.secondaryOrder.totalBill,
        order_type: 'counter',
        // payment need to be good structure
        // payment: {
        //   total_payment: this.secondaryOrder.totalDueAmount,
        //   detail: [],
        // },
        payment: this.secondaryOrder.paymentDetails,

        region_id: this.selectedEmployee.region_id,
        remarks: 'notes',
        retailer_id: this.selectedRetailer.retailer_id,
        sales_man_id: 0,
        spot_sale: 0,
        status: 'Completed',
        // this.selectedOrderCreditType === this.CREDIT_ORDER_TYPE.Regular_Order
        //   ? 'Completed'
        //   : environment.Creditsale_Satatus,

        status_code: 0,
        // this.selectedOrderCreditType === this.CREDIT_ORDER_TYPE.Regular_Order
        //   ? 0
        //   : 5,
        territory_id: this.selectedEmployee.territory_id,
        total_amount_after_tax: this.secondaryOrder.totalDueAmount,
        total_discount: this.secondaryOrder.discount,
        total_retail_price: this.secondaryOrder.totalRetailPrice,
        total_tax_amount: this.secondaryOrder.tax,
        ttl_products_sold: this.secondaryOrder.totalItemsCount,
        ttl_qty_sold: this.secondaryOrder.totalQty,
        within_radius: 0,
      };
      //   if (this.isEdit) {
      //     newOrder.id = this.orderDetail.id;
      //     if (this.isCancel) {
      //       newOrder.status = 'Cancelled';
      //       newOrder.status_code = 4;
      //     } else {
      //       newOrder.status = 'Completed';
      //       newOrder.status_code = 3;
      //       newOrder.completed_at = new Date();
      //     }
      //   }
      //   this.order = newOrder;
      //   if (this.cheque) {
      //     this.order.payment.detail.push(this.cheque);
      //   }
      //   if (this.credit) {
      //     this.order.payment.detail.push(this.credit);
      //   }
      //   this.order.payment.detail.push(this.cash);
      //   if (this.selectedOrderCreditType !== this.ORDER_TYPE.Regular_Order) {
      //     const creditEntry = {
      //       retailer_id: this.selectedRetailer.retailer_id,
      //       distributor_id: this.distributorId,
      //       type: 'Counter',
      //       payment_mode: 'Credit',
      //       payment_detail: '',
      //       dispatched_bill_amount: 0,
      //       recovery: 0,
      //       amount_received: this.dueAmount,
      //     };
      //     this.order.payment.detail.push(creditEntry);
      //   }
      this.setOrderItems(newOrder);
      this.placeOrder(newOrder);
    }
  }
  setOrderItems(newOrder: CounterSale): void {
    this.secondaryOrder.items.forEach((product, index) => {
      const item: OrderItem = {
        area_id: this.secondaryOrder.areaId,
        assigned_route_id: this.secondaryOrder.assignedRouteId,
        booked_order_value: 0,
        booked_total_qty: 0,
        booker_discount: product.booker_discount,
        brand_id: product.brandId,
        campaign_id: product.schemeId || 0,
        dispatch_status: 0,
        distributor_id: this.secondaryOrder.distributorId,
        division_id: product.divisionId,
        final_price: product.totalBill,
        gift_value: product.giftValue || 0,
        gross_sale_amount: product.grossPrice,
        // is_exclusive: product.isExclusive,
        item_id: product.itemId,
        item_name: product.itemName,
        item_quantity_booker: 0,
        item_quantity_updated: 0,
        item_status: 1,
        merchant_discount: product.tradeDiscount,
        merchant_discount_pkr: product.total_trade_discount_pkr,
        order_id: 0,
        original_price: product.tradePrice,
        parent_brand_id: product.brandId,
        parent_pref_id: product.parent_pref_id,
        parent_qty_sold: product.parentQtySold,
        parent_tp: product.parentTp,
        parent_unit_id: product.parentUnitId,
        parent_value_sold: product.totalBill,
        pref_id: product.prefId,
        quantity: product.quantity,
        quantity_returned: 0,
        trade_price: product.tradePrice,
        reasoning: '',
        region_id: this.secondaryOrder.regionId,
        scheme_discount: product.tradeDiscount,
        scheme_id: product.schemeId,
        scheme_min_quantity: product.scheme_min_quantity,
        scheme_quantity_free: product.scheme_quantity_free,
        scheme_rule: product.rule_name,
        scheme_discount_type: 1, // type is hardcoded in that scheme
        special_discount: product.special_discount,
        tax_class_id: product.taxClassId,
        tax_in_percentage: product.tax_amount,
        tax_in_value: product.tax,
        territory_id: this.secondaryOrder.territoryId,
        total_amount_after_tax: product.totalBill,
        total_discount: product.totalDiscount,
        total_retail_price: product.totalRetailPrice,
        total_tax_amount: product.totalTaxAmount,
        unit_id: product.unitId,
        unit_name: product.unitName,
        unit_price_after_individual_discount: 0,
        unit_price_after_merchant_discount: product.unitTradeDiscountPkr,
        unit_price_after_scheme_discount:
          product.unit_price_after_scheme_discount,
        unit_price_after_special_discount:
          product.unit_price_after_special_discount || 0,
        schemeitems:
          product.comlimentoryProds.length > 0
            ? this.getSchemeItems(product)
            : null,
      };
      newOrder.items.push(item);
    });
  }
  getSchemeItems(product: SecondaryOrderItems): ComplimentoryProdut[] {
    const schemeitems: ComplimentoryProdut[] = [];

    product.comlimentoryProds.forEach((x) => {
      const schemeItem: ComplimentoryProdut = {
        name: x.item_name,
        // parent_item_id: x.,
        item_id: x.item_id,
        pref_id: x.pref_id,
        unit_id: x.unit_id,
        brand_id: x.brand_id,
        parent_pref_id: x.parent_pref_id,
        parent_unit_id: x.parent_unit_id,
        region_id: this.secondaryOrder.bookingRegion,
        area_id: this.secondaryOrder.bookingArea,
        territory_id: this.secondaryOrder.bookingTerritory,
        parent_qty_sold: 0,
        quantity: x.quantity,
        scheme_id: product.schemeId,
        scheme_type: 'comp_product',
        scheme_rule: product.selectedScheme.scheme_rule,
        scheme_min_quantity: product.schemeMinQty,
        scheme_quantity_free: 0,
        scheme_discount_type: product.selectedScheme.scheme_discount_type,
        gift_value: 0,
        dispatch_qty: 0,
        executed_qty: 0,
        city_id: 0,
        locality_id: '0',
        neighbourhood_id: '0',
        segment_id: this.order.retailerSegmentId,
        channel_id: '0',
        main_category_id: 0,
        sub_category_id: 0,
      };

      schemeitems.push(schemeItem);
    });

    return schemeitems;
  }

  placeOrder(order: CounterSale): void {
    // this.isOrdering = true;
    this.ordersService.counterSaleOrder(order).subscribe(
      (res) => {
        // this.isOrdering = false;
        if (res.status === 200) {
          this.isSavingOrder = false;

          let messageOrderStatus = 'Placed';

          // if (this.isEdit) {
          //   messageOrderStatus = this.isCancel ? 'Canceled' : 'Completed';
          // }
          const toast: Toaster = {
            type: 'success',
            message: `Order ${messageOrderStatus} successfully!`,
            title: 'Order Placed:',
          };
          this.toastService.showToaster(toast);
          this.secondaryOrder.items = [];
          this.secondaryOrder.isCheckAdded = false;
          this.secondaryOrder.isCreditPaymentAdded = false;
          this.generalDataService.displayProductsIsAddedStatus(false);
          // if (this.isEdit) {
          //   const routeUrl = 'reports/credit-counter-sale';
          //   this.router.navigate([routeUrl]);
          // }
          // this.selectedEmployee = null;
          // this.selectedRoute = null;
          // this.selectedRetailer = null;
          // this.selectedOrderCreditType = null;
          // this.credit = null;
          // this.cheque = null;
          // this.cash = null;
          // this.retailers = [];
          // this.routes = [];
          // this.isChequeAdded = false;
          // this.isCreditAdded = false;
          // this.resetValues();
          // this.paymentCancelled();
        }
      },
      (error) => {
        // this.isOrdering = false;
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Order cannot be placed at the moment! Please try again',
            title: 'Error:',
          };
          this.isSavingOrder = false;
          this.toastService.showToaster(toast);
        }
      }
    );
  }
}
