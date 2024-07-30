import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../shared/services';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';
import { OrderDispatchService } from '../../services/dispatch.service';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {
  deleteRetailerCreditInvoice,
  getRetailersCreditInvoice,
  RecoveryRetailer,
  set_retailer_credit_Invoices_data,
} from '../../models/recovery-retailler.model';
import { number } from 'echarts';
import { exit } from 'process';

@Component({
  selector: 'app-dispatch-order',
  templateUrl: 'order-dispatched.component.html',
  styleUrls: ['./order-dispatched.component.css'],
})
export class OrderDispatchedComponent implements OnInit {
  system_discount_type:number;
  checkAllocationSuccess: boolean = false;
  stockAllocation: any;
  tabLoading = false;
  dtOptions: DataTables.Settings;
  loading: boolean;
  loadingProduct: boolean;
  showProducts: boolean;
  savingOrder: boolean;
  isAllSelected: boolean;
  showFinalLoad: boolean;

  retailer_credit_Invoices: RecoveryRetailer[];

  searchText: string;
  assignmentId: string;
  employeeId: number;

  salemanId: number;
  currentTab: number;
  distributorId: number;
  orderDate: string;
  invoiceDate: string;

  orderDetails: any = {};
  holdOrderParams: any = {};
  selectedRetailer: any;
  merchantDiscount: any;
  newProduct: any;
  dispatchOrderDetail: any;
  load: any;
  currentLoadContent: any;
  finalLoad: any;

  inventory: Array<any> = [];

