import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  PRIMARY_ORDER,
  PRIMARY_ORDER_API_STATUS,
  PRIMARY_ORDER_API_STATUS_UPDATE,
} from 'src/app/core/constants/primary-orders-parms.constants';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { PrimaryOrdersService } from '../../services/primary-orders.service';
import { PrimaryOrder } from '../../_models/order';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false,
})
export class ListComponent {
  private gridApi!: GridApi;
  
  currentYear: number = new Date().getFullYear();
  isReports = false;
  readonly PRIMARY_ORDER_CONST = PRIMARY_ORDER;
  readonly PRIMARY_ORDER_STATUS_UPDATE = PRIMARY_ORDER_API_STATUS_UPDATE;
  orderStatus: string;
  confirmDeleteOrderID: number;
  orderStatusAPI: string;
  selectedOrderBooker: number;
  showDetailsPopup: boolean;
  submitted: boolean;
  byOrderBooker: boolean;
  loading: boolean;
  orderDetailLoading: boolean = false;
  orderBookers: Array<any> = [];
  salesMen: Array<any> = [];
  primaryOrders: Array<any> = [];
  selectedOrders: Array<any> = [];
  orderDetial: any = null;
  order: PrimaryOrder;
  totalGrossAmt = 0.0;
  totalDiscount = 0.0;
  totalTax = 0.0;
  totalPkr = 0.0;
  frienghtPrice = 0.0;
  showCancelModal: boolean = false;
  showOrderDetailModal: boolean = false;

