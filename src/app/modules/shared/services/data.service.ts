import { NullTemplateVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { filter } from 'jszip';
import { interval, Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { environment } from '../../../../environments/environment';
import { ItemModel } from '../../inventory/model/distributor-purchase.model';

@Injectable()
export class DataService {
  constructor(
    private toastService: ToasterService,
    private baseService: HttpBaseService
  ) {}

  calculateUnitPrice(perUnitPrice: number,unitPurchased: number): number {
    return unitPurchased * perUnitPrice;
  }

  calculateGrossBill(items:any): number {
    let bill = 0;
    items.forEach((x) => {
      bill += x.stockQty * x.original_price;
    });
    
    return bill;
  }

  calculateItemsBill(prices: Array<number>): number {
    let bill = 0;
    prices.forEach((price) => { bill += price ? +price:0; });
    
    return bill;
  }

  calculateDiscount(discount: number, type: string, total: number): number {
    if (type === 'percentage') {
      return (discount / 100) * total;
    } else if (type === 'price') {
      return total - discount;
    }
  }
  calculateTotalSchemeDiscount(items :any) :number{
    let totalSchemeDiscount = 0;
    if(items){
      items.forEach(x=>{
        totalSchemeDiscount = totalSchemeDiscount + (x.scheme_id && x.scheme_type == 'bundle_offer' ? x.scheme_discount:(x.stockQty * x.scheme_discount) )
      });
    }
    return totalSchemeDiscount;
    
  }
  calculateproductnetAmount(item:any):number{
      let stockQty            =   +item.stockQty;
      let gross_sale_amount   =   item.original_price * stockQty;
      let ttl_scheme_discount =   item.scheme_id && item.scheme_type == 'bundle_offer' ? +item.scheme_discount: +(stockQty * item.scheme_discount) ;
      let ttl_trade_discount  =  + stockQty * item.trade_discount_pkr;
      let ttl_special_discount=  + stockQty * item.special_discount;
      let ttl_extra_discount  =  + item.extra_discount_pkr ? +item.extra_discount_pkr : 0;
      let total_discount      =   ttl_scheme_discount + ttl_trade_discount + ttl_special_discount + ttl_extra_discount + ttl_extra_discount;
      let net_amount          =   gross_sale_amount - total_discount;
      // if([35,36].includes(item.item_id))
      //  


      return net_amount;
  }

  /** Schemes Calculation and implementation */

  getSchemes(
    itemId: number,
    unitId: number,
    prefId: number,
    schemes: Array<any>,
    retailerType: number,
    retailerId: number
  ): Array<any> {
    const productSchemes = schemes.filter((scheme) => {
      let isRetailerEligible = false;
      scheme.assignment.filter((assigned) => {
        if (
          assigned.retailer_type_id === retailerType &&
          !assigned.except_retailers.includes(retailerId)
        ) {
          isRetailerEligible = true;
          return assigned;
        }
      });
      let productFound = [];
      if (isRetailerEligible) {
        productFound = scheme.items.filter((item) => {
          if (
            item.item_id === itemId &&
            item.unit_id === unitId &&
            item.pref_id === +prefId
          ) {
            return item;
          }
        });
      }
      if (productFound.length) {
        return scheme;
      }
    });
    return productSchemes;
  }


  applyFreeProductScheme(product: any): any {
    let productWithScheme: any = {};
    ////
    switch (product.selectedScheme.scheme_rule) {
      case 1:
          productWithScheme = this.applyFPDOTP(product);
          break;
      case 2:
          productWithScheme = this.applyFPHalfQtyDiscount(product);
          break;
      case 3:
          productWithScheme = this.applyFPMinQtyRestriction(product);
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

  applyFPDOTP(product: any): any {
    const discounted = this.getSDForFPTradePriceScheme(
      product.original_price,
      product.stockQty,
      product.selectedScheme.min_qty,
      product.selectedScheme.quantity_free
    );
    product.scheme_discount = discounted.schemeDiscount;
    product.price = discounted.singleItemPrice;
    product.unit_price_after_scheme_discount = discounted.singleItemPrice;
    product.selectedScheme.applied = true;
    //
    return product;
  }

  applyFPHalfQtyDiscount(product: any): any {
    if (
      this.isHalfQuantityEligible(
        product.stockQty,
        product.selectedScheme.min_qty
      )
    ) {
      const discounted = this.getSDForFPHalfQtyDiscount(
        product.original_price,
        product.stockQty,
        product.selectedScheme.min_qty,
        product.selectedScheme.quantity_free
      );
      product.scheme_discount = discounted.schemeDiscount;
      product.price = discounted.singleItemPrice;
      product.unit_price_after_scheme_discount = discounted.singleItemPrice;
      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.scheme_discount = 0;
      product.price = product.original_price;
      product.unit_price_after_scheme_discount = product.original_price;
      this.schemeCannotApplied();
    }
    return product;
  }

  applyFPMinQtyRestriction(product: any): any {
    if (
      this.isEligibleForMinimumQuantity(
        product.stockQty,
        product.selectedScheme.min_qty
      )
    ) {
      const discounted = this.getSDForFPQtyRestrictionDiscount(
        product.original_price,
        product.stockQty,
        product.selectedScheme.min_qty,
        product.selectedScheme.quantity_free
      );
      product.scheme_discount = discounted.schemeDiscount;
      product.price = discounted.singleItemPrice;
      product.unit_price_after_scheme_discount = discounted.singleItemPrice;
      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.scheme_discount = 0;
      product.price = product.original_price;
      product.unit_price_after_scheme_discount = product.original_price;
      this.schemeCannotApplied();
    }
    return product;
  }

  applyFPMinQty(product: any): any { 
      ////
    if (this.isEligibleForMinimumQuantity(product.stockQty, product.selectedScheme.min_qty)) {
       
        product.scheme_free_items   =   []
        const freeQtyInterval       =    Math.floor(product.stockQty / product.selectedScheme.min_qty);
        const orderFreeQty          =    freeQtyInterval * product.selectedScheme.quantity_free;
        product.scheme_quantity_free=    orderFreeQty; 
        product.selectedScheme      =   product.selectedScheme;
        product.scheme_id           =   product.selectedScheme.id;
        product.scheme_type         =   product.selectedScheme.scheme_type;
        product.scheme_rule         =   product.selectedScheme.scheme_rule;
        product.scheme_discount     =   0;
        product.price               =   product.original_price;//discounted.singleItemPrice;
        product.unit_price_after_scheme_discount = product.original_price;
        product.scheme_free_items   =   [{
                                          item_id : +product.item_id,
                                          free_qty: +product.scheme_quantity_free 
                                        }];
        product.selectedScheme.applied = true;
    } else {
        product.scheme_quantity_free    =   0;
        product.selectedScheme.applied  =   false;
        product.scheme_discount         =   0;
        product.price                   =   product.original_price;
        product.scheme_free_items       =   null;
        product.unit_price_after_scheme_discount = product.original_price;
        this.schemeCannotApplied();
    }
    // console.log(product);
    // ////
    return product;
  }

  

  getSchemeAmount(itemTP: number, minQty: number, freeQty: number): number {
    //
    const totalTpMinQty = itemTP * minQty;
    const totalItemBeingGiven = freeQty + minQty;
    const ItemDiscountedTP = totalTpMinQty / totalItemBeingGiven;
    const unitdiscount = itemTP - ItemDiscountedTP;
    return unitdiscount;
  }

  /**
   * Get the total scheme discount to be applied on the item selected
   * @param itemTradePrice trade price of the item
   * @param userQty quantity added by the distributor
   * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
   * @param freeQty Free quantity of the scheme to be applied, added by Admin
   * @returns Total calculated discount of the scheme
   */
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
      schemeDiscount : schemeUnitDscount,
    };
  }

  /**
   * Check if the Half Quantity Discount is applicable on the given quantity
   * @param userQty Quantity added by the Distributor
   * @param minimumQty of the scheme to be applied, added by Admin
   * @returns true/false i.e. whether Half Quantity Discount is applicable or not
   */
  isHalfQuantityEligible(userQty: number, minimumQty: number): boolean {
    const eligibleQty = Math.floor(minimumQty / 2);
    return userQty > eligibleQty;
  }

  /**
   * Get the total scheme discount to be applied on the item selected
   * @param itemTradePrice trade price of the item
   * @param userQty quantity added by the distributor
   * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
   * @param freeQty Free quantity of the scheme to be applied, added by Admin
   * @returns Total calculated discount of the scheme
   */
  getSDForFPHalfQtyDiscount(
    itemTradePrice: number,
    userQty: number,
    minimumQty: number,
    freeQty: number
  ): { singleItemPrice: number; schemeDiscount: number } {
    const freeQtyInterval = Math.floor(userQty / minimumQty);
    const orderFreeQty = freeQtyInterval * freeQty;
    const schemeAmount = this.getSchemeAmount(
      itemTradePrice,
      minimumQty,
      orderFreeQty
    );
    const singItemPrice = itemTradePrice - schemeAmount;
    return { singleItemPrice: singItemPrice, schemeDiscount: schemeAmount };
  }

  /**
   * Check if the Minimum Quantity Restriction Discount is applicable on the given quantity
   * @param userQty Quantity added by the Distributor
   * @param minimumQty of the scheme to be applied, added by Admin
   * @returns true/false i.e. whether Minimum Quantity Restriction Discount is applicable or not
   */
  isEligibleForMinimumQuantity(userQty: number, minimumQty: number): boolean {
    return +userQty >= minimumQty;
  }

  getSDForFPQtyRestrictionDiscount(
    itemTradePrice: number,
    userQty: number,
    minimumQty: number,
    freeQty: number
  ): { singleItemPrice: number; schemeDiscount: number } {
    // const freeQtyInterval = Math.floor(userQty / minimumQty);
    // const orderFreeQty = freeQtyInterval * freeQty;
    const schemeAmount = this.getSchemeAmount(
      itemTradePrice,
      minimumQty,
      freeQty
    );
    const singleItemPrice = itemTradePrice - schemeAmount;
    return { singleItemPrice, schemeDiscount: schemeAmount };
  }

  getSDForDOTP(product: any): any {
    
    if (
      this.isEligibleForMinimumQuantity(
        product.stockQty,
        product.selectedScheme.min_qty
      )
    ) {
      // const percentageDiscount = (product.selectedScheme.discount_on_tp / product.parent_trade_price) * 100;
      // const singleUnitDiscount = this.calculateDiscount(percentageDiscount, 'percentage', product.original_price);
      if (
        product.selectedScheme.discount_type ===
        environment.DISCOUNT_TYPES.PERCENTAGE
      ) {
        const findDiscount =
          product.original_price *
          (product.selectedScheme.discount_on_tp / 100);
        product.price = product.original_price - findDiscount;

        product.unit_price_after_scheme_discount = findDiscount;

        product.scheme_discount = findDiscount;
      } else {
        product.price =
          product.original_price - product.selectedScheme.discount_on_tp;
        product.unit_price_after_scheme_discount =
          product.original_price - product.selectedScheme.discount_on_tp;
        product.scheme_discount = product.selectedScheme.discount_on_tp;
      }

      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.price = product.original_price;
      product.unit_price_after_scheme_discount = product.original_price;
      product.scheme_discount = 0;
      this.schemeCannotApplied();
    }
    return product;
  }

  getSDForGift(product: any): any {
    if (
      this.isEligibleForMinimumQuantity(
        product.stockQty,
        product.selectedScheme.min_qty
      )
    ) {
      product.scheme_discount =
        product.original_price -
        product.selectedScheme.gift_value / product.stockQty;
      product.gift_value = product.selectedScheme.gift_value;
      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.price = product.original_price;
      product.unit_price_after_scheme_discount = product.original_price;
      product.scheme_discount = 0;
      this.schemeCannotApplied();
    }
    return product;
  }

  schemeAppliedSuccessfully(): void {
    const toast: Toaster = {
      title: 'Scheme Applied',
      message: 'Selected Scheme Applied Successfully to the product!',
      type: 'success',
    };
    this.toastService.showToaster(toast);
  }

  schemeCannotApplied(): void {
    const toast: Toaster = {
      title: 'Scheme Not Applied',
      message:
        'Selected Scheme cannot applied to the product because of minimum quantity contraints!',
      type: 'error',
    };
    this.toastService.showToaster(toast);
  }
  /** Schemes End */

  /** Merchant Discount Start */
  applyMerchantDiscountForSingleProduct(
    merchantDiscount: any,
    product: any,
    orderTotal: number
  ): any {
    let discountValuePKR = 0;
    if (+product.stockQty === 0) {
      product.trade_discount = discountValuePKR;
    } else {
      if (merchantDiscount.discount_filter === 'flat') {
        if (merchantDiscount.flat.discount_type === 'percentage') {
          discountValuePKR =
            (merchantDiscount.flat.value / 100) *
            product.unit_price_after_scheme_discount;
          product.trade_discount = merchantDiscount.flat.value;
        } else {
          discountValuePKR = merchantDiscount.flat.value;
          product.trade_discount = merchantDiscount.flat.value;
        }
      } else if (merchantDiscount.discount_filter === 'slab') {
        const currentItemsPrice =
          product.unit_price_after_scheme_discount * product.stockQty;
        const totalItemsPrice = currentItemsPrice + orderTotal;
        const selectedSlab = merchantDiscount.slab.find(
          (slb) =>
            slb.range_from &&
            slb.range_to &&
            slb.range_from <= totalItemsPrice &&
            slb.range_to >= totalItemsPrice
        );
        if (selectedSlab) {
          discountValuePKR =
            (selectedSlab.value / 100) *
            product.unit_price_after_scheme_discount;
          product.trade_discount = selectedSlab.value;
        } else {
          product.trade_discount = 0;
        }
      }
    }
    product.trade_discount_pkr = discountValuePKR;
    product.price = product.unit_price_after_scheme_discount - discountValuePKR;
    product.unit_price_after_merchant_discount = JSON.parse( JSON.stringify(product.price));
    
    return product;
  }

  /** Merchant Discount END */

  /**
   * Begin::Slabs
   * 
   */

  applySlabDiscountToSingleItem(selecteditem:any,selectedRetailer:any,slabs:any){
    
     // update slab_id null to all order items,SO we can apply updated slabs     
    const fileteredSlabs = slabs.filter(x =>
                                            x.region_id  === selectedRetailer.region_id &&
                                            x.territory_id === selectedRetailer.territory_id &&
                                            x.channel_id === selectedRetailer.retailer_type_id
                                        ); 
                                        
                                      
    if(!selecteditem.slab_id || selecteditem.slab_id === null || selecteditem.slab_id === 0){
      selecteditem.slab_id =  null;
      const skuslab        =  fileteredSlabs.filter(x => x.slab_type === 3) ? fileteredSlabs.filter(x => x.slab_type == 3)[0] : null;
      const brandslab      =  fileteredSlabs.filter(x => x.slab_type === 4) ? fileteredSlabs.filter(x => x.slab_type == 4)[0] : null;
      const categoryslab   =  fileteredSlabs.filter(x => x.slab_type === 5) ? fileteredSlabs.filter(x => x.slab_type == 5)[0] : null;  
      const generalslabs   =  fileteredSlabs.filter(x => x.slab_type < 3)  ? fileteredSlabs.filter(x => x.slab_type <= 2)  : null;                                                                    
      // if(selecteditem.item_id == 26) 
      //   debugger 
      if(skuslab){
        selecteditem = this.applySlabToItem(selecteditem,skuslab,true);
      }     
      if(selecteditem.slab_id === null && brandslab){
        selecteditem = this.applySlabToItem(selecteditem,brandslab,true);
      }
      if(selecteditem.slab_id === null && categoryslab){
        selecteditem = this.applySlabToItem(selecteditem,categoryslab,true);
      } 
      if(selecteditem.slab_id === null && generalslabs) {
        selecteditem = this.applySlabToItem(selecteditem,generalslabs,false);
      } 
      // if(selecteditem.item_id == 26) 
      //   debugger 
      //  
    }    
    //////
    return selecteditem;
    
  }
  applySlabToItem(item:any, slabs:any, productbase:boolean){
    
    if(slabs && ( !item.slab_id || item.slab_id === null) ){
      if(productbase){
        // console.log(item.item_id);
        // console.log(slabs.slab_items); 
        if(slabs.slab_items && slabs.slab_items.includes(item.item_id)){
          item.slab_id    = slabs.discount_slab_id;
          item.slab_type  = slabs.slab_type;
        }
      }
      else{
        let slab = null;
        let slab_type = null;
        
        if(slab_type == 1){ //priority 1 else 0
            slab  =    slabs.filter(x=> x.slab_type = 1);
            if(slab){
              slab  =    slabs.filter(x=> x.slab_type = 0);
            }
        }
        else if(slab_type == 2){ //priority 2 else 0
          slab  =    slabs.filter(x => x.slab_type = 2);
            if(slab){
              slab  =    slabs.filter(x => x.slab_type = 0);
            }
        }
        else{ //opriority else 1
          slab  =    slabs.filter(x => x.slab_type = 0);
            if(slab){
              slab  =    slabs.filter(x => x.slab_type = 1);
            }
        }
        if(slab){
          item.slab_id            = slab[0] ? slab[0].discount_slab_id : null;
          item.slab_type          = slab[0] ? slab[0].slab_type:null;
          item.slab_discount_type = slab[0] ? slab[0].discount_type:null;
          
        }
      }
    }else{
      item.slab_id            = null;
      item.slab_type          = null; 
      item.slab_discount_type = null;
    }
    
    return item;
  }

  applySlabDiscountValuesToItems(items:any, slabs:any){
    //console.log(items)
    items = items.map((item) => {
    console.log(item);
    
      /* App Scenarios In case of exclusiveOrder Access Right = 0:
         If the order booker has "0" Normal Order rights in that case only Normal Product or All Products Slabs shall be applied meaning ( Slab Type 0 or 1, 0 always has the priority )
         If there are no slab for 0 than apply 1
         If both 0 or 1 are not available than do not apply any slab.*/


        /*App Scenarios In case of Access Right = 1:

        Normal Orders
        If Normal Discount slabs exists than apply normal slab
        If normal discount slab does not exist than apply all products slab
        In case if both does not exist than no discount slab would be applied.
                Exclusive Orders

        If Exclusive Discount slabs exists than apply exclusive slab
        If exclusive discount slab does not exist than apply all products slab
        In case if both do not exist then no discount slab would be applied.*/

        /*App Scenarios In case of Access Right = 2:

        Merged Order
        If Normal Discount slabs exists than apply normal slab for normal products
        If normal discount slab does not exist than apply all products slab for normal products
        In case if both does not exist than no discount slab would be applied on normal products
        Exclusive Orders

        If Exclusive Discount slabs exists than apply exclusive slab for exclusive products
        If exclusive discount slab does not exist than apply all products slab for exclusive products
        In case if both do not exist then no discount slab would be applied for exclusive products
      */
        //////
        let slabmodel :any        =   []
        let itemslab:any          =   []
                                      
        let rangevalue:number     =   0; 
        let rangecontent :any     =   [];
        let rangeModel:any        =   itemslab;              
        let ItemTp                =   item.original_price ? item.original_price : item.item_trade_price;
        item.original_price       =   item.original_price ? item.original_price : item.item_trade_price;
        let itemDiscountedTp      =   ItemTp;
        
        if(item.slab_id > 0){
          itemslab  =   slabs.filter(x=> x.discount_slab_id == item.slab_id) ? slabs.filter(x=> x.discount_slab_id == item.slab_id)[0]:null;
        }
        
        slabmodel.slab_type               =       itemslab ? itemslab.slab_type       : 0; //   Zero means its is a for all product (Slab Type 0 or 1) can bbe applien periorty is zero
        slabmodel.slab_rule               =       itemslab ? itemslab.slab_rule       : 0; //   Zero means its is a for all product (Slab Type 0 or 1) can bbe applien periorty is zero
        slabmodel.packaging_type          =       itemslab ? itemslab.packaging_type  : null;
        slabmodel.items                   =       [];
        slabmodel.discount_type           =       0;
        slabmodel.discount                =       0;
        slabmodel.discount_pkr            =       0;
        slabmodel.itemDiscountedTp          =       itemDiscountedTp;
        //////
        // if(item.item_id == 26) 
        // debugger 
        if(itemslab && itemslab.discount_slab_id != null && +item.stockQty > 0){
          
            if(slabmodel.slab_rule == 2){
                if(slabmodel.slab_type < 3){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id); 
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: number, b: any) => a + +b.stockQty, 0):0;
                }else if(slabmodel.slab_type == 3){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.item_id==item.item_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: number, b: any) => a + +b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }else if(slabmodel.slab_type == 4){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id  && x.brand_id==item.brand_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: number, b: any) => a + +b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }
                else if(slabmodel.slab_type == 5){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id  && x.brand_id==item.brand_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: number, b: any) => a + +b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }
                if( slabmodel.packaging_type && slabmodel.packaging_type == 1){
                  rangevalue  = +rangevalue/+item.sub_inventory_quantity;
                }
            }
            else{
              if(slabmodel.slab_type < 3){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id);
              }else if(slabmodel.slab_type == 3){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.item_id==item.item_id );
                slabmodel.items     =   itemslab.items;
              }else if(slabmodel.slab_type == 4){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.brand_id==item.brand_id );
                slabmodel.items     =   itemslab.items;
              }
              else if(slabmodel.slab_type == 5){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.brand_id==item.brand_id );
                slabmodel.items     =   itemslab.items;
              }
              rangevalue          =   rangecontent ? this.rangecontentGrossAmountSum(rangecontent,item.item_id):0;
              // if(item.item_id == 26)
              // debugger
            } 
            
            if (itemslab.discount_filter == 'slab' ) {
                rangeModel   =  itemslab.slab.filter(x=>
                                                           (
                                                            x.discount_slab_id  ==  itemslab.discount_slab_id &&
                                                            x.range_from        <=  rangevalue &&
                                                            x.range_to          >=  rangevalue 
                                                           ) 
                                                      ); 
                if(rangeModel && rangeModel[0]){  
                    rangeModel  = rangeModel[0]; 
                             
                    slabmodel.discount_type       =   rangeModel.discount_type;
                    //dd( $channel_id, $region_id, $rangeModel , $productGrossPrice, $itemDiscountTp,slabmodel.discount_type ,itemslab);
                    if (rangeModel.discount_type  == 'percentage') {
                        if (rangeModel.value > 0) {
                            slabmodel.discount            =   rangeModel.value;
                            slabmodel.discount_pkr        =   (slabmodel.discount/100)*ItemTp;
                            slabmodel.itemDiscountedTp      =   slabmodel.itemDiscountedTp - slabmodel.discount_pkr;
                        }
                    } else if (rangeModel.discount_type  == 'value') {
                        slabmodel.discount                =   rangeModel.value;
                        slabmodel.discount_pkr            =   slabmodel.discount;
                        slabmodel.itemDiscountedTp        =   itemDiscountedTp - slabmodel.discount;
                    }
                }
            }
            else if (itemslab.discount_filter == 'flat') {
                slabmodel.discount_type     =  itemslab.discount_type; 
                rangeModel                  =  itemslab.ranges.filter(x=>x.discount_slab_id  ==  itemslab.id); 
                slabmodel.discount          =  rangeModel ? rangeModel[0].value:0;
                if (itemslab.discount_type  == 'percentage') {
                    if (slabmodel.discount > 0) {
                        slabmodel.discount_pkr    =   (slabmodel.discount/100)*ItemTp;
                        slabmodel.itemDiscountedTp  =   slabmodel.itemDiscountedTp - slabmodel.discount_pkr; //$this.applyRetailerDiscount(slabmodel.itemDiscountedTp , slabmodel.discount);
                    }
                } else if (itemslab.discount_type  == 'value') {
                    slabmodel.discount_pkr        =   slabmodel.discount;
                    slabmodel.itemDiscountedTp    =   slabmodel.itemDiscountedTp - slabmodel.discount;
                }
            }
        }

        //update discount value in discount
        //slab_id, 
        item.slab_type                          = itemslab.slab_type; 
        item.slab_discount_type                 = itemslab.discount_type;
        item.merchant_discount                  = slabmodel.discount; 
        item.merchant_discount_pkr              = slabmodel.discount_pkr;
        item.trade_discount                     = slabmodel.discount; 
        item.trade_discount_pkr                 = slabmodel.discount_pkr; 
        item.unit_price_after_merchant_discount = slabmodel.itemDiscountedTp;
        // if(item.item_id == 26)
        // debugger
      return item;
    });
    return JSON.parse(JSON.stringify(items));
  }
  rangecontentGrossAmountSum(rangecontent:any,item_id:number){
    let ttl_Amnt = 0;
    rangecontent.forEach(b => {
      var gr_amnt = ((+b.stockQty) * (b.original_price ? +b.original_price:+b.item_trade_price));
      // if(item_id == 26)
      // debugger
      ttl_Amnt  = ttl_Amnt + gr_amnt;
    });
    // if(item_id == 26)
    //     debugger 
    return ttl_Amnt ? ttl_Amnt : 0; 
  }

  /**
   * End::Slabs
   * 
   */

  /** Special Discount */
  getSpecialDiscounts(
    segmentId: number,
    regionId: number,
    product: any,
    specialDiscounts: Array<any>
  ): any {
    const selectedSpecialDiscount = specialDiscounts.find(
      (x) =>
        segmentId === x.segment_id &&
        regionId === x.region_id &&
        +product.pref_id === x.pref_id
    );

    if (selectedSpecialDiscount && +product.stockQty > 0) {
      product.price =
        product.unit_price_after_merchant_discount -
        selectedSpecialDiscount.discount;
      product.unit_price_after_special_discount =
        product.unit_price_after_merchant_discount -
        selectedSpecialDiscount.discount;
      product.special_discount = selectedSpecialDiscount.discount;
      product.special_discount_pkr = selectedSpecialDiscount.discount;
    } else {
      product.special_discount = 0;
      product.special_discount_pkr = 0.0;
      product.special_discount = 0.0;
      product.unit_price_after_special_discount = product.unit_price_after_merchant_discount;
    }
    
    return product;
  }
  /** Special Discount End */

  getParentQty(qty: number, childQtyInParent: number): number {
    return qty / childQtyInParent;
  }

  convertStockToUnits(
    totalQty: number,
    childQtyInParent: number
  ): { parentQty: number; childQty: number } {
    const parentQty = this.getParentQty(totalQty, childQtyInParent);
    const childQty = totalQty % childQtyInParent;
    return { parentQty, childQty };
  }

  getChildQty(qty: number, childQtyInParent: number): number {
    return qty * childQtyInParent;
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    if (
      (event.key && event.key.includes('ArrowLeft')) ||
      event.key.includes('ArrowRight') ||
      event.key.includes('Backspace') ||
      event.key.includes('Delete') ||
      (type === 'charges' && event.key.includes('.'))
    ) {
      return true;
    } else if (event.key && event.key.trim() === '') {
      return false;
    }
    return !isNaN(Number(event.key.trim()));
  }

  getViewOrderDetailById(orderid: number): Observable<any> {
    const url = `${API_URLS.VIEW_ORDER_DETAIL}/${orderid}`;
    return this.baseService.get(url);
  }


  /**
   * Begin: Bundle Offer
   * 
   */
  applyBundleProductsScheme(product: any,orderDetail:any): any {
 
    let orderDetailitems = orderDetail.items;
    switch (product.selectedScheme.scheme_rule) {
      case 1:
        orderDetailitems = this.applyBundleDOTP(product,orderDetail);
          break;
      case 5:
        orderDetailitems = this.applyBundleFixedProduct(product,orderDetail);
          break;
      default:
        orderDetailitems = orderDetail.items;
          break;
    }
    //
    return orderDetailitems;
  }

  applyBundleDOTP(product: any,orderDetails:any): any {
    const interval  = this.getBundleOfferIntervalsAlgo(product,orderDetails);
    
    if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
      const scheme_items      = product.selectedScheme.items.map(x=> {return x.item_id});
      const total_items       = scheme_items.length;
      
      ////
      //schemeItemDiscount    = schemeItemDiscount > 0 ? schemeItemDiscount/total_items : 0; 
      orderDetails.items      = orderDetails.items.map((item) => {
          if(scheme_items.includes(item.item_id)){
            ////
            item.selectedScheme   =   product.selectedScheme;
            item.scheme_id        =   product.selectedScheme.id;
            item.scheme_type      =   product.selectedScheme.scheme_type;
            item.scheme_rule      =   product.selectedScheme.scheme_rule;
            let schemeItemDiscount=   0;
            if(product.selectedScheme.discount_type == 1){
              schemeItemDiscount  = interval*item.selectedScheme.discount_on_tp; 
            }else{
              let thisdiscount    = product.selectedScheme.discount_on_tp/100 * item.original_price;
              schemeItemDiscount  = interval*thisdiscount; 
            }
            item.scheme_discount  =   schemeItemDiscount;
            item.price            =   item.original_price - schemeItemDiscount; 
            item.unit_price_after_scheme_discount = item.original_price - schemeItemDiscount;
            item.selectedScheme.applied = true;
           //console.log(item)
          // 
          }
          
          return item;
      })
    }
    
    return JSON.parse(JSON.stringify(orderDetails.items));
  }
  applyBundleFixedProduct(product: any,orderDetails:any): any {
    //////
    const interval  = this.getBundleOfferIntervalsAlgo(product,orderDetails);
    //////
    if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
      const scheme_items      = product.selectedScheme.items.map(x=> {return x.item_id});
      orderDetails.items      = orderDetails.items.map((item) => {
          if(scheme_items.includes(item.item_id)){
            item.scheme_free_items    =   [];
            item.selectedScheme       =   product.selectedScheme;
            item.scheme_id            =   product.selectedScheme.id;
            item.scheme_type          =   product.selectedScheme.scheme_type;
            item.scheme_rule          =   product.selectedScheme.scheme_rule;
            item.scheme_discount_type =   product.selectedScheme.discount_type;
            item.scheme_min_quantity  =   product.selectedScheme.min_qty; 
            item.scheme_quantity_free =   0;
            item.scheme_discount      =   0;
            item.price                =   item.item_trade_price;
            item.unit_price_after_scheme_discount = item.item_trade_price;
            item.scheme_free_items    =   [];
            if(product.item_id == item.item_id && product.selectedScheme.freeitems && product.selectedScheme.freeitems.length > 0){
              let freeQty               =   product.selectedScheme.quantity_free*interval; 
              product.selectedScheme.freeitems.forEach(x=>{
                item.scheme_free_items.push({
                                              item_id : +x.item_id,
                                              free_qty: +freeQty
                                            })
              })
            }
            item.selectedScheme.applied = true;
            //////
           //console.log(item)
          // 
          }
          return item;
      });
    }
    return JSON.parse(JSON.stringify(orderDetails.items));
  }
  getBundleOfferIntervalsAlgo(product: any,orderDetail:any):number {
    
    //
    let   bundleCount       =   0; 
    const minqty            =   product.selectedScheme.min_qty;
    const scheme_items      =   product.selectedScheme.items.map(x=> {return x.item_id});
    const flag              =   scheme_items.every(item_id => orderDetail.items.some(x => x.item_id == item_id && x.stockQty >= minqty));
    if(flag){
      let schemeItems       =   orderDetail.items.filter(x => scheme_items.includes(x.item_id));
      schemeItems.forEach(x=>{
        if(bundleCount == 0 || bundleCount > x.stockQty){ 
          bundleCount   = + x.stockQty;      
        }
      });     
    }
    return  bundleCount
  }
  /**
   * End: Bundle Offer
   *  
   */




  /**
   * Begin: Complementary Offer
   * 
   */ 
  applyComplementaryScheme(product: any): any {

    switch (product.selectedScheme.scheme_rule) {
      case 5:
        product = this.applyComplementaryFixedProduct(product);
          break;
      case 6:
        product = this.applyComplementaryEquelProduct(product);
        break;    
      default:
        product = product;
        break;
    }
    return product;
  }


  applyComplementaryFixedProduct(item: any): any {
    item.scheme_free_items    =   [];
    if(item.selectedScheme && item.selectedScheme.min_qty <= item.stockQty){
      let min_qty               =   item.selectedScheme.min_qty ? +item.selectedScheme.min_qty:0;
      let stockQty              =   item.stockQty ? +item.stockQty:0; 
      const interval            =   Math.trunc(stockQty / min_qty) ;
      const freeQty             =   +item.selectedScheme.quantity_free * interval;
      item.selectedScheme       =   item.selectedScheme;
      item.scheme_id            =   item.selectedScheme.id;
      item.scheme_type          =   item.selectedScheme.scheme_type;
      item.scheme_rule          =   item.selectedScheme.scheme_rule;
      item.scheme_discount_type =   item.selectedScheme.discount_type;
      item.scheme_min_quantity  =   item.selectedScheme.min_qty;
      item.scheme_quantity_free =   0;
      item.scheme_discount      =   0;
      item.price                =   item.item_trade_price;
      item.unit_price_after_scheme_discount = item.item_trade_price;
      if(item.selectedScheme.freeitems.length > 0){
        item.selectedScheme.freeitems.forEach(x=>{
          item.scheme_free_items.push({
                                        item_id : +x.item_id,
                                        free_qty: +freeQty
                                      })
        })
      }
      item.selectedScheme.applied = true;
    }else{
      item.selectedScheme.applied = false;
    }
    
    return JSON.parse(JSON.stringify(item));
  }
  applyComplementaryEquelProduct(item: any): any {
    item.scheme_free_items      =   [];
    if(item.selectedScheme && item.selectedScheme.min_qty <= item.stockQty){
      const freeQty             =   item.stockQty;
      item.selectedScheme       =   item.selectedScheme;
      item.scheme_id            =   item.selectedScheme.id;
      item.scheme_type          =   item.selectedScheme.scheme_type;
      item.scheme_rule          =   item.selectedScheme.scheme_rule;
      item.scheme_discount_type =   item.selectedScheme.discount_type;
      item.scheme_min_quantity  =   item.selectedScheme.min_qty;
      item.scheme_quantity_free =   0;
      item.scheme_discount      =   0;
      item.price                =   item.item_trade_price;
      item.unit_price_after_scheme_discount = item.item_trade_price;
      if(item.selectedScheme.freeitems.length > 0){
        item.selectedScheme.freeitems.forEach(x=>{
          item.scheme_free_items.push({
                                        item_id : +x.item_id,
                                        free_qty: +freeQty
                                      })
        })
      }
      item.selectedScheme.applied = true;
    }else{
      item.selectedScheme.applied = false;
    }
    return JSON.parse(JSON.stringify(item));
  }
  /**
   * End: Complementary Offer
   *  
   */
   
  updateSchemeFreeProductItems(orderDetails:any,allProducts:any){
    ////
    if(orderDetails.items && orderDetails.items.length > 0){
      let schemeitems:any   = [];
  
      let orderDetails_items:any = []; 
      orderDetails.items         = JSON.parse(JSON.stringify(orderDetails.items.filter(x=> (x.quantity > 0 || x.stockQty >0))));
       orderDetails.items.map((item) => {
          if(typeof item.scheme_free_items !== 'undefined' && item.scheme_free_items !== null){
            // console.log(item.scheme_free_items);
            if(item.scheme_free_items.length > 0){
              
              item.scheme_free_items.forEach(x=>{
                if(x.free_qty > 0){
                let stockitem = allProducts.filter(y=> y.item_id == x.item_id ) ? allProducts.filter(y=> y.item_id == x.item_id )[0]:null;
                if(stockitem){
                  let schemeitem = { 
                                        parent_item_id      :   item.item_id,
                                        city_id             :   orderDetails.city_id,
                                        locality_id         :   orderDetails.booking_locality_id,
                                        neighbourhood_id    :   orderDetails.booking_neighbourhood_id,
                                        channel_id          :   orderDetails.channel_id,
                                        name                :   stockitem.item_name,
                                        item_id             :   stockitem.item_id,
                                        pref_id             :   stockitem.pref_id,
                                        unit_id             :   stockitem.unit_id,
                                        brand_id            :   stockitem.brand_id,
                                        parent_pref_id      :   stockitem.parent_pref_id,
                                        parent_unit_id      :   stockitem.parent_unit_id,
                                        main_category_id    :   item.main_category_id,
                                        sub_category_id     :   item.sub_category_id,
                                        scheme_id           :   item.scheme_id,
                                        scheme_type         :   item.scheme_type,
                                        scheme_rule         :   item.scheme_rule,
                                        scheme_discount_type:   item.scheme_discount_type,
                                        gift_value          :   item.gift_value,
                                        scheme_quantity_free:   +x.free_qty,
                                        parent_qty_sold     :   +x.free_qty/ +stockitem.sub_inventory_quantity,
                                        quantity            :   +x.free_qty,
                                        dispatch_qty        :   +x.free_qty,
                                        executed_qty        :   +x.free_qty
                                  }
                  schemeitems.push(schemeitem); 
                  
                  let isOrderItem     = orderDetails.items.some(z => z.item_id == x.item_id);
                  let isOrderDetItem  = orderDetails_items.some(z => z.item_id == x.item_id);
                  if(!isOrderItem && !isOrderDetItem){
                    let newItem = allProducts.filter(k=> k.item_id == x.item_id ) ? allProducts.filter(k=> k.item_id == x.item_id )[0]:null;
                    if(newItem){
                        newItem.item_quantity_booker = 0;
                        newItem.item_quantity_updated= 0;
                        newItem.original_price= newItem.item_trade_price;
                        newItem.scheme_discount= 0;
                        newItem.unit_price_after_scheme_discount= newItem.original_price;
                        newItem.slab_id= 0;
                        newItem.slab_type = 0;
                        newItem.slab_discount_type= '';
                        newItem.merchant_discount=0;
                        newItem.merchant_discount_pkr= 0;
                        newItem.unit_price_after_merchant_discount= newItem.original_price;
                        newItem.special_discount= 0;
                        newItem.unit_price_after_special_discount=newItem.original_price;
                        newItem.extra_discount= 0;
                        newItem.unit_price_after_individual_discount=newItem.original_price;
                        newItem.price=newItem.original_price;
                        newItem.unit_id= newItem.unit_id;
                        newItem.unit_name= newItem.unit_name;
                        newItem.brand_id= newItem.brand_id;
                        newItem.item_id= newItem.item_id;
                        newItem.item_name= newItem.item_name;
                        newItem.scheme_id=  0;
                        newItem.scheme_min_quantity= 0;
                        newItem.scheme_quantity_free= 0;
                        newItem.scheme_discount_type= 0;
                        newItem.scheme_rule='';
                        newItem.gift_value= 0;
                        newItem.parent_pref_id= newItem.child;
                        newItem.parent_unit_id= newItem.parent_unit_id;
                        newItem.parent_brand_id= newItem.brand_id;
                        newItem.parent_tp= 0;
                        newItem.parent_qty_sold= 0;
                        newItem.parent_value_sold= 0;
                        newItem.final_price= 0;
                        newItem.campaign_id= 0;
                        newItem.item_status= 1;
                        newItem.dispatch_status= 2;
                        newItem.dispatch_qty= 0;
                        newItem.dispatch_amount= 0;
                        newItem.reasoning= '';
                        newItem.distributor_id= newItem.distributor_id;
                        newItem.division_id= newItem.division_id;
                        newItem.booked_total_qty= 0;
                        newItem.quantity= 0;
                        newItem.stockQty= 0;
                        newItem.gross_sale_amount= 0;
                        newItem.total_retail_price= 0;
                        newItem.tax_class_id=0;
                        newItem.tax_in_percentage= 0;
                        newItem.tax_in_value= 0;
                        newItem.total_tax_amount=0;
                        newItem.total_amount_after_tax= 0;
                        newItem.total_discount=0;
                        console.log(orderDetails_items.length)
                        ////
                        orderDetails_items.push(newItem);
                        console.log(orderDetails_items.length)
                        ////
                      };
                    }
                  }
                }             
                });
              }
          }
          orderDetails_items.push(item);
          return item;                    
      });
      orderDetails.items          = JSON.parse(JSON.stringify(orderDetails_items));
     
      orderDetails.schemeitems    = schemeitems;
      orderDetails.items          = orderDetails.items.map((item) => { 
        item.schemeitems          = orderDetails.schemeitems ? orderDetails.schemeitems.filter(x => x.parent_item_id === item.item_id) : null;
        item.scheme_quantity_free = orderDetails.schemeitems ? orderDetails.schemeitems.filter(x => x.item_id === item.item_id).reduce((a: any, b: any) => +a + +b.quantity, 0):0;      
        return item;
      })
    }
    ////
    return JSON.parse(JSON.stringify(orderDetails.items));
  }


  


  calculateOrderItemsValues(items:any):any{

    items = items.map(item =>{
      
      let stockQty            =   +item.stockQty;
      let gross_sale_amount   =   (item.original_price ? +item.original_price:+item.original_amount) * +stockQty;
      let ttl_scheme_discount =   item.scheme_id && item.scheme_type == 'bundle_offer' ? +item.scheme_discount: +(stockQty * item.scheme_discount) ;
      let ttl_trade_discount  =   item.trade_discount_pkr ? + stockQty * +item.trade_discount_pkr : 0;
      let ttl_special_discount=   item.special_discount ? + stockQty * +item.special_discount :0;
      let ttl_extra_discount  =   + item.extra_discount_pkr ? +item.extra_discount_pkr : 0;
      let total_discount      =   ttl_scheme_discount + ttl_trade_discount + ttl_special_discount + ttl_extra_discount + ttl_extra_discount;
      let net_amount          =   gross_sale_amount - total_discount;
      
      item.tax_amount_pkr     =   + item.extra_discount_pkr ? +item.extra_discount_pkr : 0;
      item.net_amount         =   net_amount; 
      
      return item;
    }); 
    items = JSON.parse(JSON.stringify(items));
    
    return items;

}



}
