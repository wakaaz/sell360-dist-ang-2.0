import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { IAddInvoicePayload, IPaymentDetail } from '../distributor-details/distributor-details.utils';

@Injectable({
  providedIn: 'root',
})
export class DistributorService {
  constructor(private httpBaseService: HttpBaseService) {}
  getDistributorListing(): Observable<any> {
    const url = `${API_URLS.SUB_DISTRIBUTORS}`;
    return this.httpBaseService.get(url);
  }

  getDistributorDetails(distributorId: string): Observable<any> {
    const url = `${API_URLS.DISTRIBUTOR_DETAILS}${distributorId}`;
    return this.httpBaseService.get(url);
  }

  addInvoiceRecovery(payload: IAddInvoicePayload): Observable<any> {
    const url = `${API_URLS.ADD_INVOICE_RECOVERY}`;
    return this.httpBaseService.post(url, payload);
  }

  addOpeningBalance(payload: {
    distributor_id: number;
    new_balance_amount: number;
    parent_distributor_id: number;
    balance_type: string;
  }): Observable<any> {
    const url = `${API_URLS.ADD_OPENING_BALANCE_DISTRIBUTOR}`;
    return this.httpBaseService.post(url, payload);
  }
}
