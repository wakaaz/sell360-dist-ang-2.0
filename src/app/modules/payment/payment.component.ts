import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-payment-component',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css'],
  standalone: false


})

export class PaymentComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    loading: boolean;

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void { }
}
