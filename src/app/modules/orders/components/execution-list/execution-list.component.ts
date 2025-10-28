import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';
import { ToasterService, Toaster } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
    selector: 'app-orderexecution-list',
    templateUrl: 'execution-list.component.html',
    styleUrls: ['./execution-list.component.css'],
  standalone: false
})
export class OrderExecutionListComponent implements OnInit {

    private gridApi!: GridApi;

    bookingSheetUrl: string;
    showExecuteOrder: boolean;
    loading: boolean;
    selectedLoadId: number;
    distributorId: number;
    showRevertModal: boolean = false;

    ordersList: Array<any> = [];

    columnDefs: ColDef[] = [
        { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 120 },
        { field: 'sales_man', headerName: 'Sales Man', sortable: true, filter: true, flex: 1 },
        { field: 'emp_names', headerName: 'Order Bookers', sortable: true, filter: true, flex: 1 },
        { field: 'total_orders', headerName: 'Orders', sortable: true, filter: true, width: 120 },
        { 
            field: 'order_total', 
            headerName: 'Amount', 
            sortable: true, 
            filter: true, 
            width: 150,
            valueFormatter: (params) => {
                if (!params.value) return '';
                return params.value.toFixed(2);
            }
        },
        {
            field: 'actions',
            headerName: 'Action',
            cellRenderer: (params: any) => {
                const order = params.data;
                return `
                    <div class="flex gap-1">
                        <button onclick="window.bookingSheetClick('${order.load_id}', '${order.sales_man_id}', '${order.date}')" 
                                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Booking Sheet">BS</button>
                        <button onclick="window.loadSheetClick('${order.load_id}', '${order.sales_man_id}', '${order.date}')" 
                                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Load Sheet">LS</button>
                        <button onclick="window.billsClick('${order.load_id}', '${order.sales_man_id}', '${order.date}')" 
                                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Bills">Bills</button>
                        <button onclick="window.revertClick('${order.load_id}')" 
                                class="bg-red-500 dark:bg-red-600 dark:border-red-600 dark:text-white font-primary text-[11px] h-auto leading-none py-[4px] px-[5px] text-white rounded-[5px] mb-1 ml-0.5" title="Revert Order">Revert</button>
                        <a href="/orders/execute-order/${order.sales_man_id}/${order.date}/${order.load_id}" 
                           class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] mb-1 ml-0.5 inline-block">Execute</a>
                    </div>
                `;
            },
            cellStyle: {
                display: 'flex',
                alignItems: 'center', 
            },
            width: 350,
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
        private router: Router,
        private orderService: OrdersService,
        private toastServicer: ToasterService,
        private storageService: LocalStorageService,
    ) {
        this.bookingSheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}`;
        this.distributorId = storageService.getItem('distributor').id;
    }

    ngOnInit(): void {
        this.showExecuteOrder = false;
        this.getExecutionList();
        this.setupGlobalFunctions();
    }

    setupGlobalFunctions(): void {
        (window as any).bookingSheetClick = (loadId: string, salesManId: string, date: string) => {
            this.loadBookingSheet({ load_id: loadId, sales_man_id: salesManId, date: date });
        };
        
        (window as any).loadSheetClick = (loadId: string, salesManId: string, date: string) => {
            this.loadLoadSheet({ load_id: loadId, sales_man_id: salesManId, date: date });
        };

        (window as any).billsClick = (loadId: string, salesManId: string, date: string) => {
            this.loadBills({ load_id: loadId, sales_man_id: salesManId, date: date });
        };
        
        (window as any).revertClick = (loadId: string) => {
            this.selectedLoadId = parseInt(loadId);
            this.showRevertModal = true;
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

    getExecutionList(): void {
        this.loading = true;
        this.orderService.getExecutionList().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersList = res.data;
            } else {
                console.log('Error when fetching orders :>> ', res.message);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Cannot fetch orders list for execution :>> ', error.messge);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        });
    }

    loadBookingSheet(order: any): void {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&loadId=${order.load_id}`;
        window.open(sheetUrl);
    }

    loadLoadSheet(order: any): void {
        const sheetUrl = `${environment.apiDomain}${API_URLS.LS_PDF}/${order.load_id}/${order.sales_man_id}/${order.date}`;
        window.open(sheetUrl);
    }

    loadBills(order: any): void {
        const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${order.sales_man_id}&date=${order.date}&dist_id=${this.distributorId}&size=A4&status=processed&loadId=${order.load_id}`;
        window.open(billsUrl);
    }

    revertOrder(): void {
      this.loading = true;
      this.closeRevertModal();
      this.orderService.revertOrder('load', this.selectedLoadId).subscribe(res => {
        this.loading = false;
        if (res.status === 200) {
          this.toastServicer.showToaster({
            title: 'Revert Success:',
            message: 'The order reverted successfully!',
            type: 'success'
          });
          this.router.navigateByUrl('/orders');
        } else {
          this.toastServicer.showToaster({
            title: 'Revert Error:',
            message: 'The order cannot be reverted at the moment, please try again later.',
            type: 'error'
          });
        }
      }, error => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastServicer.showToaster({
            title: 'Revert Error:',
            message: 'The order cannot be reverted at the moment, please try again later.',
            type: 'error'
          });
        }
      });
    }

    closeRevertModal(): void {
      this.showRevertModal = false;
    }

}

