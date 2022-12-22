import { environment } from 'src/environments/environment';
import { Inventory } from './inventory';
import { Retailer } from './retailer.model';
import { SecondaryOrderItems } from './secondaryOrderItems';
import { Slab } from './slab.model';

export class SecondaryOrder {
  private static instance: SecondaryOrder;
  // private constructor
  private constructor() {}

  // Singleton Pattern
  public static get getInstance(): SecondaryOrder {
    if (!SecondaryOrder.instance) {
      SecondaryOrder.instance = new SecondaryOrder();
    }
    return SecondaryOrder.instance;
  }

  private _id: number;
  public get id(): number {
    return this._id || 0;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _employeeId: number;
  public get employeeId(): number {
    return this._employeeId;
  }
  public set employeeId(v: number) {
    this._employeeId = v;
  }

  private _retailerId: number;
  public get retailerId(): number {
    return this._retailerId;
  }
  public set retailerId(v: number) {
    this._retailerId = v;
  }

  // selected retailer object

  private _retailer: Retailer;
  public get retailer(): Retailer {
    return this._retailer;
  }
  public set retailer(v: Retailer) {
    this._retailer = v;
  }

  private _withinRadiud: number;
  public get withinRadiud(): number {
    return this._withinRadiud;
  }
  public set withinRadiud(v: number) {
    this._withinRadiud = v;
  }

  // order type e.g normal or exclusive
  private _orderContext: number;
  public get orderContext(): number {
    return this._orderContext;
  }
  public set orderContext(v: number) {
    this._orderContext = v;
  }

  // order status e.g
  private _status: string;
  public get status(): string {
    return this._status;
  }
  public set status(v: string) {
    this._status = v;
  }

  private _statusCode: number;
  public get statusCode(): number {
    return this._statusCode;
  }
  public set statusCode(v: number) {
    this._statusCode = v;
  }

  // order_total

  private _totalQtySold: number;
  public get totalQtySold(): number {
    return this._totalQtySold;
  }
  public set totalQtySold(v: number) {
    this._totalQtySold = v;
  }

  private _totalProdcutSold: number;
  public get totalProdcutSold(): number {
    return this._totalProdcutSold;
  }
  public set totalProdcutSold(v: number) {
    this._totalProdcutSold = v;
  }

  private _remarks: string;
  public get remarks(): string {
    return this._remarks;
  }
  public set remarks(v: string) {
    this._remarks = v;
  }

  private _bookingRegion: number;
  public get bookingRegion(): number {
    return this._bookingRegion;
  }
  public set bookingRegion(v: number) {
    this._bookingRegion = v;
  }

  private _bookingArea: number;
  public get bookingArea(): number {
    return this._bookingArea;
  }
  public set bookingArea(v: number) {
    this._bookingArea = v;
  }

  private _bookingTerritory: number;
  public get bookingTerritory(): number {
    return this._bookingTerritory;
  }
  public set bookingTerritory(v: number) {
    this._bookingTerritory = v;
  }

  private _invoiceNumber: string;
  public get invoiceNumber(): string {
    return this._invoiceNumber;
  }
  public set invoiceNumber(v: string) {
    this._invoiceNumber = v;
  }

  private _freightCharges: number;
  public get freightCharges(): number {
    return this._freightCharges;
  }
  public set freightCharges(v: number) {
    this._freightCharges = v;
  }

  private _bookingZone: number;
  public get bookingZone(): number {
    return this._bookingZone;
  }
  public set bookingZone(v: number) {
    this._bookingZone = v;
  }

  private _bookingLocalityId: number;
  public get bookingLocalityId(): number {
    return this._bookingLocalityId;
  }
  public set bookingLocalityId(v: number) {
    this._bookingLocalityId = v;
  }

  private _bookingNeighbourhoodId: number;
  public get bookingNeighbourhoodId(): number {
    return this._bookingNeighbourhoodId;
  }
  public set bookingNeighbourhoodId(v: number) {
    this._bookingNeighbourhoodId = v;
  }

  private _salesManId: number;
  public get salesManId(): number {
    return this._salesManId;
  }
  public set salesManId(v: number) {
    this._salesManId = v;
  }

  private _spotSale: number;
  public get spotSAle(): number {
    return this._spotSale;
  }
  public set spotSAle(v: number) {
    this._spotSale = v;
  }

  private _counterSale: number;
  public get counterSale(): number {
    return this._counterSale;
  }
  public set counterSale(v: number) {
    this._counterSale = v;
  }

  private _invoiceDate: string;
  public get invoiceDate(): string {
    return this._invoiceDate;
  }
  public set invoiceDate(v: string) {
    this._invoiceDate = v;
  }

  // 'counter' | 'dispatched' | 'spot'
  // environment.orderType
  private _orderType: string;
  public get orderType(): string {
    return this._orderType;
  }
  public set orderType(v: string) {
    this._orderType = v;
  }

  private _distributorId: number;
  public get distributorId(): number {
    return this._distributorId;
  }
  public set distributorId(v: number) {
    this._distributorId = v;
  }

  // Selected Employee
  private _regionId: number;
  public get regionId(): number {
    return this._regionId;
  }
  public set regionId(v: number) {
    this._regionId = v;
  }

  private _employee_id: number;
  public get employee_id(): number {
    return this._employee_id;
  }
  public set employee_id(v: number) {
    this._employee_id = v;
  }

  private _retailerRegionId: number;
  public get retailerRegionId(): number {
    return this._retailerRegionId;
  }
  public set retailerRegionId(v: number) {
    this._retailerRegionId = v;
  }

  private _employee_name: string;
  public get employee_name(): string {
    return this._employee_name;
  }
  public set employee_name(v: string) {
    this._employee_name = v;
  }

  private _route_id: number;
  public get route_id(): number {
    return this._route_id;
  }
  public set route_id(v: number) {
    this._route_id = v;
  }

  private _retailerSegmentId: number;
  public get retailerSegmentId(): number {
    return this._retailerSegmentId;
  }
  public set retailerSegmentId(v: number) {
    this._retailerSegmentId = v;
  }

  // Selected Employee
  private _areaId: number;
  public get areaId(): number {
    return this._areaId;
  }
  public set areaId(v: number) {
    this._areaId = v;
  }

  // Selected Employee selectedRouteId
  private _assignedRouteId: number;
  public get assignedRouteId(): number {
    return this._assignedRouteId;
  }
  public set assignedRouteId(v: number) {
    this._assignedRouteId = v;
  }

  // Selected Employee
  private _territoryId: number;
  public get territoryId(): number {
    return this._territoryId;
  }
  public set territoryId(v: number) {
    this._territoryId = v;
  }

  private _creditOrderType: number;
  public get creditOrderType(): number {
    return this._creditOrderType;
  }
  public set creditOrderType(v: number) {
    this._creditOrderType = v;
  }

  private _creditSaleAt: Date;
  public get creditSaleAt(): Date {
    return this._creditSaleAt;
  }
  public set creditSaleAt(v: Date) {
    this._creditSaleAt = v;
  }

  private _completedAt: Date;
  public get completedAt(): Date {
    return this._completedAt;
  }
  public set completedAt(v: Date) {
    this._completedAt = v;
  }

  // private _bookedOrderValue
  // booked_total_qty
  // booked_total_skus
  // gross_sale_amount
  // total_retail_price
  // total_tax_amount
  // total_amount_after_tax
  // total_discount

  public get grossPrice(): number {
    return this._items ? this.getDiscountByField('grossPrice') : 0;
  }

  public get totalItemsQty(): number {
    const qty = this.getDiscountByField('quantity');
    return qty;
  }

  public get totalItemsCount(): number {
    return this.items ? this.items.length : 0;
  }

  public get totalTradeOffer(): number {
    return this.getDiscountByField('tradeOffer');
  }

  // total_trade_discount_pkr

  public get totalTradeDiscount(): number {
    return this.getDiscountByField('total_trade_discount_pkr');
  }

  private _allItems: Inventory[];
  public get allItems(): Inventory[] {
    return this._allItems;
  }
  public set allItems(v: Inventory[]) {
    this._allItems = v;
  }

  private _items: SecondaryOrderItems[];
  public get items(): SecondaryOrderItems[] {
    return this._items;
  }
  public set items(v: SecondaryOrderItems[]) {
    this._items = v;
  }

  private _slabs: Slab[];
  public get slabs(): Slab[] {
    return this._slabs || [];
  }
  public set slabs(v: Slab[]) {
    this._slabs = v;
  }

  public get bookerOrExtraDiscount(): number {
    return this.getDiscountByField('extraDiscount');
  }

  public get specialDiscount(): number {
    return this.getDiscountByField('specialDiscount');
  }

  public get tax(): number {
    return this.getDiscountByField('tax');
  }

  // totalBill

  public get totalBill(): number {
    return this.getDiscountByField('totalBill');
  }

  public get totalCash(): number {
    const totalAmmount = this.getDiscountByField('totalBill');
    let amount = totalAmmount;
    if (this.isCreditPaymentAdded) {
      amount = amount - this.creditPayment;
    }

    if (this.isCheckAdded) {
      amount = amount - this.checkPayment;
    }
    return amount;
  }

  public get totalDueAmount(): number {
    const ammount = this.getDiscountByField('totalBill') || 0;
    return ammount - this.creditPayment - this.checkPayment;
  }

  public get discount(): number {
    let discount: number = 0;
    if (this._items) {
      // const tradeDiscount = this.getDiscountByField('tradeOffer');
      // const distDiscount = this.getDiscountByField('distributorDiscount');
      // const speacialDiscount = this.getDiscountByField('specialDiscount');
      // const bookerDiscount = this.getDiscountByField('extraDiscount');
      discount =
        this.totalTradeDiscount +
        this.totalTradeOffer +
        this.specialDiscount +
        this.bookerOrExtraDiscount;
    }
    return discount;
  }

  public get totalRetailPrice(): number {
    return this.getDiscountByField('totalRetailPrice');
  }

  public get totalQty(): number {
    return this.getDiscountByField('quantity');
  }

  private getDiscountByField(field: string) {
    return this.items
      ? this.items.reduce((a: any, b: any) => a + b[field], 0)
      : 0;
  }

  private _isCheckAdded: boolean;
  public get isCheckAdded(): boolean {
    return this._isCheckAdded;
  }
  public set isCheckAdded(v: boolean) {
    if (!v) {
      this.checkPayment = 0;
    }
    this._isCheckAdded = v;
  }

  private _payment: any;
  public get payment(): any {
    return this._payment;
  }
  public set payment(v: any) {
    this._payment = v;
  }

  private _checkPayment: number;
  public get checkPayment(): number {
    return this._checkPayment || 0;
  }
  public set checkPayment(v: number) {
    this._checkPayment = v;
  }

  private _creditPayment: number;
  public get creditPayment(): number {
    return this._creditPayment || 0;
  }
  public set creditPayment(v: number) {
    this._creditPayment = v;
  }

  public get isShowCreditBtn(): boolean {
    return (
      parseInt(this.checkPayment.toString() || '0') !==
      parseInt(this.totalDueAmount.toString() || '0')
    );
  }

  private _isCreditPaymentFullAmount: boolean;
  public get isCreditPaymentFullAmount(): boolean {
    return this._isCreditPaymentFullAmount;
  }
  public set isCreditPaymentFullAmount(v: boolean) {
    this._isCreditPaymentFullAmount = v;
  }

  private _isChqueFullAmount: boolean;
  public get isChqueFullAmount(): boolean {
    return this._isChqueFullAmount;
  }
  public set isChqueFullAmount(v: boolean) {
    this._isChqueFullAmount = v;
  }

  public get showCheckButton(): boolean {
    return this.items ? (this.items.length > 0 ? true : false) : false;
  }
  private _isCreditPaymentAdded: boolean;
  public get isCreditPaymentAdded(): boolean {
    return this._isCreditPaymentAdded;
  }
  public set isCreditPaymentAdded(v: boolean) {
    if (!v) {
      this.creditPayment = 0;
    }
    this._isCreditPaymentAdded = v;
  }

  public get paymentDetails(): any {
    return this.paymentDetailObject();
  }

  public get isShowChequeAndCreditButtons(): boolean {
    // return this.creditOrderType === environment.CREDIT_ORDER_TYPE.Regular_Order;
    return true;
  }

  private _bankName: string;
  public get bankName(): string {
    return this._bankName;
  }
  public set bankName(v: string) {
    this._bankName = v;
  }

  private _chequeDate: string;
  public get chequeDate(): string {
    return this._chequeDate;
  }
  public set chequeDate(v: string) {
    this._chequeDate = v;
  }

  private _chequeNumber: string;
  public get chequeNumber(): string {
    return this._chequeNumber;
  }
  public set chequeNumber(v: string) {
    this._chequeNumber = v;
  }

  private paymentDetailObject(): any {
    const payments = [];

    const cashAcountEntry: any = {
      amount_received: this.totalCash,
      dispatched_bill_amount: 0,
      distributor_id: this.distributorId,
      payment_detail: '',
      payment_mode: 'Cash',
      recovery: 0,
      retailer_id: this.retailerId,
      type: this.orderType,
    };
    payments.push(cashAcountEntry);
    if (this.isCheckAdded) {
      const chequePaymentAcountEntry: any = {
        amount_received: this.checkPayment,
        dispatched_bill_amount: 0,
        distributor_id: this.distributorId,
        payment_detail: {
          bank_name: this.bankName,
          cheque_amount: this.checkPayment,
          cheque_date: this.chequeDate,
          cheque_number: this.chequeNumber,
        },
        payment_mode: 'Cheque',
        recovery: 0,
        retailer_id: this.retailerId,
        type: this.orderType,
      };
      payments.push(chequePaymentAcountEntry);
    }
    if (this.isCreditPaymentAdded) {
      const creditPaymentAcountEntry: any = {
        amount_received: this.creditPayment,
        dispatched_bill_amount: 0,
        distributor_id: this.distributorId,
        payment_detail: '',
        payment_mode: 'Credit',
        recovery: 0,
        retailer_id: this.retailerId,
        type: this.orderType,
      };
      payments.push(creditPaymentAcountEntry);
    }
    const paymentObject: any = {
      total_payment: this.totalBill,
      detail: payments,
    };
    return paymentObject;
  }
}
