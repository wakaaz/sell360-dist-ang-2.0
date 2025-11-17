import { RetailerService } from './../../../retailer/services/retailer.service';
import { API_URLS } from './../../../../core/constants/api-urls.constants';
import { LocalStorageService } from './../../../../core/services/storage.service';
import { environment } from 'src/environments/environment';
import { ToasterService } from './../../../../core/services/toaster.service';
import { OrdersService } from './../../../orders/services/orders.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-order-booker-list',
  templateUrl: './order-booker-list.component.html',
  styleUrls: ['./order-booker-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: false


})
export class OrderBookerListComponent implements OnInit {
  private gridApi!: GridApi;

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

  showDetailsModal = false;
  showBillsModal = false;

  //Meaning yesterday date
  date = new Date(Date.now() - 864e5);

  distributorId = null;

  // AG Grid column definitions
  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  constructor(
    private retailerService: RetailerService,
    private storageService: LocalStorageService,
    private toastService: ToasterService,
    private orderService: OrdersService
  ) {
    this.distributorId = this.storageService.getItem('distributor').id;
    this.startDate = `${this.date.getFullYear()}-${("0" + (this.date.getMonth() + 1)).slice(-2)}-${("0" + this.date.getDate()).slice(-2)}`;
    this.endDate = `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(-2)}-${("0" + new Date().getDate()).slice(-2)}`;
    this.OrderType = "0"
    this.segment = "0"
    this.columnDefs = this.getColumnDefs();
    this.setupGlobalFunctions();
  }

  getColumnDefs(): ColDef[] {
    // Capture component context
    const component = this;
    
    return [
      { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 120 },
      { field: 'invoice_number', headerName: 'Invoice#', sortable: true, filter: true, width: 150 },
      { field: 'shop_id', headerName: 'Shop ID', sortable: true, filter: true, width: 120 },
      { field: 'shop_name', headerName: 'Shop Name', sortable: true, filter: true, flex: 1 },
      { field: 'segment', headerName: 'Segment', sortable: true, filter: true, width: 120 },
      { field: 'order_booker', headerName: 'Order Booker', sortable: true, filter: true, flex: 1 },
      { field: 'salesman', headerName: 'Salesman', sortable: true, filter: true, flex: 1 },
      { 
        field: 'order_total', 
        headerName: 'Invoice Total', 
        sortable: true, 
        filter: true, 
        width: 150,
        valueFormatter: (params) => {
          if (params.value == null) return '';
          return params.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
      },
      {
        field: 'actions',
        headerName: 'Action',
        cellRenderer: (params: any) => {
          const order = params.data;
          
          return `
            <div class="flex gap-1 flex-wrap">
              <button onclick="window.orderDetailClick('${order.id}')" 
                      class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" title="Detail">Detail</button>
              <button onclick="window.billsModalClick('${order.id}')" 
                      class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" title="Bill">Bill</button>
            </div>
          `;
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
        },
        width: 200,
        sortable: false,
        filter: false,
        pinned: 'right'
      }
    ];
  }

  setupGlobalFunctions(): void {
    (window as any).orderDetailClick = (orderId: string) => {
      const order = this.orders.find(o => o.id === parseInt(orderId));
      if (order) {
        this.openDetailsModal(null, order);
      }
    };
    
    (window as any).billsModalClick = (orderId: string) => {
      const order = this.orders.find(o => o.id === parseInt(orderId));
      if (order) {
        this.openBillsModal(order);
      }
    };
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
  }

  onQuickFilterChanged(event: any): void {
    const filterValue = event.target.value;
    if (this.gridApi) {
      this.gridApi.setGridOption('quickFilterText', filterValue);
    }
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

    this.loading = true;

    let filters = `order_booker=${this.OrderBooker}&start_date=${this.startDate}&end_date=${this.endDate}`;
    if (this.OrderType && this.OrderType != "0")
      filters += `&order_type=${this.OrderType}`
    if (this.salesmanId && this.salesmanId != "0")
      filters += `&salesman=${this.salesmanId}`
    if (this.segment && this.segment != "0")
      filters += `&segment=${this.segment}`

    this.orderService.getSaleHistory(filters).subscribe(res => {
      this.orders = res;
      this.loading = false;
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

  openDetailsModal(e: any, order: any): void {
    this.orderDetail = [];
    if (e && e.target) {
      (e.target as HTMLButtonElement).setAttribute("disabled", "disabled");
    }
    this.getViewOrderDetailById(e, order);
  }

  invoiceDate = null;
  activeOrder = null;

  getBills(size: string = 'A4'): void {
    const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.activeOrder.sales_man_id}&date=${this.activeOrder.date}&dist_id=${this.distributorId}&size=${size}&status=processed&orderID=${this.activeOrder.id}`;
    window.open(billsUrl, "_blank");
    this.closeBillsModal();
    // if (this.invoiceDate) {
    //   this.orderService.updateDispatchInvoiceDate(this.activeOrder.load_id, this.invoiceDate).subscribe(res => {
    //     if (res.status === 200) {
    //       document.getElementById('close-bills').click();
    //       const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.activeOrder.sales_man_id}&date=${this.activeOrder.date}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.activeOrder.load_id}`;
    //       window.open(billsUrl, "_blank");
    //       this.invoiceDate = null;
    //     } else {
    //       this.toastService.showToaster({
    //         type: 'error',
    //         message: 'Bill cannot be generated at the moment, please try again later!',
    //         title: 'Bill cannot be generated:'
    //       });
    //     }
    //   });
    // } else {
    //   this.toastService.showToaster({
    //     type: 'error',
    //     message: 'Please select invoice date to generate bill(s)!',
    //     title: 'Please select invoice date:'
    //   });
    // }
  }

  openBillsModal(order: any) {
    this.activeOrder = order;
    this.showBillsModal = true;
  }

  closeBillsModal(): void {
    this.showBillsModal = false;
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

  getViewOrderDetailById(e: any, order: any): void {
    this.retailerService.getOrderDetail(order.id).subscribe(res => {
      this.activeOrder = order;
      this.orderDetail = res.details;
      this.paymentInfo = {
        cash: res.payments.find(x => x.payment_mode.toLowerCase() == 'cash'),
        cheque: res.payments.find(x => x.payment_mode.toLowerCase() == 'cheque'),
        credit: res.payments.find(x => x.payment_mode.toLowerCase() == 'credit'),
      };
      if (e && e.target) {
        (e.target as HTMLButtonElement).removeAttribute("disabled");
      }
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
    this.showDetailsModal = false;
    document.body.classList.remove('no-scroll');
  }

  onStartDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.startDate = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.startDate = null;
    } else if (typeof date === 'string') {
      this.startDate = date;
    }
  }

  onEndDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.endDate = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.endDate = null;
    } else if (typeof date === 'string') {
      this.endDate = date;
    }
  }

}
