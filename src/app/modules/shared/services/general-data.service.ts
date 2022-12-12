import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { HttpBaseService } from 'src/app/core/services/http.service';
import { SecondaryOrderItems } from '../../orders/primary-orders/_models/secondaryOrderItems';
import { Inventory } from '../../orders/primary-orders/_models/inventory';
import { SecondaryOrder } from '../../orders/primary-orders/_models/secondaryOrder.model';
import { OrdersService } from '../../orders/services/orders.service';
import { DataService } from './data.service';
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
    const primaryOrder: SecondaryOrder = SecondaryOrder.getInstance;

    const orderItem: SecondaryOrderItems = new SecondaryOrderItems();
    // debugger;
    orderItem.prefId = prod.pref_id;
    orderItem.itemQuantityUpdated = 0;
    orderItem.quantityReturned = 0;
    orderItem.orignalPrice = 0;
    orderItem.quantity = +prod.stockQty;
    orderItem.isExclusive = prod.is_exclusive;
    orderItem.divisionId = prod.division_id;
    orderItem.itemName = prod.item_name;
    orderItem.unitName = prod.unit_name;
    orderItem.unitId = prod.unit_id;
    orderItem.sub_category_id = prod.sub_category_id;
    orderItem.brandId = prod.brand_id;
    orderItem.itemId = prod.item_id;
    orderItem.tradePrice = prod.item_trade_price;
    debugger;
    orderItem.parent_pref_id = prod.parent_pref_id;
    if (prod.selectedScheme) {
      orderItem.schemeId = prod.selectedScheme.id;
      orderItem.rule_name = prod.selectedScheme.rule_name;
      orderItem.schemeName = prod.selectedScheme.name;
      orderItem.scheme_type = prod.selectedScheme.scheme_type;
      orderItem.scheme_min_quantity = prod.selectedScheme.min_qty;
      orderItem.scheme_quantity_free = prod.selectedScheme.quantity_free;
      orderItem.scheme_discount_on_tp = prod.selectedScheme.discount_on_tp;
    } else {
      orderItem.schemeId = 0;
      orderItem.rule_name = '';
      orderItem.schemeName = '';
      orderItem.scheme_type = '';
      orderItem.scheme_min_quantity = 0;
      orderItem.scheme_quantity_free = 0;
      orderItem.scheme_discount_on_tp = 0;
    }

    orderItem.special_discount = 0;
    orderItem.tax_amount = prod.tax_class_amount;
    orderItem.item_retail_price = prod.item_retail_price;
    // orderItem.schemeId = prod.sc
    // orderItem.schemeMinQty = prod.sche
    // orderItem.schemeQuantityFree = prod.schemes
    // orderItem.schemeRule = prod.sc
    // orderItem.giftValue = prod
    orderItem.parentUnitId = prod.parent_unit_id;
    // orderItem.parentBrandId = prod.para;
    orderItem.parentTp = prod.item_trade_price;
    orderItem.sub_inventory_quantity = prod.sub_inventory_quantity;
    // orderItem.parentQtySold = prod.quantity;
    // orderItem.parentValueSold = prod.par
    // orderItem.
    if (!primaryOrder.items) {
      // primaryOrder.items.push(orderItem);
      primaryOrder.items = new Array<SecondaryOrderItems>();
    }
    primaryOrder.items.push(orderItem);
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
