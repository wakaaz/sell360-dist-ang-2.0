import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-sale',
    templateUrl: './counter-sale.component.html',
    styleUrls: ['./counter-sale.component.css']
})

export class CounterSaleComponent implements OnInit {

    showProducts: boolean;
    selectedEmployee: string;
    selectedRetailer: string;
    selectedRoute: string;
    productSearch: string;

    constructor() { }

    ngOnInit(): void {
    }

    goBack(): void {
        window.history.back();
    }

    showProductsList(event: Event): void {
        event.stopPropagation();
        this.showProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('counter-sale').classList.add('blur-div');
    }

    clickedOutSide(event: Event): void {
        if (this.showProducts && !(event.target as HTMLElement).classList.contains('dont-close-products')) {
            this.closeProductsList();
        }
    }

    closeProductsList(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('counter-sale').classList.remove('blur-div');
    }

}
