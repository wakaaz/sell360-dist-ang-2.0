import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class HomeService {

    constructor(
        private httpService: HttpBaseService,
    ) { }

    getDashboardData(): Observable<any> {
        // For Basic integration, APIs being created
        const url = API_URLS.DASHBOARD;
        return this.httpService.get(url);
    }

}
