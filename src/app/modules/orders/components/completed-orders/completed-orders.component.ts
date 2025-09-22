import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-completed-orders',
    templateUrl: 'completed-orders.component.html',
    styleUrls: ['./completed-orders.component.css'],
  standalone: false


})

export class CompletedOrdersComponent implements OnInit {

    dtOptions: DataTables.Settings = {};

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

}
