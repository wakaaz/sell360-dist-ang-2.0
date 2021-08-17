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

    getOrderBookers(distributorId: number): Observable<any> {
        const url = `${API_URLS.GET_EMPLOYEES}/${distributorId}`;
        return this.baseService.get(url);
    }

    getOrderBookerRoutes(orderBookerId: number): Observable<any> {
        const url = `${API_URLS.GET_EMPLOYEE_ROUTES}/${orderBookerId}`;
        return this.baseService.get(url);
    }

    getRetailersByRoute(routeId: number): Observable<any> {
        const url = `${API_URLS.GET_RETAILERS_BY_ROUTE}/${routeId}`;
        return this.baseService.get(url);
    }

    counterSaleOrder(order: CounterSale): Observable<any> {
        const url = `${API_URLS.ADD_COUNTER_SALE}`;
        return this.baseService.post(url, order);
    }
}
