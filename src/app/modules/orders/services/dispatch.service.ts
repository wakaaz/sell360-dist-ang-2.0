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
                    issued_qty: 0,
                };
                currentLoadContent.items.push(newContent);
            } else {
                loadItem.actual_qty = loadItem.actual_qty + item.dispatch_qty;
                loadItem.dispatched_qty = loadItem.dispatched_qty + item.dispatch_qty;
            }
        });
        currentLoadContent.order_ids.push(newOrder.id);
        currentLoadContent.total_orders = currentLoadContent.order_ids.length;
        currentLoadContent.total_products = currentLoadContent.items.length;
        return currentLoadContent;
    }

    removeOrderFromCurrentLoad(order: any, currentLoadContent: any): any {
        order.items.forEach(item => {
            const loadItem = currentLoadContent.items.find(x => x.item_id === item.item_id);
            if (loadItem) {
                loadItem.actual_qty = loadItem.actual_qty - item.dispatch_qty;
                loadItem.dispatched_qty = loadItem.dispatched_qty - item.dispatch_qty - loadItem.issued_qty;
                loadItem.issued_qty = 0;
            }
            if (loadItem.actual_qty === 0) {
                currentLoadContent.items = currentLoadContent.items.filter(x => x.item_id !== item.item_id);
            }
        });
        currentLoadContent.order_ids = currentLoadContent.order_ids.filter(x => x !== order.id);
        currentLoadContent.total_orders = currentLoadContent.order_ids.length;
        currentLoadContent.total_products = currentLoadContent.items.length;
        return currentLoadContent;
    }

}
