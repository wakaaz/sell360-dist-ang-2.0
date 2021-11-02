import { RetailerService } from './../../../retailer/services/retailer.service';
import { API_URLS } from './../../../../core/constants/api-urls.constants';
import { LocalStorageService } from './../../../../core/services/storage.service';
import { environment } from 'src/environments/environment';
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

  showDetailsModal = false;

  //Meaning yesterday date
  date = new Date(Date.now() - 864e5);

  distributorId = null;

  constructor(
    private retailerService: RetailerService,
    private storageService: LocalStorageService,
    private toastService: ToasterService,
    private orderService: OrdersService
  ) {
    this.distributorId = this.storageService.getItem('distributor').id;
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
    this.orderService.getSaleHistorySearchCriterias().subscribe(res => {
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

    this.startDate = "2021-10-27";
    let filters = `order_booker=${this.OrderBooker}&start_date=${this.startDate}&end_date=${this.endDate}`;
    if (this.OrderType && this.OrderType != "0")
      filters += `&order_type=${this.OrderType}`
    if (this.salesmanId && this.salesmanId != "0")
      filters += `&salesman=${this.salesmanId}`
    if (this.segment && this.segment != "0")
      filters += `&segment=${this.segment}`

    this.orderService.getSaleHistory(filters).subscribe(res => {
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

  orderDetail: any = [];

  openDetailsModal(e, orderId: number): void {
    this.orderDetail = [];
    (e.target as HTMLButtonElement).setAttribute("disabled", "disabled");
    this.getViewOrderDetailById(e, orderId);
  }

  invoiceDate = null;
  activeOrder = null;

  getBills(size: string = 'A4'): void {
    if (this.invoiceDate) {
      this.orderService.updateDispatchInvoiceDate(this.activeOrder.load_id, this.invoiceDate).subscribe(res => {
        if (res.status === 200) {
          document.getElementById('close-bills').click();
          const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.activeOrder.sales_man_id}&date=${this.activeOrder.date}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.activeOrder.load_id}`;
          window.open(billsUrl, "_blank");
          this.invoiceDate = null;
        } else {
          this.toastService.showToaster({
            type: 'error',
            message: 'Bill cannot be generated at the moment, please try again later!',
            title: 'Bill cannot be generated:'
          });
        }
      });
    } else {
      this.toastService.showToaster({
        type: 'error',
        message: 'Please select invoice date to generate bill(s)!',
        title: 'Please select invoice date:'
      });
    }
  }

  openBillsModal(order: any) {
    this.activeOrder = order;
    (document.getElementById("billsPrintPaperModalTrigger") as HTMLButtonElement).click();
  }

  paymentInfo = {
    cash: {
      amount: 0,
      payment_mode: 'cash'
    },
    cheque: {
      amount: 0,
      payment_mode: 'cheque'
    },
    credit: {
      amount: 0,
      payment_mode: 'credit'
    }
  };

  getViewOrderDetailById(e, order): void {
    this.retailerService.getOrderDetail(order.id).subscribe(res => {
      this.activeOrder = order;
      this.orderDetail = res.details;
      this.paymentInfo = {
        cash: res.payments.find(x => x.payment_mode.toLowerCase() == 'cash'),
        cheque: res.payments.find(x => x.payment_mode.toLowerCase() == 'cheque'),
        credit: res.payments.find(x => x.payment_mode.toLowerCase() == 'credit'),
      };
      (e.target as HTMLButtonElement).removeAttribute("disabled");
      (document.getElementById("orderDetailsModalTrigger") as HTMLButtonElement).click();
      this.orderDetail.gross_amount = this.orderDetail.map(x => x.gr_amount).reduce((a, b) => a + b, 0);
      this.orderDetail.to_discount = this.orderDetail.map(x => x.trade_offer).reduce((a, b) => a + b, 0);
      this.orderDetail.trade_discount = this.orderDetail.map(x => x.trade_discount).reduce((a, b) => a + b, 0);
      this.orderDetail.special_discount = this.orderDetail.map(x => x.special_discount).reduce((a, b) => a + b, 0);
      this.orderDetail.booker_discount = this.orderDetail.map(x => x.extra_discount).reduce((a, b) => a + b, 0);
      this.orderDetail.tax_amount = this.orderDetail.map(x => x.tax_in_value).reduce((a, b) => a + b, 0);
      this.orderDetail.total_amount = this.orderDetail.map(x => x.final_price).reduce((a, b) => a + b, 0);
      this.orderDetail.recovery_amount = 0;
      this.orderDetail.discount_pkr = this.orderDetail.to_discount + this.orderDetail.trade_discount + this.orderDetail.special_discount + this.orderDetail.booker_discount;
      this.showDetailsModal = true;
    });
  }

  closeDetailsModal(): void {
    document.body.classList.remove('no-scroll');
  }

}
