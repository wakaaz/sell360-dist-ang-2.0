import { SalesmenService } from './../../services/salesmen.service';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-salesmen-ledger',
  templateUrl: 'salesmen-ledger.component.html',
  styleUrls: ['./salesmen-ledger.component.css'],
  standalone: false


})
export class SalesmenLedgerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  salesmen = [];
  ledger = [];
  loading = false;
  constructor(private smService: SalesmenService) {
    this.getSalesmen();
  }

  smSelected = null;
  salesman = {
    id: null,
    salary: 0,
    balance: 0,
    amount: 0,
  };

  month = null;

  amountDue = 0;

  getSalesmen() {
    this.loading = true;
    this.smService.getAllSalesMen().subscribe((x) => {
      this.salesmen = x.data;
      this.loading = false;
    });
  }

  smChanged() {
    this.salesman = this.salesmen.find((s) => s.id == this.smSelected);
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
  }

  getLedger() {
    this.loading = true;
    this.smService
      .getSalesmanLedger(
        this.salesman.id,
        this.month.split('-')[1],
        this.month.split('-')[0]
      )
      .subscribe(
        (x) => {
          this.ledger = x;
          this.loading = false;
          this.salesman.balance = Math.round(
            this.ledger
              .map((x) => parseFloat(x.balance))
              .reduce((partial_sum, a) => partial_sum + a, 0)
          );
          if (this.salesman.balance < 0)
            this.salesman.balance = Math.abs(this.salesman.balance);

          // if (this.salesman.salary > this.salesman.balance)
          //   this.amountDue = this.salesman.salary - (this.salesman.balance < 0 ? this.salesman.balance : this.salesman.balance);
          // else
          //   this.amountDue = this.salesman.balance - this.salesman.salary;

          this.amountDue = this.salesman.salary - this.salesman.balance;
        },
        (error) => {
          this.loading = false;
        }
      );
  }
}
