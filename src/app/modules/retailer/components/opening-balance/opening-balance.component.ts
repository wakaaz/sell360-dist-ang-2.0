import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-opening-balance',
    templateUrl: './opening-balance.component.html',
    styleUrls: ['./opening-balance.component.css']
})

export class OpeningBalanceComponent implements OnInit {

    dtOptions: DataTables.Settings = {};

    constructor() {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
    }

}