  ordersRetailers: Array<any> = [];
  specialDiscounts: Array<any> = [];
  schemes: Array<any> = [];
  loyaltyoffers: Array<any> = [];
  discountSlabs: Array<any> = [];
  taxClasses: Array<any> = [];
  credits: Array<any> = [];
  recoveryRetailers: Array<any> = [];
  remainingOrders: Array<any> = [];
  ordersDispList: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToasterService,
    private dataService: DataService,
    private storageService: LocalStorageService,
    private dispatchService: OrderDispatchService,
    private orderService: OrdersService
  ) {
    this.distributorId = this.storageService.getItem('distributor').id;
    this.retailer_credit_Invoices = new Array<RecoveryRetailer>();
    this.holdOrderParams.hold_reason = '';
    this.holdOrderParams.delete_allocation = false;
    this.system_discount_type = this.storageService.getItem('distributor').system_discount_type;
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      scrollX: true,
    };
    this.orderService.checkAllocationSuccess.subscribe((x) => {
      this.checkAllocationSuccess = x;
    });
    this.currentTab = 1;
    this.employeeId = null;
    this.loyaltyoffers = null;
    this.setLoad();
    this.setCurrentLoad(1);
    this.load.content.push(this.currentLoadContent);
    this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
    this.salemanId = +this.route.snapshot.paramMap.get('saleManId') || null;
    this.orderDate = this.route.snapshot.paramMap.get('date');
    if (!this.salemanId || !this.orderDate || !this.assignmentId) {
      this.router.navigateByUrl('/orders/dispatch-orders');
      const toast: Toaster = {
        type: 'error',
        message: 'No order selected to dispatch!',
        title: 'Dispatch Error:',
      };
      this.toastService.showToaster(toast);
    } else {
      this.getProducts();
      this.getSchemes();
    }
  }

  setLoad(): void {
    this.load = {
      salesman_id: 0,
      total_orders: 0,
      total_gross_amount: 0,
      total_trade_offer: 0,
      total_trade_discount: 0,
      total_special_discount: 0,
      total_booker_discount: 0,
      total_loyalty_discount: 0,
      total_tax_amount: 0,
      total_recovery_amount: 0,
      total_net_sale: 0,
      total_products: 0,
      total_focs: 0,
      distributor_id: 0,
      total_sub_loads: 0,
      processed_date: '',
      content: [],
    };
  }

  setCurrentLoad(ldNumber: number): void {
    this.currentLoadContent = {
      loadNumber: ldNumber,
      order_ids: [],
      total_products: 0,
      total_focs:0,
      total_orders: 0,
      items: [],
    };
  }

  closeSideBarEvent(value: any) {
    this.stockAllocation = null;
    this.getDispatchDetails();
  }

  tabChanged(): void {
    switch (this.currentTab) {
      case 1:
        this.stockAllocation = null;
        this.savingOrder = true;
        this.selectedRetailer = JSON.parse(JSON.stringify(null));
        this.orderDetails.items = [];
        this.getDispatchDetails();
        break;
      case 2:
        this.onTabTwo();
        break;
      case 3:
        this.dispatchOrderDetail = null;
        // this.getDispatchDetails();
        this.getDispatchOrdersDetail();
        this.orderService.setLoadRetaillersRecovery(true);
        // this.getCreditTabData();
        break;
      case 4:
        {
          this.setDataForLoad();
          console.log('tab -> ', this.currentTab);
        }
        break;

      default:
        break;
    }
  }

  onTabTwo(): void {
    this.tabLoading = true;
    this.getProducts();
    this.savingOrder = true;
    this.selectedRetailer = JSON.parse(JSON.stringify(null));
    this.orderDetails.items = [];
    this.getDispatchDetails();
    this.tabLoading = false;
  }

  getCreditTabData() {
    this.loading = true;
    this.orderService.getCreditdatailsData(this.assignmentId).subscribe((x) => {
      this.retailer_credit_Invoices = [];
      this.retailer_credit_Invoices = set_retailer_credit_Invoices_data(
        x.data,
        this.retailer_credit_Invoices
      );
      this.loading = false;
    });
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  getDispatchDetails(): void {
    this.loading = true;
    this.savingOrder = false;
    this.showFinalLoad = false;
    this.orderService
      .getDispatchDetailBySalemanAndDate(
        this.salemanId,
        this.assignmentId,
        this.orderDate
      )
      .subscribe(
        (res) => {
          this.loading = false;
          if (res.status === 200) {
            if (res.data.allocated_stock) {
              const allocation = res.data.allocated_stock.sort(
                (a, b) =>
                  parseFloat(b.current_load_booked_qty) -
                  parseFloat(b.current_load_booked_qty)
              );

              this.stockAllocation = allocation.map((x) => ({
                ...x,
                updateLoading: false,
                cancelLoading: false,
              }));
            }
            if (res.data.loadSheet) {
              this.finalLoad = res.data.loadSheetData;
              this.currentTab = 5;
              setTimeout(() => {
                this.showFinalLoad = true;
              }, 500);
            } 
            else {
              this.ordersRetailers = res.data.retailers.map((ret) => {
                this.employeeId = ret.employee_id;
                ret.isActive = false;
                return ret;
              });
              this.orderService.setOrderRetailers([...this.ordersRetailers]);
              this.getLoyaltyofferData(this.employeeId);
            }
          }
        },
        (error) => {
          this.loading = false;
          if (error.status !== 1 && error.status !== 401) {
            console.log('Error while getting orders data :>> ', error.message);
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch Orders. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }

  getLoyaltyofferData(employee_id:number): void {
    if(this.loyaltyoffers == null){

      this.orderService.getLoyaltyoffers(employee_id).subscribe(
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
  }

  getDispatchOrdersDetail(): void {
    if (!this.dispatchOrderDetail || !this.dispatchOrderDetail.summary) {
      this.loading = true;
      this.orderService
        .getDispatchOrdersDetail(
          this.salemanId,
          this.orderDate,
          this.assignmentId
        )
        .subscribe(
          (res) => {
            this.loading = false;
            if (res.status === 200) {
              this.dispatchOrderDetail = res.data;
              this.dispatchOrderDetail.orders =
                this.dispatchOrderDetail.orders.map((order) => {
                  order.isAdded = false;
                  const isInCredit = this.credits.find(
                    (x) => x.order_id === order.id && x.recovery > 0
                  );
                  if (isInCredit) {
                    order.isAdded = true;
                  }
                  const { retailer_id } = order;
                  this.credits.push({
                    recovery: 0,
                    order_id: order.id,
                    retailer_id,
                    dispatched_bill_amount: order.order_total,
                  });
                  return order;
                });
              //   this.recoveryRetailers = [];
              //   this.dispatchOrderDetail.orders.forEach((order) => {
              //     const ord = this.recoveryRetailers.find(
              //       (x) => x.retailer_id === order.retailer_id
              //     );
              //     if (!ord) {
              //       this.recoveryRetailers.push(order);
              //     }
              //   });
              if (this.currentTab === 4) {
                this.setDataForLoad();
              }
            }
          },
          (error) => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
              console.log(
                'Error while getting orders data :>> ',
                error.message
              );
              const toast: Toaster = {
                type: 'error',
                message: 'Cannot fetch Orders. Please try again',
                title: 'Error:',
              };
              this.toastService.showToaster(toast);
            }
          }
        );
    }
  }

  setDataForLoad(): void {
    if (!this.dispatchOrderDetail?.orders) {
      this.getDispatchOrdersDetail();
    } else {
      this.remainingOrders = JSON.parse(
        JSON.stringify(this.dispatchOrderDetail?.orders)
      );
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  getProducts(loaddispatch:boolean=true): void {
    this.loadingProduct = true;
    this.orderService.getCounterSaleData(this.assignmentId).subscribe(
      (res) => {
        this.loadingProduct = false;
        if (res.status === 200) {
          this.inventory = res.data.inventory;
          this.specialDiscounts = res.data.special_discount;
          if(loaddispatch){
            this.getDispatchDetails(); 
          }
          
        }
      },
      (error) => {
        this.loadingProduct = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error while getting products data :>> ', error.message);
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Products. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getSchemes(): void {
    this.orderService.getSchemes().subscribe(
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

  getOrderDetailsByRetailer(retailer: any): void {
    this.taxClasses = []; 
    if (this.selectedRetailer?.iorderDetailsd !== retailer.id) {
      this.savingOrder = true;
      this.newProduct = null;
      this.selectedRetailer = JSON.parse(JSON.stringify(retailer));
      this.getProducts(false);
      this.orderService.getOrderDetails(retailer.id, this.assignmentId).subscribe(
          (res) => {
            this.savingOrder = false;
            if (res.status === 200) {
              this.orderDetails = res.data;
              this.orderDetails.items = this.orderDetails.items.map((prod) => {
                const product                     =     this.inventory.find(x => x.item_id === prod.item_id);
                prod.parent_quantity              =     JSON.parse(JSON.stringify(product.quantity));
                prod.parent_unit_id               =     JSON.parse(JSON.stringify(product.parent_unit_id));
                prod.sub_inventory_quantity       =     JSON.parse(JSON.stringify(product.sub_inventory_quantity));
                prod.child                        =     JSON.parse(JSON.stringify(product.child));
                prod.tax_class_amount             =     JSON.parse(JSON.stringify(product.tax_class_amount));
                prod.tax_class_type               =     JSON.parse(JSON.stringify(product.tax_class_type));
                prod.brand_id                     =     JSON.parse(JSON.stringify(product.brand_id));
                prod.unit_name                    =     JSON.parse(JSON.stringify(product.unit_name));
                prod.is_active                    =     JSON.parse(JSON.stringify(product.is_active));
                prod.original_price               =     JSON.parse(JSON.stringify(prod.original_price));
                prod.item_trade_price             =     JSON.parse(JSON.stringify(prod.original_price));
                prod.extra_discount               =     JSON.parse(JSON.stringify(prod.booker_discount));
                prod.stockQty                     =     JSON.parse(JSON.stringify(prod.dispatch_qty));
                prod.net_amount                   =     JSON.parse(JSON.stringify(prod.final_price));
                prod.extra_discount_pkr           =     prod.stockQty * prod.extra_discount;
                prod.original_amount              =     prod.item_trade_price * prod.stockQty;
                prod.special_discount_pkr         =     prod.special_discount;
                prod.trade_discount               =     JSON.parse(JSON.stringify(prod.merchant_discount));
                prod.trade_discount_pkr           =     JSON.parse(JSON.stringify(prod.merchant_discount_pkr));

          
                prod.selectedScheme               =     this.schemes.find((scheme) => scheme.id === prod.scheme_id);

               

                prod.scheme_id                    =     JSON.parse(JSON.stringify(prod.scheme_id));

                prod.scheme_type                  =     JSON.parse(JSON.stringify(prod.scheme_type));
                prod.scheme_rule                  =     JSON.parse(JSON.stringify(prod.scheme_rule));
                prod.scheme_bundle_interval       =     JSON.parse(JSON.stringify(prod.scheme_bundle_interval));
                prod.scheme_min_quantity          =     JSON.parse(JSON.stringify(prod.scheme_min_quantity));
                prod.scheme_quantity_free         =     JSON.parse(JSON.stringify(prod.scheme_quantity_free));
                prod.scheme_discount_type         =     JSON.parse(JSON.stringify(prod.scheme_discount_type));
                prod.scheme_discount              =     JSON.parse(JSON.stringify(prod.scheme_discount));
                prod.gift_value                   =     JSON.parse(JSON.stringify(prod.gift_value));
                prod.loyalty_offer_id             =     JSON.parse(JSON.stringify(prod.loyalty_offer_id));
                prod.loyalty_offer_type           =     JSON.parse(JSON.stringify(prod.loyalty_offer_type));
                prod.loyalty_offer_discount_type  =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount_type));
                prod.loyalty_offer_discount       =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount));
                prod.loyalty_offer_discount_pkr   =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount_pkr));
                prod.slab_id                      =     JSON.parse(JSON.stringify(prod.slab_id));
                prod.slab_type                    =     JSON.parse(JSON.stringify(prod.slab_type));
                prod.slab_discount_type           =     JSON.parse(JSON.stringify(prod.slab_discount_type));
                prod.merchant_discount            =     JSON.parse(JSON.stringify(prod.merchant_discount));
                prod.merchant_discount_pkr        =     JSON.parse(JSON.stringify(prod.merchant_discount_pkr));
                prod.special_discount             =     JSON.parse(JSON.stringify(prod.special_discount));
                prod.booker_discount              =     JSON.parse(JSON.stringify(prod.booker_discount));
        //debugger
                
                return prod;
              });
              console.log("orderDetails.items",this.orderDetails.items)
            }
          },
          (error) => {
            this.savingOrder = false;
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
              console.log(
                'Error while getting order detail data :>> ',
                error.message
              );
              const toast: Toaster = {
                type: 'error',
                message: 'Cannot fetch Order Detail. Please try again',
                title: 'Error:',
              };
              this.toastService.showToaster(toast);
            }
          }
        ); 
      this.getDiscountSlabs();
    }
    this.getDispatchDetails();
  }

  addNewProductToOrder(product: any): void {
    this.newProduct = product;
  }

  

  getTaxclasses(province_id=0): void {
    this.orderService.getTaxClasses(province_id).subscribe(
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
    //
    
    this.getTaxclasses(this.selectedRetailer.province_id);
    if (!this.discountSlabs.length) {
      this.orderService.getDiscountSlabs().subscribe(
        (res) => {
          if (res.status === 200) {
            this.discountSlabs = res.data;
            this.setMerchantDiscount();
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            console.log(
              'Error while getting order detail data :>> ',
              error.message
            );
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch Merchant Discounts. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
    } else {
      this.setMerchantDiscount();
    }
  }

  setMerchantDiscount(): void {
    this.merchantDiscount = this.discountSlabs.find(
      (x) =>
        x.region_id === this.selectedRetailer.region_id 
        &&
        this.selectedRetailer.segment_id === x.segment_id &&
        x.channel_id === this.selectedRetailer.retailer_type_id
    );
  }

  openProductsList(): void {
    this.showProducts = true;
    document.body.classList.add('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.add('d-block');
    document.getElementById('order-contaienr').classList.add('blur-div');
  }

  closeNewProducts(): void {
    this.showProducts = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document.getElementById('order-contaienr').classList.remove('blur-div');
    this.getProducts();
  }

  saveOrder(): void {
    this.savingOrder = true;
    this.orderService.saveDispatchQuantityOrder(this.orderDetails).subscribe(
      (res) => {
        this.newProduct = null;
        this.savingOrder = false;
        if (res.status === 200) {
          this.toastService.showToaster({
            message: `Order for ${(
              this.selectedRetailer.retailer_name as string
            ).toUpperCase()} dispatched successfully!`,
            title: 'Order dispatched:',
            type: 'success',
          });
        }
        this.orderDetails.items = [];
        this.selectedRetailer.isActive = false;
        this.ordersRetailers.find(
          (x) => x.id === this.selectedRetailer.id
        ).isActive = false;
        this.selectedRetailer = JSON.parse(JSON.stringify(null));
      },
      (error) => {
        this.savingOrder = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error in Save Order for dispatch ::>> ', error);
          this.toastService.showToaster({
            message:
              'Something went wrong dispatch cannot be save at the moment!',
            title: 'Error:',
            type: 'error',
          });
        }
      }
    );
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
    if(this.selectedRetailer  && this.selectedRetailer.apply_retail_tax == 1 && tax_class_id > 0 ){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.tax_applied_on == 'net_price' ? 'net_price':'retail_price';
      }else{
        return 'retail_price';
      }
    }
    return 'retail_price';
  }

  getGstTaxAmount(tax_class_id):any{
    if(tax_class_id > 0){
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
    if(this.selectedRetailer &&  tax_class_id > 0){
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
  setOrderItems(): void {
    this.orderDetails.items   =   this.orderDetails.items.map((item) => {
      let free_qty            =   item.scheme_quantity_free ? +item.scheme_quantity_free : 0;
      let stockQty            =   +item.stockQty;
      let gross_sale_amount   =   item.original_price * stockQty
      let finalQty            =   stockQty+free_qty;

      let ttl_scheme_discount =   item.scheme_id && item.scheme_type == 'bundle_offer' ? (+item.scheme_discount * +item.scheme_bundle_interval): +(stockQty * item.scheme_discount) ;
      let ttl_trade_discount  =   +stockQty * item.trade_discount_pkr;
      let ttl_special_discount=   item.special_discount ? +stockQty * +item.special_discount:0;
      let ttl_extra_discount  =   +item.extra_discount_pkr ? +stockQty * +item.extra_discount : 0;
      let ttl_loyalty_discount=   item.loyalty_offer_discount_pkr ? +stockQty * +item.loyalty_offer_discount_pkr : 0;
      let total_discount      =   ttl_scheme_discount + ttl_trade_discount + ttl_special_discount + ttl_extra_discount + ttl_loyalty_discount;
      let final_price         =   gross_sale_amount - total_discount;                          
  
      
      let gst_tax             =   0;
      let adv_inc_tax         =   0;                           
      let tax_in_value        =   0;                          
      let total_tax_amount    =   0;

      if(this.selectedRetailer && item.tax_class_id > 0  && this.selectedRetailer.apply_retail_tax == 1){

        let tax_applied_value =  this.taxAppliedOn(item.tax_class_id) == 'net_price' ? +(final_price/finalQty):+item.item_retail_price;

        gst_tax               =  (this.getGstTaxAmount(item.tax_class_id)/ 100) * +tax_applied_value;
        adv_inc_tax           =  (this.getAdvIncTaxAmount(item.tax_class_id) / 100) * (+tax_applied_value + +gst_tax); 
        tax_in_value          =   gst_tax + adv_inc_tax;                          
        total_tax_amount      =   tax_in_value*finalQty;  
      }
      let ttl_amnt_aftr_tax   =   final_price + total_tax_amount; 
      const orderItem = {
        id: item.id || 0,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        brand_id: item.brand_id,
        item_id: item.item_id,
        item_name: item.item_name,
        pref_id: item.pref_id,
        employee_id: this.orderDetails.employee_id,
        item_quantity_booker: item.item_quantity_booker,
        item_quantity_updated: item.item_quantity_booker != finalQty ? finalQty : null ,
        quantity_returned: 0,
        original_price: item.original_price,
        scheme_id: item.scheme_id || 0,
        scheme_type : item.scheme_type,
        scheme_rule: item.scheme_rule,
        scheme_bundle_interval:item.scheme_bundle_interval || 0,
        scheme_min_quantity: item.scheme_min_quantity || 0,
        scheme_quantity_free: item.scheme_quantity_free || 0,
        scheme_discount_type: item.scheme_discount_type || 0,
        gift_value: item.gift_value || 0,
        loyalty_offer_id : item.loyalty_offer_id ? item.loyalty_offer_id :null,
        loyalty_offer_type : item.loyalty_offer_type ? item.loyalty_offer_type :null,
        loyalty_offer_discount_type: item.loyalty_offer_discount_type? item.loyalty_offer_discount_type :null,
        loyalty_offer_discount: item.loyalty_offer_discount? item.loyalty_offer_discount :null,
        loyalty_offer_discount_pkr : item.loyalty_offer_discount_pkr? item.loyalty_offer_discount_pkr :null,  
        scheme_discount: item.scheme_discount,
        unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
        slab_id: item.slab_id,
        slab_type: item.slab_type,
        slab_discount_type: item.slab_discount_type,
        merchant_discount: item.trade_discount,
        merchant_discount_pkr: item.trade_discount_pkr,
        unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
        special_discount: item.special_discount,
        unit_price_after_special_discount:item.unit_price_after_special_discount,
        booker_discount: item.extra_discount ? +item.extra_discount : 0,
        unit_price_after_individual_discount:item.unit_price_after_individual_discount,
        schemeitems:item.schemeitems ? item.schemeitems :null,
        parent_pref_id: item.child,
        parent_unit_id: item.parent_unit_id,
        parent_brand_id: item.brand_id,
        parent_tp: item.parent_trade_price,
        parent_qty_sold: finalQty/item.sub_inventory_quantity,
        parent_value_sold: final_price,
        final_price: final_price,
        campaign_id: item.selectedScheme?.id || 0,
        item_status: item.is_active,
        dispatch_status: 2,
        dispatch_qty: finalQty,
        dispatch_amount: final_price,
        reasoning: '',
        distributor_id: this.orderDetails.distributor_id,
        division_id: this.selectedRetailer.division_id || 0,
        region_id: this.orderDetails.region_id,
        area_id: this.orderDetails.area_id,
        assigned_route_id: this.orderDetails.assigned_route_id,
        territory_id: this.orderDetails.territory_id,
        booked_order_value: item.booked_order_value || 0,
        booked_total_qty: item.booked_total_qty || 0,
        is_deleted: item.isDeleted,
        quantity: finalQty,
        gross_sale_amount: gross_sale_amount,
        item_retail_price: item.item_retail_price,
        total_retail_price: item.item_retail_price * finalQty,
        tax_type: this.selectedRetailer.retailer_register == 1 ? 1:2,
        tax_class_id: item.tax_class_id,
        tax_applied_on: this.taxAppliedOn(item.tax_class_id),
        tax_in_percentage: this.getGstTaxAmount(item.tax_class_id),
        adv_inc_tax_in_percentage: this.getAdvIncTaxAmount(item.tax_class_id),
        gst_tax_amount :gst_tax,
        adv_inc_tax_amount :adv_inc_tax,
        tax_in_value: tax_in_value,
        total_tax_amount: total_tax_amount,
        total_amount_after_tax: ttl_amnt_aftr_tax,
        total_discount: total_discount, 
        order_id: this.orderDetails.id,
      };
      
      return orderItem;
    });
    this.saveOrder();
  }

  cancelOrder(delete_allocation=1): void {
    document.getElementById('close-del').click();
    this.savingOrder = true;
    this.orderService.cancelOrder(this.orderDetails.id,delete_allocation,1).subscribe(
      (res) => {
        this.savingOrder = false;
        if (res.status === 200) {
          this.toastService.showToaster({
            message: `Order for ${(
              this.selectedRetailer.retailer_name as string
            ).toUpperCase()} canceled!`,
            title: 'Order dispatched:',
            type: 'success',
          });
          this.orderDetails.items = [];
          this.ordersRetailers = this.ordersRetailers.filter(
            (x) => x.id !== this.selectedRetailer.id
          );
          this.selectedRetailer = null;
          this.getDispatchDetails();
        }
      },
      (error) => {
        this.savingOrder = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error in Save Order for dispatch ::>> ', error);
          this.toastService.showToaster({
            message:
              'Something went wrong order cannot be canceled at the moment!',
            title: 'Error:',
            type: 'error',
          });
        }
      }
    );
  }

  closeHoldOrderModal(event: Event):void{
    document.getElementById('close-hold-model').click();
  }

  holdOrder(event: Event):void{
    if(this.holdOrderParams.hold_reason.trim() != ''){
      document.getElementById('close-hold-model').click();
      this.savingOrder = true;
      this.holdOrderParams.order_id       = this.orderDetails.id;
      this.holdOrderParams.assignment_id  = this.orderDetails.assignment_id;
      // debugger
      // return;
      this.orderService.holdOrder(this.holdOrderParams,1).subscribe(
        (res) => {
          this.newProduct = null;
          this.savingOrder = false;
          if (res.status === 200) {
            this.toastService.showToaster({
              message: `Order for ${(
                this.selectedRetailer.retailer_name as string
              ).toUpperCase()} holded successfully!`,
              title: 'Order dispatched:',
              type: 'success',
            });
          }
          this.orderDetails.items = [];
          this.ordersRetailers = this.ordersRetailers.filter(
            (x) => x.id !== this.selectedRetailer.id
          );
          this.selectedRetailer = null;
          this.holdOrderParams.order_id = null;
          this.holdOrderParams.assignment_id = null;
          this.holdOrderParams.hold_reason = '';
          this.holdOrderParams.delete_allocation = false;
          this.getDispatchDetails();
        },
        (error) => {
          this.savingOrder = false;
          if (error.status !== 1 && error.status !== 401) {
            console.log('Error in hold Order for dispatch ::>> ', error);
            this.toastService.showToaster({
              message:
                'Something went wrong dispatch cannot be save at the moment!',
              title: 'Error:',
              type: 'error',
            });
          }
        }
      );
    }else{
        this.toastService.showToaster({
          message:'Please add reason!',
          title: 'Error:',
          type: 'error',
        });
    }

  }

  addOrderBill(index: number, isAdded: boolean): void {
    const retailer_credit_Invoices = this.retailer_credit_Invoices[index];
    if (!isAdded) {
      const parentOrderId = this.ordersRetailers.find(
        (x) => x.retailer_id === retailer_credit_Invoices.retailer_id
      ).id;
      const postModel = getRetailersCreditInvoice(
        retailer_credit_Invoices,
        parentOrderId,
        this.assignmentId
      );
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          console.log('postRetailersCreditInvoices => ', x.result);
          this.retailer_credit_Invoices[index].id = x.result.id;
          this.retailer_credit_Invoices[index].is_added = 1;
          const toast: Toaster = {
            type: 'success',
            message: 'Added Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    } else {
      const postModel = deleteRetailerCreditInvoice(
        retailer_credit_Invoices.id
      );
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          this.getCreditTabData();
          const toast: Toaster = {
            type: 'success',
            message: 'Remove Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    }

    // order.isAdded = true;
    // let payment = this.credits.find((x) => x.order_id === order.id);
    // if (payment) {
    //   payment.recovery = +order.recovery;
    // } else {
    //   payment = {
    //     recovery: +order.recovery,
    //     order_id: order.id,
    //     retailer_id: order.retailer_id,
    //     dispatched_bill_amount: order.order_total,
    //   };
    //   this.credits.push(payment);
    // }
  }

  removeOrderBill(order: any): void {
    order.isAdded = false;
    order.recovery = 0;
    // this.credits = this.credits.filter(ord => ord.order_id !== order.id);
  }

  searchByRetailer(): void {
    if (this.searchText) {
      this.ordersDispList = this.remainingOrders.filter((ret) =>
        ret.retailer_name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  openConfirmationModal(): void {
    if (this.currentLoadValidation()) {
      const unSelected = this.dispatchOrderDetail.orders.filter(
        (x) => !x.isSelected
      );
      if (this.load.content.length === 3 && unSelected.length !== 0) {
        this.toastService.showToaster({
          type: 'error',
          title: 'Select All Orders:',
          message: 'Some orders are not selected',
        });
        return;
      }
      if (this.load.content.length !== 3 && unSelected.length !== 0) {
        if (this.currentLoadContent.items.length) {
          document.getElementById('open-create-load').click();
        } else {
          this.toastService.showToaster({
            type: 'error',
            title: 'Select Orders:',
            message: 'Select orders to create load',
          });
        }
      } else {
        this.saveDispatch();
      }
    }
  }

  saveDispatch(): void {
    this.loading = true;
    let totalRecovery = 0;
    this.credits.map((x) => { totalRecovery = x.recovery + totalRecovery;});
    let totalfocs    = 0;
    this.load.content.map((x) => {totalfocs = +x.total_focs + +totalfocs;});
    let totalProducts = 0;
    this.load.content.map((x) => {totalProducts = +x.total_products + +totalProducts;}); 
    this.load.salesman_id = this.salemanId;
    this.load.total_orders = this.dispatchOrderDetail.orders.length;
    this.load.total_gross_amount =this.dispatchOrderDetail.summary.gross_total || 0;
    this.load.total_trade_offer = this.dispatchOrderDetail.summary.trade_offer || 0;
    this.load.total_trade_discount =this.dispatchOrderDetail.summary.trade_discount || 0;
    this.load.total_special_discount =this.dispatchOrderDetail.summary.special_discount || 0;
    this.load.total_booker_discount =this.dispatchOrderDetail.summary.booker_discount || 0;
    this.load.total_loyalty_discount =this.dispatchOrderDetail.summary.loyalty_discount || 0;
    this.load.total_tax_amount =this.dispatchOrderDetail.summary.total_tax || 0;
    this.load.total_recovery_amount = totalRecovery || 0;
    this.load.total_net_sale = this.dispatchOrderDetail.summary.total_price || 0;
    this.load.total_focs = +totalfocs;
    this.load.total_products = totalProducts;
    this.load.distributor_id = this.distributorId;
    this.load.total_sub_loads = this.load.content.length;
    this.load.processed_date = this.orderDate;
    this.load.assignmentId = this.assignmentId;
    this.load.content      =  this.dispatchService.parseLoads(this.load.content,this.stockAllocation);
    //allocate extra Qty to first  load items
    
    // //debugger 
    this.load.content = this.load.content.map((x) => {
      delete x.loadNumber;
      return x;
    });
    const order = { load: this.load, payments: this.credits };
    
    this.showFinalLoad = false;  

    
    this.orderService.saveDispatchOrder(order).subscribe(
      (res) => {
        if (res.status === 200) {
          this.finalLoad = res.data;
          setTimeout(() => {
            this.loading = false;
            this.showFinalLoad = true;
          }, 500);
          this.dispatchOrderDetail = null;
          this.ordersDispList = [];
          this.remainingOrders = [];
          this.isAllSelected = false;
          this.setLoad();
          this.setCurrentLoad(1);
          this.load.content.push(this.currentLoadContent);
          this.toastService.showToaster({
            type: 'success',
            message: 'Payments and Load saved successfully!',
            title: 'Payments and Load saved:',
          });
          this.currentTab = 5;
          this.tabChanged();
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message: 'Payments and Load not saved, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  currentLoadValidation(): boolean {
    if (!this.currentLoadContent.items.length) {
      this.toastService.showToaster({
        title: 'Load Error:',
        message: 'Please select orders to add into current load',
        type: 'error',
      });
      return false;
    }
    return true;
  }

  changeCurrentLoad(ldNumber: number): void {
    if (this.currentLoadValidation()) {
      this.remainingOrders = this.dispatchOrderDetail.orders.filter(
        (x) => !x.isSelected
      );
      this.currentLoadContent = this.load.content.find(
        (x) => x.loadNumber === ldNumber
      );
      const orders = this.dispatchOrderDetail?.orders.filter((x) => {
        if (this.currentLoadContent.order_ids.includes(x.id)) {
          x.isSelected = true;
          return x;
        }
      });
      if (orders.length) {
        this.remainingOrders = [...orders, ...this.remainingOrders];
      }
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  updateDispatchedQty(item: any): void {
    if (+item.issued_qty > 1000) {
      item.issued_qty = 0;
    }
    item.dispatched_qty = +item.issued_qty + item.actual_qty;
  }

  allSelected(): void {
    if (this.isAllSelected) {
      this.remainingOrders = this.remainingOrders.map((order) => {
        order.isSelected = true;
        return order;
      });
      this.setAllOrdersToCurrentLoad();
    } else {
      this.remainingOrders = this.remainingOrders.map((order) => {
        order.isSelected = false;
        return order;
      });
      this.removeAllOrdersFromCurrentLoad();
    }
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
  }

  setAllOrdersToCurrentLoad(): void {
    this.currentLoadContent.items = [];
    this.remainingOrders.forEach((order) => {
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = true;
          }
          return x;
        }
      );
      this.currentLoadContent = this.dispatchService.setLoadContent(
        order,
        this.currentLoadContent
      );
      //debugger
    });
    //It will return only where actual qty or issue qty should be greater than zero
     
      this.currentLoadContent = this.dispatchService.setActiveLoadContent(this.currentLoadContent,this.stockAllocation,this.dispatchOrderDetail);
    
  }

  retailerSelected(order: any): void {
    if (order.isSelected) {
      this.currentLoadContent = this.dispatchService.setLoadContent(
        order,
        this.currentLoadContent
      );
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = true;
          } 
          return x;
        }
      );
    } else {
      this.isAllSelected = false;
      this.currentLoadContent = this.dispatchService.removeOrderFromCurrentLoad(
        order,
        this.currentLoadContent
      );
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = false;
          }
          return x;
        }
      );
    }
    this.remainingOrders = this.remainingOrders.map((x) => {
      if (x.id === order.id) {
        x.isSelected = order.isSelected;
      }
      return x;
    });
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    //It will return only where actual qty or issue qty should be greater than zero 
    this.currentLoadContent = this.dispatchService.setActiveLoadContent(this.currentLoadContent,this.stockAllocation,this.dispatchOrderDetail);
    
  }

  getItemName(itemId: number): string {
    const item = this.inventory.find((x) => x.item_id === itemId);
    return item.item_name;
  }
  getItemSKU(itemId: number): string {
    const item = this.inventory.find((x) => x.item_id === itemId);
    return item.item_sku;
  }

  addCurrentLoad(): void {
    this.remainingOrders = this.remainingOrders.filter(
      (x) =>
        !(this.currentLoadContent.order_ids as Array<number>).includes(x.id)
    );
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    this.setCurrentLoad(this.load.content.length + 1);
    this.load.content.push(this.currentLoadContent);
    if (this.currentLoadContent.loadNumber === 3) {
      this.isAllSelected = true;
      this.allSelected();
    }
    document.getElementById('close-confirm-load').click();
  }

  removeAllOrdersFromCurrentLoad(): void {
    this.currentLoadContent.items = [];
    this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
      (x) => {
        if (this.currentLoadContent.order_ids.includes(x.id)) {
          x.isSelected = false;
        }
        return x;
      }
    );
    this.currentLoadContent.order_ids       = [];
    this.currentLoadContent.total_orders    = 0;
    this.currentLoadContent.total_focs      = 0;
    this.currentLoadContent.total_products  = 0;
  }

  completeDispatch(): void {
    this.loading = true;
    this.orderService.completeOrderDispatch(this.finalLoad.load_id).subscribe(
      (res) => {
        this.loading = false;
        this.toastService.showToaster({
          type: 'success',
          message: 'Order dispatch completed successfully!',
          title: 'Order Dipatched Completed:',
        });
        this.router.navigateByUrl('/orders/dispatch-orders');
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message:
              'Order Dispatch cannot be completed at the moment, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  revertDispatch(): void {
    this.loading = true;
    this.orderService.revertOrderDispatch(this.finalLoad.load_id).subscribe(
      (res) => {
        this.loading = false;
        this.toastService.showToaster({
          type: 'success',
          message: 'Order dispatch reverted successfully!',
          title: 'Dipatch Reverted:',
        });
        this.currentTab = 1;
        this.credits = [];
        this.dispatchOrderDetail = null;
        this.ordersDispList = [];
        this.isAllSelected = false;
        this.tabChanged();
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message:
              'Revert cannot be completed at the moment, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  getBookingSheet(): void {
    const sheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}?emp=${this.salemanId}&date=${this.orderDate}&loadId=${this.finalLoad.load_id}`;
    window.open(sheetUrl);
  }

  getBills(size: string = 'A4'): void {
    if (this.invoiceDate) {
      this.orderService
        .updateDispatchInvoiceDate(this.finalLoad.load_id, this.invoiceDate)
        .subscribe(
          (res) => {
            if (res.status === 200) {
              document.getElementById('close-bills').click();
              const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.salemanId}&date=${this.orderDate}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.finalLoad.load_id}`;
              window.open(billsUrl);
            } else {
              this.toastService.showToaster({
                type: 'error',
                message:
                  'Bill cannot be generated at the moment, please try again later!',
                title: 'Bill cannot be generated:',
              });
            }
          },
          (error) => {
            if (error.status !== 1 && error.status !== 401) {
              this.toastService.showToaster({
                type: 'error',
                message:
                  'Bill cannot be generated at the moment, please try again later!',
                title: 'Bill cannot be generated:',
              });
            }
          }
        );
    } else {
      this.toastService.showToaster({
        type: 'error',
        message: 'Please select invoice date to generate bill(s)!',
        title: 'Please select invoice date:',
      });
    }
  }

  generateLSPDF(): void {
    const billsUrl = `${environment.apiDomain}${API_URLS.LS_PDF}/${this.finalLoad.load_id}/${this.salemanId}/${this.orderDate}`;
    window.open(billsUrl);
  }
}
