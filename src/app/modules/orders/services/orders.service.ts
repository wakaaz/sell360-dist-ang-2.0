import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { CounterSale } from '../models/counter-sale.model';
import { Scheme } from '../primary-orders/_models/scheme.model';

@Injectable()
export class OrdersService {
  private _ordersRetailers = new BehaviorSubject<any[]>([]);
  private _loadRetaillersRecovery = new BehaviorSubject<any>({});
  private _loadOutOfRouteRecovery = new BehaviorSubject<number>(-1);
  private _checkAllocationSuccess = new BehaviorSubject<boolean>(false);

  constructor(private baseService: HttpBaseService) {}

  private _schemes$ = new BehaviorSubject<Scheme[]>([]);
  get orderRetailers(): Observable<any> {
    return this._ordersRetailers.asObservable();
  }

  get checkAllocationSuccess(): Observable<any> {
    return this._checkAllocationSuccess.asObservable();
  }
  get schemes$() {
    return this._schemes$.asObservable();
  }
  get schemesList() {
    return this._schemes$.value;
  }
  setCheckAllocationSuccess(isCheckAllocationSuccess: boolean) {
    this._checkAllocationSuccess.next(isCheckAllocationSuccess);
  }

  get loadOutOfRouteRecovery(): any {
    return this._loadOutOfRouteRecovery;
  }
  get loadRetaillersRecovery(): Observable<any> {
    return this._loadRetaillersRecovery.asObservable();
  }

  setOrderRetailers(orderRetailers: any[]) {
    this._ordersRetailers.next(orderRetailers);
  }

  setLoadOutOfRouteRecovery(outOfRouteData: any) {
    console.log('servce out of route id = ', outOfRouteData);
    this._ordersRetailers.next(outOfRouteData);
  }

  setLoadRetaillersRecovery(isLoad: boolean) {
    this._loadRetaillersRecovery.next(isLoad);
  }

  getCounterSaleData(assignmentId = '0'): Observable<any> {
    if (assignmentId !== '0') {
      return this.baseService.get(
        API_URLS.COUNTER_SALE_DATA + `?assignment_id=${assignmentId}`
      );
    } else {
      return this.baseService.get(API_URLS.COUNTER_SALE_DATA);
    }
  }

  getProdSchemes() {
    this.baseService.get(API_URLS.GET_SCHEMES).subscribe((res) => {
      if (res.status === 200) {
        this._schemes$.next(res.data);
      }
    });
  }

  getCompletedOrdersLoadsheets(date): Observable<any> {
    return this.baseService.get(
      API_URLS.COMPLETED_ORDERS_LOAD_SHEETS + '?date=' + date
    );
  }

  getSchemes(): Observable<any> {
    return this.baseService.get(API_URLS.GET_SCHEMES);
  }

  getLoyaltyoffers(employee_id: number): Observable<any> {
    const url = `${API_URLS.GET_LOYALTY_OFFERS}/${employee_id}`;
    return this.baseService.get(url);
  }

  counterSaleOrder(order: CounterSale): Observable<any> {
    const url = `${API_URLS.ADD_COUNTER_SALE}`;
    return this.baseService.post(url, order);
  }

  getDiscountSlabs(): Observable<any> {
    const url = `${API_URLS.GET_DISCOUNT_SLABS}`;
    return this.baseService.get(url);
  }

  getTaxClasses(provinceId: number=0): Observable<any> {
    const url = `${API_URLS.GET_TAX_CLASSES}/${provinceId}`;
    return this.baseService.get(url);
  }

  getDiscountSlabsByChannel(
    segementId: number,
    channelId: number
  ): Observable<any> {
    const url = `${API_URLS.GET_SLABS_BY_CHANNEL}/${segementId}/${channelId}`;
    return this.baseService.get(url);
  }

  saveDispatchOrder(order: any): Observable<any> {
    const url = API_URLS.CREATE_DISPATCH;
    return this.baseService.post(url, order);
  }

  completeOrderDispatch(loadId: any): Observable<any> {
    const url = `${API_URLS.COMPLETE_DISPATCH}/${loadId}`;
    return this.baseService.get(url);
  }

  revertOrderDispatch(loadId: any): Observable<any> {
    const url = `${API_URLS.REVERT_DISPATCH}/${loadId}`;
    return this.baseService.get(url);
  }

