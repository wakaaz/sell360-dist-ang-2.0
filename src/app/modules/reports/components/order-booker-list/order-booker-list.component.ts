import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-order-booker-list',
  templateUrl: './order-booker-list.component.html',
  styleUrls: ['./order-booker-list.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class OrderBookerListComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    OrderType: string;
    AllSalesmen:string;
    OrderBooker:string;
    segment: string; 

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

    closeSalemanLedger(): void {
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('retailer-list').classList.remove('blur-div');
    }

    goToProfile(): void {
        console.log('Coming soon!');
    }

}