  // AG Grid column definitions
  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  getColumnDefs(): ColDef[] {
    // Capture component context
    const component = this;
    const orderStatus = this.orderStatus;
    const PRIMARY_ORDER_CONST = this.PRIMARY_ORDER_CONST;
    
    return [
      { field: 'id', headerName: 'Order ID', sortable: true, filter: true, width: 120 },
      { field: 'created_at', headerName: 'Date', sortable: true, filter: true, width: 150 },
      { field: 'distributor_name', headerName: 'Distributor', sortable: true, filter: true, flex: 1 },
      { field: 'employee_name', headerName: 'Employee', sortable: true, filter: true, flex: 1 },
      { 
        field: 'order_total', 
        headerName: 'Order Total', 
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
          
          let buttons = `
            <div class="flex gap-1 flex-wrap">
              <button onclick="window.orderDetailClick('${order.id}')" 
                      class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" title="Detail">Detail</button>
          `;
          
          if (PRIMARY_ORDER_CONST.BOOKED === orderStatus) {
            buttons += `
              <button onclick="window.processOrderClick('${order.id}')" 
                      class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" title="Process">Process</button>
            `;
          }
          
          if (PRIMARY_ORDER_CONST.PROCESSED === orderStatus) {
            buttons += `
              <button onclick="window.executeOrderClick('${order.id}')" 
                      class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" title="Execute">Execute</button>
            `;
          }
          
          if (PRIMARY_ORDER_CONST.EXECUTE !== orderStatus) {
            buttons += `
              <button onclick="window.completeOrderClick('${order.id}')" 
                      class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" title="Complete">Complete</button>
            `;
          }
          
          if (!(PRIMARY_ORDER_CONST.EXECUTE === orderStatus || PRIMARY_ORDER_CONST.COMPLETED === orderStatus || PRIMARY_ORDER_CONST.CANCELED === orderStatus) && orderStatus !== 'purchased' && orderStatus !== 'returned') {
            buttons += `
              <a href="/primaryOrders/${orderStatus}/edit/${order.id}" 
                 class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] inline-block" title="Edit">Edit</a>
              <button onclick="window.cancelOrderClick('${order.id}')" 
                      class="bg-red-500 dark:bg-red-600 dark:border-red-600 dark:text-white font-primary text-[11px] h-auto leading-none py-[4px] px-[5px] text-white rounded-[5px] ml-0.5" title="Cancel">Cancel</button>
            `;
          }
          
          buttons += `</div>`;
          return buttons;
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
        },
        width: 300,
        sortable: false,
        filter: false,
        pinned: 'right'
      }
    ];
  }
  constructor(
    private primaryOrderService: PrimaryOrdersService,
    private toastService: ToasterService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.route.params.subscribe((param) => {
      this.orderStatus = param['status'];
      switch (this.orderStatus) {
        case PRIMARY_ORDER.BOOKED:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.BOOKED;
          break;
        case PRIMARY_ORDER.PURCHASE_HISTORY:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.PURCHASE_HISTORY;
          break;
        case PRIMARY_ORDER.PROCESSED:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.PROCESSED;
          break;
        case PRIMARY_ORDER.EXECUTE:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.EXECUTE;
          break;
        case PRIMARY_ORDER.COMPLETED:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.COMPLETED;
          break;
        case PRIMARY_ORDER.RETURNED:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.RETURNED;
          break;
        case PRIMARY_ORDER.CANCELED:
          this.orderStatusAPI = PRIMARY_ORDER_API_STATUS.CANCELED;
          break;
        default:
          break;
      }
      this.onInit();
    });
  }

  onInit(): void {
    // console.log(this.route.snapshot.params.status);
    this.byOrderBooker = true;
    this.columnDefs = this.getColumnDefs();
    this.getPendingOrders();
    this.setupGlobalFunctions();
    if (
      this.orderStatusAPI === PRIMARY_ORDER.COMPLETED ||
      this.orderStatusAPI === PRIMARY_ORDER.CANCELED ||
      this.orderStatusAPI === PRIMARY_ORDER_API_STATUS.PURCHASE_HISTORY ||
      this.orderStatusAPI === PRIMARY_ORDER_API_STATUS.RETURNED
    ) {
      this.isReports = true;
    } else {
      this.isReports = false;
    }
    console.log(this.orderStatus);
  }

  setupGlobalFunctions(): void {
    (window as any).orderDetailClick = (orderId: string) => {
      this.openOrderDetailModal(parseInt(orderId));
    };
    
    (window as any).processOrderClick = (orderId: string) => {
      this.onUpdateOrderStatus(parseInt(orderId), PRIMARY_ORDER_API_STATUS_UPDATE.PROCESSED);
    };
    
    (window as any).executeOrderClick = (orderId: string) => {
      this.onUpdateOrderStatus(parseInt(orderId), PRIMARY_ORDER_API_STATUS_UPDATE.EXECUTE);
    };
    
    (window as any).completeOrderClick = (orderId: string) => {
      this.onUpdateOrderStatus(parseInt(orderId), PRIMARY_ORDER_API_STATUS_UPDATE.COMPLETED);
    };
    
    (window as any).cancelOrderClick = (orderId: string) => {
      this.onConfirmationDelete(parseInt(orderId));
      this.showCancelModal = true;
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
  getPendingOrders() {
    this.loading = true;
    this.primaryOrderService
      .getPendingOrdersList(this.orderStatusAPI)
      .subscribe((x) => {
        this.primaryOrders = [...x.data];
        this.loading = false;
      });
  }

  openOrderDetailModal(id: number): void {
    this.order = null;
    this.showOrderDetailModal = true;
    document.body.classList.add('no-scroll');
    this.cdr.detectChanges();
    this.getOrderDetail(id);
  }

  getOrderDetail(id: number): void {
    this.orderDetailLoading = true;
    this.primaryOrderService.getOderDetailById(id).subscribe((res) => {
      this.order = new PrimaryOrder();
      {
        const orderRes = { ...res.data.order };
        this.order.distributor_name = orderRes.distributor_name;
        this.order.employee_name = orderRes.employee_name;
        this.order.date = orderRes.date;
        this.order.id = orderRes.id;
        this.order.distributor_phone = orderRes.distributor_phone;
        this.order.distributor_address = orderRes.distributor_address;
        this.order.status = orderRes.status;
        this.order.date = orderRes.date;
        this.order.employee_name = orderRes.employee_name;
        this.order.frieght_price = orderRes.frieght_price;
        this.order.orderContent = this.primaryOrderService.getPrimaryOrderItem([
          ...res.data.content,
        ]);
        
        this.orderDetailLoading = false;
        // Trigger change detection to update the view
        this.cdr.detectChanges();
      }
    }, (error) => {
      this.orderDetailLoading = false;
      // Trigger change detection even on error
      this.cdr.detectChanges();
    });
  }

  onOrderDetail(id: number) {
    this.openOrderDetailModal(id);
  }

  getTotalDiscount(item: any): number {
    return (
      this.getTradeOfferDiscount(item) +
      this.getDistributorDiscount(item) +
      this.getSpecialDiscount(item) +
      this.getBookDiscount(item)
    );
  }

  getTradeOfferDiscount(item: any): number {
    return item?.scheme_id !== 0
      ? item?.booked_total_qty *
          ((item?.booked_total_qty * item?.unit_price) /
            item?.itemscheme_min_quantity +
            item?.scheme_quantity_free)
      : 0;
  }
  getDistributorDiscount(item: any): number {
    return (this.totalGrossAmt * item?.distributor_discount) / 100;
  }
  getSpecialDiscount(item: any): number {
    return (
      ((item?.special_discount * item?.unit_price) / 100) *
      item?.special_discount
    );
  }
  getBookDiscount(item: any): number {
    return item?.booker_discount * item?.booked_total_qty;
  }

  addOrderToAssignment(order: any): void {
    this.selectedOrders = this.selectedOrders.filter(
      (odr) => odr.id !== order.id
    );
    const assignment = {
      sales_man: order.selectedSaleman.id,
      employee_id: order.employee_id,
      id: order.id,
      date: order.date,
    };
    this.selectedOrders.push(assignment);
  }

  openDetailsModal(order: any): void {
    document.body.classList.add('no-scroll');
  }

  closeDetailsModal(): void {
    document.body.classList.remove('no-scroll');
  }
  onUpdateOrderStatus(id: number, status: string) {
    this.loading = true;
    this.primaryOrderService.updateOrderStatus(id, status).subscribe(
      (res) => {
        this.onInit();
      },
      (err) => {
        console.log('err => ', err);
      }
    );
  }

  onConfirmationDelete(orderId: number) {
    this.confirmDeleteOrderID = orderId;
  }

  closeCancelModal(): void {
    this.showCancelModal = false;
  }

  closeOrderDetailModal(): void {
    this.showOrderDetailModal = false;
    document.body.classList.remove('no-scroll');
  }
}
