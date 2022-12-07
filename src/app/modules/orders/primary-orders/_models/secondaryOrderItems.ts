import { FREE_PRODUCT_RULES } from 'src/app/core/constants/schemes.constant';
import Utility from 'src/app/core/utility/orderCalculation';
import { environment } from 'src/environments/environment';
// import Utility from '../_utility/order-calculation';
// import { PrimaryOrder } from './order.model';
// import { environment } from '../../../../environments/environment';
import { SecondaryOrder } from './secondaryOrder.model';

export class SecondaryOrderItems {
  private _prefId: number;
  public get prefId(): number {
    return this._prefId;
  }
  public set prefId(v: number) {
    this._prefId = v;
  }

  private _sub_inventory_quantity: number;
  public get sub_inventory_quantity(): number {
    return this._sub_inventory_quantity;
  }
  public set sub_inventory_quantity(v: number) {
    this._sub_inventory_quantity = v;
  }

  private _sub_category_id: number;
  public get sub_category_id(): number {
    return this._sub_category_id;
  }
  public set sub_category_id(v: number) {
    this._sub_category_id = v;
  }

  private _booker_discount: number;
  public get booker_discount(): number {
    return this._booker_discount || 0;
  }
  public set booker_discount(v: number) {
    this._booker_discount = v || 0;
  }

  private _itemQuantityUpdated: number;
  public get itemQuantityUpdated(): number {
    return this._itemQuantityUpdated;
  }
  public set itemQuantityUpdated(v: number) {
    this._itemQuantityUpdated = v;
  }

  public get totalBill(): number {
    // console.log('grossPrice ', this.grossPrice);
    // console.log('tradeOffer ', this.tradeOffer);
    // console.log('distributorDiscount ', this.distributorDiscount);
    // console.log('specialDiscount ', this.specialDiscount);
    // console.log('tax ', this.tax);
    return (
      this.grossPrice -
      this.tradeOffer -
      this.distributorDiscount -
      this.specialDiscount -
      this.total_trade_discount_pkr -
      this.extraDiscount +
      this.tax
    );
  }

  private _maxBookerDiscount: number;
  public get maxBookerDiscount(): number {
    return this._maxBookerDiscount;
  }
  public set maxBookerDiscount(v: number) {
    this._maxBookerDiscount = v;
  }

  public get unit_price_after_booker_discount(): number {
    return (this.grossPrice - this.extraDiscount) / this.quantity;
  }

  // booker discount and extra discount are the same in this project
  public get extraDiscount(): number {
    return Utility.calExtraOrBookerDiscount(
      this.booker_discount,
      this.quantity
    );
  }

  private _quantityReturned: number;
  public get quantityReturned(): number {
    return this._quantityReturned;
  }
  public set quantityReturned(v: number) {
    this._quantityReturned = v;
  }

  private _orignalPrice: number;
  public get orignalPrice(): number {
    return this._orignalPrice;
  }
  public set orignalPrice(v: number) {
    this._orignalPrice = v;
  }

  // scheme_discount
  // unit_price_after_scheme_discount
  // merchant_discount
  // merchant_discount_pkr
  // unit_price_after_merchant_discount
  // special_discount
  // unit_price_after_special_discount
  // booker_discount
  // unit_price_after_individual_discount

  private _quantity: number;
  public get quantity(): number {
    return this._quantity;
  }

  private _tax_amount: number;
  public get tax_amount(): number {
    return this._tax_amount;
  }
  public set tax_amount(v: number) {
    this._tax_amount = v;
  }

  public get tax(): number {
    return Utility.calTax(
      this.tax_amount,
      this.item_retail_price,
      this.quantity
    );
  }

  private _item_retail_price: number;
  public get item_retail_price(): number {
    return this._item_retail_price;
  }
  public set item_retail_price(v: number) {
    this._item_retail_price = v;
  }

  public get totalBillWithoutExtraDisocunt(): number {
    return (
      this.grossPrice -
      this.tradeOffer -
      this.distributorDiscount -
      this.specialDiscount +
      this.tax
    );
  }
  public set quantity(v: number) {
    this._quantity = v;
    this.maxBookerDiscount = this.totalBillWithoutExtraDisocunt / this.quantity;
  }

  public get unit_price_after_distributor_discount(): number {
    return (this.grossPrice - this.distributorDiscount) / this.quantity;
  }

