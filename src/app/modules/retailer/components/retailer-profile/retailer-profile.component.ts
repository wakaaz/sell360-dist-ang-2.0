import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-retailer-profile',
    templateUrl: './retailer-profile.component.html',
    styleUrls: ['./retailer-profile.component.css']
})

export class RetailerProfileComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    openReport: boolean;

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

    openSalesAndProductsReport(event: Event): void {
        event.stopPropagation();
        this.openReport = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('profile').classList.add('blur-div');
    }

    clickedOutSide(event: Event): void {
        if (this.openReport && !(event.target as HTMLElement).classList.contains('paginate_button')) {
            this.closeSalesAndProductsReport();
        }
    }

    closeSalesAndProductsReport(): void {
        this.openReport = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('profile').classList.remove('blur-div');
    }

}
