import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

import { ToasterService } from 'src/app/core/services/toaster.service';

import { OrdersService } from '../../services/orders.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './orders-list-details.component.html',
  styleUrls: ['./orders-list-details.component.css'],
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class OrdersListDetailsComponent implements OnInit {
  private gridApi!: GridApi;
  
  dtOptions: DataTables.Settings = {};
  showDetails: boolean;
  showDetailModal: boolean = false;
  loading: boolean;
  orders: Array<any> = [];
  orderDetail: any = null;
  date = 0;
  employeeId = 0;
  
  columnDefs: ColDef[] = [
    { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 120 },
    { field: 'retailer', headerName: 'Retailer', sortable: true, filter: true, flex: 1 },
    { field: 'channel', headerName: 'Channel', sortable: true, filter: true, flex: 1 },
    { field: 'emp_name', headerName: 'Orders Booker', sortable: true, filter: true, width: 180 },
    { field: 'order_total', headerName: 'Order Total', sortable: true, filter: true, width: 130, valueFormatter: (params) => params.value ? params.value.toFixed(2) : '0.00' },
    { field: 'order_type', headerName: 'Status', sortable: true, filter: true, width: 100, valueFormatter: (params) => params.value ? 'Hold' : 'New' },
    {
      field: 'actions',
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const order = params.data;
        return `
          <div class="flex gap-1">
            <button onclick="window.openDetailsModal(${order.id})" 
               class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5">Detail</button>
          </div>
        `;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center', 
      },
      width: 100,
      sortable: false,
      filter: false,
      pinned: 'right'
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private toastService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.showDetails = false;
    this.date = this.route.snapshot.params['date'];
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    this.getViewOrdersByEmployee();
    
    // Make openDetailsModal available globally for AG Grid cell renderer
    (window as any).openDetailsModal = (orderId: number) => this.openDetailsModal(orderId);
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

  getViewOrdersByEmployee(): void {
    this.loading = true;
    this.ordersService
      .getViewOrdersByEmployee(this.employeeId, this.date.toString())
      .subscribe(
        (res) => {
          this.loading = false;
          if (res.status === 200) {
            this.orders = res.data;
          }
        },
        (error) => {
          this.loading = false;
          if (error.status !== 401 && error.status !== 1) {
            this.toastService.showToaster({
              title: 'Error:',
              message: 'New Orders not fetched, try again later.',
              type: 'error',
            });
          }
          scrollTo(0, 0);
        }
      );
  }

  getViewOrderDetailById(id: number): void {
    this.loading = true;
    this.ordersService.getViewOrderDetailById(id).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 200) {
          this.orderDetail = res.data;
          this.orderDetail.subTotal = this.orderDetail.order_detail
            .map((x) => x.final_price)
            .reduce((a, b) => a + b, 0);
          this.orderDetail.totalDiscount = this.orderDetail.order_detail
            .map(
              (x) =>
                x.original_price * x.quantity -
                x.unit_price_after_individual_discount * x.quantity
            )
            .reduce((a, b) => a + b, 0);
          this.showDetails = true;
          // Trigger change detection to update the view
          this.cdr.detectChanges();
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 401 && error.status !== 1) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'New Orders not fetched, try again later.',
            type: 'error',
          });
        }
        scrollTo(0, 0);
        // Trigger change detection even on error
        this.cdr.detectChanges();
      }
    );
  }

  openDetailsModal(orderId: number): void {
    this.orderDetail = null;
    this.showDetailModal = true;
    document.body.classList.add('no-scroll');
    this.cdr.detectChanges();
    this.getViewOrderDetailById(orderId);
  }

  closeDetailModal(): void {
    this.showDetailModal = false;
    document.body.classList.remove('no-scroll');
  }

  closeDetailsModal(): void {
    document.body.classList.remove('no-scroll');
  }
}
