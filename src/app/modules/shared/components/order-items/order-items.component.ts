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
import { debug } from 'console';

@Component({
  selector: 'app-order-items-list',
  templateUrl: 'order-items.component.html',
  styleUrls: ['./order-items.component.css'],
})
export class OrderItemsListComponent implements OnInit, OnChanges{
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
  @Input() discountSlabs: any; 
  @Input() taxClasses: any; 
  @Input() schemes: any;
  @Input() loyaltyoffers:Array<any>;
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
  totalloyaltyDiscount: number;
  totalSpecialDiscount: number;
  totalMerchantDiscount: number;
  totalRetailPrice:number;
  selectedProductQuantities: number;
  selecteddeleteSchemes: any;
  totalTax: number;
  gst_tax: number;
  adv_inc_tax: number;
  item_id : string;
  pre_discount:any;

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
    this.orderDetail.orderType  = this.orderType;
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
    this.gst_tax = 0;
    this.adv_inc_tax = 0;
    this.netAmount = 0;
    this.grossAmount = 0;
    this.totalBookerDiscount = 0;
    this.totalSchemeDiscount = 0;
    this.totalloyaltyDiscount=0;
    this.totalSpecialDiscount = 0;
    this.totalMerchantDiscount = 0;
    this.totalRetailPrice=0;
    this.selectedProductQuantities = 0;
    this.selecteddeleteSchemes = null;
    this.pre_discount = [];
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
  confirmDelete(selecteditem:any): void{
    this.selecteddeleteSchemes =  this.orderDetail.scheme_items ? JSON.parse(JSON.stringify(this.orderDetail.scheme_items?.filter(x=>(x.item_id == selecteditem.item_id)))) : null;
    this.selectedItem          =  selecteditem;
  }

  deleteProduct(deleteType:number=null): void {
    if (this.selectedItem.productType === 'returned') {
      this.deleteReturned.emit(this.selectedItem);
    } 
    else 
    {
      //remove appliedn scheme except loyality scheme
      if(deleteType && deleteType == 1){
        this.orderDetail.items = this.dataService.deleteSchemeformItems(this.selectedItem,this.orderDetail.items,this.selecteddeleteSchemes);
      }
      if (this.selectedItem.id) {
        this.selectedItem.stockQty = 0;
        this.selectedItem.trade_discount = 0;
        this.selectedItem.merchant_discount = 0;
        this.selectedItem.trade_discount_pkr = 0; 
        this.selectedItem.merchant_discount_pkr = 0;
        this.setQuantity(this.selectedItem); 
        this.selectedItem.isDeleted = true;
      } 
      else {

        if(this.selectedItem.selectedScheme.scheme_type == 'mix_match'){
          if(this.selectedItem.selectedScheme){
            const selectedScheme  = this.selectedItem.selectedScheme;
            const other_items     = new Set( this.selectedItem.selectedScheme.items.filter(x => x.item_id != this.selectedItem.item_id) .map(x => x.item_id));
            const firstItemId     = [...other_items][0]; 
            // Find the firstItemId item in the updated selectedProducts and assign selectedScheme
            const firstItemIndex  = this.orderDetail.items.findIndex(item => item.item_id === firstItemId);
            if (firstItemIndex !== -1) {
                this.orderDetail.items[firstItemIndex] = { ...this.orderDetail.items[firstItemIndex],selectedScheme: this.selectedItem.selectedScheme};
                let product                 = this.orderDetail.items[firstItemIndex];
                this.selectedRetailer.items = this.orderDetail.items;
                this.orderDetail.items      =   this.dataService.applyMixMatchProductsScheme(product, this.orderDetail, this.taxClasses);
            }
            
          }
        }


        this.orderDetail.items = this.orderDetail.items.filter(
          (x) => x.item_id !== this.selectedItem.item_id
        );

        this.orderDetail.items = this.dataService.updateOrderitemscalculation(this.orderDetail.items,this.orderDetail,this.taxClasses);
      if(this.selectedItem.selectedScheme && (this.selectedItem.selectedScheme.scheme_type == 'bundle_offer' || this.selectedItem.selectedScheme.scheme_type == 'mix_match')){
        if(this.selectedItem.selectedScheme.scheme_type == 'mix_match')
        this.orderDetail.items   = this.dataService.applyMixMatchProductsScheme(this.selectedItem,this.orderDetail,this.taxClasses);
        else
        this.orderDetail.items   = this.dataService.applyBundleProductsScheme(this.selectedItem,this.orderDetail,this.taxClasses);
      }else{
        this.orderDetail.items.forEach((item, index) => {
          if (item.selectedScheme) {
            if (item.selectedScheme.scheme_type === 'bundle_offer') {
              this.orderDetail.items =  this.dataService.applyBundleProductsScheme(item, this.orderDetail, this.taxClasses);
            }
            if (item.selectedScheme.scheme_type === 'mix_match') {
              this.orderDetail.items =   this.dataService.applyMixMatchProductsScheme(item, this.orderDetail, this.taxClasses);
            }
          }
        });
      }
      

      //Apply slab on all products
      
      this.orderDetail.items       =  this.dataService.applySlabDiscountValuesToItems(this.orderDetail.items,this.discountSlabs,this.orderDetail,this.taxClasses)   

      //Apply Loyal offer discount
      this.orderDetail             =  this.dataService.applyLoyaltyOfferDiscount(this.orderDetail,this.loyaltyoffers,this.taxClasses); 
      
      //update Scheme Free Products to scheme Items
      this.orderDetail.items       =  this.dataService.updateSchemeFreeProductItems(this.orderDetail,this.allProducts,this.taxClasses);
      

      }
      this.productUpdated.emit();
      document.getElementById('close-prod-del').click();
      if(deleteType && deleteType == 1){
        const toast: Toaster = {
          message:
            'Schemes are removed!',
          type: 'success',
          title: 'Schemes:',
        };
        this.toastService.showToaster(toast);
      }
    }
  }

