import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';

@Injectable()
export class ProductService {

    constructor(
        private httpService: HttpBaseService,
    ) {
    }

    getProduct(prodId: number): Observable<any> {
        const url = `${API_URLS.PRODUCT}/${prodId}`;
        return this.httpService.get(url);
    }

}
