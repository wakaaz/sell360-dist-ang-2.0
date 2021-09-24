import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { CounterSale } from '../models/counter-sale.model';

@Injectable()
export class OrdersService {

    constructor(
        private baseService: HttpBaseService
    ) {
    }

    getCounterSaleData(): Observable<any> {
        return this.baseService.get(API_URLS.COUNTER_SALE_DATA);
    }

    getSchemes(): Observable<any> {
        return this.baseService.get(API_URLS.GET_SCHEMES);
    }

    counterSaleOrder(order: CounterSale): Observable<any> {
        const url = `${API_URLS.ADD_COUNTER_SALE}`;
        return this.baseService.post(url, order);
    }

    getDiscountSlabs(): Observable<any> {
        const url = `${API_URLS.GET_DISCOUNT_SLABS}`;
        return this.baseService.get(url);
    }

    getDiscountSlabsByChannel(segementId: number, channelId: number): Observable<any> {
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

    updateDispatchInvoiceDate(loadId: number, date: string): Observable<any> {
        const url = `${API_URLS.UPDATE_INVOICE_DETAIL}/${loadId}`;
        return this.baseService.post(url, {date});
    }

    getNewOrders(): Observable<any> {
        const url = `${API_URLS.GET_NEW_ORDERS}`;
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

    getDispatchDetailBySalemanAndDate(id: number, assignId: string, date: string): Observable<any> {
        const url = `${API_URLS.DISPATCH_DETAIL}/${date}/${id}/${assignId}`;
        return this.baseService.get(url);
    }

    getViewOrderDetailById(orderid: number): Observable<any> {
        const url = `${API_URLS.VIEW_ORDER_DETAIL}/${orderid}`;
        return this.baseService.get(url);
    }

    getOrderDetails(orderId: number): Observable<any> {
        const url = `${API_URLS.ORDER_DETAIL}/${orderId}`;
        return this.baseService.get(url);
    }

    getDispatchOrdersDetail(salemanId: number, date: string, assignId: string): Observable<any> {
        const url = `${API_URLS.DISPATCH_ORDERS_DETAIL}/${salemanId}/${date}/${assignId}`;
        return this.baseService.get(url);
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

    cancelOrder(orderId: number): Observable<any> {
        const url = `${API_URLS.CANCEL_ORDER}/${orderId}`;
        return this.baseService.get(url);
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

    saveExecutionExpense(loadId: number, saleManId: number, date: string, expenses: Array<any>): Observable<any> {
        const url = `${API_URLS.SAVE_EXPENSE}/${loadId}/${saleManId}/${date}`;
        return this.baseService.post(url, {expenses});
    }

    checkBalance(retailerId: number): Observable<any> {
        const url = `${API_URLS.CHECK_RETAILER_BALANCE}/${retailerId}`;
        return this.baseService.get(url);
    }

    getExectedOrdersListing(salemanId: number, date: string, loadId: number): Observable<any> {
        const url = `${API_URLS.GET_EXECUTION_DETAILS}/${salemanId}/${date}/${loadId}`;
        return this.baseService.get(url);
    }

    getExecutionFinalLoad(loadId: number, outOfRouteRecovery: Array<any>): Observable<any> {
        const url = `${API_URLS.EXECUTION_FINAL_SAVE}/${loadId}`;
        return this.baseService.post(url, {out_of_route_recovery: outOfRouteRecovery});
    }

    removeOutOfRuoteRecovery(paymentId: number): Observable<any> {
        const url = `${API_URLS.REMOVE_OUT_OF_ROUE_RECOVERY}/${paymentId}`;
        return this.baseService.get(url);
    }

    markCompeleteExecution(loadId: number, amountReceived: number): Observable<any> {
        const url = `${API_URLS.EXECUTION_COMPLETE}/${loadId}`;
        return this.baseService.post(url, { total_net_after_recovery: amountReceived });
    }

}
