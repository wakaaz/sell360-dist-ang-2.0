import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { SecondaryOrderItems } from '../../orders/primary-orders/_models/secondaryOrderItems';
import { Inventory } from '../../orders/primary-orders/_models/inventory';
import { SecondaryOrder } from '../../orders/primary-orders/_models/secondaryOrder.model';
import { OrdersService } from '../../orders/services/orders.service';
import { DataService } from './data.service';
import getSecondaryOrderItem from 'src/app/core/utility/getSecondaryOrderItem';
const counterSaleData: any = {
  products: [],
  specialDiscount: [],
};
@Injectable()
export class GeneralDataService {
  private _counterSaleData$ = new BehaviorSubject<any>({});
  private _dispProducts$ = new BehaviorSubject<Inventory[]>([]);
  private _showProducts$ = new BehaviorSubject<Boolean>(false);

  private _loading$ = new BehaviorSubject<boolean>(false);
  private _errorMessage$ = new BehaviorSubject<string>('');
  get dispProducts$() {
    return this._dispProducts$.asObservable();
  }
  get showProducts$() {
    return this._showProducts$.asObservable();
  }
  get counterSaleData$() {
    return this._counterSaleData$.asObservable();
  }
  set setShowProducts$(showProd: boolean) {
    this._showProducts$.next(showProd);
  }
  constructor(
    private httpBaseService: HttpBaseService,

    private dataService: DataService,
    private orderService: OrdersService
  ) {}

  getProductsWithPrefType(prefType: string): Observable<any> {
    const url = `${API_URLS.PRODUCTS_LIST_BY_PREF_TYPE}/${prefType}`;
    return this.httpBaseService.get(url);
  }

  getOrderBookers(distributorId: number): Observable<any> {
    const url = `${API_URLS.GET_EMPLOYEES}/${distributorId}`;
    return this.httpBaseService.get(url);
  }

  getOrderBookerRoutes(orderBookerId: number): Observable<any> {
    const url = `${API_URLS.GET_EMPLOYEE_ROUTES}/${orderBookerId}`;
    return this.httpBaseService.get(url);
  }

  getRetailersByRoute(routeId: number): Observable<any> {
    const url = `${API_URLS.GET_RETAILERS_BY_ROUTE}/${routeId}`;
    return this.httpBaseService.get(url);
  }

  getAllSalesMen(): Observable<any> {
    const url = API_URLS.GET_ALL_SALESMEN;
    return this.httpBaseService.get(url);
  }
  pushOrderItem(prod: Inventory) {
    const secondaryOrder: SecondaryOrder = SecondaryOrder.getInstance;

    const orderItem: SecondaryOrderItems = getSecondaryOrderItem(prod);
    if (!secondaryOrder.items) {
      // secondaryOrder.items.push(orderItem);
      secondaryOrder.items = new Array<SecondaryOrderItems>();
    }
    secondaryOrder.items.push(orderItem);
    this.displayProductsIsAddedStatus(true, prod.item_id);
  }
  displayProductsIsAddedStatus(value: boolean = false, itemId: number = 0) {
    const dispProductsLength = this._dispProducts$.value.length;
    for (let i = 0; i < dispProductsLength; i++) {
      if (this._dispProducts$.value[i].item_id === itemId) {
        this._dispProducts$.value[i].isAdded = value;
        break;
      }
    }
  }
  checkApiStatus(res: any): boolean {
    return res.status === 200 ? true : false;
  }
  mergeSchemesIntoProducts() {
    const primaryOrder = SecondaryOrder.getInstance;
    const products = this._counterSaleData$.value.products.map(
      (product: Inventory) => {
        product.schemes = this.dataService.getSchemes(
          product.item_id,
          product.unit_id,
          product.pref_id,
          this.orderService.schemesList,
          primaryOrder.retailer.type_id,
          primaryOrder.retailer.id
        );
        return product;
      }
    );

    const isExclusive = primaryOrder.orderContext === 1 ? 0 : 1;
    this._dispProducts$.next(
      // products.filter((x) => x.is_exclusive === isExclusive)
      products
    );
  }
  getCounterSaleData() {
    this.httpBaseService.get(API_URLS.COUNTER_SALE_DATA).subscribe(
      (res) => {
        if (this.checkApiStatus) {
          counterSaleData.products = res.data.inventory.map((pr: Inventory) => {
            pr.net_amount = 0.0;
            pr.isAdded = false;
            return pr;
          });
          debugger;
          counterSaleData.specialDiscount = res.data.special_discount;
          this._counterSaleData$.next(counterSaleData);
        } else {
          this._errorMessage$.next(res.message);
        }
      },
      (error) => {
        this._errorMessage$.next(
          'Cannot fetch counter sale data. Please try again'
        );
      }
    );
  }
  getDiscountSlabs() {
    const url = `${API_URLS.GET_DISCOUNT_SLABS}`;
    this.httpBaseService.get(url).subscribe((res) => {
      if (res.status === 200) {
        const order = SecondaryOrder.getInstance;
        order.slabs = res.data;
        console.log('order.slabs -> ', order.slabs);
      }
    });
  }
}
