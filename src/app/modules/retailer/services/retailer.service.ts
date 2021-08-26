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
        return this.httpBaseService.post(url, retailers);
    }

}
