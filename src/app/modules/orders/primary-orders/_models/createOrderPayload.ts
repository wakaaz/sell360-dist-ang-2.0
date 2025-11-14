import * as moment from 'moment';
import { PrimaryOrder } from './order';
import { PrimaryOrderItem } from './orderItems';

/**
 * Strongly-typed payload matching the required "save-order" body.
 * Note: Many numeric fields arrive as strings from the backend examples.
 * We keep them as number | string to allow either shape and avoid brittle casts.
 */
export interface ISchemeItemPayload {
  item_id: number | string;
  pref_id: number | string;
  unit_id: number | string;
  brand_id?: number | string;
  item_name?: string;
  item_retail_price?: number | string;
  item_trade_price?: number | string;
  scheme_id?: number | string;
  scheme_applied?: 0 | 1 | number | string;
  scheme_type?: string;
  scheme_rule?: number | string;
  scheme_min_qty?: number | string;
  scheme_discount?: number | string;
  scheme_datatype?: string;
  scheme_quantity_free?: number | string;
  scheme_discount_type?: number | string;
  main_cat?: number | string;
  sub_cat?: number | string;
  scheme_given_qty?: number | string;
}

export interface IOrderContentItemPayload {
  pref_id: number | string;
  item_id: number | string;
  item_name: string;
  item_sku: string;
  unit_id: number | string;
  is_tax: 0 | 1 | number | string;
  item_retail_price: number | string;
  tax_class_id: number | string;
  tax_amount: number | string;
  distributor_id: number | string;
  item_quantity_updated: number | string;
  booked_total_qty: number | string;
  booked_order_value: number | string;
  parent_qty_sold: number | string;
  quantity: number | string;
  trade_price: number | string;
  grass_amount: number | string;
  scheme_id: number | string;
  scheme_title?: string;
  scheme_applied: 0 | 1 | number | string;
  scheme_type: string;
  scheme_rule: number | string;
  scheme_datatype: string;
  scheme_discount: number | string;
  Grs_Amt_Af_TO: number | string;
  dist_discount: number | string;
  dist_discount_val: number | string;
  Grs_Amt_Af_TO_DD: number | string;
  special_discount: number | string;
  special_discount_val: number | string;
  booker_discount: number | string;
  booker_discount_val: number | string;
  Grs_Amt_Af_TO_DD_SD_BD: number | string;
  unit_price_bf_tax: number | string;
  unit_tax: number | string;
  total_tax: number | string;
  unit_price: number | string;
  final_price: number | string;
  gst_tax_amount: number | string;
  adv_inc_tax_amount: number | string;
  tax_type: number | string;
  tax_in_percentage: number | string;
  adv_inc_tax_in_percentage: number | string;
  total_gst: number | string;
  total_adv_inc_tax: number | string;
  ttl_amnt_aftr_tax: number | string;
  dispatch_qty: number | string;
  dispatch_amount: number | string;
  scheme_quantity_free: number | string;
  schemeItems?: ISchemeItemPayload[];
  secondary_items?: number | string;
  item_status?: number | string;
}

export interface ICreatePrimaryOrderPayload {
  _token?: string;
  date: string;
  distributor_id: number | string;
  employee_id: number | string;
  type: 'primary' | string;
  order_content: IOrderContentItemPayload[];
  frieght_price: number | string;
}

/**
 * Build one order-content line item from an existing PrimaryOrderItem.
 * This maps/calculates fields to match the required API payload.
 */