  revertOrder(type: string, typeId: number): Observable<any> {
    const url = `${API_URLS.REVERT_ORDER}/${type}/${typeId}`;
    return this.baseService.get(url);
  }

  updateDispatchInvoiceDate(loadId: number, date: string): Observable<any> {
    const url = `${API_URLS.UPDATE_INVOICE_DETAIL}/${loadId}`;
    return this.baseService.post(url, { date });
  }

  getNewOrders(): Observable<any> {
    const url = `${API_URLS.GET_NEW_ORDERS}`;
    return this.baseService.get(url);
  }

  getSaleHistory(params = ''): Observable<any> {
    const url = `${API_URLS.GET_SALE_HISTORY}?${params}`;
    return this.baseService.get(url);
  }

  getSaleHistorySearchCriterias(): Observable<any> {
    const url = `${API_URLS.GET_SALE_HISTORY_SEARCH_CRITERIA}`;
    return this.baseService.get(url);
  }

  assignSalesMan(saleman: any): Observable<any> {
    const url = API_URLS.ASSIGN_SALESMAN;
    return this.baseService.post(url, saleman);
  }

  getDispatchOrdersListing(): Observable<any> {
    const url = `${API_URLS.DISPATCH_ORDER_LISTING}`;
    return this.baseService.get(url);
  }

  getViewOrdersByEmployee(id: number, date: string): Observable<any> {
    const url = `${API_URLS.VIEW_ORDERS}${id}/${date}`;
    return this.baseService.get(url);
  }

  getDispatchDetailBySalemanAndDate(
    id: number,
    assignId: string,
    date: string
  ): Observable<any> {
    const url = `${API_URLS.DISPATCH_DETAIL}/${date}/${id}/${assignId}`;
    return this.baseService.get(url);
  }

  getViewOrderDetailById(orderid: number): Observable<any> {
   
    const url = `${API_URLS.VIEW_ORDER_DETAIL}/${orderid}`;
    return this.baseService.get(url);
  }

  getOrderDetails(orderId: number, assignmentId = ''): Observable<any> {
    if (assignmentId !== '') {
      const url = `${API_URLS.ORDER_DETAIL}/${orderId}?assignment_id=${assignmentId}`;
      return this.baseService.get(url);
    } else {
      const url = `${API_URLS.ORDER_DETAIL}/${orderId}`;
      return this.baseService.get(url);
    }
  }

  getDispatchOrdersDetail(
    salemanId: number,
    date: string,
    assignId: string
  ): Observable<any> {
    const url = `${API_URLS.DISPATCH_ORDERS_DETAIL}/${salemanId}/${date}/${assignId}`;
    return this.baseService.get(url);
  }

  getCreditdatailsData(assignId: string): Observable<any> {
    const url = `${API_URLS.RETAILER_CREDIT_INVOICES}/${assignId}`;
    return this.baseService.get(url);
  }

  postRetailersCreditInvoices(model: any): Observable<any> {
    const url = `${API_URLS.ADD_RETAILE_RCREDIT_INVOICES}`;
    return this.baseService.post(url, model);
  }

  saveDispatchQuantityOrder(order: any): Observable<any> {
    const url = `${API_URLS.SAVE_DISPATCH}`;
    return this.baseService.post(url, order);
  }

  saveExecutionQuantityOrder(order: any): Observable<any> {
    const url = `${API_URLS.SAVE_EXECUTION}`;
    return this.baseService.post(url, order);
  }

  saveSpotSaleOrder(order: any): Observable<any> {
    const url = `${API_URLS.SAVE_SPOT}`;
    return this.baseService.post(url, order);
  }

  cancelOrder(orderId: number,delete_allocation:number=0,dispatch:number=0): Observable<any> {
    let url = `${API_URLS.CANCEL_ORDER}/${orderId}`;
    if(dispatch == 1){
       url = url+`?dispatch=1&delete_allocation=${delete_allocation}`;
    }
    return this.baseService.get(url);
  }
  holdOrder(order: number,dispatch:number=0): Observable<any> {
    let url = `${API_URLS.HOLD_ORDER}`;
    if(dispatch == 1){
      url = url+`?dispatch=1`;
   }
    return this.baseService.post(url, order);
  }

  canceleExecutionOrder(orderId: number): Observable<any> {
    const url = `${API_URLS.CANCEL_EXECUTION_ORDER}/${orderId}`;
    return this.baseService.get(url);
  }

