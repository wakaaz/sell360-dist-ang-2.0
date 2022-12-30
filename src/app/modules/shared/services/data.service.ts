import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DataService {
  constructor(
    private toastService: ToasterService,
    private baseService: HttpBaseService
  ) {}

  calculateUnitPrice(unitPurchased: number, perUnitPrice: number): number {
    return unitPurchased * perUnitPrice;
  }

  calculateItemsBill(prices: Array<number>): number {
    let bill = 0;
    prices.forEach((price) => {
      bill += price;
    });
    return bill;
  }

  calculateDiscount(discount: number, type: string, total: number): number {
    if (type === 'percentage') {
      return (discount / 100) * total;
    } else if (type === 'price') {
      return total - discount;
    }
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
          productWithScheme = this.applyFPMinQtyRestrictionForRule4(product);
          break;

      default:
          productWithScheme = product;
          break;
    }
    return productWithScheme;
  }

  applyFPDOTP(product: any): any {
    const discounted = this.getSDForFPTradePriceScheme(
      product.item_trade_price,
      product.stockQty,
      product.selectedScheme.min_qty,
      product.selectedScheme.quantity_free
    );
    product.scheme_discount = discounted.schemeDiscount;
    product.price = discounted.singleItemPrice;
    product.unit_price_after_scheme_discount = discounted.singleItemPrice;
    product.selectedScheme.applied = true;
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
        product.item_trade_price,
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
      product.price = product.item_trade_price;
      product.unit_price_after_scheme_discount = product.item_trade_price;
      this.schemeCannotApplied();
    }
    return product;
  }

  applyFPMinQtyRestriction(product: any): void {
    if (
      this.isEligibleForMinimumQuantity(
        product.stockQty,
        product.selectedScheme.min_qty
      )
    ) {
      const discounted = this.getSDForFPQtyRestrictionDiscount(
        product.item_trade_price,
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
      product.price = product.item_trade_price;
      product.unit_price_after_scheme_discount = product.item_trade_price;
      this.schemeCannotApplied();
    }
    return product;
  }

  applyFPMinQtyRestrictionForRule4(product: any): void { 
    if (this.isEligibleForMinimumQuantity(product.stockQty, product.selectedScheme.min_qty)) {
        // const discounted = this.getSDForFPQtyRestrictionDiscount(product.item_trade_price, product.stockQty,
        //     product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
        const freeQtyInterval = Math.floor(product.stockQty / product.selectedScheme.min_qty);
        const orderFreeQty = freeQtyInterval * product.selectedScheme.quantity_free;
        product.scheme_quantity_free = orderFreeQty;
        product.scheme_discount = 0;//discounted.schemeDiscount;
        product.price = product.item_trade_price;//discounted.singleItemPrice;
        product.unit_price_after_scheme_discount = product.item_trade_price;
        product.scheme_rule = 4;
        product.scheme_type = 'free_product'; 
        product.selectedScheme.applied = true;
    } else {
        product.scheme_quantity_free = 0;
        product.selectedScheme.applied = false;
        product.scheme_discount = 0;
        product.price = product.item_trade_price;
        product.unit_price_after_scheme_discount = product.item_trade_price;
        this.schemeCannotApplied();
    }
    console.log(product);
    return product;
}

  getSchemeAmount(itemTP: number, minQty: number, freeQty: number): number {
    const totalTpMinQty = itemTP * minQty;
    const totalItemBeingGiven = freeQty + minQty;
    const discountOnEachItem = totalTpMinQty / totalItemBeingGiven;
    const schemeAmount = itemTP - discountOnEachItem;
    return schemeAmount;
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
    const schemeAmount = this.getSchemeAmount(
      itemTradePrice,
      minimumQty,
      freeQty
    );
    const tradePriceForSingleItem = itemTradePrice - schemeAmount;
    return {
      singleItemPrice: tradePriceForSingleItem,
      schemeDiscount: schemeAmount,
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
      // const singleUnitDiscount = this.calculateDiscount(percentageDiscount, 'percentage', product.item_trade_price);
      if (
        product.selectedScheme.discount_type ===
        environment.DISCOUNT_TYPES.PERCENTAGE
      ) {
        const findDiscount =
          product.item_trade_price *
          (product.selectedScheme.discount_on_tp / 100);
        product.price = product.item_trade_price - findDiscount;

        product.unit_price_after_scheme_discount = findDiscount;

        product.scheme_discount = findDiscount;
      } else {
        product.price =
          product.item_trade_price - product.selectedScheme.discount_on_tp;
        product.unit_price_after_scheme_discount =
          product.item_trade_price - product.selectedScheme.discount_on_tp;
        product.scheme_discount = product.selectedScheme.discount_on_tp;
      }

      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.price = product.item_trade_price;
      product.unit_price_after_scheme_discount = product.item_trade_price;
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
        product.item_trade_price -
        product.selectedScheme.gift_value / product.stockQty;
      product.gift_value = product.selectedScheme.gift_value;
      product.selectedScheme.applied = true;
    } else {
      product.selectedScheme.applied = false;
      product.price = product.item_trade_price;
      product.unit_price_after_scheme_discount = product.item_trade_price;
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
    product.unit_price_after_merchant_discount = JSON.parse(
      JSON.stringify(product.price)
    );
    return product;
  }

  applySlabForTotal(
    product: any,
    merchantDiscount: any,
    orderTotal: number
  ): any {
    const selectedSlab = merchantDiscount.slab.find(
      (slb) =>
        slb.range_from &&
        slb.range_to &&
        slb.range_from <= orderTotal &&
        slb.range_to >= orderTotal
    );
    if (selectedSlab && +product.stockQty > 0) {
      const discountValuePKR =
        (selectedSlab.value / 100) * product.unit_price_after_scheme_discount;
      product.trade_discount = selectedSlab.value;
      product.trade_discount_pkr = discountValuePKR;
      product.price =
        product.unit_price_after_scheme_discount - discountValuePKR;
      product.unit_price_after_merchant_discount = JSON.parse(
        JSON.stringify(product.price)
      );
    } else {
      product.trade_discount = 0;
      product.trade_discount_pkr = 0;
      product.price = product.unit_price_after_scheme_discount;
      product.unit_price_after_merchant_discount = JSON.parse(
        JSON.stringify(product.price)
      );
    }
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
                                        //debugger
    if(!selecteditem.slab_id || selecteditem.slab_id === null){
      const skuslab        =  fileteredSlabs.filter(x => x.slab_type === 3) ? fileteredSlabs.filter(x => x.slab_type == 3)[0] : null;
      const brandslab      =  fileteredSlabs.filter(x => x.slab_type === 4) ? fileteredSlabs.filter(x => x.slab_type == 4)[0] : null;
      const categoryslab   =  fileteredSlabs.filter(x => x.slab_type === 5) ? fileteredSlabs.filter(x => x.slab_type == 5)[0] : null;  
      const generalslabs   =  fileteredSlabs.filter(x => x.slab_type < 3)  ? fileteredSlabs.filter(x => x.slab_type <= 2)  : null;                                                                    
      if(skuslab)
        selecteditem = this.applySlabToItem(selecteditem,skuslab,true); 
     
      if(selecteditem.slab_id === null && brandslab)
        selecteditem = this.applySlabToItem(selecteditem,brandslab,true);
      
      if(selecteditem.slab_id === null && categoryslab)
        selecteditem = this.applySlabToItem(selecteditem,categoryslab,true);
      
      if(selecteditem.slab_id === null && generalslabs)  
        selecteditem = this.applySlabToItem(selecteditem,generalslabs,false);
      
    }    
    //debugger
    return selecteditem;
    
  }
  applySlabToItem(item:any, slabs:any, productbase:boolean){
    
    if(slabs && ( !item.slab_id || item.slab_id === null) ){
      if(productbase){
        console.log(item.item_id);
        console.log(slabs.slab_items); 
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
          item.slab_id    = slab[0].discount_slab_id;
          item.slab_type  = slab[0].slab_type;
        }
      }
    }else{
      item.slab_id    = null;
      item.slab_type  = null; 
    }
    return item;
  }

  applySlabDiscountValuesToItems(items:any, slabs:any){
    console.log(items)
   return items.map((item) => {
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
        //debugger
        let slabmodel :any            =   []
        let itemslab:any              =   []
                                      
        let rangevalue:number     =   0; 
        let rangecontent :any     =   [];
        let rangeModel:any        =   itemslab;              
        let ItemTp                =   item.original_price ? item.original_price : item.item_trade_price;
        item.original_price       =   item.original_price ? item.original_price : item.item_trade_price;
        let itemDiscountTp        =   item.unit_price_after_scheme_discount ? item.unit_price_after_scheme_discount : ItemTp;
        
        if(item.slab_id > 0){
          itemslab  =   slabs.filter(x=> x.discount_slab_id == item.slab_id) ? slabs.filter(x=> x.discount_slab_id == item.slab_id)[0]:null;
        }
        slabmodel.slab_type               =       itemslab ? itemslab.slab_type : 0; //   Zero means its is a for all product (Slab Type 0 or 1) can bbe applien periorty is zero
        slabmodel.slab_rule               =       itemslab ? itemslab.slab_rule : 0;
        slabmodel.items                   =       [];
        slabmodel.discount_type           =       0;
        slabmodel.discount                =       0;
        slabmodel.discount_pkr            =       0;
        slabmodel.itemDiscountTp          =       itemDiscountTp;
        //debugger
        if(itemslab && itemslab.id != null && item.stockQty > 0){
            if(slabmodel.slab_rule == 2){
                if(slabmodel.slab_type < 3){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty, 0):0;
                }else if(slabmodel.slab_type == 3){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type  && x.item_id==item.item_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }else if(slabmodel.slab_type == 4){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id &&   x.slab_type == slabmodel.slab_type  && x.brand_id==item.brand_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }
                else if(slabmodel.slab_type == 5){
                  rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type  && x.brand_id==item.brand_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }
            }
            else{
              if(slabmodel.slab_type < 3){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty*b.original_price, 0):0;
              }else if(slabmodel.slab_type == 3){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type  && x.item_id==item.item_id );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty*b.original_price, 0):0;
                slabmodel.items     =   itemslab.items;
              }else if(slabmodel.slab_type == 4){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id &&   x.slab_type == slabmodel.slab_type  && x.brand_id==item.brand_id );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty*b.original_price, 0):0;
                slabmodel.items     =   itemslab.items;
              }
              else if(slabmodel.slab_type == 5){
                rangecontent        =   items.filter(x=> x.slab_id==item.slab_id && x.slab_type == slabmodel.slab_type  && x.brand_id==item.brand_id );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.stockQty*b.original_price, 0):0;
                slabmodel.items     =   itemslab.items;
              }
            }
            
            if (itemslab.discount_filter == 'slab' ) {
                rangeModel   =  itemslab.slab.filter(x=>
                                                           (
                                                            x.discount_slab_id  ==  itemslab.discount_slab_id &&
                                                            x.range_from        <=  rangevalue &&
                                                            x.range_to          >=  rangevalue 
                                                           ) 
                                                      ); 
                if(rangeModel){ 
                    rangeModel  = rangeModel[0];          
                    slabmodel.discount_type       =   rangeModel.discount_type;
                    //dd( $channel_id, $region_id, $rangeModel , $productGrossPrice, $itemDiscountTp,slabmodel.discount_type ,itemslab);
                    if (rangeModel.discount_type  == 'percentage') {
                        if (rangeModel.value > 0) {
                            slabmodel.discount            =   rangeModel.value;
                            slabmodel.discount_pkr        =   (slabmodel.discount/100)*ItemTp;
                            slabmodel.itemDiscountTp      =   slabmodel.itemDiscountTp - slabmodel.discount_pkr;
                        }
                    } else if (rangeModel.discount_type  == 'value') {
                        slabmodel.discount                =   rangeModel.value;
                        slabmodel.discount_pkr            =   slabmodel.discount;
                        slabmodel.itemDiscountTp          =   itemDiscountTp - slabmodel.discount;
                    }
                }
            }
            else if (itemslab.discount_filter == 'flat') {
                slabmodel.discount_type     =   itemslab.discount_type;
                rangeModel                  =  itemslab.ranges.filter(x=>x.discount_slab_id  ==  itemslab.id); 
                slabmodel.discount          =  rangeModel ? rangeModel[0].value:0;
                if (itemslab.discount_type  == 'percentage') {
                    if (slabmodel.discount > 0) {
                        slabmodel.discount_pkr    =   (slabmodel.discount/100)*ItemTp;
                        slabmodel.itemDiscountTp  =   slabmodel.itemDiscountTp - slabmodel.discount_pkr; //$this.applyRetailerDiscount(slabmodel.itemDiscountTp , slabmodel.discount);
                    }
                } else if (itemslab.discount_type  == 'value') {
                    slabmodel.discount_pkr        =   slabmodel.discount;
                    slabmodel.itemDiscountTp      =   slabmodel.itemDiscountTp - slabmodel.discount;
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
        item.unit_price_after_merchant_discount = slabmodel.itemDiscountTp;
        //debugger
      return item;
    });
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
}
