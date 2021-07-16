import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-orders-list',
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class OrdersListComponent implements OnInit {
    selectedOrderBooker: number;
    showDetailsPopup: boolean;
    orderBookers: Array<any>;
    orders: Array<any>;
    dtOptions: DataTables.Settings = {};
    byOrderBooker: boolean;

    constructor() {
    }

    ngOnInit(): void {
        this.byOrderBooker = false;
        this.orderBookers = [{name: 'Utba', id: 1}, {name: 'Atif', id: 13}, {name: 'Ali', id: 21}];
        this.orders = [
            { id: 1, retailer: 'Market Store', channel: 'Kiryana Store', totalOrder: 1075.02 },
            { id: 2, retailer: 'Kirana Store', channel: 'App Store', totalOrder: 1271.12 },
            { id: 3, retailer: '786 Store', channel: 'Google Store', totalOrder: 3365.75 },
        ];
        this.selectedOrderBooker = null;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    openDetailsModal(order: any): void {
        document.body.classList.add('no-scroll');
    }

    closeDetailsModal(): void {
        document.body.classList.remove('no-scroll');
    }

}
