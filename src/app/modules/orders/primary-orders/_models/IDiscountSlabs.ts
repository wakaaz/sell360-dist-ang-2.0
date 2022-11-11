export interface IDiscountSlabs {
  area_id: number;
  channel_id: number;
  created_at: Date;
  created_by: Date;
  discount_filter: string;
  discount_slab_id: number;
  discount_type: string;
  flat: string;
  id: number;
  name: string;
  region_id: number;
  segment_id: number;
  slab: ISlab[];
  slab_type: number;
  territory_id: number;
  updated_at: Date;
  updated_by: number;
}

export interface ISlab {
  created_at: Date;
  created_by: number;
  discount_filter: string;
  discount_slab_id: number;
  discount_type: string;
  id: 2;
  name: string;
  range_from: number;
  range_to: number;
  region_id: number;
  segment_id: number;
  slab_rule: string;
  slab_type: number;
  status: number;
  updated_at: Date;
  updated_by: number;
  value: number;
}
