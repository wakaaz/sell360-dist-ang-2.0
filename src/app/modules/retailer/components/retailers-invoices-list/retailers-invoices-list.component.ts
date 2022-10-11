import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RetailerService } from '../../services/retailer.service';
@Component({
  selector: 'app-retailers-invoices-list',
  templateUrl: './retailers-invoices-list.component.html',
  styleUrls: ['./retailers-invoices-list.component.css'],
})
export class RetailersInvListComponent implements OnInit {
  dtOptions: DataTables.Settings;
  subscriptions: Subscription[] = [];
  creditInvoicesData: any = [];
  total: any = {};
  loading = false;

  constructor(private retailerService: RetailerService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getRetailerInvoices();
  }

  getRetailerInvoices() {
    this.loading = true;
    this.retailerService.getAllRetailersCredits().subscribe((data: any) => {
      this.creditInvoicesData = data.data.retailers;
      this.total = data.data.total;
      console.log('credit invoices -> ', this.total);
      this.loading = false;
    });
  }
}
