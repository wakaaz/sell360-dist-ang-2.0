import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class ReportsService {

    constructor(
        private httpService: HttpBaseService,
    ) {
    }

    getDistributorPurchaseHistory(): Observable<any> {
        const url = API_URLS.DISTRIBUTOR_PURCHASE_HISTORY;
        return this.httpService.get(url);
    }

    getPurchasedOrderDetais(orderId: number): Observable<any> {
        const url = `${API_URLS.PURCHASE_DETAIL}/${orderId}`;
        return this.httpService.get(url);
    }

}