  private _distributor_discount: number;
  public get distributor_discount(): number {
    return this._distributor_discount;
  }
  public set distributor_discount(v: number) {
    this._distributor_discount = v;
  }

  public get distributorDiscount(): number {
    return (
      Utility.calDistributorDiscount(
        this.distributor_discount,
        this.parentTp,
        this.quantity
      ) || 0
    );
  }

  private _tradePrice: number;
  public get tradePrice(): number {
    return this._tradePrice;
  }
  public set tradePrice(v: number) {
    this._tradePrice = v;
  }

  private _scheme_id: number;
  public get scheme_id(): number {
    return this._scheme_id;
  }
  public set scheme_id(v: number) {
    this._scheme_id = v;
  }

  private _rule_name: string;
  public get rule_name(): string {
    return this._rule_name || '';
  }
  public set rule_name(v: string) {
    this._rule_name = v;
  }

  private _scheme_type: string;
  public get scheme_type(): string {
    return this._scheme_type;
  }
  public set scheme_type(v: string) {
    this._scheme_type = v;
  }

  private _scheme_min_quantity: number;
  public get scheme_min_quantity(): number {
    return this._scheme_min_quantity || 0;
  }
  public set scheme_min_quantity(v: number) {
    this._scheme_min_quantity = v;
  }

  private _scheme_quantity_free: number;
  public get scheme_quantity_free(): number {
    return this._scheme_quantity_free || 0;
  }
  public set scheme_quantity_free(v: number) {
    this._scheme_quantity_free = v;
  }

  private _scheme_discount_on_tp: number;
  public get scheme_discount_on_tp(): number {
    return this._scheme_discount_on_tp;
  }
  public set scheme_discount_on_tp(v: number) {
    this._scheme_discount_on_tp = v;
  }

  public get grossPrice(): number {
    return Utility.calGrossAmount(this.parentTp, this.quantity);
  }

  public get totalPriceAfterSchemeDiscount(): number {
    return this.unit_price_after_scheme_discount * this.quantity;
  }

  private _schemeName: string;
  public get schemeName(): string {
    return this._schemeName;
  }
  public set schemeName(v: string) {
    this._schemeName = v;
  }

  public get tradeOffer(): number {
    const order = SecondaryOrder.getInstance;
    if (
      // order.creditOrderType !==
      //   environment.CREDIT_ORDER_TYPE.Credit_Order_Without_Discount &&
      this.schemeId &&
      this.rule_name !== FREE_PRODUCT_RULES.FREE_PRODUCTS
    ) {
      const tradeDiscountCal =
        Utility.calTradeOfferPrice(
          this.scheme_type,
          this.scheme_min_quantity,
          this._scheme_quantity_free,
          this.quantity,
          this.scheme_discount_on_tp,
          this.rule_name,
          this.grossPrice,
          this.parentTp
        ) || 0;
      return tradeDiscountCal;
    } else {
      return 0;
    }
  }

  private _special_discount: number;
  public get special_discount(): number {
    return this._special_discount || 0;
  }
  public set special_discount(v: number) {
    this._special_discount = v;
  }

  public get specialDiscount(): number {
    return Utility.calSpeacialDiscount(this.special_discount, this.quantity);
  }

  public get total_trade_discount_pkr(): number {
    const order = SecondaryOrder.getInstance;

    if (
      order.creditOrderType !==
      environment.CREDIT_ORDER_TYPE.Credit_Order_Without_Discount
    ) {
      return this.unitTradeDiscountPkr * this.quantity;
    } else {
      return 0;
    }
  }

  private _unitTradeDiscountPkr: number;
  public get unitTradeDiscountPkr(): number {
    return this._unitTradeDiscountPkr;
  }
  public set unitTradeDiscountPkr(v: number) {
    this._unitTradeDiscountPkr = v;
  }

  public get unit_price_after_special_discount(): number {
    return (this.grossPrice - this.specialDiscount) / this.quantity;
  }