  cancelSpotSaleOrder(orderId: number): Observable<any> {
    const url = `${API_URLS.CANCEL_SPOT_SALE}/${orderId}`;
    return this.baseService.get(url);
  }

  getExecutionList(): Observable<any> {
    const url = `${API_URLS.GET_EXECUTION_LIST}`;
    return this.baseService.get(url);
  }

  saveExecutionExpense(
    loadId: number,
    saleManId: number,
    date: string,
    expenses: Array<any>
  ): Observable<any> {
    const url = `${API_URLS.SAVE_EXPENSE}/${loadId}/${saleManId}/${date}`;
    return this.baseService.post(url, { expenses });
  }

  checkBalance(retailerId: number): Observable<any> {
    const url = `${API_URLS.CHECK_RETAILER_BALANCE}/${retailerId}`;
    return this.baseService.get(url);
  }

  getExectedOrdersListing(
    salemanId: number,
    date: string,
    loadId: number
  ): Observable<any> {
    const url = `${API_URLS.GET_EXECUTION_DETAILS}/${salemanId}/${date}/${loadId}`;
    return this.baseService.get(url);
  }

  getExecutionFinalLoad(
    loadId: number,
    outOfRouteRecovery: Array<any>
  ): Observable<any> {
    const url = `${API_URLS.EXECUTION_FINAL_SAVE}/${loadId}`;
    return this.baseService.post(url, {
      out_of_route_recovery: outOfRouteRecovery,
    });
  }

  getOutOfRouteRecovery(retailerId: number): Observable<any> {
    const url = `${API_URLS.EXECUTION_CHECK_RETAILER_BALANCE}/${retailerId}`;
    return this.baseService.get(url);
  }

  removeOutOfRuoteRecovery(paymentId: number): Observable<any> {
    const url = `${API_URLS.REMOVE_OUT_OF_ROUE_RECOVERY}/${paymentId}`;
    return this.baseService.get(url);
  }

  markCompeleteExecution(loadId: number, payload): Observable<any> {
    const url = `${API_URLS.EXECUTION_COMPLETE}/${loadId}`;
    return this.baseService.post(url, payload);
  }

  // '/extraLoadItemAllocation/{assignment_id}/{pref_id}'   BODY :: {"allocated_qty":"1"}
  extraLoadItemAllocation(
    assignment_id: string,
    pref_id: number,
    allocated_qty: number
  ): Observable<any> {
    const url = `${API_URLS.EXTRA_LOAD_ITEM_COMPLETE}/${assignment_id}/${pref_id}`;
    return this.baseService.post(url, { allocated_qty });
  }

  // getLoadOrdersPrefs/{assignment_id}/{pref_id}
  getLoadOrdersPrefs(assignment_id: string, pref_id: number): Observable<any> {
    const url = `${API_URLS.GET_LOAD_ORDERS_PREFS}/${assignment_id}/${pref_id}`;
    return this.baseService.get(url);
  }

  // /updateLoadOrderItemAllocation/{assignment_id}/{order_id}/{pref_id}    BODY :: {"allocated_qty":"1"}
  updateLoadOrderItemAllocation(
    assignment_id: string,
    order_id: number,
    pref_id: number,
    allocated_qty: number
  ): Observable<any> {
    const url = `${API_URLS.UPDATE_LOAD_ORDER_ITEM_ALLOCATION}/${assignment_id}/${order_id}/${pref_id}`;
    return this.baseService.post(url, { allocated_qty });
  }

  // GET:: /clearLoadItemAllocation/{assignment_id}/{pref_id}
  clearLoadItemAllocation(
    assignment_id: string,
    pref_id: number
  ): Observable<any> {
    const url = `${API_URLS.CLEAR_LOAD_ITEM_ALLOCATION}/${assignment_id}/${pref_id}`;
    return this.baseService.get(url);
  }

  // GET:: /saveLoadItemAllocation/{assignment_id}
  saveLoadItemAllocation(assignment_id: string): Observable<any> {
    const url = `${API_URLS.SAVE_LOAD_ITEM_ALLOCATION}/${assignment_id}`;
    return this.baseService.get(url);
  }

  // GET:: /saveLoadItemAllocation/{assignment_id}
  verifyLoyalityOfferOnExecution(load_id: number): Observable<any> {
    const url = `${API_URLS.EXECUTION_VERIFY_LOYALITY_OFFER}/${load_id}`;
    return this.baseService.get(url);
  }

}
