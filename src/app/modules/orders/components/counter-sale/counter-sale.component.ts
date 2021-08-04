import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';

@Component({
    selector: 'app-counter-sale',
    templateUrl: './counter-sale.component.html',
    styleUrls: ['./counter-sale.component.css']
})

export class CounterSaleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    goBack(): void {
        window.history.back();
    }

}