  public get tradeDiscount(): number {
    const order = SecondaryOrder.getInstance;
    if (
      order.slabs.length
      // order.creditOrderType !==
      // environment.CREDIT_ORDER_TYPE.Credit_Order_Without_Discount
    ) {
      const discount = Utility.calTradeDiscountPrice(
        this.quantity,
        this.unit_price_after_scheme_discount,
        this.totalPriceAfterSchemeDiscount,
        this
      );
      if (order.orderContext === environment.SLAB_TYPE.ALL) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }
      if (
        order.orderContext === environment.SLAB_TYPE.NORMAL &&
        this.isExclusive === 0
      ) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }
      if (
        order.orderContext === environment.SLAB_TYPE.EXCLUSIVE &&
        this.isExclusive === 1
      ) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }

      if (order.orderContext === environment.SLAB_TYPE.CATEGORY_BASE) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }
      if (order.orderContext === environment.SLAB_TYPE.BRAND_BASE) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }
      if (order.orderContext === environment.SLAB_TYPE.SKU_BASE) {
        this.unitTradeDiscountPkr = discount.dicsountValuePkr;
        return discount.tradeDiscount;
      }
    } else {
      this.unitTradeDiscountPkr = 0;
      return 0;
    }
    if (!this.unitTradeDiscountPkr && this.unitTradeDiscountPkr !== 0) {
      this.unitTradeDiscountPkr = 0;
      return 0;
    }
  }

  public get(): number {
    if (this.schemeId && this.rule_name === FREE_PRODUCT_RULES.FREE_PRODUCTS) {
      const offerDiscount = Utility.calTradeOfferPrice(
        this.scheme_type,
        this.scheme_min_quantity,
        this.scheme_quantity_free,
        this.quantity,
        this.scheme_discount_on_tp,
        this.rule_name,
        this.grossPrice,
        this.parentTp
      );
      return offerDiscount;
    } else {
      return 0;
    }
  }

  public get unit_price_after_scheme_discount(): number {
    return (this.grossPrice - this.tradeOffer) / this.quantity;
  }

  private _isExclusive: number;
  public get isExclusive(): number {
    return this._isExclusive;
  }
  public set isExclusive(v: number) {
    this._isExclusive = v;
  }

  private _divisionId: number;
  public get divisionId(): number {
    return this._divisionId;
  }
  public set divisionId(v: number) {
    this._divisionId = v;
  }

  private _itemName: string;
  public get itemName(): string {
    return this._itemName;
  }
  public set itemName(v: string) {
    this._itemName = v;
  }

  private _unitName: string;
  public get unitName(): string {
    return this._unitName;
  }
  public set unitName(v: string) {
    this._unitName = v;
  }

  private _unitId: number;
  public get unitId(): number {
    return this._unitId;
  }
  public set unitId(v: number) {
    this._unitId = v;
  }

  private _brandId: number;
  public get brandId(): number {
    return this._brandId;
  }
  public set brandId(v: number) {
    this._brandId = v;
  }

  private _itemId: number;
  public get itemId(): number {
    return this._itemId;
  }
  public set itemId(v: number) {
    this._itemId = v;
  }

  private _schemeId: number;
  public get schemeId(): number {
    return this._schemeId || 0;
  }
  public set schemeId(v: number) {
    this._schemeId = v;
  }

  private _schemeMinQty: number;
  public get schemeMinQty(): number {
    return this._schemeMinQty;
  }
  public set schemeMinQty(v: number) {
    this._schemeMinQty = v;
  }

  private _schemeQuantityFree: number;
  public get schemeQuantityFree(): number {
    return this._schemeQuantityFree;
  }
  public set schemeQuantityFree(v: number) {
    this._schemeQuantityFree = v;
  }

  private _schemeRule: string;
  public get schemeRule(): string {
    return this._schemeRule;
  }
  public set schemeRule(v: string) {
    this._schemeRule = v;
  }

  private _giftValue: number;
  public get giftValue(): number {
    return this._giftValue | 0;
  }
  public set giftValue(v: number) {
    this._giftValue = v;
  }

  private _parent_pref_id: number;
  public get parent_pref_id(): number {
    return this._parent_pref_id;
  }
  public set parent_pref_id(v: number) {
    this._parent_pref_id = v;
  }

  private _parentUnitId: number;
  public get parentUnitId(): number {
    return this._parentUnitId;
  }
  public set parentUnitId(v: number) {
    this._parentUnitId = v;
  }

  private _parentBrandId: number;
  public get parentBrandId(): number {
    return this._parentBrandId;
  }
  public set parentBrandId(v: number) {
    this._parentBrandId = v;
  }

  private _parentTp: number;
  public get parentTp(): number {
    return this._parentTp;
  }
  public set parentTp(v: number) {
    this._parentTp = v;
  }

  private _parentQtySold: number;
  public get parentQtySold(): number {
    return this.quantity / this.sub_inventory_quantity;
  }
  // public set parentQtySold(v: number) {
  //   this._parentQtySold = v;
  // }

  private _parentValueSold: number;
  public get parentValueSold(): number {
    return this._parentValueSold;
  }
  public set parentValueSold(v: number) {
    this._parentValueSold = v;
  }

  private _finalPrice: number;
  public get finalPrice(): number {
    return this._finalPrice;
  }
  public set finalPrice(v: number) {
    this._finalPrice = v;
  }

  private _campaignId: number;
  public get campaignId(): number {
    return this._campaignId;
  }
  public set campaignId(v: number) {
    this._campaignId = v;
  }

  private _itemStatus: number;
  public get itemStatus(): number {
    return this._itemStatus;
  }
  public set itemStatus(v: number) {
    this._itemStatus = v;
  }

  private _dispatchStatus: number;
  public get dispatchStatus(): number {
    return this._dispatchStatus;
  }
  public set dispatchStatus(v: number) {
    this._dispatchStatus = v;
  }

  private _reasoning: string;
  public get reasoning(): string {
    return this._reasoning;
  }
  public set reasoning(v: string) {
    this._reasoning = v;
  }

  private _orderId: number;
  public get orderId(): number {
    return this._orderId;
  }
  public set orderId(v: number) {
    this._orderId = v;
  }

  private _distributorId: number;
  public get distributorId(): number {
    return this._distributorId;
  }
  public set distributorId(v: number) {
    this._distributorId = v;
  }

  private _regionId: number;
  public get regionId(): number {
    return this._regionId;
  }
  public set regionId(v: number) {
    this._regionId = v;
  }

  private _areaId: number;
  public get areaId(): number {
    return this._areaId;
  }
  public set areaId(v: number) {
    this._areaId = v;
  }

  private _assignedRouteId: number;
  public get assignedRouteId(): number {
    return this._assignedRouteId;
  }
  public set assignedRouteId(v: number) {
    this._assignedRouteId = v;
  }

  private _territoryId: number;
  public get territoryId(): number {
    return this._territoryId;
  }
  public set territoryId(v: number) {
    this._territoryId = v;
  }

  private _bookedOrderValue: number;
  public get bookedOrderValue(): number {
    return this._bookedOrderValue;
  }
  public set bookedOrderValue(v: number) {
    this._bookedOrderValue = v;
  }

  private _bookedTotalQty: number;
  public get bookedTotalQty(): number {
    return this._bookedTotalQty;
  }
  public set bookedTotalQty(v: number) {
    this._bookedTotalQty = v;
  }

  private _grossSaleAmount: number;
  public get grossSaleAmount(): number {
    return this._grossSaleAmount;
  }
  public set grossSaleAmount(v: number) {
    this._grossSaleAmount = v;
  }

  private _taxClassId: number;
  public get taxClassId(): number {
    return this._taxClassId;
  }
  public set taxClassId(v: number) {
    this._taxClassId = v;
  }

  private _taxInPercentage: number;
  public get taxInPercentage(): number {
    return this._taxInPercentage;
  }
  public set taxInPercentage(v: number) {
    this._taxInPercentage = v;
  }

  private _taxInValue: number;
  public get taxInValue(): number {
    return this._taxInValue;
  }
  public set taxInValue(v: number) {
    this._taxInValue = v;
  }

  private _totalTaxAmount: number;
  public get totalTaxAmount(): number {
    return this._totalTaxAmount || 0;
  }
  public set totalTaxAmount(v: number) {
    this._totalTaxAmount = v;
  }

  private _totalAmountAfterTax: number;
  public get totalAmountAfterTax(): number {
    return this._totalAmountAfterTax;
  }
  public set totalAmountAfterTax(v: number) {
    this._totalAmountAfterTax = v;
  }

  private _totalDiscount: number;
  public get totalDiscount(): number {
    return this._totalDiscount || 0;
  }
  public set totalDiscount(v: number) {
    this._totalDiscount = v;
  }

  public get totalRetailPrice(): number {
    return this.quantity * this.item_retail_price;
  }
}
