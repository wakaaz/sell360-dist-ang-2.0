export interface Slab {
  id: number;
  channel_id: number;
  discount_filter: string;
  discount_slab_id: number;
  discount_type: string;
  flat: number;
  name: string;
  region_id: number;
  segment_id: number;
  slab_type: number;
  slab_items: number[];
  slab: SlabDetail[];
}
export interface SlabDetail {
  id: number;
  slab_rule: number;
  channel_id: number;
  discount_filter: string;
  discount_slab_id: number;
  discount_type: string;
  flat: number;
  name: string;
  region_id: number;
  segment_id: number;
  slab_type: number;
  range_from: number;
  range_to: number;
  value: 0;
}
