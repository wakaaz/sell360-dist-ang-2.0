
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  deleteRetailerCreditInvoice,
  getRetailersCreditInvoice,
  RecoveryRetailer,
  set_retailer_credit_Invoices_data,
} from '../../models/recovery-retailler.model';
import { OrdersService } from '../../services/orders.service';
import { DataService } from '../../../shared/services/data.service';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-retailer-recovery',
  templateUrl: './retailer-recovery.component.html',
  styleUrls: ['./retailer-recovery.component.css'],
  standalone: false


})
export class RetailerRecoveryComponent implements OnInit {
  permissions: any;
  @Input() executionData: any = null;
  @Input() retailerId: number = 0;
  @Input() assignment_idOutRoute: string = '';
  ordersRetailers: any[];
  dtOptions: DataTables.Settings;
  loading: boolean;
  assignmentId: string;
  isRecoverydiscountActivated: boolean;
  retailer_credit_Invoices: RecoveryRetailer[] = [];
  
  // AG Grid
  private gridApi!: GridApi;
  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: false
  };
  
  constructor(
    private orderService: OrdersService,
    private route: ActivatedRoute,
    private storageService: LocalStorageService,
    private readonly dataService: DataService,
    private toastService: ToasterService
  ) {
    this.permissions = this.storageService.getItem(
      localStorageKeys.permissions
    );
    this.isRecoverydiscountActivated =
      this.permissions.Secondary_Orders.recovery_invoice_discount;
    
    // Setup global reference for cell renderers
    (window as any).ngRef = this;
  }

  ngOnInit(): void {
    // if (this.retailerId) {
    console.log('this.retailerId', this.retailerId);
    // }
    // if (!this.subOutOfRange) {
    //   console.log(this.orderService.loadOutOfRouteRecovery.value);
    //   this.subOutOfRange = this.orderService.loadOutOfRouteRecovery.subscribe(
    //     (x: number) => {
    //       console.log('out of recovery data Subscribe id => ', x);
    //       if (x) {
    //         this.retailerId = x;
    //       }
    //     }
    //   );
    // }

    this.assignmentId = null;
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };

    if (!this.executionData && this.retailerId === 0) {
      this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
      this.orderService.orderRetailers.subscribe((x: any[]) => {
        if (x && x.length) {
          this.ordersRetailers = [...x];
        }
      });
    }
    if (this.executionData) {
      this.assignmentId = this.executionData.assignment_id;
      // this.getCreditTabData();
    }

    this.orderService.loadRetaillersRecovery.subscribe((isLoad: Boolean) => {
      if (isLoad && this.retailerId === 0) {
        this.getCreditTabData();
      }
    });
    if (this.retailerId) {
      this.assignmentId = this.assignment_idOutRoute.toString();
      this.loading = true;
      this.orderService
        .getOutOfRouteRecovery(this.retailerId)
        .subscribe((data) => {
          console.log('getOutOfRouteRecovery => ', data.data.recoveries);
          // this.retailer_credit_Invoices = [];
          // this.retailer_credit_Invoices = [
          // ...
          set_retailer_credit_Invoices_data(
            data.data.recoveries || [],
            this.retailer_credit_Invoices
          ),
            // ];
            (this.loading = false);
            this.initializeColumns();
        });
    }
    this.initializeColumns();
  }
  
  initializeColumns(): void {
    this.columnDefs = [
      { 
        field: 'shop_code', 
        headerName: 'Shop Code', 
        sortable: true, 
        filter: false,
        width: 120
      },
      { 
        field: 'invoice_number', 
        headerName: 'Invoice', 
        sortable: true, 
        filter: false,
        flex: 1,
        valueGetter: (params) => {
          return params.data?.invoice_number || 'Opening Balance';
        }
      },
      { 
        field: 'retailer_name', 
        headerName: 'Shop Name', 
        sortable: true, 
        filter: false,
        flex: 1
      },
      { 
        field: 'agingValue', 
        headerName: 'Aging', 
        sortable: true, 
        filter: false,
        width: 120
      },
      { 
        field: 'amount', 
        headerName: 'Pending AMNT', 
        sortable: true, 
        filter: false,
        width: 130,
        valueFormatter: (params) => {
          if (!params.value) return '0.00';
          return parseFloat(params.value).toFixed(2);
        }
      },
      ...(this.isRecoverydiscountActivated ? [{
        field: 'invoice_discount',
        headerName: 'Invoice DISC',
        sortable: false,
        filter: false,
        width: 140,
        cellRenderer: (params: any) => {
          const inv = params.data;
          const index = this.retailer_credit_Invoices.findIndex(x => x === inv);
          const disabled = inv.is_added && this.executionData === null && !this.assignment_idOutRoute;
          const value = inv.invoice_discount || 0;
          return `
            <input 
              type="number" 
              value="${value}"
              ${disabled ? 'disabled' : ''}
              oninput="window.ngRef.updateInvoiceDiscount(${index}, this.value)"
              onkeydown="return window.ngRef.isNumberKey(event)"
              class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-[#333333] rounded-md bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="0"
              min="0"
            />
          `;
        },
        cellStyle: {
          padding: '0px'
        }
      }] : []),
      ...(this.isRecoverydiscountActivated ? [{
        field: 'balance',
        headerName: 'Balance',
        sortable: true,
        filter: false,
        width: 120,
        valueFormatter: (params) => {
          if (!params.value) return '0.00';
          return parseFloat(params.value).toFixed(2);
        }
      }] : []),
      ...(this.executionData !== null ? [{
        field: 'added_to_current',
        headerName: 'Assigned',
        sortable: true,
        filter: false,
        width: 80,
        valueFormatter: (params) => {
          if (!params.value) return '0.00';
          return parseFloat(params.value).toFixed(2);
        }
      }] : []),
      {
        field: 'added_to_current',
        headerName: this.executionData === null && this.retailerId === 0 ? 'Add To Current' : 'Recovery',
        sortable: false,
        filter: false,
        width: 140,
        cellRenderer: (params: any) => {
          const inv = params.data;
          const index = this.retailer_credit_Invoices.findIndex(x => x === inv);
          const showFirstInput = this.executionData === null && !this.assignment_idOutRoute;
          const showSecondInput = this.executionData !== null || this.assignment_idOutRoute;
          const disabled = (inv.balance === 0 || inv.is_added) && this.executionData === null && !this.assignment_idOutRoute;
          
          if (showFirstInput) {
            const value = inv.added_to_current || 0;
            return `
              <input 
                type="number" 
                value="${value}"
                ${disabled ? 'disabled' : ''}
                oninput="window.ngRef.updateRecoveryAmount(${index}, this.value, false)"
                onkeydown="return window.ngRef.isNumberKey(event)"
                class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-[#333333] rounded-md bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="0"
                min="0"
                max="${inv.balance || 0}"
              />
            `;
          } else if (showSecondInput) {
            const value = inv.recoverd_amount || 0;
            const disabledSecond = (inv.balance === 0 || inv.is_added) && this.executionData === null && !this.assignment_idOutRoute;
            return `
              <input 
                type="number" 
                value="${value}"
                ${disabledSecond ? 'disabled' : ''}
                oninput="window.ngRef.updateRecoveryAmount(${index}, this.value, true)"
                onkeydown="return window.ngRef.isNumberKey(event)"
                class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-[#333333] rounded-md bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="0"
                min="0"
                max="${inv.balance || 0}"
              />
            `;
          }
          return '';
        },
        cellStyle: {
          padding: '0px'
        }
      },
      {
        field: 'actions',
        headerName: 'Action',
        sortable: false,
        filter: false,
        width: 150,
        cellRenderer: (params: any) => {
          const inv = params.data;
          const index = this.retailer_credit_Invoices.findIndex(x => x === inv);
          const isExecutionMode = this.executionData !== null || this.retailerId > 0;
          
          if (this.executionData === null && this.retailerId === 0) {
            const isAdded = inv.is_added;
            const hasValue = (inv.added_to_current || 0) > 0;
            // Enable button when value is entered OR when already added (to allow removal)
            const disabled = !hasValue && !isAdded;
            const buttonClass = isAdded ? 
              'bg-red-600 dark:bg-red-600 hover:bg-red-700 text-white' : 
              'bg-transparent border border-primary text-primary dark:text-white hover:bg-primary hover:text-white';
            
            return `
              <button 
                onclick="window.ngRef.addOrderBill(${index}, ${isAdded})"
                ${disabled ? 'disabled' : ''}
                class="px-3 py-1 text-xs rounded-md font-primary transition-colors ${buttonClass} disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ${isAdded ? 'Remove to Bill' : 'Add to Bill'}
              </button>
            `;
          } else {
            return `
              <button 
                onclick="window.ngRef.addOrderBill(${index}, false)"
                class="px-3 py-1 text-xs rounded-md font-primary transition-colors bg-transparent border border-primary text-primary dark:text-white hover:bg-primary hover:text-white"
              >
                Save
              </button>
            `;
          }
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px'
        },
        pinned: 'right'
      }
    ];
  }
  
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
  }
  
  updateInvoiceDiscount(index: number, value: string): void {
    if (this.retailer_credit_Invoices[index]) {
      // Setting invoice_discount will automatically recalculate balance (it's a getter)
      this.retailer_credit_Invoices[index].invoice_discount = parseFloat(value) || 0;
      if (this.gridApi) {
        // Find the row node by matching the data object
        const inv = this.retailer_credit_Invoices[index];
        this.gridApi.forEachNode((rowNode) => {
          if (rowNode.data === inv) {
            // Refresh balance column (it's a computed getter) and invoice_discount column
            this.gridApi.refreshCells({ rowNodes: [rowNode], columns: ['balance', 'invoice_discount'] });
          }
        });
      }
    }
  }
  
  updateRecoveryAmount(index: number, value: string, isExecutionMode: boolean): void {
    if (this.retailer_credit_Invoices[index]) {
      if (isExecutionMode) {
        this.retailer_credit_Invoices[index].recoverd_amount = parseFloat(value) || 0;
      } else {
        const parsedValue = parseFloat(value) || 0;
        this.retailer_credit_Invoices[index].added_to_current = parsedValue;
        // Refresh the grid to update button state
        if (this.gridApi) {
          const inv = this.retailer_credit_Invoices[index];
          // Use setTimeout to ensure the update happens after the input event
          setTimeout(() => {
            this.gridApi.forEachNode((rowNode) => {
              if (rowNode.data === inv) {
                // Force refresh of the actions column to update button state
                this.gridApi.refreshCells({ 
                  rowNodes: [rowNode], 
                  columns: ['actions'],
                  force: true 
                });
              }
            });
          }, 0);
        }
      }
    }
  }
  
  isNumberKey(event: KeyboardEvent): boolean {
    return this.dataService.isNumber(event, 'charges');
  }

  getCreditTabData() {
    this.loading = true;
    this.orderService.getCreditdatailsData(this.assignmentId).subscribe((x) => {
      this.retailer_credit_Invoices = [];
      this.retailer_credit_Invoices = set_retailer_credit_Invoices_data(
        x.data,
        this.retailer_credit_Invoices
      );
      this.loading = false;
      this.initializeColumns();
      if (this.gridApi) {
        this.gridApi.refreshCells();
      }
    });
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  addOrderBill(index: number, isAdded: boolean): void {
    const retailer_credit_Invoices = this.retailer_credit_Invoices[index];
    if (!isAdded) {
      // Check if value is entered
      if ((retailer_credit_Invoices.added_to_current || 0) <= 0) {
        const toast: Toaster = {
          type: 'error',
          message: 'Please enter a value in Add To Current field',
          title: 'Error:',
        };
        this.toastService.showToaster(toast);
        return;
      }
      
      let parentOrderId = retailer_credit_Invoices.parent_order_id;
      if (this.executionData === null && this.retailerId === 0) {
        parentOrderId = this.ordersRetailers.find(
          (x) => x.retailer_id === retailer_credit_Invoices.retailer_id
        ).id;
      } else {
        console.log('retailer_credit_Invoices', retailer_credit_Invoices);
      }
      console.log('retailer_credit_Invoices ', retailer_credit_Invoices[0]);
      const postModel = getRetailersCreditInvoice(
        retailer_credit_Invoices,
        parentOrderId,
        this.assignmentId
      );
      if (this.retailerId > 0) {
        postModel.parent_order_id = null;
      }
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          this.retailer_credit_Invoices[index].id = x.result.id;
          this.retailer_credit_Invoices[index].is_added = 1;
          // Refresh the grid to update button state
          if (this.gridApi) {
            const inv = this.retailer_credit_Invoices[index];
            this.gridApi.forEachNode((rowNode) => {
              if (rowNode.data === inv) {
                this.gridApi.refreshCells({ rowNodes: [rowNode], columns: ['actions'], force: true });
              }
            });
          }
          const toast: Toaster = {
            type: 'success',
            message: 'Added Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    } else {
      const postModel = deleteRetailerCreditInvoice(
        retailer_credit_Invoices.id
      );
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          // Clear the added_to_current value when removing
          this.retailer_credit_Invoices[index].added_to_current = 0;
          this.retailer_credit_Invoices[index].is_added = 0;
          // Refresh the grid to update button state and input field
          if (this.gridApi) {
            const inv = this.retailer_credit_Invoices[index];
            this.gridApi.forEachNode((rowNode) => {
              if (rowNode.data === inv) {
                // Refresh both the actions column and the added_to_current input field
                this.gridApi.refreshCells({ rowNodes: [rowNode], columns: ['actions', 'added_to_current'], force: true });
              }
            });
          }
          const toast: Toaster = {
            type: 'success',
            message: 'Remove Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    }
  }
}
