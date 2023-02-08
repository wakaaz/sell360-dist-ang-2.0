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
                    issued_qty: 0,
                    foc_qty:item.scheme_quantity_free ? +item.scheme_quantity_free : 0,
                };
                //debugger
                currentLoadContent.items.push(newContent);
            } else {
                loadItem.foc_qty        = loadItem.foc_qty  +  (item.scheme_quantity_free ? +item.scheme_quantity_free : 0), 
                loadItem.actual_qty     = loadItem.actual_qty + item.dispatch_qty; 
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
                loadItem.actual_qty =   loadItem.actual_qty - item.dispatch_qty;
                loadItem.issued_qty =   0;
                loadItem.foc_qty    =   loadItem.foc_qty;
                loadItem.extra_qty  =   0;   
                ////debugger
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
                            item_id: item.item_id,
                            pref_id: item.pref_id,
                            unit_id: item.unit_id,
                            item_trade_price: item.item_trade_price,
                            actual_qty: 0,
                            issued_qty: item.current_load_allocated_qty,
                            foc_qty   : +item.scheme_quantity_free ? +item.scheme_quantity_free : 0,
                        };
                       
                        currentLoadContent.items.push(newContent);
                        //debugger
                    } else {
                        
                        loadItem.issued_qty = item.current_load_allocated_qty - loadItem.actual_qty;
                        loadItem.extra_qty  =   0;//+item.current_load_allocated_qty - +item.current_load_booked_qty;    
                    
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

    parseLoads(loadcontents: any, stockAllocation:any){
        let actuals_qty_items   =   stockAllocation.map(x=>{ 
                                                                if(x.current_load_booked_qty > 0 ) {
                                                                    return x.item_id;
                                                                }
                                                            });
        actuals_qty_items       =   actuals_qty_items.filter(x=> (x>0));
        // //debugger
        let contents:any    =   [];
        let contentitems    =   [];
        return loadcontents.map(content=>{
                                if(content.loadNumber == 1 ){
                                    content.items = content.items.filter(x=> (+x.actual_qty > 0 || !actuals_qty_items.includes(x.item_id)));
                                    content.items   =   content.items.map(x=>{
                                                                                x.issued_qty = +stockAllocation.find(y=>(y.item_id==x.item_id)).current_load_allocated_qty - +stockAllocation.find(y=>(y.item_id==x.item_id)).current_load_booked_qty;
                                                                                return x;
                                                                            })    
                                    contentitems  = content.items.map(item => item.item_id);
                                    ////debugger
                                }else{
                                    content.items   =   content.items.filter(x=> (+x.actual_qty > 0)); 
                                    content.items   =   content.items.map(x=>{
                                                                                if(contentitems.includes(x.item_id)){
                                                                                    x.issued_qty = 0;
                                                                                }else{
                                                                                    x.issued_qty = +stockAllocation.find(y=>(y.item_id==x.item_id)).current_load_allocated_qty -stockAllocation.find(y=>(y.item_id==x.item_id)).current_load_booked_qty;
                                                                                }
                                                                                return x;
                                                                            })   
                                    let thisitems   =   content.items.map(item => item.item_id);  
                                    contentitems    =   contentitems.concat(thisitems);
                                    contentitems    =   contentitems.filter(this.onlyUnique);
                                }
                                // //debugger
                                return content;
                        });   
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

}
