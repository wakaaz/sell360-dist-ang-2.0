import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { DistributorPurchaseModel } from '../model/distributor-purchase.model';

@Injectable()
export class InventoryService {

    constructor(
        private httpService: HttpBaseService
    ) {
    }

    getBrnads(): Observable<any> {
        const url = API_URLS.BRANDS;
        return this.httpService.get(url);
    }

    getCategories(): Observable<any> {
        const url = API_URLS.CATEGORIES;
        return this.httpService.get(url);
    }

    getProducts(): Observable<any> {
        const url = API_URLS.PRODUCTS;
        return this.httpService.get(url);
    }

    getDistributorPurchaseData(): Observable<any> {
        const url = `${API_URLS.DISTRIBUTOR_PURCHASE_DATA}`;
        return this.httpService.get(url);
    }

    addDistributorPurchase(data: DistributorPurchaseModel): Observable<any> {
        const url = API_URLS.ADD_DISTRIBUTOR_PURCHASE;
        return this.httpService.post(url, data);
    }

    getProductsWithStock(): Observable<any> {
        const url = API_URLS.PRODUCTS_WITH_STOCK;
        return this.httpService.get(url);
    }

    getProductStockHistory(itemId: number, filter: string, value: any): Observable<any> {
        const url = `${API_URLS.PRODUCT_STOCK_DETAIL}/${itemId}/${filter}`;
        return this.httpService.post(url, value);
    }

    addDistributorOpeningStock(stock: Array<any>): Observable<any> {
        const url = `${API_URLS.ADD_OPENING_STOCK}`;
        return this.httpService.post(url, stock);
    }

}
