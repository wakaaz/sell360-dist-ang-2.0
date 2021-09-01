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

    getDispatchDetailBySalemanAndDate(id: number, date: string): Observable<any> {
        const url = `${API_URLS.DISPATCH_DETAIL}/${id}/${date}`;
        return this.baseService.get(url);
    }

    getViewOrderDetailById(orderid: number): Observable<any> {
        const url = `${API_URLS.VIEW_ORDER_DETAIL}/${orderid}`;
        return this.baseService.get(url);
    }

    getDispatchOrderDetails(orderId: number): Observable<any> {
        const url = `${API_URLS.ORDER_DETAIL}/${orderId}`;
        return this.baseService.get(url);
    }

    getDispatchOrdersDetail(salemanId: number, date: string): Observable<any> {
        const url = `${API_URLS.DISPATCH_ORDERS_DETAIL}/${salemanId}/${date}`;
        return this.baseService.get(url);
    }

    saveDispatch(order: any): Observable<any> {
        const url = `${API_URLS.SAVE_DISPATCH}`;
        return this.baseService.post(url, order);
    }

    cancelOrder(orderId: number): Observable<any> {
        const url = `${API_URLS.CANCEL_ORDER}/${orderId}`;
        return this.baseService.get(url);
    }

}
