import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class ReportsService {
  constructor(private httpService: HttpBaseService) {}

  getRateListCore(): Observable<any> {
    const url = API_URLS.RATE_LIST_CORE;
    return this.httpService.get(url);
  }

  getDistributorPurchaseHistory(): Observable<any> {
    const url = API_URLS.DISTRIBUTOR_PURCHASE_HISTORY;
    return this.httpService.get(url);
  }

  getPurchasedOrderDetais(orderId: number): Observable<any> {
    const url = `${API_URLS.PURCHASE_DETAIL}/${orderId}`;
    return this.httpService.get(url);
  }

  getDailySaleReportBySalemanAndDate(
    salemanId: number,
    date: string
  ): Observable<any> {
    const url = `${API_URLS.GET_DAILY_SALE_REPORTS}/${date}/${salemanId}`;
    return this.httpService.get(url);
  }

  getDSRDetail(dsrId: number): Observable<any> {
    const url = `${API_URLS.GET_DSR_DETAIL}/${dsrId}`;
    return this.httpService.get(url);
  }
  getAllCreditedBookers(): Observable<any> {
    const url = `${API_URLS.GET_ALL_CREDITED_BOOKERS}`;
    return this.httpService.get(url);
  }
}
