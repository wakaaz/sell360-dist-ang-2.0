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

  changePassword(newPassword: string): Observable<any> {
    const url = API_URLS.CHANGE_PASSWORD;
    return this.httpService.post(url, { new_password: newPassword });
  }
}

