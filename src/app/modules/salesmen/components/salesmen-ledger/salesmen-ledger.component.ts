import { SalesmenService } from './../../services/salesmen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesmen-ledger',
  templateUrl: 'salesmen-ledger.component.html',
  styleUrls: ['./salesmen-ledger.component.css']
})

export class SalesmenLedgerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  salesmen = [];
  loading = false;
  constructor(private smService: SalesmenService) {
    this.getSalesmen();
  }

  smSelected = null
  salesman = {
    salary: 0,
    balance: 0,
    amount: 0
  };

  getSalesmen() {
    this.loading = true;
    this.smService.getAllSalesMen().subscribe(x => {
      this.salesmen = x.data;
      this.loading = false;
    })
  }

  smChanged() {
    this.salesman = this.salesmen.find(s => s.id == this.smSelected)
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers'
    };
  }

}
