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

export interface DistributorPurchaseModel {
    dcDate: string;
    dcNo: string;
    invoiceDate: string;
    invoiceNo: string;
    poDate: string;
    poNo: string;
    receivedDate: string;
    receivedNo: string;
    remark: string;
    gst: number;
    fare: number;
    supplier: string;
    original_amount: number;
    discount: number;
    net_amount: number;
    items: Array<ItemModel>;
    free: Array<ItemModel>;
}
