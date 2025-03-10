import { environment } from 'src/environments/environment';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { OrdersService } from '../../services/orders.service';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services/data.service';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import {
  freeProductsRules,
  schemes,
} from 'src/app/core/constants/schemes.constant';
import { CounterSale, PaymentDetail } from '../../models/counter-sale.model';
import { OrderItem } from '../../models/order-item.model';
import { GeneralDataService } from '../../../shared/services';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { number } from 'echarts';

@Component({
  selector: 'app-counter-sale',
  templateUrl: './counter-sale.component.html',
  styleUrls: ['./counter-sale.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CounterSaleComponent implements OnInit {
  permissions: any;
  system_discount_type:number;

  showProducts: boolean;
  showQuantityModal: boolean;
  isCredit: boolean;
  loadingProducts: boolean;
  isOrdering: boolean;
  isAdded: boolean;
  alreadyFullPayment: boolean;
  isChequeAdded: boolean;
  isCreditAdded: boolean;
  alreadyAdded: boolean;

  grossAmount: number;
  schemeDiscount: number;
  loyaltyDiscount: number;
  tradeDiscount: number;
  specialDiscount: number;
  extraDiscount: number;
  tax: number;
  gst_tax: number;
  adv_inc_tax: number;
  dueAmount: number;
  selectedEmployee: number;
  selectedRoute: number;
  selectedRegion: number;
  selectedSegment: number;
  distributorId: number;
  orderParentQtySold: number;
  chequeAmount: number;
  creditAmount: number;
  orderTotal: number;
  totalAmountAfterScheme: number;
  totalRetailPrice: number;
  pre_discount:any;
  catalogue_id=number;
  chequeNumber: string;
  paymentDate: string;
  paymentTypeCheque: string;
  paymentTypeCredit: string;
  bankName: string;
  productSearchText: string;
  notes: string;
  addedPayment: string;
  currentPayment: string;

  selectedProduct: any = {};
  merchantDiscount: any;
  selectedRetailer: any;
  cheque: PaymentDetail;
  credit: PaymentDetail;
  cash: PaymentDetail;
  order: CounterSale;

  schemeItemIds: Array<number> = [];
  allProducts: Array<any> = [];
  dispProducts: Array<any> = [];
  specialDiscounts: Array<any> = [];
  prefrences: Array<any> = [];
  orderBookers: Array<any> = [];
  routes: Array<any> = [];
  retailers: Array<any> = [];
  selectedProducts: Array<any> = [];
  selectedProductsIds: Array<any> = [];
  schemes: Array<any> = [];
  loyaltyoffers: Array<any> = [];
  subInventory: Array<any> = [];
  discountSlabs: Array<any> = [];
  taxClasses: Array<any> = [];

  constructor(
    private router: Router,
    private generalDataService: GeneralDataService,
    private storageService: LocalStorageService,
    private ordersService: OrdersService,
    private toastService: ToasterService,
    private dataService: DataService
  ) {
    this.permissions          = this.storageService.getItem(localStorageKeys.permissions);
    this.system_discount_type = this.storageService.getItem('distributor').system_discount_type;
  }

  ngOnInit(): void {
    this.grossAmount = 0.0;
    this.schemeDiscount = 0.0;
    this.loyaltyDiscount= 0.0;
    this.tradeDiscount = 0.0;
    this.specialDiscount = 0.0;
    this.extraDiscount = 0.0;
    this.tax = 0.0;
    this.gst_tax = 0.0;
    this.adv_inc_tax = 0.0;
    this.dueAmount = 0.0;
    this.totalAmountAfterScheme = 0.0;
    this.notes = '';
    this.paymentDate = new Date().toISOString().split('T')[0];
    this.paymentTypeCheque = '';
    this.paymentTypeCredit = '';
    this.addedPayment = '';
    this.currentPayment = '';
    this.getSchemesData();
    this.getOrderBookers();
    this.getCounterSaleData();
    this.pre_discount = [];
  }

  getOrderBookers(): void {
    this.distributorId = this.storageService.getItem('distributor').id;
    this.generalDataService.getOrderBookers(this.distributorId,1).subscribe(
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

  getCounterSaleData(): void {
    this.loadingProducts = true;
    this.ordersService.getCounterSaleData().subscribe(
      (res: any) => {
        this.loadingProducts = false;
        if (res.status === 200) {
          this.allProducts = res.data.inventory.map((pr) => {
            this.catalogue_id = pr.catalogue_id;
            pr.net_amount = 0.0;
            pr.isAdded = false;
            pr.qtyAdded = false;
           let  availble_stock:number = (pr.availble_stock_qty ? +pr.availble_stock_qty:0) - (pr.allocated_stock_qty ? +pr.allocated_stock_qty:0)
            pr.availble_stock = availble_stock > 0 ? +availble_stock:0;
            return pr;
          });
          this.allProducts = this.allProducts.sort(
            (a, b) => parseInt(b.availble_stock)
          );
          this.specialDiscounts = res.data.special_discount;
          // this.prefrences = res.data.prefs;
          this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
          this.subInventory = res.data.sub_inventory;
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
        this.loadingProducts = false;
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch counter sale data. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  resetValues(): void {
    this.selectedProducts = [];
    this.selectedProductsIds = [];
    this.taxClasses = [];
    this.grossAmount = 0.0;
    this.schemeDiscount = 0.0;
    this.loyaltyDiscount =0.0;
    this.tradeDiscount = 0.0;
    this.specialDiscount = 0.0;
    this.extraDiscount = 0.0;
    this.credit = null;
    this.cheque = null;
    this.cash = null;
    this.tax = 0.0;
    this.tax = 0.0;
    this.gst_tax = 0.0;
    this.adv_inc_tax = 0.0;
    this.dueAmount = 0.0;
    this.notes = '';
    this.paymentDate = new Date().toISOString().split('T')[0];
    this.paymentTypeCheque = '';
    this.paymentTypeCredit = '';
    this.addedPayment = '';
    this.allProducts = this.allProducts.map((pr) => {
      pr.isAdded = false;
      pr.qtyAdded = false;
      return pr;
    });
    this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
  }

  getSchemesData(): void {
    this.ordersService.getSchemes().subscribe(
      (res) => {
        if (res.status === 200) {
          this.schemes = res.data;
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
            message: 'Cannot fetch Trade Offers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }
  getLoyaltyofferData(employee_id:number): void {
    this.ordersService.getLoyaltyoffers(employee_id).subscribe(
      (res) => {
        if (res.status === 200) { 
          this.loyaltyoffers = res.data;
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
            message: 'Cannot fetch Loyalty Offers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getTaxclasses(province_id=0): void {
    this.ordersService.getTaxClasses(province_id).subscribe(
      (res) => {
        if (res.status === 200) {
          this.taxClasses = res.data;
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Provincial Tax Classes. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }
  getDiscountSlabs(): void {
    this.selectedSegment = this.selectedRetailer.segment_id;
    this.resetValues();
    this.getTaxclasses(this.selectedRetailer.province_id);
    this.ordersService.getDiscountSlabs().subscribe(
      (res) => {
        if (res.status === 200) {
          this.discountSlabs = res.data;
          this.merchantDiscount = this.discountSlabs.find(
            (x) =>
              x.region_id === this.selectedRegion &&
              this.selectedSegment === x.segment_id &&
              x.channel_id === this.selectedRetailer.type_id
          );
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Trade Discount. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  focused(event: Event): void {
    (event.target as HTMLElement).parentElement.classList.add('focused');
  }

  left(event: Event): void {
    if (!(event.target as HTMLInputElement).value) {
      (event.target as HTMLElement).parentElement.classList.remove('focused');
    }
  }

  isFullyPaymentAdded(current: string): void {
    if (current === 'Credit') {
      this.paymentTypeCredit = '';
    } else {
      this.paymentTypeCheque = '';
    }
    if (this.selectedProducts.length === 0 && this.dueAmount === 0.0) {
      const toast: Toaster = {
        type: 'error',
        message: `Please select products first!`,
        title: `Payment cannot be added`,
      };
      this.toastService.showToaster(toast);
    } else {
      if (
        (this.paymentTypeCheque === 'full' ||
          this.paymentTypeCredit === 'full') &&
        this.addedPayment !== current
      ) {
        const toast: Toaster = {
          type: 'error',
          message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
          title: `Full Payment selected for ${this.addedPayment}`,
        };
        this.toastService.showToaster(toast);
      } else {
        document.getElementById('open-modal-payment').click();
        this.focusForPaymentValues();
      }
    }
  }

  focusForPaymentValues(): void {
    if (this.isCredit && this.creditAmount) {
      document.getElementById('Amount2').parentElement.classList.add('focused');
    } else {
      if (this.chequeAmount) {
        document
          .getElementById('Amount1')
          .parentElement.classList.add('focused');
      }
      if (this.bankName) {
        document
          .getElementById('chequeBankName')
          .parentElement.classList.add('focused');
      }
      if (this.chequeNumber) {
        document
          .getElementById('chequeNum')
          .parentElement.classList.add('focused');
      }
    }
  }

  currentFullPayment(current: string, other: string): void {
    if (
      (this.paymentTypeCheque === 'full' ||
        this.paymentTypeCredit === 'full') &&
      this.addedPayment !== current
    ) {
      const toast: Toaster = {
        type: 'error',
        message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
        title: `Full Payment selected for ${this.addedPayment}`,
      };
      this.toastService.showToaster(toast);
    } else {
      this.addedPayment = current;
      this.currentPayment = other;
    }
  }

  setPartial(current: string): void {
    if (current === this.addedPayment) {
      if (this.credit && current === 'Credit') {
        this.cash.amount_received =
          this.cash.amount_received + this.credit.amount_received;
        this.credit.amount_received = 0;
      }
      if (this.cheque && current === 'Cheque Payment') {
        this.cash.amount_received =
          this.cash.amount_received + this.cheque.amount_received;
        this.cheque.amount_received = 0;
      }
      this.addedPayment = '';
      this.currentPayment = '';
      this.alreadyFullPayment = false;
    }
  }

  checkPaymentHasValues(): boolean {
    if (this.isCredit) {
      if (this.paymentTypeCredit === 'full') {
        return this.paymentTypeCredit.length > 0;
      } else {
        return (
          this.paymentTypeCredit.length > 0 &&
          this.creditAmount &&
          this.creditAmount > -1 &&
          this.creditAmount <= this.cash.amount_received
        );
      }
    } else {
      if (this.paymentTypeCheque === 'full') {
        return (
          this.paymentTypeCheque.length > 0 &&
          this.bankName.length > 0 &&
          this.chequeNumber.length > 0 &&
          this.paymentDate.length > 0
        );
      } else {
        return (
          this.paymentTypeCheque.length > 0 &&
          this.chequeAmount &&
          this.chequeAmount > -1 &&
          this.chequeAmount <= this.cash.amount_received &&
          this.bankName.length > 0 &&
          this.chequeNumber.length > 0 &&
          this.paymentDate.length > 0
        );
      }
    }
  }

  removeCheque(): void {
    this.cheque = null;
    this.isChequeAdded = false;
    this.paymentTypeCheque = '';
    this.calculatePayments();
  }

  removeCredit(): void {
    this.credit = null;
    this.isCreditAdded = false;
    this.paymentTypeCredit = '';
    this.calculatePayments();
  }

  makePayment(): void {
    if (this.isCredit) {
      this.credit = {
        retailer_id: this.selectedRetailer.retailer_id,
        distributor_id: this.distributorId,
        type: 'Counter',
        payment_mode: 'Credit',
        payment_detail: '',
        dispatched_bill_amount: 0,
        recovery: 0,
        amount_received:
          this.paymentTypeCredit === 'full'
            ? JSON.parse(JSON.stringify(this.dueAmount))
            : JSON.parse(JSON.stringify(this.creditAmount)),
      };
      this.isCreditAdded = true;
    }
    if (!this.isCredit) {
      this.cheque = {
        retailer_id: this.selectedRetailer.retailer_id,
        distributor_id: this.distributorId,
        type: 'Counter',
        payment_mode: 'Cheque',
        payment_detail: {
          cheque_amount:
            this.paymentTypeCheque === 'full'
              ? JSON.parse(JSON.stringify(this.dueAmount))
              : JSON.parse(JSON.stringify(this.chequeAmount)),
          bank_name: JSON.parse(JSON.stringify(this.bankName)),
          cheque_number: JSON.parse(JSON.stringify(this.chequeNumber)),
          cheque_date: JSON.parse(JSON.stringify(this.paymentDate)),
        },
        dispatched_bill_amount: 0,
        recovery: 0,
        amount_received:
          this.paymentTypeCheque === 'full'
            ? JSON.parse(JSON.stringify(this.dueAmount))
            : JSON.parse(JSON.stringify(this.chequeAmount)),
      };
      this.isChequeAdded = true;
    }
    this.calculatePayments();
  }

  addPaymentMethod(): void {
    this.isAdded = true;
    const isPaymentAdded = this.checkPaymentHasValues();
    if (isPaymentAdded) {
      this.isAdded = false;
      this.makePayment();
      document.getElementById('open-modal-payment').click();
    }
  }

  paymentCancelled(): void {
    this.isAdded = false;
    this.resetPaymentValues();
    this.paymentTypeCredit = '';
    this.paymentTypeCheque = '';
  }

  resetPaymentValues(): void {
    this.chequeAmount = null;
    this.paymentDate = new Date().toISOString().split('T')[0];
    this.bankName = '';
    this.chequeNumber = null;
    this.creditAmount = null;
  }

  getRoutes(): void {
    const employee = this.orderBookers.find(
      (x) => x.employee_id === this.selectedEmployee
    );
    this.selectedRegion = employee.region_id;
    this.selectedRoute = null;
    this.selectedRetailer = null;
    this.resetValues();
    this.generalDataService.getOrderBookerRoutes(this.selectedEmployee).subscribe(
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
    this.getLoyaltyofferData(this.selectedEmployee);  
  }

  getRetailerByRoute(): void {
    this.selectedRetailer = null;
    this.resetValues();
    this.generalDataService.getRetailersByRoute(this.selectedRoute).subscribe(
      (res) => {
        if (res.status === 200) {
          this.retailers = res.data;
          const selectedob = this.orderBookers.some(x=> (x.employee_id == this.selectedEmployee)) ? this.orderBookers.filter(x=> (x.employee_id == this.selectedEmployee))[0]:null;
          if(selectedob && this.retailers){
            this.retailers    = this.retailers.map(x=>{
              x.region_id     = selectedob.region_id;
              x.area_id       = selectedob.area_id;
              x.territory_id  = selectedob.territory_id;
              
             return x;
            });
          }
          
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

  openQuantityModal(product: any): void {
    this.showQuantityModal = true;
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
    this.selectedProduct = JSON.parse(JSON.stringify(product));
    this.selectedProduct.selectedScheme = null;
     
    // this.selectedProduct.units = this.prefrences.filter(x => x.item_id === product.item_id);
  }

  showProductsList(event: Event): void {
    event.stopPropagation();
    if (
      this.paymentTypeCheque === 'full' ||
      this.paymentTypeCredit === 'full'
    ) {
      const toast: Toaster = {
        type: 'error',
        message: `You selected Full payment for ${this.addedPayment} please remove it if you want to add more products!`,
        title: `Full Payment selected for ${this.addedPayment}`,
      };
      this.toastService.showToaster(toast);
    } else {
      if (this.selectedRetailer) {
        this.allProducts = this.allProducts.map((product) => {
          product.schemes = this.dataService.getSchemes(
            product.item_id,
            product.unit_id,
            product.pref_id,
            this.schemes,
            this.selectedRetailer.type_id,
            this.selectedRetailer.id
          );
          return product;
        });
        this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
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
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }
  setQuantity(product: any): void {
    // if (+product.stockQty > 1000) {
    //   product.stockQty = 0;
    // }
    
    let  availble_stock:number = +product.availble_stock
    if(product.stockQty > (+product.availble_stock+ +product.scheme_quantity_free)){
      product.stockQty = (+product.availble_stock+ +product.scheme_quantity_free);
      this.toastService.showToaster({
        title: 'Stock Error:',
        message:
          `Added quantity shouldn't be greater then available stock (${availble_stock})!`,
        type: 'error',
      });
    }
    if (product.item_trade_price) { 
      
      product.qtyAdded = true;
      product = this.calculateProductDiscounts(product);

      
      
      if(product.isAdded === true ){
        this.selectedProducts = this.dataService.updateOrderitemscalculation(this.selectedProducts,this.selectedRetailer,this.taxClasses);
        if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
          this.selectedRetailer.items = this.selectedProducts;
          this.selectedProducts   = this.dataService.applyBundleProductsScheme(product,this.selectedRetailer,this.taxClasses);
        }
        

        //Apply slab on all products
        this.selectedProducts       =  this.dataService.applySlabDiscountValuesToItems(this.selectedProducts,this.discountSlabs,this.selectedRetailer,this.taxClasses)   

        //update slab discount
        this.selectedRetailer.items =  this.selectedProducts
        this.selectedProducts       =  this.dataService.applySpecialDiscount(this.selectedRetailer,this.specialDiscounts,this.taxClasses);
        this.selectedRetailer.items =  this.selectedProducts

        //Apply Loyal offer discount
        this.selectedRetailer.items =   this.selectedProducts
        this.selectedRetailer       =   this.dataService.applyLoyaltyOfferDiscount(this.selectedRetailer,this.loyaltyoffers,this.taxClasses); 
        this.selectedProducts       =   this.selectedRetailer.items; 

        //update Scheme Free Products to scheme Items
        this.selectedProducts       =  this.dataService.updateSchemeFreeProductItems(this.selectedRetailer,this.allProducts,this.taxClasses);
        this.selectedRetailer.items =  this.selectedProducts
      }  

      this.calculateTotalBill();
      setTimeout(()=>{      
        if(document.getElementById(product.item_id)){
          (document.getElementById(product.item_id) as HTMLInputElement).focus();
        }
      },30);
      if(this.selectedRetailer.FOCA_error){
        this.toastService.showToaster({
          title: 'Warning',
          message:`FOC quantity is changed due to insufficient stock!`,
          type: 'success',
        });
      }

    }
  }
  addProductToOrder(): void {
    let  availble_stock:number = +this.selectedProduct.availble_stock
    if(this.selectedProduct.stockQty > (+this.selectedProduct.availble_stock+ +this.selectedProduct.scheme_quantity_free)){
      this.selectedProduct.stockQty = (+this.selectedProduct.availble_stock+ +this.selectedProduct.scheme_quantity_free);
      this.toastService.showToaster({
        title: 'Stock Error:',
        message:
          `Added quantity shouldn't be greater then available stock (${availble_stock})!`,
        type: 'error',
      });
      return; 
    }
     
    if (
      this.selectedProduct.selectedScheme && this.selectedProduct.selectedScheme.scheme_type !='bundle_offer' &&
      !this.selectedProduct.selectedScheme.applied
    ) {
      
      this.dataService.schemeCannotApplied();
      return;
    }
    this.selectedProduct  = this.calculateProductDiscounts(this.selectedProduct); 
    if (+this.selectedProduct.stockQty > 0 && this.selectedProduct.pref_id) {
      const pr = this.selectedProducts.find((x) => x.item_id === this.selectedProduct.item_id);
      if (pr) {
        this.allProducts = this.allProducts.map((prod) => {
          if (prod.item_id === this.selectedProduct.item_id) {
            prod.isAdded = true;
            prod.qtyAdded = true;
          }
          return prod;
        });
        this.dispProducts = this.dispProducts.map((prod) => {
          if (prod.item_id === this.selectedProduct.item_id) {
            prod.isAdded = true;
            prod.qtyAdded = true;
          }
          return prod;
        }); 
        this.selectedProducts = this.selectedProducts.filter(x=> !(x.item_id==this.selectedProduct.item_id));
        this.selectedProduct.isAdded = true;
        this.selectedProduct.qtyAdded = true;
        this.selectedProducts.push(this.selectedProduct);
        
        if (!this.selectedProductsIds.includes(this.selectedProduct.item_id)) {
          this.selectedProductsIds.push(this.selectedProduct.item_id);
        }
        this.alreadyAdded = true;
      } 
      else { 
        this.alreadyAdded = false;
        this.showQuantityModal = false;
        this.allProducts = this.allProducts.map((prod) => {
          if (prod.item_id === this.selectedProduct.item_id) {
            prod.isAdded = true;
            prod.qtyAdded = true;
          }
          return prod;
        });
        this.dispProducts = this.dispProducts.map((prod) => {
          if (prod.item_id === this.selectedProduct.item_id) {
            prod.isAdded = true;
            prod.qtyAdded =true;
          }
          return prod;
        });
        this.selectedProduct.isAdded = true;
        this.selectedProduct.qtyAdded= true;
        this.selectedProducts.push(this.selectedProduct);
        
        if (!this.selectedProductsIds.includes(this.selectedProduct.item_id)) {
          this.selectedProductsIds.push(this.selectedProduct.item_id);
        }
      }
      
      this.selectedProducts         = this.dataService.updateOrderitemscalculation(this.selectedProducts,this.selectedRetailer,this.taxClasses);

      if(this.selectedProduct.selectedScheme && this.selectedProduct.selectedScheme.scheme_type == 'bundle_offer'){
        this.selectedRetailer.items = this.selectedProducts;
        this.selectedProducts       = this.dataService.applyBundleProductsScheme(this.selectedProduct,this.selectedRetailer,this.taxClasses);
      }
      
      //apply slabs to all items 
      this.selectedProducts       =   this.dataService.applySlabDiscountValuesToItems(this.selectedProducts,this.discountSlabs,this.selectedRetailer,this.taxClasses)   
      
      //Apply Loyal offer discount
      this.selectedRetailer.items =  this.selectedProducts
      this.selectedRetailer       =  this.dataService.applyLoyaltyOfferDiscount(this.selectedRetailer,this.loyaltyoffers,this.taxClasses); 
      this.selectedProducts       =  this.selectedRetailer.items; 

      //update Scheme Free Products to scheme Items
      this.selectedProducts       =  this.dataService.updateSchemeFreeProductItems(this.selectedRetailer,this.allProducts,this.taxClasses);
      this.selectedRetailer.items =  this.selectedProducts

      this.calculateTotalBill();
      
      document.getElementById('pl-qty-close').click();
      this.isAdded = false;
      // console.log(this.dispProducts.filter(x=>x.isAdded===true));
    }
        
  }

  removeProductFromOrder(product: any): void {
    if (this.isCreditAdded || this.isChequeAdded) {
      this.toastService.showToaster({
        title: 'Payment Error:',
        message:
          'Cannot edit or remove current products if payment method added!',
        type: 'error',
      });
      return;
    }
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
        prod.qtyAdded = false;
      }
      return prod;
    });
    this.dispProducts = this.dispProducts.map((prod) => {
      if (prod.item_id === product.item_id) {
        prod.isAdded = false;
        prod.qtyAdded =false;
      }
      return prod;
    });
    // if (!this.selectedProducts.find(x => x.item_id !== product.item_id)) {
    this.selectedProductsIds = this.selectedProductsIds.filter(
      (x) => x !== product.item_id
    );
    // }
    this.calculateTotalBill();
    
    if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
      this.selectedRetailer.items = this.selectedProducts;
      this.selectedProducts   = this.dataService.applyBundleProductsScheme(product,this.selectedRetailer,this.taxClasses);
    }
 

    //apply slabs to all items 
    this.selectedProducts  = this.dataService.applySlabDiscountValuesToItems(this.selectedProducts,this.discountSlabs,this.selectedRetailer,this.taxClasses)   
    
    //Apply Loyal offer discount
    this.selectedRetailer.items =  this.selectedProducts
    this.selectedRetailer       =  this.dataService.applyLoyaltyOfferDiscount(this.selectedRetailer,this.loyaltyoffers,this.taxClasses); 
    this.selectedProducts       =  this.selectedRetailer.items;  

    //update Scheme Free Products to scheme Items
    this.selectedProducts       =  this.dataService.updateSchemeFreeProductItems(this.selectedRetailer,this.allProducts,this.taxClasses);
    this.selectedRetailer.items = this.selectedProducts
    
    this.calculateTotalBill();

  }

 
  calculateProductDiscounts(product: any, scheme?: any):any {
    // Trade Offer
    product.scheme_id             =   0;  
    product.scheme_type           =   0; 
    product.scheme_rule           =   0;
    product.scheme_min_quantity   =   0; 
    product.scheme_discount_type  =   0;
    product.discount_on_tp        =   0;  
    product.scheme_quantity_free  =   0; 
    product.scheme_discount       =   0; 
    product.scheme_free_items     =   [];
    if (scheme) {
      product.selectedScheme = scheme;
    }
    if (product.selectedScheme) {
      product.scheme_id             =   product.selectedScheme.id ;
      product.scheme_type           =   product.selectedScheme.scheme_type;
      product.scheme_rule           =   product.selectedScheme.scheme_rule;
      product.scheme_min_quantity   =   product.selectedScheme.min_qty;
      product.scheme_discount_type  =   product.selectedScheme.discount_type;
      product.discount_on_tp        =   product.selectedScheme.discount_on_tp;
      product = this.applyScheme(product);
    } else {
      product.scheme_discount                   =   0;
      product.price                             =   JSON.parse(JSON.stringify(product.item_trade_price));
      product.unit_price_after_scheme_discount  =   JSON.parse(JSON.stringify(product.item_trade_price));
    }    
    if (this.discountSlabs) {
    
      product = this.dataService.applySlabDiscountToSingleItem(product,this.selectedRetailer,this.discountSlabs);
      product = JSON.parse(JSON.stringify(product))
      
      if(!product.slab_id || product.slab_id === null || product.slab_id < 1){ 
        product.slab_id=0;
        product.slab_type=0;
      }
    }

    product.trade_discount = 0;
    product.trade_discount_pkr = 0;
    product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.original_price));
    //console.log(this.orderDetail);
    product.special_discount = 0;
    product.unit_price_after_special_discount = product.unit_price_after_merchant_discount;
    // Special Discount
    product = this.calculateProductSpecialDiscount(product);
    product.unit_price_after_individual_discount = +product.unit_price_after_special_discount - product.extra_discount ? +product.extra_discount:0;
    // Extra Discount => Booker Discount
    
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

  calculateExtraDiscount(product: any): void {
    if (+product.extra_discount < product.unit_price_after_special_discount) {
      product.extra_discount_pkr = +product.stockQty * +product.extra_discount;
    } 
    else 
    {
      product.extra_discount      = 0;
      product.extra_discount_pkr  = 0;
      const toast: Toaster = {
        type: 'error',
        message: 'Discount should not be greater than item price!',
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    }
    
    
    let pass_discount = false;
    let current_value = product.extra_discount;
    console.log(this.pre_discount);
    if(this.pre_discount && this.pre_discount.some(x=>x.item_id == product.item_id) && !product.extra_discount.endsWith(".")){
     let discountResult = this.pre_discount.find(x=>x.item_id == product.item_id);
     console.log('pass_discount')
     
     if(discountResult.value > +product.extra_discount){
        pass_discount = true
     }
    }
    if( (!product.extra_discount.endsWith(".")  &&  product.extra_discount.toString().substring(product.extra_discount.toString().length - 2) != ".0" ) || pass_discount){ 
      if(this.pre_discount && this.pre_discount.some(x=>x.item_id == product.item_id)){
          let indexI = this.pre_discount.findIndex(x=>x.item_id == product.item_id);
          this.pre_discount[indexI].value = product.extra_discount;
      } else{
        this.pre_discount.push({
                                item_id : product.item_id,
                                value   : product.extra_discount,
                              })
      }
      //maximum tw decimal positions
      product.extra_discount      =  +product.extra_discount;
  
      product.extra_discount      =  +product.extra_discount.toFixed(2);
      current_value               =   product.extra_discount;
      this.selectedRetailer.items =  this.selectedProducts
      this.selectedRetailer       =  this.dataService.applyLoyaltyOfferDiscount(this.selectedRetailer,this.loyaltyoffers,this.taxClasses); 
      this.selectedProducts       =  this.selectedRetailer.items;  

      //update Scheme Free Products to scheme Items
      this.selectedProducts       =  this.dataService.updateSchemeFreeProductItems(this.selectedRetailer,this.allProducts,this.taxClasses);
      this.selectedRetailer.items =  this.selectedProducts

      this.calculateTotalBill();
      setTimeout(()=>{      
        if(document.getElementById('extraDiscount-'+product.item_id)){
          // let inputElement = document.getElementById('extraDiscount-' + product.item_id) as HTMLInputElement;
          // inputElement.value = current_value.toString();
          (document.getElementById('extraDiscount-'+product.item_id) as HTMLInputElement).focus();
        }
      },30);
    }
    
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

  calculateTotalBill(): void { 

    this.orderParentQtySold  =    this.dataService.orderParentQtySold(this.selectedProducts);
    // Gross Amount
    
    this.grossAmount         =    this.dataService.orderGrossAmount(this.selectedProducts);
    // Retail Price
    this.totalRetailPrice    =    this.dataService.orderRetailPrice(this.selectedProducts);
    // Net Amount
    this.dueAmount           =    this.dataService.orderNetAmount(this.selectedProducts);
    // Order Original
    this.orderTotal          =    this.dataService.orderNetAmount(this.selectedProducts);
    // Scheme Discount
    this.schemeDiscount      =    this.dataService.orderSchemeDiscount(this.selectedProducts);

    //Loyalty Discount
    this.loyaltyDiscount     =    this.dataService.orderLoyaltyDiscount(this.selectedRetailer);

    // Trade Discount
    this.tradeDiscount       =    this.dataService.orderTradeDiscount(this.selectedProducts);

    // Special Discount
    this.specialDiscount     =    this.dataService.orderSpecialDiscount(this.selectedProducts);

    // Extra Discount
    this.extraDiscount       =    this.dataService.orderExtraDiscount(this.selectedProducts);

    // Tax
    this.gst_tax             =    this.dataService.orderGstTax(this.selectedProducts);

    // Tax
    this.adv_inc_tax         =    this.dataService.orderAdvIncTax(this.selectedProducts);

    // Tax
    this.tax                 =    this.dataService.orderTax(this.selectedProducts);
    
    this.calculatePayments();
}

  calculatePayments(): void {
    this.cash = {
      retailer_id: this.selectedRetailer.retailer_id,
      distributor_id: this.distributorId,
      type: 'Counter',
      payment_mode: 'Cash',
      payment_detail: '',
      dispatched_bill_amount: 0,
      recovery: 0,
      amount_received: this.dueAmount,
    };
    if (this.cheque) {
      this.cash.amount_received =
        this.cash.amount_received - this.cheque.amount_received;
    }
    if (this.credit) {
      this.cash.amount_received =
        this.cash.amount_received - this.credit.amount_received;
    }
    this.cash.amount_received = +this.cash.amount_received.toFixed(2);
  }

  applyScheme(product: any): any {
    switch (product.selectedScheme.scheme_type) {
      case 'free_product':
        product   = this.dataService.applyFreeProductScheme(product);
        break;
      case 'dotp':
        product   = this.dataService.getSDForDOTP(product);
        break; 
     case 'comp_product': 
        product   = this.dataService.applyComplementaryScheme(product);  
        break;
     case 'bundle_offer': //it will be applied on after item added to order details because it depends on multiple items
            break;       
      default:
        product   = this.dataService.getSDForGift(product);
        break;
    }
    return product;
  }
  closeQuantityModal(event: Event): void {
    if (
      this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-quantity')
    ) {
      this.showQuantityModal = false;
      this.selectedProduct = JSON.parse(JSON.stringify({}));
    }
  }
  searchProduct(): void {
    if (this.productSearchText) {
      this.dispProducts = this.allProducts.filter(
        (prod) =>
          prod.item_name
            .toLowerCase()
            .includes(this.productSearchText.toLowerCase()) ||
          prod.item_sku
            .toLowerCase()
            .includes(this.productSearchText.toLowerCase())
      );
    } else {
      this.dispProducts = this.allProducts;
    }
  }

  isAlreadyAdded(itemId: number): boolean {
    return this.selectedProductsIds.includes(itemId);
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

  isDataValid(): boolean {
    if (
      !this.selectedProductsIds.length ||
      (!this.selectedEmployee && !this.selectedRoute) ||
      !this.selectedRetailer
    ) {
      return false;
    } else {
      return true;
    }
  }

  setOrderFields(): void {
    const itemsQtyCounter = this.selectedProducts.map((x) => ( +x.stockQty > 0 || x.scheme_quantity_free > 0) );
    if (itemsQtyCounter.length === 0 || itemsQtyCounter.includes(false)) {
    const toast: Toaster = {
        type: 'error',
        message: 'Product Quantity cannot be zero',
        title: 'Error:', 
    };
    this.toastService.showToaster(toast);
    return;
    }
    if (!this.isDataValid()) {
        const toast: Toaster = {
            type: 'error',
            message:
                'Please select Employee, Route, Retailer and Products to place the order!',
            title: 'Error:',
        };
        this.toastService.showToaster(toast);
    } else {
            const employee = this.orderBookers.find(
            (x) => x.employee_id === this.selectedEmployee
        );
        const newOrder: CounterSale = {
            catalogue_id:this.catalogue_id,
            area_id: employee.area_id,
            assigned_route_id: this.selectedRoute,
            booking_territory: employee.territory_id,
            order_type: 'counter',
            counter_sale: 1,
            spot_sale: 0,
            sales_man_id: 0,
            within_radius: 0,
            booking_region: this.selectedRegion,
            invoice_number: '',
            invoice_date: new Date().toISOString(),
            remarks: this.notes,
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            gross_sale_amount: this.grossAmount,
            total_amount_after_tax: this.dueAmount,
            total_discount:
                this.specialDiscount +
                this.tradeDiscount +
                this.schemeDiscount +
                this.loyaltyDiscount +
                this.extraDiscount,
            total_tax_amount: this.tax,
            booked_order_value: 0,
            booked_total_qty: 0,
            booked_total_skus: 0,
            booking_area: employee.area_id,
            booking_locality_id: this.selectedRetailer.locality_id,
            booking_neighbourhood_id: this.selectedRetailer.neighbourhood_id,
            booking_zone: employee.area_id,
            employee_id: employee.employee_id,
            freight_charges: 0,
            order_total: this.orderTotal,
            region_id: this.selectedRegion,
            status: 'Completed',
            status_code: 0,
            territory_id: employee.territory_id,
            total_retail_price: this.totalRetailPrice,
            ttl_products_sold: this.selectedRetailer.items.length,
            ttl_qty_sold: this.orderParentQtySold,
            loyalty_offer_id: this.selectedRetailer.loyalty_offer_id,
            loyalty_offer_reward_type: this.selectedRetailer.loyalty_offer_reward_type,
            loyalty_offer_interval: this.selectedRetailer.loyalty_offer_interval,
            loyalty_offer_discount: this.selectedRetailer.loyalty_offer_discount,
            payment: {
                total_payment: this.dueAmount,
                detail: [],
            },
            items: [],
            
        };  
        this.order = newOrder;
        if (this.cheque) {
            this.order.payment.detail.push(this.cheque);
        }
        if (this.credit) {
            this.order.payment.detail.push(this.credit);
        }
        this.order.payment.detail.push(this.cash);
        this.setOrderItems(employee);
    }
  }

 
  getTaxType(tax_class_id):string{
    if(tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.type;
      }else{
        return 'percentage';
      }
    }
    return 'percentage';
  }
  taxAppliedOn(tax_class_id):string{
    if(this.selectedRetailer  && this.selectedRetailer.apply_retail_tax == 1 && tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.tax_applied_on == 'net_price' ? 'net_price':'retail_price';
      }else{
        return 'retail_price';
      }
    }
    return null;
  }
  getGstTaxAmount(tax_class_id):any{
    if(this.selectedRetailer && tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(this.selectedRetailer.retailer_register == 1){
            return taxclass.gst_filer_retailer_value;
         }
         else{
            return taxclass.gst_nonfiler_retailer_value;
         }
      }
    }
    return 0;
  }
  getAdvIncTaxAmount(tax_class_id):any{
    if(tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(this.selectedRetailer.retailer_register == 1){
            return taxclass.adv_inc_filer_retailer_value;
         }
         else{
            return taxclass.adv_inc_nonfiler_retailer_value;
         }
      }
    }
    return 0;
  }

  setOrderItems(selectedEmployee: any): void {
    const employee = this.orderBookers.find( (x) => x.employee_id === this.selectedEmployee );
    this.selectedProducts.forEach((product, index) => {
      
      let free_qty            =   product.scheme_quantity_free ? +product.scheme_quantity_free : 0;
      let stockQty            =   +product.stockQty;
      let gross_sale_amount   =   product.original_price * stockQty
      let finalQty            =   stockQty+free_qty;

      let ttl_scheme_discount =   product.scheme_id && product.scheme_type == 'bundle_offer' ? (+product.scheme_discount * +product.scheme_bundle_interval): +(stockQty * product.scheme_discount) ;
      let ttl_trade_discount  =   +stockQty * product.trade_discount_pkr;
      let ttl_special_discount=   product.special_discount ? stockQty * +product.special_discount:0;
      let ttl_extra_discount  =   +product.extra_discount ? +stockQty * +product.extra_discount : 0;
      let ttl_loyalty_discount=   product.loyalty_offer_discount_pkr ? +stockQty * +product.loyalty_offer_discount_pkr : 0;
      let total_discount      =   ttl_scheme_discount + ttl_trade_discount + ttl_special_discount + ttl_extra_discount + ttl_loyalty_discount;
      let final_price         =   gross_sale_amount - total_discount;
      let gst_tax             =   0;
      let adv_inc_tax         =   0;                           
      let tax_in_value        =   0;                          
      let total_tax_amount    =   0;

      if(this.selectedRetailer && product.tax_class_id > 0 && this.selectedRetailer.apply_retail_tax == 1){

        let tax_applied_value =  this.taxAppliedOn(product.tax_class_id) == 'net_price' ? +(final_price/finalQty):+product.item_retail_price;

        gst_tax               =  (this.getGstTaxAmount(product.tax_class_id)/ 100) * +tax_applied_value;
        adv_inc_tax           =  (this.getAdvIncTaxAmount(product.tax_class_id) / 100) * (+tax_applied_value + +gst_tax); 
        tax_in_value          =   gst_tax + adv_inc_tax;                          
        total_tax_amount      =   tax_in_value*finalQty;  
      }

      let ttl_amnt_aftr_tax   =   final_price + total_tax_amount;


      const item:any =  {
        unit_id: product.unit_id,
        unit_name: product.unit_name,
        brand_id: product.brand_id,
        item_id: product.item_id,
        item_name: product.item_name,
        pref_id: product.pref_id,
        employee_id: this.selectedEmployee,
        item_quantity_booker: product.item_quantity_booker,
        item_quantity_updated: product.item_quantity_booker != finalQty ? finalQty : null ,
        quantity_returned: 0, 
        original_price: product.original_price,
        loyalty_offer_id: product.loyalty_offer_id ? product.loyalty_offer_id:null,
        loyalty_offer_type : product.loyalty_offer_type ? product.loyalty_offer_type :null,
        loyalty_offer_discount_type: product.loyalty_offer_discount_type? product.loyalty_offer_discount_type :null,
        loyalty_offer_discount: product.loyalty_offer_discount? product.loyalty_offer_discount :null,
        loyalty_offer_discount_pkr : product.loyalty_offer_discount_pkr? product.loyalty_offer_discount_pkr :null, 
        scheme_id: product.scheme_id || 0,
        scheme_bundle_interval:product.scheme_bundle_interval || 0, 
        scheme_type : product.scheme_type,
        scheme_rule: product.scheme_rule,
        scheme_min_quantity: product.scheme_min_quantity || 0,
        scheme_quantity_free: product.scheme_quantity_free || 0,
        scheme_discount_type: product.scheme_discount_type || 0,
        gift_value: product.gift_value || 0,
        scheme_discount: product.scheme_discount,
        unit_price_after_scheme_discount: product.unit_price_after_scheme_discount,
        slab_id: product.slab_id,
        slab_type: product.slab_type,
        slab_discount_type: product.slab_discount_type,
        merchant_discount: product.trade_discount,
        merchant_discount_pkr: product.trade_discount_pkr ? product.trade_discount_pkr:0,
        unit_price_after_merchant_discount: product.unit_price_after_merchant_discount,
        special_discount: product.special_discount ? product.special_discount :0,
        unit_price_after_special_discount:product.unit_price_after_special_discount,
        booker_discount: product.extra_discount ? product.extra_discount:0, 
        unit_price_after_individual_discount:product.unit_price_after_individual_discount,
        schemeitems:product.schemeitems ? product.schemeitems :null,
        parent_pref_id: product.child,
        parent_unit_id: product.parent_unit_id, 
        parent_brand_id: product.brand_id,
        parent_tp: product.parent_trade_price,
        parent_qty_sold: finalQty/product.sub_inventory_quantity,
        parent_value_sold: final_price,
        final_price: final_price,
        campaign_id: product.selectedScheme?.id || 0,
        item_status: 1,
        reasoning: '',
        assigned_route_id: this.selectedRoute,
        booked_total_qty: 0, 
        quantity: finalQty,
        gross_sale_amount: gross_sale_amount,
        item_retail_price: product.item_retail_price,
        total_retail_price: product.item_retail_price * finalQty,
        tax_class_id: product.tax_class_id,
        tax_type: this.selectedRetailer.retailer_register == 1 ? 1:2,
        tax_applied_on: this.taxAppliedOn(product.tax_class_id),
        tax_in_percentage: this.getGstTaxAmount(product.tax_class_id),
        adv_inc_tax_in_percentage: this.getAdvIncTaxAmount(product.tax_class_id),
        gst_tax_amount :gst_tax,
        adv_inc_tax_amount :adv_inc_tax,
        tax_in_value: tax_in_value,
        total_tax_amount: total_tax_amount,
        total_amount_after_tax: ttl_amnt_aftr_tax,
        total_discount: total_discount,
        region_id:employee.region_id,
        area_id:employee.area_id,
        territory_id:employee.territory_id,
        city_id:this.selectedRetailer.city_id,
        locality_id:this.selectedRetailer.locality_id,
        neighbourhood_id:this.selectedRetailer.neighbourhood_id,
        segment_id:this.selectedRetailer.segment_id,
        channel_id:this.selectedRetailer.retailer_type_id,
        main_category_id: product.main_category_id,
        sub_category_id : product.sub_category_id,
        division_id: product.division_id,
      }; 
        
      this.order.items.push(item);
      if (index === this.selectedProducts.length - 1) {
        this.placeOrder();
      }
    });
  } 
  

  openBillsModal() {
    (
      document.getElementById(
        'billsPrintPaperModalTrigger'
      ) as HTMLButtonElement
    ).click();
  }

  getBills(size: string = 'A4'): void {
    document.getElementById('close-bills').click();
    const billsUrl = `${environment.apiDomain}${
      API_URLS.BILLS
    }?type=bill&order_booker=${
      this.order.employee_id
    }&date=${this.order.invoice_date.substring(0, 10)}&size=${size}&orderID=${
      this.order['id']
    }`;
    window.open(billsUrl, '_blank');
  }

  placeOrder(): void {
    this.isOrdering = true;
    // //debugger 
    this.ordersService.counterSaleOrder(this.order).subscribe(
      (res) => {
        this.isOrdering = false;
        if (res.status === 200) {
          this.order['id'] = res.data.id;
          this.openBillsModal();

          const toast: Toaster = {
            type: 'success',
            message: 'Order Placed successfully!',
            title: 'Order Placed:',
          };
          this.toastService.showToaster(toast);
          this.selectedEmployee = null;
          this.selectedRoute = null;
          this.selectedRetailer = null;
          this.credit = null;
          this.cheque = null;
          this.cash = null;
          this.retailers = [];
          this.routes = [];
          this.isChequeAdded = false;
          this.isCreditAdded = false;
          this.resetValues();
          this.paymentCancelled();
          this.getCounterSaleData();
        }
      },
      (error) => {
        this.isOrdering = false;
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Order cannot be placed at the moment! Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  checkBundleScheme(scheme:any):boolean{
    
    
    //console.log(scheme.scheme_type);
    if(scheme.scheme_type == 'bundle_offer'){ 
      let itemCount  = 0; 
      const scheme_items      =   scheme.items.map(x=> {return x.item_id});
      this.selectedProducts.forEach(x=>{
        if(scheme_items.includes(x.item_id) && scheme.min_qty <= x.stockQty && (!x.scheme_id || x.scheme_id == 0 || x.scheme_id == scheme.id )){ 
          ++itemCount;      
        }
      });
      if(scheme_items.length - 1 <= itemCount){
          return false
      }else{
        return true;
      } 
    }
    return false;
  }
}
