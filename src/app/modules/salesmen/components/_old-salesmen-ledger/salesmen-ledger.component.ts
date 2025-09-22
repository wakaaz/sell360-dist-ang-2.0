import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'app-salesmen-ledger',
    templateUrl: 'salesmen-ledger.component.html',
    styleUrls: ['./salesmen-ledger.component.css'],
  standalone: false


})

export class SalesmenLedgerComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    constructor() {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

}
