import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class SalesmenService {

  constructor(private httpService: HttpBaseService) {
  }

  getAllSegments(): Observable<any> {
    const url = API_URLS.GET_SEGMENTS;
    return this.httpService.get(url).pipe(take(1));
  }

  getAllSalesMen(): Observable<any> {
    const url = API_URLS.GET_ALL_SALESMEN;
    return this.httpService.get(url).pipe(take(1));
  }

  addNewSaleman(saleman: any): Observable<any> {
    const url = API_URLS.ADD_SALEMAN;
    return this.httpService.post(url, saleman);
  }

  updateSaleman(saleman: any, id: number): Observable<any> {
    const url = `${API_URLS.UPDATE_SALEMAN}/${id}`;
    return this.httpService.post(url, saleman);
  }

  getSalesmanLedger(smId, month, year): Observable<any> {
    const url = API_URLS.GET_SALESMAN_LEDGER;
    return this.httpService.get(url + "/" + smId + "/" + month + "/" + year).pipe(take(1));
  }

}
