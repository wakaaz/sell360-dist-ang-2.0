import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-retailers-list',
    templateUrl: 'retailers-list.component.html',
    styleUrls: ['./retailers-list.component.css']
})

export class RetalersListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    shwoSaleManLedger: boolean;

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

    openSalemanLedger(event: Event): void {
        event.stopPropagation();
        this.shwoSaleManLedger = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('retailer-list').classList.add('blur-div');
    }

    clickedOutSide(event: Event): void {
        if (this.shwoSaleManLedger && !(event.target as HTMLElement).classList.contains('paginate_button')) {
            this.closeSalemanLedger();
        }
    }

    closeSalemanLedger(): void {
        this.shwoSaleManLedger = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('retailer-list').classList.remove('blur-div');
    }

    goToProfile(): void {
        console.log('Coming soon!');
    }

}
