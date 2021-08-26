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
}
