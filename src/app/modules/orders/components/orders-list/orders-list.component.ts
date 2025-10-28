import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { GeneralDataService } from '../../../shared/services';
import { OrdersService } from '../../services/orders.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

    selector: 'app-orders-list',
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.css'],
    encapsulation: ViewEncapsulation.None,
  standalone: false


})

export class OrdersListComponent implements OnInit {
    private gridApi!: GridApi;
    
    selectedOrderBooker: number;
    showDetailsPopup: boolean;
    submitted: boolean;
    byOrderBooker: boolean;
    loading: boolean;
    orderBookers: Array<any> = [];
    salesMen: Array<any> = [];
    orders: Array<any> = [];
    dtOptions: DataTables.Settings = {};
    selectedOrders: Array<any> = [];
    
    columnDefs: ColDef[] = [
        { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 120 },
        { field: 'emp_name', headerName: 'Order Booker', sortable: true, filter: true, flex: 1 },
        { field: 'hold_orders', headerName: 'Hold Orders', sortable: true, filter: true, width: 130 },
        { field: 'total_orders', headerName: 'Total Orders', sortable: true, filter: true, width: 130 },
        {
            field: 'salesman_selector',
            headerName: 'Assign To Salesman',
            cellRenderer: (params: any) => {
                const index = params.node.rowIndex;
                return `<div id="salesman-selector-${index}"></div>`;
            },
            width: 230,
            sortable: false,
            filter: false
        },
        {
            field: 'actions',
            headerName: 'Action',
            cellRenderer: (params: any) => {
                const order = params.data;
                return `
                    <div class="flex gap-1">
                        <a href="/orders/order-list-details/${order.employee_id}/${order.date}" 
                           class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5">View Orders</a>
                    </div>
                `;
            },
            cellStyle: {
                display: 'flex',
                alignItems: 'center', 
            },
            width: 150,
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
        private generalDataService: GeneralDataService,
        private ordersService: OrdersService,
        private toastService: ToasterService,
    ) {
    }

    ngOnInit(): void {
        this.byOrderBooker = true;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getAllSalesMen();
        this.getNewOrders();
    }
    
    onGridReady(params: GridReadyEvent): void {
        this.gridApi = params.api;
        // Set up selectors after grid is ready
        setTimeout(() => {
            this.setupSalesmanSelectors();
        }, 100);
    }
    
    setupSalesmanSelectors(): void {
        this.orders.forEach((order, index) => {
            const container = document.getElementById(`salesman-selector-${index}`);
            if (container) {
                container.innerHTML = '';
                
                const select = document.createElement('select');
                select.className = 'form-select formselect';
                select.style.width = '95%';
                select.style.height = '25px';
                select.style.fontSize = '14px';
                
                const defaultOption = document.createElement('option');
                defaultOption.text = 'Select Salesman';
                defaultOption.value = '';
                select.appendChild(defaultOption);
                
                this.salesMen.forEach(salesman => {
                    const option = document.createElement('option');
                    option.value = salesman.id;
                    option.text = salesman.name;
                    if (order.selectedSaleman && order.selectedSaleman.id === salesman.id) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });
                
                select.addEventListener('change', (event: any) => {
                    const selectedId = event.target.value;
                    const salesman = this.salesMen.find(s => s.id === parseInt(selectedId));
                    if (salesman) {
                        order.selectedSaleman = salesman;
                        this.addOrderToAssignment(order);
                    }
                });
                
                container.appendChild(select);
            }
        });
    }

    onQuickFilterChanged(event: any): void {
        const filterValue = event.target.value;
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', filterValue);
        }
    }

    getAllSalesMen(): void {
        this.generalDataService.getAllSalesMen().subscribe(res => {
            if (res.status === 200) {
                this.salesMen = res.data;
            }
        }, error => {
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Salesmen not fetched, try again later.',
                    type: 'error'
                });
            }
        });
    }

    getNewOrders(): void {
        this.loading = true;
        this.ordersService.getNewOrders().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.orders = res.data;
                // Set up selectors after data is loaded
                setTimeout(() => {
                    this.setupSalesmanSelectors();
                }, 100);
            }
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

    addOrderToAssignment(order: any): void {
        this.selectedOrders = this.selectedOrders.filter(odr => odr.id !== order.id);
        const assignment = {
            sales_man: order.selectedSaleman.id,
            employee_id: order.employee_id,
            id: order.id,
            date: order.date
        };
        this.selectedOrders.push(assignment);

    }

    assignSaleman(): void {
        if (this.selectedOrders.length) {
            const assigned = {
                salesman: this.selectedOrders.map(x => {
                    const { sales_man, employee_id, date } = x;
                    return { sales_man, employee_id, date };
                })
            };
            this.loading = true;
            this.ordersService.assignSalesMan(assigned).subscribe(res => {
                if (res.status) {
                    this.toastService.showToaster({
                        title: 'Salesman Assigned:',
                        message: 'Salesmen assigned to selected order.',
                        type: 'success'
                    });
                    this.selectedOrders.forEach(order => {
                        this.orders = this.orders.filter(ordr => ordr.id !== order.id);
                    });
                    this.loading = false;
                    this.selectedOrders = [];
                  }
            }, error => {
                this.loading = false;
                if (error.status !== 401 && error.status !== 1) {
                    this.toastService.showToaster({
                        title: 'Error:',
                        message: 'Salesmen assignment is not working at the moment, try again later.',
                        type: 'error'
                    });
                }
                scrollTo(0, 0);
            });
        } else {
            this.toastService.showToaster({
                title: 'Error:',
                message: 'Please select saleman to assign orders!',
                type: 'error'
            });
        }
    }

    openDetailsModal(order: any): void {
        document.body.classList.add('no-scroll');
    }

    closeDetailsModal(): void {
        document.body.classList.remove('no-scroll');
    }

}
