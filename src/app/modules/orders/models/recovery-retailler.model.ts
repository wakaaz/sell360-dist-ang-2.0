export class RecoveryRetailer {
  // private static instance: RecoveryRetailer;
  // private constructor() {}

  // public static getInstance(): RecoveryRetailer {
  //   if (!RecoveryRetailer.instance) {
  //     RecoveryRetailer.instance = new RecoveryRetailer();
  //   }
  //   return RecoveryRetailer.instance;
  // }

  private _id: number;
  public get id(): number {
    return this._id || 0;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _shop_code: string;
  public get shop_code(): string {
    return this._shop_code;
  }
  public set shop_code(v: string) {
    this._shop_code = v;
  }

  private _invoice_number: string;
  public get invoice_number(): string {
    return this._invoice_number;
  }
  public set invoice_number(v: string) {
    this._invoice_number = v;
  }

  private _retailer_name: string;
  public get retailer_name(): string {
    return this._retailer_name;
  }
  public set retailer_name(v: string) {
    this._retailer_name = v;
  }

  private _retailer_id: number;
  public get retailer_id(): number {
    return this._retailer_id;
  }
  public set retailer_id(v: number) {
    this._retailer_id = v;
  }

  private _aging: number;
  public get aging(): number {
    return this._aging;
  }
  public set aging(v: number) {
    this._aging = v;
  }

  public get agingValue(): string | number {
    return this._aging > 0 ? this._aging : 'N/A';
  }

  private _amount: number;
  public get amount(): number {
    return this._amount;
  }
  public set amount(v: number) {
    this.maxAddedToCurrent = this.balance;
    this._amount = v;
  }

  private _invoice_discount: number;
  public get invoice_discount(): number {
    return this._invoice_discount || 0;
  }

  public set invoice_discount(v: number) {
    if (v > this.amount) {
      this._invoice_discount = 0;
      setTimeout(() => {
        this._invoice_discount = this.amount;
      }, 0);
    } else {
      this._invoice_discount = v;
    }
  }

  public get balance(): number {
    return this.amount - this.invoice_discount;
  }

  private _maxAddedToCurrent: number;
  public get maxAddedToCurrent(): number {
    return this._maxAddedToCurrent;
  }
  public set maxAddedToCurrent(v: number) {
    this._maxAddedToCurrent = v;
  }

  private _added_to_current: number;
  public get added_to_current(): number {
    if (this._added_to_current > this.balance) {
      this._added_to_current = this.balance;
    } else {
      return this._added_to_current;
    }
  }

  public set added_to_current(v: number) {
    if (v > this.balance) {
      this._added_to_current = 0;
      setTimeout(() => {
        this._added_to_current = this.balance;
      }, 0);
    } else {
      this._added_to_current = v;
    }
  }

  private _is_added: number;
  public get is_added(): number {
    return this._is_added;
  }
  public set is_added(v: number) {
    this._is_added = v;
  }

  private _order_Id: number;
  public get order_Id(): number {
    return this._order_Id;
  }
  public set order_Id(v: number) {
    this._order_Id = v;
  }

  public get isAddToBill(): boolean {
    return this.invoice_discount > 0 || this.added_to_current > 0
      ? false
      : true;
  }
}

export const set_retailer_credit_Invoices_data = (
  recoveryRetailerData: any,
  RecoveryRetailerArray: RecoveryRetailer[]
) => {
  for (let index = 0; index < recoveryRetailerData.length; index++) {
    const element = getRecoveRetailerObject(recoveryRetailerData[index]);
    RecoveryRetailerArray.push(element);
  }
  return RecoveryRetailerArray;
};

export const getRecoveRetailerObject = (recoveryRetailerData: any) => {
  const recoveryRetailerObj = new RecoveryRetailer();
  recoveryRetailerObj.added_to_current = recoveryRetailerData.added_to_current;
  recoveryRetailerObj.aging = recoveryRetailerData.aging;
  recoveryRetailerObj.amount = recoveryRetailerData.amount;
  recoveryRetailerObj.invoice_discount = recoveryRetailerData.invoice_discount;
  recoveryRetailerObj.invoice_number = recoveryRetailerData.invoice_number;
  recoveryRetailerObj.is_added = recoveryRetailerData.is_added;

  recoveryRetailerObj.retailer_id = recoveryRetailerData.retailer_id;
  recoveryRetailerObj.retailer_name = recoveryRetailerData.retailer_name;
  recoveryRetailerObj.order_Id = recoveryRetailerData.order_Id;
  recoveryRetailerObj.id = recoveryRetailerData.id;
  recoveryRetailerObj.shop_code = recoveryRetailerData.shop_code;
  return recoveryRetailerObj;
};

export const deleteRetailerCreditInvoice = (id: number) => {
  return {
    id,
    operation: 'remove',
  };
};

export const getRetailersCreditInvoice = (
  recoveryRetailerData: RecoveryRetailer,
  parentOrderId: string,
  assignmentId: string
) => {
  const postModel = {
    invoice_number: recoveryRetailerData.invoice_number,
    parent_order_id: parentOrderId,
    retailer_id: recoveryRetailerData.retailer_id,
    order_id: recoveryRetailerData.order_Id || null,
    assignment_id: assignmentId,
    invoice_balance: recoveryRetailerData.amount,
    added_amount: recoveryRetailerData.added_to_current,
    invoice_discount: recoveryRetailerData.invoice_discount,
    operation: 'add',
  };
  return postModel;
  // const recoveryRetailerObj = new RecoveryRetailer();
  // recoveryRetailerObj.added_to_current = recoveryRetailerData.added_to_current;
  // recoveryRetailerObj.aging = recoveryRetailerData.aging;
  // recoveryRetailerObj.amount = recoveryRetailerData.amount;
  // recoveryRetailerObj.invoice_discount = recoveryRetailerData.invoice_discount;
  // recoveryRetailerObj.invoice_number = recoveryRetailerData.invoice_number;
  // recoveryRetailerObj.is_added = recoveryRetailerData.is_added;

  // recoveryRetailerObj.retailer_id = recoveryRetailerData.retailer_id;
  // recoveryRetailerObj.retailer_name = recoveryRetailerData.retailer_name;
  // recoveryRetailerObj.shop_code = recoveryRetailerData.shop_code;
  // return recoveryRetailerObj;
};