  setQuantity(product: any): void {  
    //
    // const foundProd = this.stockAllocation.find(
    //   (x) => x.item_id === product.item_id
    // );
    // if (+product.stockQty > foundProd.current_load_allocated_qty) {
    //   product.stockQty = foundProd.current_load_allocated_qty;
    // } 
    this.orderDetail.orderType  = this.orderType;
    if (this.orderType === 'execution') {
      product.executed_qty  = product.executed_qty ? +product.executed_qty:0;
      product.booked_foc    = product.booked_foc ? +product.booked_foc:0;
      const prod = this.allProducts.find((x) => x.item_id == product.item_id);
      if (
        (product.id && +product.stockQty > (+prod.extra_qty + +product.executed_qty + +product.booked_foc)) 
        ||
        (!product.id && +product.stockQty > (+prod.extra_qty + +product.booked_foc))
        ) 
        {
        const toast: Toaster = {
          message:
            'Executed quantity cannot be greater than available quantity!',
          type: 'error',
          title: 'Quantity Error:',
        };
        this.toastService.showToaster(toast); 
        product.stockQty = 0;
      }
    }else{
      if (+product.stockQty > (+product.quantity + +product.extra_qty + +product.booked_foc)) {
        product.stockQty = product.quantity + product.extra_qty;
      }
  
      if(product.current_load_allocated_qty < (product.stockQty + product.scheme_quantity_free)){
        product.stockQty = product.current_load_allocated_qty - product.scheme_quantity_free;
      }
    }
    
    if (product.item_trade_price) {
      if (this.orderType !== 'execution' && product.item_quantity_booker > 0 && +product.stockQty === 0) {
        product.isDeleted = true;
      } 
      else if (this.orderType === 'execution' && product.dispatch_qty > 0 && +product.stockQty === 0) {
        product.isDeleted = true;
      } 
      else{
        product.isDeleted = false;
      }
      product.qtyAdded = true;
     
       this.calculateProductDiscounts(product);
      

      this.orderDetail.items     = this.dataService.updateOrderitemscalculation(this.orderDetail.items,this.orderDetail,this.taxClasses);
      if(product.selectedScheme && (product.selectedScheme.scheme_type == 'bundle_offer'  || product.selectedScheme.scheme_type == 'mix_match')){
        if(product.selectedScheme.scheme_type == 'mix_match')
        this.orderDetail.items   = this.dataService.applyMixMatchProductsScheme(product,this.orderDetail,this.taxClasses);
        else
        this.orderDetail.items   = this.dataService.applyBundleProductsScheme(product,this.orderDetail,this.taxClasses);
      }else{
        this.orderDetail.items.forEach((item, index) => { 
          if (item.selectedScheme) {
            if (item.selectedScheme.scheme_type === 'bundle_offer') {
              this.orderDetail.items =  this.dataService.applyBundleProductsScheme(item, this.orderDetail, this.taxClasses);
            }
            if (item.selectedScheme.scheme_type === 'mix_match') {
              this.orderDetail.items =   this.dataService.applyMixMatchProductsScheme(item, this.orderDetail, this.taxClasses);
            }
          }
        });
      }
      

      //Apply slab on all products
     
      this.orderDetail.items       =  this.dataService.applySlabDiscountValuesToItems(this.orderDetail.items,this.discountSlabs,this.orderDetail,this.taxClasses)   

      //update special discount
      if( this.selectedRetailer.segment_id && +this.selectedRetailer.segment_id > 0 ){
        this.orderDetail.segment_id  = this.selectedRetailer.segment_id;
      }
      if( this.selectedRetailer.region_id && +this.selectedRetailer.region_id > 0 ){
        this.orderDetail.region_id  = this.selectedRetailer.region_id;
      } 

      this.orderDetail.items       =  this.dataService.applySpecialDiscount(this.orderDetail,this.specialDiscounts,this.taxClasses);
      
      //Apply Loyal offer discount
      this.orderDetail             =  this.dataService.applyLoyaltyOfferDiscount(this.orderDetail,this.loyaltyoffers,this.taxClasses); 
      
      //update Scheme Free Products to scheme Items
      this.orderDetail.items       =  this.dataService.updateSchemeFreeProductItems(this.orderDetail,this.allProducts,this.taxClasses);
      
      this.calculateTotalBill(); 
      this.productUpdated.emit();
      setTimeout(()=>{       
        if(document.getElementById(product.item_id)){ 
          (document.getElementById(product.item_id) as HTMLInputElement).focus();
        }
      },30); 
      
      if(this.orderDetail.FOCA_error){
        this.toastService.showToaster({
          title: 'Warning:',
          message:`FOC quantity is changed!`,
          type: 'success',
        });
      }  
  
    }
  } 

