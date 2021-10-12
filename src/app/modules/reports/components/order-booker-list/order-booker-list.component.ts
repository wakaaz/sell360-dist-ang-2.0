import { Subject } from 'rxjs';
import { ToasterService } from './../../../../core/services/toaster.service';
import { OrdersService } from './../../../orders/services/orders.service';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-order-booker-list',
  templateUrl: './order-booker-list.component.html',
  styleUrls: ['./order-booker-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderBookerListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  OrderType: string;
  salesmanId: string;
  OrderBooker: string;
  segment: string;
  startDate: any;
  endDate: any;

  loading = false;
  orders: Array<any> = [];

  criterias = {
    order_booker: [],
    routes: [],
    segments: [],
    salesmen: [],
  };

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  isDtInitialized: boolean = false

  dtTrigger: Subject<any> = new Subject();

  //Meaning yesterday date
  date = new Date(Date.now() - 864e5);

  constructor(
    private ordersService: OrdersService,
    private toastService: ToasterService,
  ) {
    this.dtOptions = {
      pagingType: 'simple_numbers'
    };
    this.startDate = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`;
    this.endDate = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`;
    this.OrderType = "0"
    this.segment = "0"
  }

  ngOnInit(): void {
    this.getCoreInformation();
  }

  getCoreInformation() {
    this.loading = true;
    this.ordersService.getSaleHistorySearchCriterias().subscribe(res => {
      this.criterias = res;
      this.OrderBooker = this.criterias.order_booker[0].employee_id.toString()
      this.getOrderBookersList();
    }, error => {
      this.loading = false;
      if (error.status !== 401 && error.status !== 1) {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Unable to get search criterias',
          type: 'error'
        });
      }
      scrollTo(0, 0);
    });
  }

  getOrderBookersList() {

    if (this.startDate > this.endDate)
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'Please keep start date lower than end date',
        type: 'error'
      });

    const endDateTemp: any = new Date(this.endDate);
    const startDateTemp: any = new Date(this.startDate);
    const diffInMs = endDateTemp - startDateTemp;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays > 5)
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'You can not select more than 5 days of orders',
        type: 'error'
      });

    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
      });
      this.isDtInitialized = false;
    }

    this.loading = true;
    let filters = `employee=${this.OrderBooker}&start_date=${this.startDate}&end_date${this.endDate}`;
    if (this.OrderType && this.OrderType != "0")
      filters += `&order_type=${this.OrderType}`
    if (this.salesmanId && this.salesmanId != "0")
      filters += `&salesman=${this.salesmanId}`
    if (this.segment && this.segment != "0")
      filters += `&segment=${this.segment}`

    this.ordersService.getSaleHistory(filters).subscribe(res => {
      this.orders = res;
      if (!this.isDtInitialized) {
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
      setTimeout(() => {
        this.loading = false;
      }, 300);
    }, error => {
      this.loading = false;
      if (error.status !== 401 && error.status !== 1) {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'New Orders not fetched, try again later.',
          type: 'error'
        });
      }
      scrollTo(0, 0);
    });
  }

  closeSalemanLedger(): void {
    document.body.classList.remove('no-scroll');
    document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
    document.getElementById('retailer-list').classList.remove('blur-div');
  }

  goToProfile(): void {
    console.log('Coming soon!');
  }

}
