import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

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
}
