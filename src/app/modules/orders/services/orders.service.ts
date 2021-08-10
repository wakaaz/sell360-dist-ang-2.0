import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrdersService {

    constructor(
        private baseService: HttpBaseService
    ) {
    }

    getCounterSaleData(): Observable<any> {
        return this.baseService.get(API_URLS.COUNTER_SALE_DATA);
    }

}
