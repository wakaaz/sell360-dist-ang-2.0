import { SecondaryOrder } from '../../modules/orders/primary-orders/_models/secondaryOrder.model';
import { environment } from '../../../environments/environment';
import { SecondaryOrderItems } from '../../modules/orders/primary-orders/_models/secondaryOrderItems';
import {
  Slab,
  SlabDetail,
} from 'src/app/modules/orders/primary-orders/_models/slab.model';
import {
  FREE_PRODUCT_RULES,
  SCHEME_RULES,
} from '../constants/schemes.constant';

class Utility {
  public static calTradeDiscountPrice(
    quantity: number,
    unit_price_after_scheme_discount: number,
    total_unit_price_after_scheme_discount: number,
    item: SecondaryOrderItems = null
  ): any {
    let discount = {
      dicsountValuePkr: 0,
      tradeDiscount: 0,
    };
    if (quantity <= 0) {
      return discount;
    }

    // get slabs that are saved in order model
    const order = SecondaryOrder.getInstance;
    const slabs: Slab[] = [...order.slabs] || [];

    // TODO: Remmove
    // const slabType = this.getSlabType(order.order)

    const fileteredSlabs = slabs.filter(
      (slab: Slab) =>
        slab.region_id === order.regionId &&
        slab.segment_id === order.retailer.segment_id &&
        slab.channel_id === order.retailer.type_id
      // &&
      // slab.slab_type === 0
    );
    const slabTypes = fileteredSlabs.map((x) => x.slab_type);

    let slabDiscount;
    const SLAB_TYPE = environment.SLAB_TYPE;
    const SLAB_RULE = environment.SLAB_RULE;
    switch (true) {
      case slabTypes.includes(SLAB_TYPE.ALL):
        order.orderContext = 0;
        slabDiscount = fileteredSlabs.find(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        break;
      case slabTypes.includes(SLAB_TYPE.NORMAL):
        order.orderContext = 1;
        slabDiscount = fileteredSlabs.find(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        break;
      case slabTypes.includes(SLAB_TYPE.EXCLUSIVE):
        order.orderContext = 2;
        slabDiscount = fileteredSlabs.find(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        break;
      case slabTypes.includes(SLAB_TYPE.CATEGORY_BASE):
        order.orderContext = 5;
        slabDiscount = fileteredSlabs.find(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        if (!slabDiscount.slab_items.includes(item.sub_category_id)) {
          slabDiscount = null;
        }
        break;
      case slabTypes.includes(SLAB_TYPE.BRAND_BASE):
        order.orderContext = 4;
        slabDiscount = fileteredSlabs.find(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        if (!slabDiscount.slab_items.includes(item.brandId)) {
          slabDiscount = null;
        }
        break;
      case slabTypes.includes(SLAB_TYPE.SKU_BASE):
        order.orderContext = 3;
        const availableSlabs = fileteredSlabs.filter(
          (slab: Slab) => slab.slab_type === order.orderContext
        );
        slabDiscount = availableSlabs.find((slab: Slab) =>
          slab.slab_items.includes(item.itemId)
        );
        if (!slabDiscount.slab_items.includes(item.itemId)) {
          slabDiscount = null;
        }
        break;
      default:
        // do nothing
        break;
    }
    if (!slabDiscount) {
      discount.dicsountValuePkr = 0;
      discount.dicsountValuePkr = 0;
      return discount;
    }
    if (slabDiscount.discount_filter === 'flat') {
      if (slabDiscount.flat === 'percentage') {
      }
      const slabDetail = slabDiscount.flat;
      discount.dicsountValuePkr =
        (slabDetail.value / 100) * unit_price_after_scheme_discount;
      discount.tradeDiscount = slabDetail.value;
    } else if (
      slabDiscount &&
      slabDiscount.discount_filter === 'slab' &&
      order.grossPrice
    ) {
      const slabDetail: SlabDetail = this.applyAbleSlab(
        { ...slabDiscount },
        order,
        quantity
      );

      if (slabDetail) {
        discount.dicsountValuePkr =
          (slabDetail.value / 100) * unit_price_after_scheme_discount;
        discount.tradeDiscount = slabDetail.value;
      }
    }

    return discount;
  }
  public static applyAbleSlab(
    slab: Slab,
    order: SecondaryOrder,
    quantity = 0
  ): SlabDetail {
    let matchedConditionAmount = 0;
    matchedConditionAmount = order.grossPrice;

    return slab.slab.find((slb) => {
      if (
        order.orderContext === environment.SLAB_TYPE.CATEGORY_BASE ||
        order.orderContext === environment.SLAB_TYPE.BRAND_BASE ||
        order.orderContext === environment.SLAB_TYPE.SKU_BASE
      ) {
        if (slb.slab_rule === environment.SLAB_RULE.RULE_2) {
          matchedConditionAmount = quantity;
        }
      }
      return (
        slb.range_from &&
        slb.range_to &&
        slb.range_from <= matchedConditionAmount &&
        slb.range_to >= matchedConditionAmount
      );
    });
  }
  // @param tradePrice => 1 quanity Price
  // @param totalQuanity => total item qty
  public static calGrossAmount(
    tradePrice: number,
    totalQuanity: number
  ): number {
    return tradePrice * totalQuanity;
  }
  public static calTradeOfferPrice(
    schemeType: string,
    schemeMinQty: number,
    schemeFreeQty: number,
    totalBookedQuantity: number,
    schemeDiscountAmount: number,
    schemeRuleName: string,
    grossPrice: number,
    tradePrice: number
  ): number {
    debugger;
    let schemeDiscountedAmount: number;
    switch (schemeType) {
      case SCHEME_RULES.DOTP:
        schemeDiscountedAmount = this.applyDOTPScheme(
          schemeMinQty,
          totalBookedQuantity,
          schemeDiscountAmount
        );
        break;
      case SCHEME_RULES.FREE_PRODUCT:
        switch (schemeRuleName) {
          case FREE_PRODUCT_RULES.DISCOUNT_ON_TRADE_PRICE:
            schemeDiscountedAmount = this.applyFreeProductDiscountOnTradePrice(
              schemeMinQty,
              schemeFreeQty,
              grossPrice,
              tradePrice,
              totalBookedQuantity
            );
            break;
          case FREE_PRODUCT_RULES.DISCOUNT_ON_HALF_QUANTITY:
            schemeDiscountedAmount =
              this.applyFreeProductDiscountOnHalfQuantity(
                schemeMinQty,
                schemeFreeQty,
                tradePrice,
                totalBookedQuantity
              );
            break;
          case FREE_PRODUCT_RULES.DISCOUNT_ON_MINIMUM_QUANTITY_RESTRICTION:
            schemeDiscountedAmount =
              this.applyFreeProductDiscountOnMinQuantityRes(
                schemeMinQty,
                schemeFreeQty,
                tradePrice,
                totalBookedQuantity
              );
            break;
          case FREE_PRODUCT_RULES.FREE_PRODUCTS:
            schemeDiscountedAmount =
              this.applyFreeProductMustProdDiscountOnMinQuantity(
                schemeMinQty,
                schemeFreeQty,
                totalBookedQuantity
              );
            break;
          default:
            break;
        }
      default:
        break;
    }
    return schemeDiscountedAmount;
  }
  static applyFreeProductMustProdDiscountOnMinQuantity(
    schemeMinQty: number,
    schemeFreeQty: number,
    totalBookedQuantity: number
  ): number {
    const schemeAbleQuantity: number = parseInt(
      (totalBookedQuantity / schemeMinQty).toString()
    );
    return this.multiply(schemeFreeQty, schemeAbleQuantity);
  }

  // Discount on minimumQuantityRestriction
  static applyFreeProductDiscountOnMinQuantityRes(
    schemeMinQty: number,
    schemeFreeQty: number,
    tradePrice: number,
    totalBookedQuantity: number
  ): number {
    const discountOnUnitQty: number = this.getDiscountOnUnitQty(
      tradePrice,
      schemeMinQty,
      schemeFreeQty
    );
    const discountableQty: number =
      schemeMinQty * parseInt((totalBookedQuantity / schemeMinQty).toString());
    const schemeDiscountAmount = this.multiply(
      discountOnUnitQty,
      discountableQty
    );
    return schemeDiscountAmount;
  }

  // only apply to multiples of minSchemeQty/2
  static applyFreeProductDiscountOnHalfQuantity(
    schemeMinQty: number,
    schemeFreeQty: number,
    tradePrice: number,
    totalBookedQuantity: number
  ): number {
    const discountOnUnitQty: number = this.getDiscountOnUnitQty(
      tradePrice,
      schemeMinQty,
      schemeFreeQty
    );
    const discountOnHalfQty = schemeMinQty / 2; // half sheme Qty
    const halfDiscount = discountOnUnitQty / 2;
    const discountableQty: number =
      discountOnHalfQty *
      parseInt((totalBookedQuantity / discountOnHalfQty).toString());
    const schemeDiscountAmount = this.multiply(halfDiscount, discountableQty);
    return schemeDiscountAmount;
  }

  static applyFreeProductDiscountOnTradePrice(
    minQuantity: number,
    freeQunatity: number,
    grossPrice: number,
    tradePrice: number,
    totalBookedQuantity: number
  ): number {
    const discountOnUnitQty: number = this.getDiscountOnUnitQty(
      tradePrice,
      minQuantity,
      freeQunatity
    );
    const schemeDiscountAmount: number = this.multiply(
      discountOnUnitQty,
      totalBookedQuantity
    );
    return schemeDiscountAmount;
  }

  // calc discount on unit quantity
  private static getDiscountOnUnitQty(
    tradePrice: number,
    minQuantity: number,
    freeQunatity: number
  ): number {
    return (
      tradePrice -
      this.calGrossAmount(tradePrice, minQuantity) /
        (minQuantity + freeQunatity)
    );
  }

  // calc miultiply two values
  private static multiply(fristValue: number, secondvalue: number): number {
    return fristValue * secondvalue;
  }

  // calc trade on trade price discount
  private static applyDOTPScheme(
    schemeMinQty: number,
    totalBookedQuantity: number,
    schemeDiscountAmount: number
  ): number {
    const quanitySchemeable: number = totalBookedQuantity / schemeMinQty;
    return parseInt(quanitySchemeable.toString()) * schemeDiscountAmount;
  }

  // distributorDiscountPercentage = distributor disocunt in percentage
  public static calDistributorDiscount(
    distributorDiscountPercentage: number,
    tradePrice: number,
    totalBookedQuantity: number
  ): number {
    const unitQtyDiscount = distributorDiscountPercentage * (tradePrice / 100);
    return unitQtyDiscount * totalBookedQuantity;
  }
  // special discount = pkr
  // total quantity
  public static calSpeacialDiscount(
    specialDiscount: number,
    totalBookedQuantity: number
  ): number {
    return specialDiscount * totalBookedQuantity;
  }

  // extraOrbookerDiscount= pkr
  // total quantity
  public static calExtraOrBookerDiscount(
    extraOrbookerDiscount: number,
    totalBookedQuantity: number
  ): number {
    return extraOrbookerDiscount
      ? extraOrbookerDiscount * totalBookedQuantity
      : 0;
  }

  // tax in percentage
  public static calTax(
    taxPercentagevalue: number,
    retailPrice: number,
    totalBookedQuantity: number
  ): number {
    const unitItemDicosunt = (taxPercentagevalue * retailPrice) / 100;
    return unitItemDicosunt * totalBookedQuantity;
  }
}

export default Utility;

// extra_discount-booker-discount => qty*booker_discount < netAmount
// net amount  => gross_amt - trade_offer - dist_disct - sp_dist - extra_booker_discount + toal_tax'
// sp_discount => sp_disc * qty
// distributor % get => (dist * (t.p)/100) * total_booked_qty
// tax_retail_price pr lagna h
// tax = ((tax* (retail_price))/100) * total_booked_qty
// trade_offer =>
