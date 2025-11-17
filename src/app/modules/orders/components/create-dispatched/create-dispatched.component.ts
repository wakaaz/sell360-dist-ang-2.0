import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { environment } from 'src/environments/environment';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
    selector: 'app-create-dispatched',
    templateUrl: 'create-dispatched.component.html',
    styleUrls: ['./create-dispatched.component.css'],
  standalone: false
})

export class CreateDispatchedComponent implements OnInit {
    private gridApi!: GridApi;
    
    bookingSheetUrl: string;
    selectedAssignmentId: number;
    loading: boolean;
    ordersList: Array<any> = [];
    showRevertModal: boolean = false;
    
    // AG Grid column definitions - simplified for debugging
    columnDefs: ColDef[] = [
        { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 120 },
        { field: 'sales_man', headerName: 'Sales Man', sortable: true, filter: true, flex: 1 },
        { field: 'emp_names', headerName: 'Order Bookers', sortable: true, filter: true, flex: 1  },
        { field: 'total_orders', headerName: 'Orders', sortable: true, filter: true, width: 100 },
        { field: 'order_total', headerName: 'Booked Value', sortable: true, filter: true, width: 140 },
        { field: 'pending_retailers', headerName: 'Pending Shops', sortable: true, filter: true, width: 150 },
        {
            field: 'actions',
            headerName: 'Action',
            cellRenderer: (params: any) => {
                const order = params.data;
                return `
                    <div class="flex gap-1">
                        <button onclick="window.bookingSheetClick('${order.assignment_id}', '${order.sales_man_id}', '${order.date}')" 
                                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Booking Sheet">BS</button>
                        ${order.pending_retailers > 0 ? 
                            `<button class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] mb-1 ml-0.5 opacity-50 cursor-not-allowed" disabled title="Approve all retailers first">Dispatch</button>` :
                            `<a href="/orders/dispatch/${order.assignment_id}/${order.sales_man_id}/${order.date}" 
                               class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] mb-1 ml-0.5 inline-block">Dispatch</a>`
                        }
                        <button onclick="window.revertClick('${order.assignment_id}')" 
                                class="bg-red-500 dark:bg-red-600 dark:border-red-600 dark:text-white font-primary text-[11px] h-auto leading-none py-[4px] px-[5px] text-white rounded-[5px] mb-1 ml-0.5" title="Revert Order">Revert</button>
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

    defaultColDef: ColDef = {
        resizable: true,
        sortable: true,
        filter: true
    };


    constructor(
        private router: Router,
        private toastService: ToasterService,
        private orderService: OrdersService,
    ) {
        this.bookingSheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}`;
    }

    ngOnInit(): void {
        this.getDispatchOrderListing();
        this.setupGlobalFunctions();
    }

    setupGlobalFunctions(): void {
        (window as any).bookingSheetClick = (assignmentId: string, salesManId: string, date: string) => {
            this.loadBookingSheet({ assignment_id: assignmentId, sales_man_id: salesManId, date: date });
        };
        
        (window as any).revertClick = (assignmentId: string) => {
            this.selectedAssignmentId = parseInt(assignmentId);
            this.showRevertModal = true;
        };
    }

    onGridReady(params: GridReadyEvent): void {
        this.gridApi = params.api;
        console.log('Grid Ready - Row Data:', this.ordersList);
        console.log('Grid Ready - Column Defs:', this.columnDefs);
        
        // If no data, add some test data for debugging
        if (!this.ordersList || this.ordersList.length === 0) {
            console.log('No data available, adding test data...');
            this.ordersList = [
                {
                    date: '2024-01-01',
                    sales_man: 'John Doe',
                    emp_names: 'Jane Smith',
                    total_orders: 5,
                    order_total: 1500.50,
                    pending_retailers: 2,
                    assignment_id: 1,
                    sales_man_id: 101
                },
                {
                    date: '2024-01-02',
                    sales_man: 'Mike Johnson',
                    emp_names: 'Sarah Wilson',
                    total_orders: 3,
                    order_total: 750.25,
                    pending_retailers: 0,
                    assignment_id: 2,
                    sales_man_id: 102
                }
            ];
            console.log('Test data added:', this.ordersList);
        }
    }

    onQuickFilterChanged(event: any): void {
        const filterValue = event.target.value;
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', filterValue);
        }
    }

    getDispatchOrderListing(): void {
        this.loading = true;
        console.log('Loading dispatch orders...');
        this.orderService.getDispatchOrdersListing().subscribe(res => {
            this.loading = false;
            console.log('API Response:', res);
            if (res.status === 200) {
                this.ordersList = res.data;
                console.log('Orders List loaded:', this.ordersList);
                console.log('Orders List length:', this.ordersList.length);
            } else {
                console.log('API returned non-200 status:', res.status);
            }
        }, error => {
            this.loading = false;
            console.error('API Error:', error);
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = {
                    type: 'error',
                    message: 'Dispatch Order list cannot be fetched at the moment! Please try again',
                    title: 'Error:'
                };
                this.toastService.showToaster(toast);
            }
        });
    }


    revertOrder(): void {
      this.loading = true;
      this.closeRevertModal();
      this.orderService.revertOrder('assignment', this.selectedAssignmentId).subscribe(res => {
        this.loading = false;
        if (res.status === 200) {
          this.toastService.showToaster({
            title: 'Revet Success:',
            message: 'The order reverted successfully!',
            type: 'success'
          });
          this.router.navigateByUrl('/orders');
        } else {
          this.toastService.showToaster({
            title: 'Revet Error:',
            message: 'The order cannot be reverted at the momnent, please try again later.',
            type: 'error'
          });
        }
      }, error => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Revet Error:',
            message: 'The order cannot be reverted at the momnent, please try again later.',
            type: 'error'
          });
        }
      });
    }

    closeRevertModal(): void {
      this.showRevertModal = false;
    }

    loadBookingSheet(order: any): void {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&assignmentId=${order.assignment_id}`;
        window.open(sheetUrl);
    }

    // Utility methods for formatting
    titleCase(str: string): string {
        if (!str) return '';
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    formatCurrency(value: number): string {
        if (value == null) return '';
        return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Action methods
    onBookingSheetClick(order: any): void {
        this.loadBookingSheet(order);
    }

    onDispatchClick(order: any): void {
        if (order.pending_retailers > 0) {
            return; // Button should be disabled
        }
        this.router.navigate(['/orders', 'dispatch', order.assignment_id, order.sales_man_id, order.date]);
    }

    onRevertClick(order: any): void {
        this.selectedAssignmentId = order.assignment_id;
        this.showRevertModal = true;
    }
}
