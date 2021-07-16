import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-order-detail-list',
    templateUrl: './orders-list-details.component.html',
    styleUrls: ['./orders-list-details.component.css'],
})

export class OrdersListDetailsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    showDetails: boolean;

    constructor() {
    }

    ngOnInit(): void {
        this.showDetails = false;
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