export function mapPrimaryOrderItemToPayload(
  item: PrimaryOrderItem,
  distributorId: number | string
): IOrderContentItemPayload {
  // Pull known runtime-only fields that may be attached during calculations
  const tradeOffer: number = (item as any).trade_offer || 0;
  const schemeTitle: string | undefined = (item as any)?.selectedScheme?.title;
  const isTax: number = (item as any)?.is_tax ?? 0;

  // Gross amounts on TP
  const grossAmount = item.grossPrice1; // unit_item_trade_price * parent_qty_sold
  const grossAfterTO = Math.max(0, grossAmount - tradeOffer);

  // Discounts
  const distDiscountPct = item.distributor_discount || 0;
  const distDiscountVal = item.distributorDiscount1 || 0;
  const specialDiscountVal = item.specialDiscount || 0;
  const bookerDiscountVal = item.extraDiscount || 0;
  const grossAfterAllDisc = Math.max(
    0,
    grossAfterTO - distDiscountVal - specialDiscountVal - bookerDiscountVal
  );

  const qty = item.parent_qty_sold || 0;
  const unitPriceBeforeTax = qty ? grossAfterAllDisc / qty : 0;

  // Taxes (computed earlier in EditOrderComponent.applyTaxesNew)
  const totalGst = (item as any)?.gst_tax || 0;
  const totalAdvIncTax = (item as any)?.advance_income_tax || 0;
  const totalTax = totalGst + totalAdvIncTax;
  const unitTax = qty ? totalTax / qty : 0;

  // Note: Some sample fields like gst_tax_amount/adv_inc_tax_amount can be interpreted
  // as tax rates; we keep them 0 unless you decide to set them from tax class meta.
  const gstTaxRateOrMeta = 0;
  const advIncTaxRateOrMeta = 0;

  // The sample shows "quantity" same as "parent_qty_sold" (packs), not total units.
  const packsQuantity = item.parent_qty_sold;

  return {
    pref_id: item.pref_id,
    item_id: item.item_id,
    item_name: item.item_name,
    item_sku: item.item_sku,
    unit_id: item.unit_id,
    is_tax: isTax,
    item_retail_price: item.unit_item_retail_price || item.item_retail_price,
    tax_class_id: item.tax_class_id,
    tax_amount: 0,
    distributor_id: distributorId,
    item_quantity_updated: 0,
    booked_total_qty: 0,
    booked_order_value: 0,
    parent_qty_sold: item.parent_qty_sold,
    quantity: packsQuantity,
    trade_price: item.unit_item_trade_price || item.parent_tp,
    grass_amount: grossAmount,
    scheme_id: item.scheme_id || 0,
    scheme_title: schemeTitle,
    scheme_applied: item.scheme_id ? 1 : 0,
    scheme_type: item.scheme_type || 'free_product',
    scheme_rule: item.scheme_rule || 0,
    scheme_datatype: 'product',
    scheme_discount: item.scheme_discount || item.scheme_discount_on_tp || 0,
    Grs_Amt_Af_TO: grossAfterTO,
    dist_discount: distDiscountPct,
    dist_discount_val: distDiscountVal,
    Grs_Amt_Af_TO_DD: Math.max(0, grossAfterTO - distDiscountVal),
    special_discount: item.special_discount || 0,
    special_discount_val: specialDiscountVal,
    booker_discount: item.booker_discount || 0,
    booker_discount_val: bookerDiscountVal,
    Grs_Amt_Af_TO_DD_SD_BD: grossAfterAllDisc,
    unit_price_bf_tax: unitPriceBeforeTax,
    unit_tax: unitTax,
    total_tax: totalTax,
    unit_price: unitPriceBeforeTax, // keep same as bf tax; adjust if API needs diff
    final_price: grossAfterAllDisc,
    gst_tax_amount: gstTaxRateOrMeta,
    adv_inc_tax_amount: advIncTaxRateOrMeta,
    tax_type: 2,
    tax_in_percentage: 2,
    adv_inc_tax_in_percentage: 2,
    total_gst: totalGst,
    total_adv_inc_tax: totalAdvIncTax,
    ttl_amnt_aftr_tax: grossAfterAllDisc + totalTax,
    dispatch_qty: 0,
    dispatch_amount: 0,
    scheme_quantity_free: item.scheme_quantity_free || 0,
    // Backends commonly accept either scheme_free_items or detailed schemeItems; set if needed:
    schemeItems: (item as any)?.scheme_free_items
      ? [
          {
            item_id: item.item_id,
            pref_id: item.pref_id,
            unit_id: item.unit_id,
            scheme_id: item.scheme_id || 0,
            scheme_applied: item.scheme_id ? 1 : 0,
            scheme_type: item.scheme_type || 'free_product',
            scheme_rule: item.scheme_rule || 0,
            scheme_min_qty: item.scheme_min_quantity || 0,
            scheme_discount: item.scheme_discount || 0,
            scheme_datatype: 'product',
            scheme_quantity_free: item.scheme_quantity_free || 0,
            scheme_given_qty:
              ((item as any)?.scheme_quantity_free as number) || 0,
          },
        ]
      : undefined,
    // Optional per your backend contract
    secondary_items: undefined,
    item_status: 1,
  };
}

/**
 * Build a complete create-order payload from an existing PrimaryOrder.
 * Token is optional; pass it if your API requires CSRF in the body.
 */
export function buildCreateOrderPayloadFromPrimaryOrder(
  order: PrimaryOrder,
  distributorId: number,
  employeeId: number
): ICreatePrimaryOrderPayload {
  const dateStr = order?.date
    ? moment(order.date).format('YYYY-MM-DD')
    : moment().format('YYYY-MM-DD');

  const content: IOrderContentItemPayload[] = (order.orderContent || []).map(
    (item) => mapPrimaryOrderItemToPayload(item, distributorId)
  );

  const payload: ICreatePrimaryOrderPayload = {
    date: dateStr,
    distributor_id: distributorId,
    employee_id: employeeId,
    type: 'primary',
    order_content: content,
    frieght_price: order.frieght_price || 0,
  };

  return payload;
}
