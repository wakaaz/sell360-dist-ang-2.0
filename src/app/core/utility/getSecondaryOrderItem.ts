import { Inventory } from 'src/app/modules/orders/primary-orders/_models/inventory';
import { SecondaryOrderItems } from 'src/app/modules/orders/primary-orders/_models/secondaryOrderItems';

const getSecondaryOrderItem = (prod: Inventory) => {
  const orderItem: SecondaryOrderItems = new SecondaryOrderItems();
  
  orderItem.prefId = prod.pref_id;
  orderItem.itemQuantityUpdated = 0;
  orderItem.quantityReturned = 0;
  orderItem.orignalPrice = 0;
  orderItem.quantity = +prod.stockQty;
  orderItem.isExclusive = prod.is_exclusive;
  orderItem.divisionId = prod.division_id;
  orderItem.itemName = prod.item_name;
  orderItem.unitName = prod.unit_name;
  orderItem.unitId = prod.unit_id;
  orderItem.sub_category_id = prod.sub_category_id;
  orderItem.brandId = prod.brand_id;
  orderItem.itemId = prod.item_id;
  orderItem.tradePrice = prod.item_trade_price;
  
  orderItem.parent_pref_id = prod.parent_pref_id;
  if (prod.selectedScheme) {
    orderItem.selectedScheme = prod.selectedScheme;
    orderItem.schemeId = prod.selectedScheme.id;
    orderItem.rule_name = prod.selectedScheme.rule_name;
    orderItem.schemeName = prod.selectedScheme.name;
    orderItem.scheme_type = prod.selectedScheme.scheme_type;
    orderItem.scheme_min_quantity = prod.selectedScheme.min_qty;
    orderItem.scheme_quantity_free = prod.selectedScheme.quantity_free;
    orderItem.scheme_discount_on_tp = prod.selectedScheme.discount_on_tp;
  } else {
    orderItem.schemeId = 0;
    orderItem.rule_name = '';
    orderItem.schemeName = '';
    orderItem.scheme_type = '';
    orderItem.scheme_min_quantity = 0;
    orderItem.scheme_quantity_free = 0;
    orderItem.scheme_discount_on_tp = 0;
  }

  orderItem.special_discount = 0;
  orderItem.tax_amount = prod.tax_class_amount;
  orderItem.item_retail_price = prod.item_retail_price;
  // orderItem.schemeId = prod.sc
  // orderItem.schemeMinQty = prod.sche
  // orderItem.schemeQuantityFree = prod.schemes
  // orderItem.schemeRule = prod.sc
  // orderItem.giftValue = prod
  orderItem.parentUnitId = prod.parent_unit_id;
  // orderItem.parentBrandId = prod.para;
  orderItem.parentTp = prod.item_trade_price;
  orderItem.sub_inventory_quantity = prod.sub_inventory_quantity;
  // orderItem.parentQtySold = prod.quantity;
  // orderItem.parentValueSold = prod.par
  // orderItem.
  return orderItem;
};

export default getSecondaryOrderItem;
