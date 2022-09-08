import { Injectable } from '@angular/core';

@Injectable()
export class ExecutionService {
  constructor() {}

  setOrderPayloadItems(orderDetails: any, selectedRetailer: any): any {
    const payLoadItems = orderDetails.items.map((item) => {
      const payloadItem = {
        quantity_returned:
          item.dispatch_qty - item.stockQty > -1
            ? item.dispatch_qty - item.stockQty
            : 0,
        executed_qty: +item.stockQty,
        id: item.id || 0,
        employee_id: orderDetails.employee_id,
        pref_id: item.pref_id,
        item_quantity_booker: item.item_quantity_booker,
        item_quantity_updated: item.item_quantity_updated || 0,
        original_price: item.item_trade_price,
        scheme_discount: item.scheme_discount,
        unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
        merchant_discount: item.trade_discount,
        merchant_discount_pkr: item.trade_discount_pkr,
        unit_price_after_merchant_discount:
          item.unit_price_after_merchant_discount,
        special_discount: item.special_discount,
        unit_price_after_special_discount:
          item.unit_price_after_special_discount,
        booker_discount: item.extra_discount || 0,
        unit_price_after_individual_discount:
          item.unit_price_after_individual_discount || item.price,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        brand_id: item.brand_id,
        item_id: item.item_id,
        item_name: item.item_name,
        scheme_id: item.selectedScheme?.id || 0,
        scheme_min_quantity: item.selectedScheme?.min_qty || 0,
        scheme_quantity_free: item.selectedScheme?.quantity_free || 0,
        scheme_rule: item.selectedScheme?.rule_name || '',
        scheme_discount_type: item.selectedScheme?.discount_type || 0,
        gift_value: item.gift_value || 0,
        parent_pref_id: item.child || item.parent_pref_id,
        parent_unit_id: item.parent_unit_id,
        parent_brand_id: item.brand_id,
        parent_tp: item.parent_trade_price || item.parent_tp,
        parent_qty_sold: item.parent_qty_sold,
        parent_value_sold: item.net_amount,
        final_price: item.net_amount,
        campaign_id: item.selectedScheme?.id || 0,
        item_status: item.is_active || item.item_status,
        dispatch_status: 0,
        dispatch_qty: +item.dispatch_qty,
        dispatch_amount: item.net_amount,
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
        quantity: +item.stockQty,
        gross_sale_amount: item.original_amount,
        total_retail_price: item.item_retail_price * item.stockQty,
        tax_class_id: item.tax_class_id,
        tax_in_percentage: item.tax_class_amount,
        tax_in_value: item.tax_amount_value || 0,
        total_tax_amount: item.tax_amount_pkr || 0,
        total_amount_after_tax: item.net_amount,
        total_discount:
          item.scheme_discount * +item.stockQty +
          item.trade_discount_pkr * +item.stockQty +
          +item.stockQty * item.special_discount +
          item.extra_discount_pkr,
        order_id: orderDetails.id,
      };
      return payloadItem;
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
        unit_price_after_merchant_discount:
          item.unit_price_after_merchant_discount,
        special_discount: 0,
        unit_price_after_special_discount:
          item.unit_price_after_special_discount,
        booker_discount: item.extra_discount || 0,
        unit_price_after_individual_discount:
          item.unit_price_after_individual_discount ||
          item.unit_price_after_special_discount,
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