  setReturnedQty(product: any): void {
    const productAvalableQty = this.allProducts.find((x) => x.item_id === product.item_id)?.extra_qty;
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
    product.total_retail_price = -(product.item_retail_price * product.stockQty);
    if (product.extra_discount) {
      product.booker_discount = +product.extra_discount;
      product.unit_price_after_individual_discount = product.item_trade_price - product.booker_discount;
    }
    product.net_amount = -( product.unit_price_after_individual_discount * product.stockQty );
    this.productUpdated.emit();
  }

  setExtraDiscount(product: any): void {
     
    if (product.stockQty) {
        product.booker_discount     = +product.extra_discount;
        product.booker_discount_pkr =  product.booker_discount;
        product.unit_price_after_individual_discount = product.item_trade_price - product.booker_discount;
    }

    if( (!product.extra_discount.endsWith(".")  && !product.extra_discount.includes(".0") )){ 

      

      //Apply Loyal offer discount
      this.orderDetail             =  this.dataService.applyLoyaltyOfferDiscount(this.orderDetail,this.loyaltyoffers,this.taxClasses); 
        
      //update Scheme Free Products to scheme Items
      this.orderDetail.items       =  this.dataService.updateSchemeFreeProductItems(this.orderDetail,this.allProducts,this.taxClasses);
      
      this.calculateTotalBill(); 
      this.productUpdated.emit();

    

      setTimeout(()=>{       
        if(document.getElementById("extra-"+product.item_id)){ 
          (document.getElementById("extra-"+product.item_id) as HTMLInputElement).focus();
        }
      },30); 
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

  applySpecialDiscountOnAllProducts(): void { 
    if (
      this.merchantDiscount &&
      this.merchantDiscount.discount_filter === 'slab'
    ) {
      this.orderDetail.items = this.orderDetail.items.map((product) => {
        product = this.calculateProductSpecialDiscount(product); 
        if (product.extra_discount) {
          product.price =
            product.unit_price_after_special_discount - +product.extra_discount;
        }
        return product;
      });
      this.calculateTotalBill();
    }
  }

  calculateProductPrice(product): void { 
    product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty,product.item_trade_price);
    product.gross_amount    = product.unit_price_after_scheme_discount * +product.stockQty;
  }

  calculateProductDiscounts(product: any, scheme?: any): void {
    // Trade Offer
    product.scheme_quantity_free= 0; 
    product.scheme_free_items   = [];
    if (scheme) {
      product.selectedScheme = scheme;
    }
    if (product.selectedScheme) {
      product = this.applyScheme(product);
    } else {
      product.scheme_discount                   =   0;
      product.price                             =   JSON.parse(JSON.stringify(product.item_trade_price));
      product.unit_price_after_scheme_discount  =   JSON.parse(JSON.stringify(product.item_trade_price));
    }


    // Trade Discount
    // if (this.merchantDiscount) {
    //   product = this.dataService.applyMerchantDiscountForSingleProduct(
    //     this.merchantDiscount,
    //     product,
    //     this.grossAmount
    //   );
    // } 
    
    
    if (this.discountSlabs) {
    
      product = this.dataService.applySlabDiscountToSingleItem(product,this.selectedRetailer,this.discountSlabs);
      product = JSON.parse(JSON.stringify(product))
      
      if(product.slab_id){ 
       
      }else{
        product.slab_id=0;
        product.slab_type=0;
        product.slab_discount_type = '0';
        product.trade_discount = 0;
        product.trade_discount_pkr = 0;
        product.unit_price_after_merchant_discount = 123;//JSON.parse(JSON.stringify(product.price));
      }
      
    }
    else {
      product.trade_discount = 0;
      product.trade_discount_pkr = 0;
      product.unit_price_after_merchant_discount = JSON.parse(
        JSON.stringify(product.price)
      );
    }
    //console.log(this.orderDetail);
    
    // Special Discount
    product = this.calculateProductSpecialDiscount(product);

    
  
  }

  calculateProductSpecialDiscount(product: any): any {
     //this.selectedRetailer.segment_id
      // this.selectedRetailer.region_id
      // product
      // this.specialDiscounts
    return this.dataService.getSpecialDiscounts(
      this.selectedRetailer.segment_id,
      this.selectedRetailer.region_id,
      product,
      this.specialDiscounts
    );
  }

  calculateExtraDiscount(product: any): void {
     
    if (+product.extra_discount < product.unit_price_after_special_discount) {
      product.price = product.unit_price_after_special_discount - +product.extra_discount;
      product.extra_discount_pkr = +product.stockQty * +product.extra_discount;
    } else {
      product.extra_discount = 0;
      product.extra_discount_pkr = 0;
      const toast: Toaster = {
        type: 'error',
        message: 'Discount should not be greater than item price!',
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    }
    let pass_discount = false;
    console.log(this.pre_discount);
    if(this.pre_discount && this.pre_discount.some(x=>x.item_id == product.item_id) && !product.extra_discount.endsWith(".")){
     let discountResult = this.pre_discount.find(x=>x.item_id == product.item_id);
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
      product.extra_discount       =  +product.extra_discount;
  
      product.extra_discount = +product.extra_discount.toFixed(2); 
      //Apply Loyal offer discount
      this.orderDetail             =  this.dataService.applyLoyaltyOfferDiscount(this.orderDetail,this.loyaltyoffers,this.taxClasses); 
      //update Scheme Free Products to scheme Items
      this.orderDetail.items       =  this.dataService.updateSchemeFreeProductItems(this.orderDetail,this.allProducts,this.taxClasses); 
      this.calculateTotalBill(); 
      this.productUpdated.emit();
      setTimeout(()=>{       
        if(document.getElementById('extraDiscount-'+product.item_id)){
          (document.getElementById('extraDiscount-'+product.item_id) as HTMLInputElement).focus(); 
        }
      },30);
    }
  }

  

  calculateProductTax(product: any): void {
    if (product.tax_class_amount) {
      product.tax_amount_value = (product.tax_class_amount / 100) * product.item_retail_price;
      product.tax_amount_pkr = product.tax_amount_value * product.stockQty;
      product.total_amount_after_tax = product.net_amount + product.tax_amount_pkr;
    } else {
      product.tax_amount_value = 0;
      product.tax_amount_pkr = 0;
    }
  }

  applyScheme(product: any): any {
    product.selectedScheme.scheme_type
    
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
     case 'mix_match': //it will be applied on after item added to order details because it depends on multiple items
            break;       
      default:
        product   = this.dataService.getSDForGift(product);
        break;
    }
    return product;
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
    

    this.selectedProductQuantities  =    this.dataService.orderParentQtySold(this.orderDetail.items);

    this.grossAmount                =    this.dataService.orderGrossAmount(this.orderDetail.items);

    // Retail Price
    this.totalRetailPrice           =   this.dataService.orderRetailPrice(this.orderDetail.items);

    // Net Amount
    this.dueAmount                  =    this.dataService.orderNetAmount(this.orderDetail.items);

    // Order Original
    this.netAmount                  =    this.dueAmount;

    // Scheme Discount
    this.totalSchemeDiscount        =    this.dataService.orderSchemeDiscount(this.orderDetail.items);

    //Loyalty Discount
    this.totalloyaltyDiscount       =    this.dataService.orderLoyaltyDiscount(this.orderDetail);

    // Trade Discount
    this.totalMerchantDiscount      =    this.dataService.orderTradeDiscount(this.orderDetail.items);

    // Special Discount
    this.totalSpecialDiscount       =    this.dataService.orderSpecialDiscount(this.orderDetail.items);

    // Extra Discount
    this.totalBookerDiscount        =    this.dataService.orderExtraDiscount(this.orderDetail.items);

    
    // Tax
    this.gst_tax                    =    this.dataService.orderGstTax(this.orderDetail.items);

    // Tax
    this.adv_inc_tax                =    this.dataService.orderAdvIncTax(this.orderDetail.items);

    // Tax
    this.totalTax                   =    this.dataService.orderTax(this.orderDetail.items);
  
    
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
                this.totalBookerDiscount +
                this.totalloyaltyDiscount; 
    this.orderDetail.gross_sale_amount  = this.grossAmount;
    this.orderDetail.total_retail_price = this.totalRetailPrice;
    this.orderDetail.ttl_qty_sold       = this.selectedProductQuantities;
    this.orderDetail.ttl_products_sold  = this.orderDetail.items.length;
    
                
  }
}
