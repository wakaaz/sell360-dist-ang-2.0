import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../orders/services/orders.service';
import { Subscription } from 'rxjs';
import { RetailerService } from '../../services/retailer.service';

@Component({
  selector: 'app-retailer-invoices',
  templateUrl: './retailer-invoices.component.html',
  styleUrls: ['./retailer-invoices.component.css'],
})
export class RetailerInvoicesComponent implements OnInit {
  dtOptions: DataTables.Settings;
  subscriptions: Subscription[] = [];
  creditInvoicesData: any;
  constructor(private retailerService: RetailerService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getRetailerInvoices();
  }

  getRetailerInvoices() {
    this.retailerService.getAllRetailersCredits().subscribe((data: any) => {
      this.creditInvoicesData = data.data;
    });
  }
}
