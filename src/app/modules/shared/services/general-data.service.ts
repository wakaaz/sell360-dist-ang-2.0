import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class GeneralDataService {
    constructor(
        private httpBaseService: HttpBaseService
    ) { }

    getOrderBookers(distributorId: number): Observable<any> {
        const url = `${API_URLS.GET_EMPLOYEES}/${distributorId}`;
        return this.httpBaseService.get(url);
    }

    getOrderBookerRoutes(orderBookerId: number): Observable<any> {
        const url = `${API_URLS.GET_EMPLOYEE_ROUTES}/${orderBookerId}`;
        return this.httpBaseService.get(url);
    }

    getRetailersByRoute(routeId: number): Observable<any> {
        const url = `${API_URLS.GET_RETAILERS_BY_ROUTE}/${routeId}`;
        return this.httpBaseService.get(url);
    }

    getAllSalesMen(): Observable<any> {
        const url = API_URLS.GET_ALL_SALESMEN;
        return this.httpBaseService.get(url);
    }
}
