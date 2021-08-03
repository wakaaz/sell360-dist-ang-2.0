import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-spot-sale',
    templateUrl: './spot-sale.component.html',
    styleUrls: ['./spot-sale.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class SpotSaleComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    loading: boolean;
    selectedDate: string;
    selectedSaleMan: number;

    constructor() {
        this.loading = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

}
