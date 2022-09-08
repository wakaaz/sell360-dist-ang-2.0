import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class LoginService {
  constructor(private httpService: HttpBaseService) {}

  login(auth: any): Observable<any> {
    const url = API_URLS.LOGIN;
    return this.httpService.post(url, auth);
  }
}
