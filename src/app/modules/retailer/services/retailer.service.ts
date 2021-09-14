import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from '../../../core/services/http.service';

@Injectable()
export class RetailerService {

    constructor(
        private httpBaseService: HttpBaseService,
    ) {
    }

    addOpeningBalance(retailers: Array<any>): Observable<any> {
        const url = `${API_URLS.ADD_OPENING_BALANCE}`;
        return this.httpBaseService.post(url, { opening_balance: retailers });
    }

    getRetailerListing(queryParams = null): Observable<any> {
        const url = `${API_URLS.RETAILER_LISTING}?${queryParams}`;
        return this.httpBaseService.get(url);
    }
    getRetailerCore(): Observable<any> {
        const url = `${API_URLS.RETAILER_CORE}`;
        return this.httpBaseService.get(url);
    }
    getRetailerOrdersById(id: string): Observable<any> {
        const url = `${API_URLS.RETAILER_ORDERS}/${id}`;
        return this.httpBaseService.get(url);
    }
    getRetailerVisitsById(id: string): Observable<any> {
        const url = `${API_URLS.RETAILER_VISITS}/${id}`;
        return this.httpBaseService.get(url);
    }

}
