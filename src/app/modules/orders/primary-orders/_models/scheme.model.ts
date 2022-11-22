export interface Scheme {
  discount_on_tp: number;
  division_id: number;
  start_date: Date;
  end_date: Date;
  gift_name: string;
  gift_picture: string;
  gift_value: number;
  id: number;
  min_qty: number;
  scheme_type: string;
  quantity_free: number;
  title: string;
  name: string;
  items: ItemModel[];
  rule_name: string;
  assignment: Assignment[];
}
export interface Assignment {
  except_retailers: string[];
  id: number;
  retailer_type_id: number;
  scheme_id: number;
  territories: string[];
}
export interface ItemModel {
  type: string;
  pref_id: number;
  unit_id: number;
  item_sku: number;
  item_id: number;
  item_name: string;
  unit_name: string;
  quantity: number;
  original_amount: number;
  tradePrice?: number;
  discount_type: string;
  discount_type_value: number;
  discount: number;
  net_amount: number;
}
