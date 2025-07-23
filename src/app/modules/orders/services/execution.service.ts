import { Injectable } from '@angular/core';

@Injectable()
export class ExecutionService {
  constructor() {}

  getTaxType(taxClasses,tax_class_id):string{
    if(tax_class_id > 0){
      const taxclass  = taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.type;
      }else{
        return 'percentage';
      }
    }
    return 'percentage';
  }
  
  taxAppliedOn(taxClasses,tax_class_id,retailer):string{
    if(retailer  && retailer.apply_retail_tax == 1 &&  tax_class_id > 0){
      const taxclass  = taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.tax_applied_on == 'net_price' ? 'net_price':'retail_price';
      }else{
        return 'retail_price';
      }
    }
    return 'retail_price';
  }
  getGstTaxAmount(taxClasses,tax_class_id,retailer):any{
    let tax_amount_per = 0;
    if(retailer && tax_class_id > 0){
      const taxclass  = taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(retailer.retailer_register == 1){
          tax_amount_per = taxclass.gst_filer_retailer_value;
         }
         else{
          tax_amount_per = taxclass.gst_nonfiler_retailer_value;
         }
      }
    }
    return tax_amount_per;
  }
  getAdvIncTaxAmount(taxClasses,tax_class_id,retailer):any{
    let tax_amount_per = 0;
    if(retailer && tax_class_id > 0){
      const taxclass  = taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(retailer.retailer_register == 1){
          tax_amount_per =  taxclass.adv_inc_filer_retailer_value;
         }
         else{
          tax_amount_per =  taxclass.adv_inc_nonfiler_retailer_value;
         }
      }
    }
    return tax_amount_per;
  }
  setOrderPayloadItems(orderDetails: any, selectedRetailer: any,taxClasses:any): any {
    const payLoadItems = orderDetails.items.map((item) => {
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
      let tax_applied_value   =   0;
      if(item.order_id && item.order_id > 0){
        console.log('from execution service inn');
        tax_applied_value     = item.tax_applied_on == 'net_price' ? +( item.unit_price_after_individual_discount == 0 ? 
                                item.original_price:(item.unit_price_after_individual_discount) ): +item.item_retail_price;
        
        console.log(item.tax_in_percentage, tax_applied_value);
        console.log(item.stockQty);
        gst_tax               = item.stockQty > 0 ? (item.tax_in_percentage/ 100) * +tax_applied_value : 0; 
        adv_inc_tax           =   item.stockQty > 0 ? (item.adv_inc_tax_in_percentage / 100) * (+tax_applied_value+ +gst_tax) : 0; 
        tax_in_value          =   gst_tax + adv_inc_tax;                          
        total_tax_amount      =   tax_in_value*finalQty;   
      }
      else if(orderDetails && item.tax_class_id  > 0  && orderDetails.apply_retail_tax == 1){
        console.log('else');
        tax_applied_value     = this.taxAppliedOn(taxClasses,item.tax_class_id,orderDetails) == 
                                'net_price' ? +( item.unit_price_after_individual_discount == 0 ? 
                                  item.original_price:(item.unit_price_after_individual_discount) ): +item.item_retail_price;
        
        gst_tax               =   item.stockQty > 0 ? (this.getGstTaxAmount(taxClasses,item.tax_class_id,orderDetails)/ 100) * +tax_applied_value : 0; 
        adv_inc_tax           =   item.stockQty > 0 ? (this.getAdvIncTaxAmount(taxClasses,item.tax_class_id,orderDetails) / 100) * (+tax_applied_value+ +gst_tax) : 0; 
        tax_in_value          =   gst_tax + adv_inc_tax;                          
        total_tax_amount      =   tax_in_value*finalQty;  
      }
      // if(orderDetails && item.tax_class_id  > 0  && orderDetails.apply_retail_tax == 1){

        
      //   let tax_applied_value =  this.taxAppliedOn(taxClasses,item.tax_class_id,orderDetails) == 'net_price' ? +(final_price/finalQty): +item.item_retail_price;

      //   gst_tax               =  (this.getGstTaxAmount(taxClasses,item.tax_class_id,orderDetails)/ 100) * +tax_applied_value;
      //   adv_inc_tax           =  (this.getAdvIncTaxAmount(taxClasses,item.tax_class_id,orderDetails) / 100) * (+tax_applied_value + +gst_tax); 
      //   tax_in_value          =   gst_tax + adv_inc_tax;                          
      //   total_tax_amount      =   tax_in_value*finalQty;
          
      // }
      
      // if(item.tax_class_id  > 0 && item.tax_class_amount){
      //   tax_in_value          =   (item.tax_class_amount / 100) * +item.item_retail_price;                          
      //   total_tax_amount      =   tax_in_value*finalQty;  
      // }


      let ttl_amnt_aftr_tax   =   final_price + total_tax_amount;


      

      const orderItem = {
        quantity_returned:item.dispatch_qty - item.stockQty > -1 ? item.dispatch_qty - item.stockQty : 0,
        executed_qty: finalQty, 
        id: item.id || 0,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        brand_id: item.brand_id,
        item_id: item.item_id,
        item_name: item.item_name,
        pref_id: item.pref_id,
        employee_id: orderDetails.employee_id,
        item_quantity_booker: item.item_quantity_booker,
        item_quantity_updated: item.item_quantity_booker != finalQty ? finalQty : null ,
        original_price: item.original_price,
        scheme_id: item.scheme_id || 0,
        scheme_type : item.scheme_type,
        scheme_bundle_interval:item.scheme_bundle_interval || 0,
        scheme_rule: item.scheme_rule,
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
        dispatch_status: 0,
        dispatch_qty: item.dispatch_qty,
        dispatch_amount: final_price,
        reasoning: '',
        distributor_id: orderDetails.distributor_id,
        division_id: selectedRetailer.division_id || 0,
        region_id: orderDetails.region_id,
        area_id: orderDetails.area_id,
        assigned_route_id: orderDetails.assigned_route_id,
        territory_id: orderDetails.territory_id,
        booked_order_value: item.booked_order_value || 0,
        booked_total_qty: item.booked_total_qty || 0,
        is_deleted: item.isDeleted,
        quantity: finalQty,
        gross_sale_amount: gross_sale_amount,
        item_retail_price: item.item_retail_price,
        total_retail_price: item.item_retail_price * stockQty, 
        
        tax_type: orderDetails.retailer_register == 1 ? 1:2,
        tax_class_id: item.tax_class_id,
        tax_applied_on : item.order_id && item.order_id > 0 ? item.tax_applied_on : this.taxAppliedOn(taxClasses,item.tax_class_id,orderDetails),
        tax_in_percentage  :   item.order_id && item.order_id > 0 ? item.tax_in_percentage : this.getGstTaxAmount(taxClasses,item.tax_class_id,orderDetails),
        adv_inc_tax_in_percentage:   item.order_id && item.order_id > 0 ? item.adv_inc_tax_in_percentage : this.getAdvIncTaxAmount(taxClasses,item.tax_class_id,orderDetails),
        gst_tax_amount :gst_tax,
        adv_inc_tax_amount :adv_inc_tax, 

        tax_in_value: tax_in_value,
        total_tax_amount: total_tax_amount,
        total_amount_after_tax: ttl_amnt_aftr_tax,
        total_discount: total_discount, 
        order_id: orderDetails.id,

        
      
        city_id:selectedRetailer.city_id,
        locality_id:orderDetails.booking_locality_id,
        neighbourhood_id:orderDetails.booking_neighbourhood_id,
        segment_id:orderDetails.segment_id,
        channel_id:selectedRetailer.retailer_type_id,
        main_category_id: item.main_category_id,
        sub_category_id : item.sub_category_id 
        
      };
      
      return orderItem;
    });
    return payLoadItems;
  }

  setOrderPayloadReturnedItems(orderDetails: any, selectedRetailer: any): any {
    const payLoadReturnedItems = orderDetails.returned_items.map((item) => {
      const payloadItem = {
        quantity_returned: +item.stockQty,
        executed_qty: -item.stockQty,
        id: item.id || 0,
        employee_id: orderDetails.employee_id,
        pref_id: item.pref_id,
        item_quantity_booker: 0,
        item_quantity_updated: 0,
        original_price: item.item_trade_price,
        scheme_discount: 0,
        unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
        merchant_discount: 0,
        merchant_discount_pkr: 0,
        unit_price_after_merchant_discount:item.unit_price_after_merchant_discount,
        special_discount: 0,
        unit_price_after_special_discount:item.unit_price_after_special_discount,
        booker_discount: item.extra_discount || 0,
        unit_price_after_individual_discount:item.unit_price_after_individual_discount ||item.unit_price_after_special_discount,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        brand_id: item.brand_id,
        item_id: item.item_id,
        item_name: item.item_name,
        scheme_id: 0,
        scheme_min_quantity: 0,
        scheme_quantity_free: 0,
        return_type: item.returnType || item.return_type,
        scheme_rule: '',
        gift_value: 0,
        parent_pref_id: item.child || item.parent_pref_id,
        parent_unit_id: item.parent_unit_id,
        parent_brand_id: item.brand_id,
        parent_tp: item.parent_trade_price || item.parent_tp,
        parent_qty_sold: 0,
        parent_value_sold: item.net_amount,
        final_price: item.net_amount,
        campaign_id: 0,
        item_status: item.is_active || item.item_status,
        dispatch_status: 0,
        dispatch_qty: 0,
        dispatch_amount: item.net_amount,
        reasoning: '',
        distributor_id: orderDetails.distributor_id,
        division_id: selectedRetailer.division_id || 0,
        region_id: orderDetails.region_id,
        area_id: orderDetails.area_id,
        assigned_route_id: orderDetails.assigned_route_id,
        territory_id: orderDetails.territory_id,
        booked_order_value: 0,
        booked_total_qty: 0,
        is_deleted: item.isDeleted,
        quantity: 0,
        gross_sale_amount: item.original_amount,
        total_retail_price: item.total_retail_price,
        tax_applied_on:null,
        tax_class_id: 0,
        tax_in_percentage: 0,
        tax_in_value: 0,
        total_tax_amount: 0,
        total_amount_after_tax: item.net_amount,
        total_discount: item.extra_discount
          ? item.extra_discount * +item.stockQty
          : 0,
        order_id: orderDetails.id,
      };
      return payloadItem;
    });
    return payLoadReturnedItems;
  }
}
