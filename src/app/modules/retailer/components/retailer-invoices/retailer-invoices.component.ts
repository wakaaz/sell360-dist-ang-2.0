import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer-invoices',
  templateUrl: './retailer-invoices.component.html',
  styleUrls: ['./retailer-invoices.component.css']
})
export class RetailerInvoicesComponent implements OnInit {
  dtOptions: DataTables.Settings;  
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
  }

}
