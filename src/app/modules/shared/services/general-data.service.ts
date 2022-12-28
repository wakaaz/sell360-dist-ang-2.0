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
import { Scheme } from '../../orders/primary-orders/_models/scheme.model';
import { environment } from 'src/environments/environment';
import { Slab } from '../../orders/primary-orders/_models/slab.model';
import { filter } from 'jszip';
const counterSaleData: any = {
  products: [],
  specialDiscount: [],
};
@Injectable()
export class GeneralDataService {
  private _schemes$ = new BehaviorSubject<Scheme[]>([]);
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

  get schemes$() {
    return this._schemes$.asObservable();
  }
  get schemesList() {
    return this._schemes$.value;
  }
  constructor(
    private httpBaseService: HttpBaseService,
    private dataService: DataService
  ) // private orderService: OrdersService
  {}

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
    if (itemId === 0) {
      this._dispProducts$.value.forEach((x) => {
        x.isAdded = false;
      });
    }
    for (let i = 0; i < dispProductsLength; i++) {
      if (this._dispProducts$.value[i].item_id === itemId) {
        this._dispProducts$.value[i].isAdded = value;
        break;
      }
    }
  }
  empty_dispProducts(){
    this._dispProducts$.value.forEach((x) => {
      x.isAdded = false;
    });
    return null;
  }

  applySlabDiscountToOrders(secondaryOrder:any,selecteditem:any){
    const SLAB_TYPE           = environment.SLAB_TYPE;
    const SLAB_RULE           = environment.SLAB_RULE; 
    const order_context:number= secondaryOrder.isExclusive; 
    const slabs:any           = secondaryOrder.slabs;  
    let   items:any           = secondaryOrder.items;
     // update slab_id null to all order items,SO we can apply updated slabs     
    const fileteredSlabs = slabs.filter(x =>
                                            x.region_id  === secondaryOrder.regionId &&
                                            x.segment_id === secondaryOrder.retailer.segment_id &&
                                            x.channel_id === secondaryOrder.retailer.type_id
                                        ); 
                                        debugger;
    if(selecteditem.slab_id === null){
      const skuslab       =  fileteredSlabs.filter(x => x.slab_type == 3) ? fileteredSlabs.filter(x => x.slab_type == 3)[0] : null;
      const brandslab      =  fileteredSlabs.filter(x => x.slab_type == 4) ? fileteredSlabs.filter(x => x.slab_type == 4)[0] : null;
      const categoryslab   =  fileteredSlabs.filter(x => x.slab_type == 5) ? fileteredSlabs.filter(x => x.slab_type == 5)[0] : null;  
      const generalslabs   =  fileteredSlabs.filter(x => x.slab_type < 3)  ? fileteredSlabs.filter(x => x.slab_type <= 2)  : null;                                                                    
      if(skuslab)
        selecteditem = this.applySlabDiscountToItems(order_context,selecteditem,skuslab,true); 
     
      if(selecteditem.slab_id === null && brandslab)
        selecteditem = this.applySlabDiscountToItems(order_context,selecteditem,brandslab,true);
      
      if(selecteditem.slab_id === null && categoryslab)
        selecteditem = this.applySlabDiscountToItems(order_context,selecteditem,categoryslab,true);
      
      if(selecteditem.slab_id === null && generalslabs)  
        selecteditem = this.applySlabDiscountToItems(order_context,selecteditem,generalslabs,false);
      
    }    
    //Apply change To order items 
    let tradediscount = this.applySlabDiscountValuesToItems(items,fileteredSlabs);
     
    
    return fileteredSlabs;
    
  }
  applySlabDiscountToItems(order_context:number, item:any, slabs:any, productbse:boolean){
    
    if(slabs && item.slab_id === null){
      if(productbse){
        if(slabs.slab_items && slabs.slab_items.includes(item.item_id)){
          item.slab_id  = slabs.id
        }
      }else{
        let slab = null;
        let slab_type = null;
        if (order_context > 0) { //Exclusive order
          slab_type = item.isExclusive ? item.isExclusive + 1 : 1; //is_exclusive_product (0:Normal Product , 1:Exclusive Product)
        }
        if(slab_type == 1){ //priority 1 else 0
            slab  =    slabs.filter(x=> x.slab_type = 1);
            if(slab){
              slab  =    slabs.filter(x=> x.slab_type = 0);
            }
        }
        else if(slab_type == 2){ //priority 2 else 0
          slab  =    slabs.filter(x => x.slab_type = 2);
            if(slab){
              slab  =    slabs.filter(x => x.slab_type = 0);
            }
        }
        else{ //opriority else 1
          slab  =    slabs.filter(x => x.slab_type = 0);
            if(slab){
              slab  =    slabs.filter(x => x.slab_type = 1);
            }
        }
        if(slab){
          item.slab_id  = slab[0].id
        }
      }
    }
    return item;
    debugger
  }
  applySlabDiscountValuesToItems(items:any, slabs:any){
    for (let i = 0; i < items.length; i++) {
      let item  = items[i];
      /* App Scenarios In case of exclusiveOrder Access Right = 0:
         If the order booker has "0" Normal Order rights in that case only Normal Product or All Products Slabs shall be applied meaning ( Slab Type 0 or 1, 0 always has the priority )
         If there are no slab for 0 than apply 1
         If both 0 or 1 are not available than do not apply any slab.*/


        /*App Scenarios In case of Access Right = 1:

        Normal Orders
        If Normal Discount slabs exists than apply normal slab
        If normal discount slab does not exist than apply all products slab
        In case if both does not exist than no discount slab would be applied.
                Exclusive Orders

        If Exclusive Discount slabs exists than apply exclusive slab
        If exclusive discount slab does not exist than apply all products slab
        In case if both do not exist then no discount slab would be applied.*/

        /*App Scenarios In case of Access Right = 2:

        Merged Order
        If Normal Discount slabs exists than apply normal slab for normal products
        If normal discount slab does not exist than apply all products slab for normal products
        In case if both does not exist than no discount slab would be applied on normal products
        Exclusive Orders

        If Exclusive Discount slabs exists than apply exclusive slab for exclusive products
        If exclusive discount slab does not exist than apply all products slab for exclusive products
        In case if both do not exist then no discount slab would be applied for exclusive products
      */
     
        let slabmodel:any          =   null;
        let itemslab:any           =   null;
        let rangevalue:number      =   0; 
        let rangecontent:any       =   null;
        let rangeModel:any         =   null;               
        let ItemTp                 =   item.original_price;
        let itemDiscountTp         =   item.unit_price_after_scheme_discount;
        if(item.slab_id > 0){
          itemslab  =   slabs.filter(x=> x.id == item.slab_id) ? slabs.filter(x=> x.id == item.slab_id)[0]:null;
        }else{
          itemslab = null;
        }
        slabmodel.slab_type               =       itemslab.slab_type ? itemslab.slab_type : 0; //   Zero means its is a for all product (Slab Type 0 or 1) can bbe applien periorty is zero
        slabmodel.slab_rule               =       itemslab.slab_rule ? itemslab.slab_rule : 0;
        slabmodel.items                   =       [];
        slabmodel.discount_type           =       0;
        slabmodel.discount                =       0;
        slabmodel.discount_pkr            =       0;
        slabmodel.itemDiscountTp          =       itemDiscountTp;
    
        if(itemslab){
            if(slabmodel.slab_rule == 2){
                if(slabmodel.slab_type < 3){
                  rangecontent        =   items.filter(x=> x.slab_id==itemslab.slab_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.dispatch_qty, 0):0;
                }else{
                  rangecontent        =   items.filter(x=> x.slab_id==itemslab.slab_id && x.item_id==itemslab.item_id );
                  rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.dispatch_qty, 0):0;
                  slabmodel.items     =   itemslab.items;
                }
            }
            else{
              if(slabmodel.slab_type < 3){
                rangecontent        =   items.filter(x=> x.slab_id==itemslab.slab_id );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.gross_sale_amount, 0):0;
              }else{
                rangecontent        =   items.filter(x=> x.slab_id==itemslab.slab_id && x.item_id==itemslab.item_id );
                rangevalue          =   rangecontent ? rangecontent.reduce((a: any, b: any) => a + b.gross_sale_amount, 0):0;
                slabmodel.items     =   itemslab.items;
              }
            }
            if (itemslab.discount_filter == 'slab' ) {
                rangeModel   =  itemslab.ranges.filter(x=>
                                                           (
                                                            x.discount_slab_id  ==  itemslab.id &&
                                                            x.range_from  <=  rangevalue &&
                                                            x.range_to  >=  rangevalue 
                                                           ) 
                                                      ); 
                if(rangeModel){
                    rangeModel  = rangeModel[0];          
                    slabmodel.discount_type       =   rangeModel.discount_type;
                    //dd( $channel_id, $region_id, $rangeModel , $productGrossPrice, $itemDiscountTp,slabmodel.discount_type ,itemslab);
                    if (rangeModel.discount_type  == 'percentage') {
                        if (rangeModel.value > 0) {
                            slabmodel.discount            =   rangeModel.value;
                            slabmodel.discount_pkr        =   (slabmodel.discount/100)*ItemTp;
                            slabmodel.itemDiscountTp      =   slabmodel.itemDiscountTp - slabmodel.discount_pkr;
                        }
                    } else if (rangeModel.discount_type  == 'value') {
                        slabmodel.discount                =   rangeModel.value;
                        slabmodel.discount_pkr            =   slabmodel.discount;
                        slabmodel.itemDiscountTp          =   itemDiscountTp - slabmodel.discount;
                    }
                }
            }
            else if (itemslab.discount_filter == 'flat') {
                slabmodel.discount_type           =   itemslab.discount_type;
                rangeModel          =  itemslab.ranges.filter(x=>x.discount_slab_id  ==  itemslab.id); 
                slabmodel.discount  =  rangeModel ? rangeModel[0].value:0;
                if (itemslab.discount_type  == 'percentage') {
                    if (slabmodel.discount > 0) {
                        slabmodel.discount_pkr    =   (slabmodel.discount/100)*ItemTp;
                        slabmodel.itemDiscountTp  =   slabmodel.itemDiscountTp - slabmodel.discount_pkr; //$this.applyRetailerDiscount(slabmodel.itemDiscountTp , slabmodel.discount);
                    }
                } else if (itemslab.discount_type  == 'value') {
                    slabmodel.discount_pkr        =   slabmodel.discount;
                    slabmodel.itemDiscountTp      =   slabmodel.itemDiscountTp - slabmodel.discount;
                }
            }
        }

        //update discount value in discount
        //slab_id, 
        items[i].slab_type                          = itemslab.slab_type; 
        items[i].slab_discount_type                 = itemslab.discount_type;
        items[i].merchant_discount                  = slabmodel.discount; 
        items[i].merchant_discount_pkr              = slabmodel.discount_pkr; 
        items[i].unit_price_after_merchant_discount = slabmodel.itemDiscountTp;
    }
    return items;
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
          this.schemesList,
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

  getProdSchemes() {
    this.httpBaseService.get(API_URLS.GET_SCHEMES).subscribe((res) => {
      if (res.status === 200) {
        this._schemes$.next(res.data);
      }
    });
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
