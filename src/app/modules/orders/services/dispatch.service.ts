import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderDispatchService {

    orderLoad: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor() { }

    setLoadContent(newOrder: any, currentLoadContent: any): any {
        newOrder.items.forEach(item => {
            const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
            if (!loadItem) {
                const newContent = {
                    item_id: item.item_id,
                    pref_id: item.pref_id,
                    unit_id: item.unit_id,
                    item_trade_price: item.original_price,
                    actual_qty: item.dispatch_qty,
                    dispatched_qty: item.dispatch_qty,
                    foc_qty:item.scheme_quantity_free ? +item.scheme_quantity_free : 0,
                };
                //debugger
                currentLoadContent.items.push(newContent);
            } else {
                loadItem.actual_qty     = loadItem.actual_qty + item.dispatch_qty; 
                loadItem.dispatched_qty = loadItem.dispatched_qty + item.dispatch_qty;
            }
        });
        currentLoadContent.order_ids.push(newOrder.id);
        currentLoadContent.total_orders     =   currentLoadContent.order_ids.length;
        let totalfocs:number                =   0;
        currentLoadContent.items.map((x) => {totalfocs = +(x.foc_qty ? x.foc_qty:0) + +totalfocs;});
        currentLoadContent.total_focs       =   totalfocs;    
        currentLoadContent.total_products   =   currentLoadContent.items.length; 
        return currentLoadContent;
    }

    removeOrderFromCurrentLoad(order: any, currentLoadContent: any): any {
        order.items.forEach(item => {
            const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
            if (loadItem) {
                loadItem.actual_qty     =   loadItem.actual_qty - item.dispatch_qty;
                loadItem.dispatched_qty =   loadItem.dispatched_qty - item.dispatch_qty - loadItem.issued_qty;
                loadItem.issued_qty     =   loadItem.issued_qty;
                loadItem.foc_qty        =   loadItem.foc_qty;
                loadItem.ordered_qty    =   loadItem.ordered_qty;
                loadItem.extra_qty      =   0;  
                //debugger
            }
            if (loadItem && loadItem.actual_qty === 0) {
                currentLoadContent.items = currentLoadContent.items.filter(x => x.item_id !== item.item_id);
            }
        });
        currentLoadContent.order_ids = currentLoadContent.order_ids.filter(x => x !== order.id);
        currentLoadContent.total_orders = currentLoadContent.order_ids.length;
        let totalfocs:number                =   0;
        currentLoadContent.items.map((x) => {totalfocs = +(x.foc_qty ? x.foc_qty:0) + +totalfocs;});
        currentLoadContent.total_focs       =   totalfocs;    
        currentLoadContent.total_products   =   currentLoadContent.items.length;
        return currentLoadContent;
    }

    setActiveLoadContent(currentLoadContent: any, stockAllocation:any,dispatchOrderDetail:any): any {
        if(dispatchOrderDetail.orders.some(x=>x.isSelected === true)){
            currentLoadContent.items            = currentLoadContent.items.filter(x => (x.actual_qty > 0 || x.issued_qty > 0))
            stockAllocation.forEach(item => {
                if(item.current_load_allocated_qty > 0){
                    const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
                    if (!loadItem) {
                        const newContent = {
                            item_id         : item.item_id,
                            pref_id         : item.pref_id,
                            unit_id         : item.unit_id,
                            item_trade_price: item.item_trade_price,
                            actual_qty      : 0,
                            issued_qty      : +item.current_load_allocated_qty,
                            ordered_qty     : +item.current_load_booked_qty,
                            dispatched_qty  : +item.current_load_allocated_qty,
                            foc_qty         : +item.scheme_quantity_free ? +item.scheme_quantity_free : 0,
                        };
                       // debugger
                        currentLoadContent.items.push(newContent);
                    } else {
                        loadItem.ordered_qty    =   +item.current_load_booked_qty
                        loadItem.issued_qty     =   +item.current_load_allocated_qty;
                        loadItem.dispatched_qty =   +item.current_load_allocated_qty;
                        loadItem.extra_qty      =   0;//+item.current_load_allocated_qty - +item.current_load_booked_qty;    
                        //debugger
                    }
                }
            }); 
        }else{
            currentLoadContent.items        =   [];
        }
        let totalfocs:number                =   0; 
        currentLoadContent.items.map((x) => {totalfocs = +(x.foc_qty ? x.foc_qty:0) + +totalfocs;});
        currentLoadContent.total_focs       =   totalfocs;    
        currentLoadContent.total_products   =   currentLoadContent.items.length;
        return currentLoadContent;
    }

}
