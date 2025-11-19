import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(
    private httpService: HttpBaseService
  ) {}

  verifyOldPassword(oldPassword: string): Observable<any> {
    const url = API_URLS.CHANGE_PASSWORD; // You may need to create a separate endpoint for verification
    // For now, we'll use the same endpoint but just verify
    return this.httpService.post(url, { old_password: oldPassword, verify_only: true });
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const url = API_URLS.CHANGE_PASSWORD;
    return this.httpService.post(url, { old_password: oldPassword, new_password: newPassword });
  }
}

