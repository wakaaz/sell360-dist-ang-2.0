export interface ISchemeDiscount {
  assignment: [];
  discount_on_tp: number;
  discount_type: number;
  division_id: number;
  end_date: Date;
  gift_name: string;
  gift_picture: string;
  gift_value: number;
  id: number;
  min_qty: number;
  quantity_free: number;
  scheme_rule: number;
  scheme_type: string;
  start_date: Date;
  title: string;
  items: IItems[];
}

interface IItems {
  brand_name: string;
  category_name: string;
  id: number;
  item_id: number;
  item_image: string;
  item_name: string;
  pref_id: number;
  scheme_id: number;
  sku: string;
  unit_id: number;
  unit_name: string;
}
