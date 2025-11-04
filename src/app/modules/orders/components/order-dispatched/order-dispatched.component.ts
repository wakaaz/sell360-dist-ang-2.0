import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../shared/services';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';
import { OrderDispatchService } from '../../services/dispatch.service';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {
  deleteRetailerCreditInvoice,
  getRetailersCreditInvoice,
  RecoveryRetailer,
  set_retailer_credit_Invoices_data,
} from '../../models/recovery-retailler.model';
import { number } from 'echarts';
import { exit } from 'process';
import { ColDef, ColGroupDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-dispatch-order',
  templateUrl: 'order-dispatched.component.html',
  styleUrls: ['./order-dispatched.component.css'],
  standalone: false


})
export class OrderDispatchedComponent implements OnInit {
  system_discount_type:number;
  checkAllocationSuccess: boolean = false;
  stockAllocation: any;
  tabLoading = false;
  dtOptions: DataTables.Settings;
  loading: boolean;
  loadingProduct: boolean;
  showProducts: boolean;
  showOrdersSidebar: boolean = false;
  showHoldOrderModal: boolean = false;
  showCancelOrderModal: boolean = false;
  showCreateLoadModal: boolean = false;
  showBillsModal: boolean = false;
  ordersList: any[] = [];
  currentPrefId: number = null;
  private sidebarJustOpened: boolean = false;
  savingOrder: boolean;
  isAllSelected: boolean;
  showFinalLoad: boolean;
  isShopPendingApproval: boolean;
  showAllocationErrors: boolean = false;
  allocationErrors: string = '';
  
  // AG Grid
  private stockAllocationGridApi!: GridApi;
  stockAllocationColumnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: false
  };

  // Load Sheet AG Grid
  private loadSheetGridApi!: GridApi;
  loadSheetColumnDefs: (ColDef | ColGroupDef)[] = [];

  retailer_credit_Invoices: RecoveryRetailer[];

  searchText: string;
  assignmentId: string;
  employeeId: number;
  visitedTabs: Set<number> = new Set([1]); // Track visited tabs, start with tab 1

  salemanId: number;
  currentTab: number;
  distributorId: number;
  orderDate: string;
  invoiceDate: string;

  orderDetails: any = {};
  holdOrderParams: any = {};
  selectedRetailer: any;
  merchantDiscount: any;
  newProduct: any;
  dispatchOrderDetail: any;
  load: any;
  currentLoadContent: any;
  finalLoad: any;

  inventory: Array<any> = [];

  ordersRetailers: Array<any> = [];
  specialDiscounts: Array<any> = [];
  schemes: Array<any> = [];
  loyaltyoffers: Array<any> = [];
  discountSlabs: Array<any> = [];
  taxClasses: Array<any> = [];
  credits: Array<any> = [];
  recoveryRetailers: Array<any> = [];
  remainingOrders: Array<any> = [];
  ordersDispList: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToasterService,
    private dataService: DataService,
    private storageService: LocalStorageService,
    private dispatchService: OrderDispatchService,
    private orderService: OrdersService,
    private cdr: ChangeDetectorRef
  ) {
    this.distributorId = this.storageService.getItem('distributor').id;
    this.retailer_credit_Invoices = new Array<RecoveryRetailer>();
    this.holdOrderParams.hold_reason = '';
    this.holdOrderParams.delete_allocation = false;
    this.isShopPendingApproval = false;
    this.system_discount_type = this.storageService.getItem('distributor').system_discount_type;
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      scrollX: true,
    };
    this.orderService.checkAllocationSuccess.subscribe((x) => {
      this.checkAllocationSuccess = x;
    });
    this.isShopPendingApproval = false;
    this.currentTab = 1;
    this.employeeId = null;
    this.loyaltyoffers = null;
    this.setLoad();
    this.setCurrentLoad(1);
    this.load.content.push(this.currentLoadContent);
    this.assignmentId = this.route.snapshot.paramMap.get('assignId') || null;
    this.salemanId = +this.route.snapshot.paramMap.get('saleManId') || null;
    this.orderDate = this.route.snapshot.paramMap.get('date');
    if (!this.salemanId || !this.orderDate || !this.assignmentId) {
      this.router.navigateByUrl('/orders/dispatch-orders');
      const toast: Toaster = {
        type: 'error',
        message: 'No order selected to dispatch!',
        title: 'Dispatch Error:',
      };
      this.toastService.showToaster(toast);
    } else {
      this.getProducts();
      this.getSchemes();
      this.initializeStockAllocationColumns();
    }
  }

  initializeStockAllocationColumns(): void {
    this.stockAllocationColumnDefs = [
      { field: 'item_sku', headerName: 'SKU', sortable: true, filter: false, width: 120 },
      { field: 'item_main_description', headerName: 'Name', sortable: true, filter: false, flex: 1 },
      { 
        field: 'availble_stock_qty', 
        headerName: 'Stock in Hand', 
        sortable: true, 
        filter: false,  
        width: 110,
        valueGetter: (params) => {
          return params.data ? +params.data.availble_stock_qty : 0;
        },
        valueFormatter: (params) => {
          return Math.floor(params.value || 0).toString();
        }
      },
      { 
        field: 'allocated_stock_qty', 
        headerName: 'Allocated Stock', 
        sortable: true, 
        filter: false,  
        width: 115,
        valueGetter: (params) => {
          return params.data ? +params.data.allocated_stock_qty : 0;
        },
        valueFormatter: (params) => {
          return Math.floor(params.value || 0).toString();
        }
      },
      { 
        headerName: 'Available QTY.', 
        sortable: true, 
        filter: false,  
        width: 115,
        valueGetter: (params) => {
          const available = +(params.data?.availble_stock_qty || 0);
          const allocated = +(params.data?.allocated_stock_qty || 0);
          return available - allocated;
        },
        valueFormatter: (params) => {
          return Math.floor(params.value || 0).toString();
        }
      },
      { 
        field: 'current_load_foc_qty', 
        headerName: 'FOC QTY.', 
        sortable: true, 
        filter: false,  
        width: 100,
        valueGetter: (params) => {
          return params.data ? +params.data.current_load_foc_qty : 0;
        },
        valueFormatter: (params) => {
          return Math.floor(params.value || 0).toString();
        }
      },
      { 
        headerName: 'Booked QTY.', 
        sortable: true, 
        filter: false,  
        width: 110,
        valueGetter: (params) => {
          const booked = +(params.data?.current_load_booked_qty || 0);
          const foc = +(params.data?.current_load_foc_qty || 0);
          return booked - foc;
        },
        valueFormatter: (params) => {
          return Math.floor(params.value || 0).toString();
        }
      },
      {
        field: 'current_load_allocated_qty',
        headerName: 'Allocated QTY.',
        sortable: false,
        filter: false,
        width: 115, 
        cellRenderer: (params: any) => {
          const item = params.data;
          const value = Math.floor(+(item.current_load_allocated_qty || 0));
          return `
            <input 
              type="text" 
              value="${value}"
              oninput="window.ngRef.updateAllocatedQty('${item.pref_id}', this.value, this)"
              onkeydown="return window.ngRef.isNumberKey(event)"
              class="!w-[80px] px-3 py-1 border border-gray-300 dark:border-[#333333] rounded-md bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:border-primary dark:focus:border-primary focus:outline-none text-sm"
              placeholder="0"
            />
          `;
        },
        cellStyle: {
          padding: '0px'
        }
      },
      {
        field: 'actions',
        headerName: 'ACTIONS',
        cellRenderer: (params: any) => {
          const item = params.data;
          
          return `
            <div class="flex gap-1 items-center">
              <button onclick="event.stopPropagation(); window.ngRef.extraLoadItemAllocation('${item.pref_id}')" 
                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5">
                ${item.updateLoading ? 'Updating...' : 'Update'}
              </button>
              <button onclick="var e=event||window.event; if(e){e.stopPropagation();e.preventDefault();} window.ngRef.viewOrders('${item.pref_id}'); return false;" 
                class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5">
                View Orders
              </button>
              <button onclick="event.stopPropagation(); window.ngRef.clearAllocation('${item.pref_id}')" 
                class="bg-red-600 dark:bg-red-600 dark:border-red-600 h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-red-600 hover:bg-red-700 font-primary rounded-[5px] mb-1 ml-0.5">
                ${item.cancelLoading ? 'Cancelling...' : 'Cancel All'}
              </button>
            </div>
          `;
        },
        cellStyle: {
          display: 'flex',
          alignItems: 'center'
        },
        width: 230, 
        sortable: false,
        filter: false,
        pinned: 'right'
      }
    ];
  }

  initializeLoadSheetColumns(): void {
    if (!this.finalLoad || !this.finalLoad.load || this.finalLoad.load.length === 0) {
      console.warn('Load sheet data not available:', this.finalLoad);
      this.loadSheetColumnDefs = [];
      return;
    }

    if (!this.finalLoad.load[0] || !this.finalLoad.load[0].content) {
      console.warn('Load sheet content not available:', this.finalLoad.load[0]);
      this.loadSheetColumnDefs = [];
      return;
    }

    const loadCount = this.finalLoad.count || 1;
    const loadContent = this.finalLoad.load[0].content || [];
    
    const columns: (ColDef | ColGroupDef)[] = [
      {
        headerName: 'SN',
        field: 'item_sku',
        width: 100,
        minWidth: 100,
        sortable: true,
        filter: false,
        pinned: 'left',
        cellStyle: { textAlign: 'center' },
        headerClass: 'text-center'
      },
      {
        headerName: 'Product Name',
        field: 'item_name',
        width: 180,
        minWidth: 180,
        sortable: true,
        filter: false,
        pinned: 'left',
        cellStyle: { minWidth: '180px' },
        headerClass: 'text-left'
      }
    ];

    // Add Load columns dynamically
    loadContent.forEach((load: any, index: number) => {
      columns.push({
        headerName: `Load ${index + 1}`,
        children: [
          {
            headerName: 'CTN/Bundle',
            field: `load_${index}_parent_qty`,
            width: 100,
            minWidth: 100,
            sortable: false,
            filter: false,
            valueGetter: (params) => {
              const content = params.data?.content || [];
              return content[index]?.parent_qty || 0;
            },
            valueFormatter: (params) => {
              return params.value ? (+params.value).toLocaleString() : '0';
            },
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: 'Box/Piece',
            field: `load_${index}_child_qty`,
            width: 90,
            minWidth: 90,
            sortable: false,
            filter: false,
            valueGetter: (params) => {
              const content = params.data?.content || [];
              return content[index]?.child_qty || 0;
            },
            cellStyle: { textAlign: 'center' }
          },
          {
            headerName: 'Weight',
            field: `load_${index}_total_weight`,
            width: 80,
            minWidth: 80,
            sortable: false,
            filter: false,
            valueGetter: (params) => {
              const content = params.data?.content || [];
              return content[index]?.total_weight || 0;
            },
            cellStyle: { textAlign: 'center' }
          }
        ]
      });
    });

    // Extra Issuance group
    columns.push({
      headerName: 'Extra Issuance',
      children: [
        {
          headerName: 'CTN/Bundle',
          field: 'total_extra_primary_qty',
          width: 100,
          minWidth: 100,
          sortable: false,
          filter: false,
          valueGetter: (params) => {
            return params.data?.total_extra_primary_qty || 0;
          },
          valueFormatter: (params) => {
            return params.value ? (+params.value).toLocaleString() : '0';
          },
          cellStyle: { textAlign: 'center' }
        },
        {
          headerName: 'Box/Piece',
          field: 'total_extra_secondary_qty',
          width: 90,
          minWidth: 90,
          sortable: false,
          filter: false,
          valueGetter: (params) => {
            return params.data?.total_extra_secondary_qty || 0;
          },
          cellStyle: { textAlign: 'center' }
        }
      ]
    });

    // Total Issuance group
    columns.push({
      headerName: 'Total Issuance',
      children: [
        {
          headerName: 'CTN/Bundle',
          field: 'total_primary_qty',
          width: 100,
          minWidth: 100,
          sortable: false,
          filter: false,
          valueGetter: (params) => {
            return params.data?.total_primary_qty || 0;
          },
          valueFormatter: (params) => {
            return params.value ? (+params.value).toLocaleString() : '0';
          },
          cellStyle: { textAlign: 'center' }
        },
        {
          headerName: 'Box/Piece',
          field: 'total_secondary_qty',
          width: 90,
          minWidth: 90,
          sortable: false,
          filter: false,
          valueGetter: (params) => {
            return params.data?.total_secondary_qty || 0;
          },
          cellStyle: { textAlign: 'center' }
        },
        {
          headerName: 'Weight',
          field: 'total_weight',
          width: 80,
          minWidth: 80,
          sortable: false,
          filter: false,
          valueGetter: (params) => {
            return params.data?.total_weight || 0;
          },
          cellStyle: { textAlign: 'center' }
        }
      ]
    });

    this.loadSheetColumnDefs = columns;
    console.log('Load sheet columns initialized:', columns.length);
    console.log('Load sheet data:', this.finalLoad.load);
  }

  onLoadSheetGridReady(params: GridReadyEvent): void {
    this.loadSheetGridApi = params.api;
    // Refresh grid when ready
    if (this.finalLoad && this.finalLoad.load) {
      params.api.setGridOption('rowData', this.finalLoad.load);
    }
  }

  onLoadSheetQuickFilterChanged(event: any): void {
    const filterValue = event.target.value;
    if (this.loadSheetGridApi) {
      this.loadSheetGridApi.setGridOption('quickFilterText', filterValue);
    }
  }

  onStockAllocationGridReady(params: GridReadyEvent): void {
    this.stockAllocationGridApi = params.api;
    // Expose methods to window for button clicks
    (window as any).ngRef = {
      extraLoadItemAllocation: (prefId: string) => {
        const item = this.stockAllocation.find((x: any) => x.pref_id.toString() === prefId);
        if (item) this.onExtraLoadItemAllocation(item);
      },
      viewOrders: (prefId: string) => {
        const item = this.stockAllocation.find((x: any) => x.pref_id.toString() === prefId);
        if (item) {
          this.onShowViewOrders(null, item.pref_id);
        }
      },
      clearAllocation: (prefId: string) => {
        const item = this.stockAllocation.find((x: any) => x.pref_id.toString() === prefId);
        if (item) this.clearLoadItemAllocation(item);
      },
      updateAllocatedQty: (prefId: string, value: string, inputElement: HTMLInputElement) => {
        const item = this.stockAllocation.find((x: any) => x.pref_id.toString() === prefId);
        if (item) {
          const newValue = Math.floor(+(value || 0));
          const availableQty = Math.floor(+(item.availble_stock_qty || 0) - +(item.allocated_stock_qty || 0));
          
          if (newValue > availableQty) {
            item.current_load_allocated_qty = availableQty;
            if (inputElement) {
              inputElement.value = availableQty.toString();
            }
          } else {
            item.current_load_allocated_qty = newValue;
          }
          this.stockAllocationGridApi.refreshCells();
        }
      },
      isNumberKey: (event: KeyboardEvent) => {
        const charCode = event.which ? event.which : event.keyCode;
        // Allow: backspace, delete, tab, escape, enter
        if ([46, 8, 9, 27, 13].indexOf(charCode) !== -1 ||
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (charCode === 65 && event.ctrlKey === true) ||
            (charCode === 67 && event.ctrlKey === true) ||
            (charCode === 86 && event.ctrlKey === true) ||
            (charCode === 88 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
            (charCode >= 35 && charCode <= 39)) {
          return true;
        }
        // Ensure that it is a number and stop the keypress
        if ((event.shiftKey || (charCode < 48 || charCode > 57)) && (charCode < 96 || charCode > 105)) {
          event.preventDefault();
          return false;
        }
        return true;
      }
    };
  }

  onStockQuickFilterChanged(event: any): void {
    const filterValue = event.target.value;
    if (this.stockAllocationGridApi) {
      this.stockAllocationGridApi.setGridOption('quickFilterText', filterValue);
    }
  }


  onCheckAllocation(): void {
    this.allocationErrors = '';
    this.showAllocationErrors = false;
    this.tabLoading = true;
    
    if (this.isShopPendingApproval) {
      this.tabLoading = false;
      this.orderService.setCheckAllocationSuccess(false);
      const toast: Toaster = {
        type: 'error',
        message: 'Approve all pending Retailers First.',
        title: 'Failed:',
      };
      this.toastService.showToaster(toast);
      return;
    }
    
    this.orderService.saveLoadItemAllocation(this.assignmentId).subscribe(
      (x) => {
        this.tabLoading = false;
        this.orderService.setCheckAllocationSuccess(true);
        const toast: Toaster = {
          type: 'success',
          message: 'Allocation Quantity Verified',
          title: 'Success:',
        };
        this.toastService.showToaster(toast);
      },
      (err) => {
        this.tabLoading = false;
        this.orderService.setCheckAllocationSuccess(false);
        this.showAllocationErrors = true;
        let itemErrorList: string = '';
        if (err.error?.error) {
          err.error.error.forEach((x: any) => {
            itemErrorList += `<li>Product SKU: ${x.item_sku}, Product Name: ${x.item_name}</li>`;
          });
        }
        this.allocationErrors = itemErrorList;
      }
    );
  }

  closeAllocationAlert(): void {
    this.showAllocationErrors = false;
    this.allocationErrors = '';
  }

  onExtraLoadItemAllocation(item: any): void {
    item.updateLoading = true;
    if (+item.current_load_allocated_qty < item.current_load_booked_qty) {
      item.updateLoading = false;
      const toast: Toaster = {
        type: 'error',
        message: `Requested allocation quantity is less than Booked Qty. Minimum Booked Qty is ${item.current_load_booked_qty}`,
        title: 'Error:',
      };
      this.toastService.showToaster(toast);
    } else {
      this.orderService
        .extraLoadItemAllocation(
          this.assignmentId,
          item.pref_id,
          item.current_load_allocated_qty
        )
        .subscribe(
          (x) => {
            item.updateLoading = false;
            this.stockAllocationGridApi.refreshCells();
            const toast: Toaster = {
              type: 'success',
              message: 'Allocated Quantity Updated',
              title: 'Success:',
            };
            this.toastService.showToaster(toast);
            this.getDispatchDetails();
          },
          (err) => {
            item.updateLoading = false;
            this.stockAllocationGridApi.refreshCells();
            const toast: Toaster = {
              type: 'error',
              message: 'Requested allocation quantity is greater than available stock.',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        );
    }
  }

  onShowViewOrders(event: any, pref_id: number): void {
    console.log('onShowViewOrders called', pref_id);
    
    // Close sidebar if already open
    if (this.showOrdersSidebar) {
      this.closeOrdersList();
    }
    
    this.currentPrefId = pref_id;
    
    // Set flag to prevent immediate closure - set this FIRST
    this.sidebarJustOpened = true;
    
    // Open sidebar immediately (before API call) so it shows right away
    this.showOrdersSidebar = true;
    document.body.classList.add('no-scroll');
    
    // Manually trigger change detection to render sidebar immediately
    this.cdr.detectChanges();
    
    this.orderService
      .getLoadOrdersPrefs(this.assignmentId, pref_id)
      .subscribe(
        (x) => {
          console.log('Orders fetched', x);
          this.ordersList = (x.data || []).map((order: any) => ({
            ...order,
            updateLoading: false,
            booked_qty: order.booked_qty || 0,
          }));
          
          // Trigger change detection after orders are loaded
          this.cdr.detectChanges();
          
          // Allow click-outside after a delay (prevents immediate closure from button click)
          setTimeout(() => {
            this.sidebarJustOpened = false;
            console.log('Sidebar protection disabled');
          }, 500);
        },
        (error) => {
          console.error('Error fetching orders', error);
          this.sidebarJustOpened = false;
          this.showOrdersSidebar = false;
          document.body.classList.remove('no-scroll');
          this.cdr.detectChanges();
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch orders. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      );
  }

  closeOrdersList(): void {
    this.showOrdersSidebar = false;
    this.ordersList = [];
    this.currentPrefId = null;
    this.sidebarJustOpened = false;
    document.body.classList.remove('no-scroll');
    this.cdr.detectChanges();
  }

  clickedOutSide(event: Event): void {
    console.log('clickedOutSide called', {
      showOrdersSidebar: this.showOrdersSidebar,
      sidebarJustOpened: this.sidebarJustOpened,
      target: (event.target as HTMLElement)?.id
    });
    
    // Don't process if sidebar is not open
    if (!this.showOrdersSidebar) {
      return;
    }
    
    // Prevent closing if sidebar just opened (within 500ms)
    if (this.sidebarJustOpened) {
      console.log('Sidebar just opened, preventing close');
      return;
    }
    
    const target = event.target as HTMLElement;
    
    // Don't close if clicking on sidebar content or elements marked to not close
    if (
      target.classList.contains('dont-close-orders') ||
      target.closest('.dont-close-orders') ||
      target.closest('#orders-list-sidebar > div')
    ) {
      console.log('Clicking on sidebar content, not closing');
      return;
    }
    
    // Only close if clicking on the backdrop itself (not on any child elements)
    const sidebarElement = document.getElementById('orders-list-sidebar');
    if (sidebarElement && (target === sidebarElement || target === event.currentTarget)) {
      console.log('Closing sidebar - backdrop clicked');
      this.closeOrdersList();
    }
  }

  onUpdateOrderAllocation(order: any): void {
    order.updateLoading = true;
    this.orderService
      .updateLoadOrderItemAllocation(
        this.assignmentId,
        order.order_id,
        this.currentPrefId,
        +order.booked_qty + +order.free_qty
      )
      .subscribe(
        (x) => {
          order.updateLoading = false;
          const toast: Toaster = {
            type: 'success',
            message: 'Allocated Quantity Updated',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
          // Refresh stock allocation after update
          this.getDispatchDetails();
        },
        (err) => {
          order.updateLoading = false;
          const toast: Toaster = {
            type: 'error',
            message: 'Failed to update allocation. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      );
  }

  clearLoadItemAllocation(item: any): void {
    item.cancelLoading = true;
    this.orderService
      .clearLoadItemAllocation(this.assignmentId, item.pref_id)
      .subscribe((x) => {
        item.cancelLoading = false;
        this.stockAllocationGridApi.refreshCells();
        const toast: Toaster = {
          type: 'success',
          message: 'Allocated Quantity Updated',
          title: 'Success:',
        };
        this.toastService.showToaster(toast);
        this.getDispatchDetails();
      });
  }

  setLoad(): void {
    this.load = {
      salesman_id: 0,
      total_orders: 0,
      total_gross_amount: 0,
      total_trade_offer: 0,
      total_trade_discount: 0,
      total_special_discount: 0,
      total_booker_discount: 0,
      total_loyalty_discount: 0,
      total_tax_amount: 0,
      total_recovery_amount: 0,
      total_net_sale: 0,
      total_products: 0,
      total_focs: 0,
      distributor_id: 0,
      total_sub_loads: 0,
      processed_date: '',
      content: [],
    };
  }

  setCurrentLoad(ldNumber: number): void {
    this.currentLoadContent = {
      loadNumber: ldNumber,
      order_ids: [],
      total_products: 0,
      total_focs:0,
      total_orders: 0,
      items: [],
    };
  }

  closeSideBarEvent(value: any) {
    this.stockAllocation = null;
    this.getDispatchDetails();
  }

  // Check if a tab has been visited
  isTabVisited(tabNumber: number): boolean {
    return this.visitedTabs.has(tabNumber);
  }

  // Handle tab click - only allow if visited
  onTabClick(tabNumber: number): void {
    if (this.isTabVisited(tabNumber)) {
      this.currentTab = tabNumber;
      this.tabChanged();
    }
  }

  // Navigate to next tab
  goToNextTab(): void {
    if (this.currentTab < 5) {
      this.currentTab++;
      this.visitedTabs.add(this.currentTab); // Mark new tab as visited
      this.tabChanged();
    }
  }

  // Navigate to previous tab
  goToPreviousTab(): void {
    if (this.currentTab > 1) {
      this.currentTab--;
      this.tabChanged();
    }
  }

  tabChanged(): void {
    
    if(this.isShopPendingApproval){
        this.tabLoading = false; 
        this.orderService.setCheckAllocationSuccess(false);
        const toast: Toaster = {
          type: 'error',
          message: 'Approve all pending Retialers First.',
          title: 'Failed:',
        };
        this.toastService.showToaster(toast);
    }
    else
    {
      switch (this.currentTab) {
        case 1:
          this.stockAllocation = null;
          this.savingOrder = true;
          this.selectedRetailer = JSON.parse(JSON.stringify(null));
          this.orderDetails.items = [];
          this.getDispatchDetails();
          break;
        case 2:
          this.onTabTwo();
          break;
        case 3:
          this.dispatchOrderDetail = null;
          // this.getDispatchDetails();
          this.getDispatchOrdersDetail();
          this.orderService.setLoadRetaillersRecovery(true);
          // this.getCreditTabData();
          break;
        case 4:
          {
            this.setDataForLoad();
            console.log('tab -> ', this.currentTab);
          }
          break;

        default:
          break;
      }
    }
  }

  onTabTwo(): void {
    this.tabLoading = true;
    this.getProducts();
    this.savingOrder = true;
    this.selectedRetailer = JSON.parse(JSON.stringify(null));
    this.orderDetails.items = [];
    this.getDispatchDetails();
    this.tabLoading = false;
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
    });
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  getDispatchDetails(): void {
    this.loading = true;
    this.savingOrder = false;
    this.showFinalLoad = false;
    this.orderService
      .getDispatchDetailBySalemanAndDate(
        this.salemanId,
        this.assignmentId,
        this.orderDate
      )
      .subscribe(
        (res) => {
          this.loading = false;
          if (res.status === 200) {
            this.isShopPendingApproval =  res.data.retailers.some(x=>x.retailer_status == 0);
            if (res.data.allocated_stock) {
              const allocation = res.data.allocated_stock.sort(
                (a, b) =>
                  parseFloat(b.current_load_booked_qty) -
                  parseFloat(b.current_load_booked_qty)
              );

              this.stockAllocation = allocation.map((x) => ({
                ...x,
                updateLoading: false,
                cancelLoading: false,
              }));
            }
            if (res.data.loadSheet) {
              this.finalLoad = res.data.loadSheetData;
              this.currentTab = 5;
              setTimeout(() => {
                this.showFinalLoad = true;
                this.initializeLoadSheetColumns();
                // Refresh grid after columns are initialized
                setTimeout(() => {
                  if (this.loadSheetGridApi) {
                    this.loadSheetGridApi.refreshCells();
                    this.loadSheetGridApi.sizeColumnsToFit();
                  }
                }, 100);
              }, 500);
            } 
            else {
              this.ordersRetailers = res.data.retailers.map((ret) => {
                // console.log(ret);
                this.employeeId = ret.employee_id;
                ret.isActive = false;
                return ret;
              });
              this.orderService.setOrderRetailers([...this.ordersRetailers]);
              this.getLoyaltyofferData(this.employeeId);
            }
          }
        },
        (error) => {
          this.loading = false;
          if (error.status !== 1 && error.status !== 401) {
            console.log('Error while getting orders data :>> ', error.message);
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch Orders. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
  }

  getLoyaltyofferData(employee_id:number): void {
    if(this.loyaltyoffers == null){

      this.orderService.getLoyaltyoffers(employee_id).subscribe(
        (res) => {
          if (res.status === 200) { 
            this.loyaltyoffers = res.data;
          } else {
            const toast: Toaster = {
              type: 'error',
              message: res.message,
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch Loyalty Offers. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
    }
  }

  getDispatchOrdersDetail(): void {
    if (!this.dispatchOrderDetail || !this.dispatchOrderDetail.summary) {
      this.loading = true;
      this.orderService
        .getDispatchOrdersDetail(
          this.salemanId,
          this.orderDate,
          this.assignmentId
        )
        .subscribe(
          (res) => {
            this.loading = false;
            if (res.status === 200) {
              this.dispatchOrderDetail = res.data;
              this.dispatchOrderDetail.orders =
                this.dispatchOrderDetail.orders.map((order) => {
                  order.isAdded = false;
                  const isInCredit = this.credits.find(
                    (x) => x.order_id === order.id && x.recovery > 0
                  );
                  if (isInCredit) {
                    order.isAdded = true;
                  }
                  const { retailer_id } = order;
                  this.credits.push({
                    recovery: 0,
                    order_id: order.id,
                    retailer_id,
                    dispatched_bill_amount: order.order_total,
                  });
                  return order;
                });
              //   this.recoveryRetailers = [];
              //   this.dispatchOrderDetail.orders.forEach((order) => {
              //     const ord = this.recoveryRetailers.find(
              //       (x) => x.retailer_id === order.retailer_id
              //     );
              //     if (!ord) {
              //       this.recoveryRetailers.push(order);
              //     }
              //   });
              if (this.currentTab === 4) {
                this.setDataForLoad();
              }
            }
          },
          (error) => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
              console.log(
                'Error while getting orders data :>> ',
                error.message
              );
              const toast: Toaster = {
                type: 'error',
                message: 'Cannot fetch Orders. Please try again',
                title: 'Error:',
              };
              this.toastService.showToaster(toast);
            }
          }
        );
    }
  }

  setDataForLoad(): void {
    if (!this.dispatchOrderDetail?.orders) {
      this.getDispatchOrdersDetail();
    } else {
      this.remainingOrders = JSON.parse(
        JSON.stringify(this.dispatchOrderDetail?.orders)
      );
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  getProducts(loaddispatch:boolean=true): void {
    this.loadingProduct = true;
    this.orderService.getCounterSaleData(this.assignmentId).subscribe(
      (res) => {
        this.loadingProduct = false;
        if (res.status === 200) {
          this.inventory = res.data.inventory;
          this.specialDiscounts = res.data.special_discount;
          if(loaddispatch){
            this.getDispatchDetails(); 
          }
          
        }
      },
      (error) => {
        this.loadingProduct = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error while getting products data :>> ', error.message);
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Products. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);

        }
      }
    );
  }

  getSchemes(): void {
    this.orderService.getSchemes().subscribe(
      (res) => {
        if (res.status === 200) {
          this.schemes = res.data;
        } else {
          const toast: Toaster = {
            type: 'error',
            message: res.message,
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Trade Offers. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getOrderDetailsByRetailer(retailer: any): void {
    this.taxClasses = []; 
    if (this.selectedRetailer?.iorderDetailsd !== retailer.id) {
      this.savingOrder = true;
      this.newProduct = null;
      this.selectedRetailer = JSON.parse(JSON.stringify(retailer));
      this.getProducts(false);
      this.orderService.getOrderDetails(retailer.id, this.assignmentId).subscribe(
          (res) => {
            this.savingOrder = false;
            if (res.status === 200) {
              this.orderDetails = res.data; 
              this.orderDetails.items = this.orderDetails.items.map((prod) => {
                const product                     =     this.inventory.find(x => x.item_id === prod.item_id);
                prod.parent_quantity              =     JSON.parse(JSON.stringify(product.quantity));
                prod.parent_unit_id               =     JSON.parse(JSON.stringify(product.parent_unit_id));
                prod.sub_inventory_quantity       =     JSON.parse(JSON.stringify(product.sub_inventory_quantity));
                prod.child                        =     JSON.parse(JSON.stringify(product.child));
                prod.tax_class_amount             =     JSON.parse(JSON.stringify(product.tax_class_amount));
                prod.tax_class_type               =     JSON.parse(JSON.stringify(product.tax_class_type));
                prod.brand_id                     =     JSON.parse(JSON.stringify(product.brand_id));
                prod.unit_name                    =     JSON.parse(JSON.stringify(product.unit_name));
                prod.is_active                    =     JSON.parse(JSON.stringify(product.is_active));
                prod.original_price               =     JSON.parse(JSON.stringify(prod.original_price));
                prod.item_trade_price             =     JSON.parse(JSON.stringify(prod.original_price));
                prod.extra_discount               =     JSON.parse(JSON.stringify(prod.booker_discount));
                prod.stockQty                     =     JSON.parse(JSON.stringify(prod.dispatch_qty));
                prod.net_amount                   =     JSON.parse(JSON.stringify(prod.final_price));
                prod.extra_discount_pkr           =     prod.stockQty * prod.extra_discount;
                prod.original_amount              =     prod.item_trade_price * prod.stockQty;
                prod.special_discount_pkr         =     prod.special_discount;
                prod.trade_discount               =     JSON.parse(JSON.stringify(prod.merchant_discount));
                prod.trade_discount_pkr           =     JSON.parse(JSON.stringify(prod.merchant_discount_pkr)); 
                prod.selectedScheme               =     this.schemes.find((scheme) => scheme.id === prod.scheme_id); 
                prod.scheme_id                    =     JSON.parse(JSON.stringify(prod.scheme_id)); 
                prod.scheme_type                  =     JSON.parse(JSON.stringify(prod.scheme_type));
                prod.scheme_rule                  =     JSON.parse(JSON.stringify(prod.scheme_rule));
                prod.scheme_bundle_interval       =     JSON.parse(JSON.stringify(prod.scheme_bundle_interval));
                prod.scheme_min_quantity          =     JSON.parse(JSON.stringify(prod.scheme_min_quantity));
                prod.scheme_quantity_free         =     JSON.parse(JSON.stringify(prod.scheme_quantity_free));
                prod.scheme_discount_type         =     JSON.parse(JSON.stringify(prod.scheme_discount_type));
                prod.scheme_discount              =     JSON.parse(JSON.stringify(prod.scheme_discount));
                prod.gift_value                   =     JSON.parse(JSON.stringify(prod.gift_value));
                prod.loyalty_offer_id             =     JSON.parse(JSON.stringify(prod.loyalty_offer_id));
                prod.loyalty_offer_type           =     JSON.parse(JSON.stringify(prod.loyalty_offer_type));
                prod.loyalty_offer_discount_type  =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount_type));
                prod.loyalty_offer_discount       =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount));
                prod.loyalty_offer_discount_pkr   =     JSON.parse(JSON.stringify(prod.loyalty_offer_discount_pkr));
                prod.slab_id                      =     JSON.parse(JSON.stringify(prod.slab_id));
                prod.slab_type                    =     JSON.parse(JSON.stringify(prod.slab_type));
                prod.slab_discount_type           =     JSON.parse(JSON.stringify(prod.slab_discount_type));
                prod.merchant_discount            =     JSON.parse(JSON.stringify(prod.merchant_discount));
                prod.merchant_discount_pkr        =     JSON.parse(JSON.stringify(prod.merchant_discount_pkr));
                prod.special_discount             =     JSON.parse(JSON.stringify(prod.special_discount));
                prod.booker_discount              =     JSON.parse(JSON.stringify(prod.booker_discount));
                prod.item_retail_price            =     JSON.parse(JSON.stringify(prod.item_retail_price));
 
                //recalculating gst_tax_amount and adv_inc_tax_amount of all items based on net_price and retail_price
                if(prod.tax_applied_on == 'net_price'){
                    prod.gst_tax_amount               =   ((prod.unit_price_after_individual_discount/100)*prod.tax_in_percentage); 
                    prod.adv_inc_tax_amount           =   ((prod.adv_inc_tax_in_percentage) / 100) * (+prod.unit_price_after_individual_discount + +prod.gst_tax_amount);  
                    prod.gst_tax_amount_temp          =   prod.stockQty * prod.gst_tax_amount;
                    prod.adv_inc_tax_amount_temp      =   prod.stockQty * prod.adv_inc_tax_amount;
                
                }else{
                    prod.gst_tax_amount               =   ((prod.item_retail_price/100)*prod.tax_in_percentage);
                    prod.adv_inc_tax_amount           =   ((prod.adv_inc_tax_in_percentage) / 100) * (+prod.item_retail_price + +prod.gst_tax_amount);  
                    var totalProdQty                  =    +prod.stockQty + +prod.scheme_quantity_free;
                  
                    prod.gst_tax_amount_temp          =   totalProdQty * prod.gst_tax_amount;
                    prod.adv_inc_tax_amount_temp      =   totalProdQty * prod.adv_inc_tax_amount;
                } 
             
       
                return prod;
              }); 
            }
          },
          (error) => {
            this.savingOrder = false;
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
              console.log(
                'Error while getting order detail data :>> ',
                error.message
              );
              const toast: Toaster = {
                type: 'error',
                message: 'Cannot fetch Order Detail. Please try again',
                title: 'Error:',
              };
              this.toastService.showToaster(toast);
            }
          }
        ); 
      this.getDiscountSlabs();
    }
    this.getDispatchDetails();
  }

  addNewProductToOrder(product: any): void {
    this.newProduct = product;
  }

  

  getTaxclasses(province_id=0): void {
    this.orderService.getTaxClasses(province_id).subscribe(
      (res) => {
        if (res.status === 200) {
          this.taxClasses = res.data;
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            type: 'error',
            message: 'Cannot fetch Provincial Tax Classes. Please try again',
            title: 'Error:',
          };
          this.toastService.showToaster(toast);
        }
      }
    );
  }

  getDiscountSlabs(): void {
    //
    
    this.getTaxclasses(this.selectedRetailer.province_id);
    if (!this.discountSlabs.length) {
      this.orderService.getDiscountSlabs().subscribe(
        (res) => {
          if (res.status === 200) {
            this.discountSlabs = res.data;
            this.setMerchantDiscount();
          }
        },
        (error) => {
          if (error.status !== 1 && error.status !== 401) {
            console.log(
              'Error while getting order detail data :>> ',
              error.message
            );
            const toast: Toaster = {
              type: 'error',
              message: 'Cannot fetch Merchant Discounts. Please try again',
              title: 'Error:',
            };
            this.toastService.showToaster(toast);
          }
        }
      );
    } else {
      this.setMerchantDiscount();
    }
  }

  setMerchantDiscount(): void {
    this.merchantDiscount = this.discountSlabs.find(
      (x) =>
        x.region_id === this.selectedRetailer.region_id 
        &&
        this.selectedRetailer.segment_id === x.segment_id &&
        x.channel_id === this.selectedRetailer.retailer_type_id
    );
  }

  openProductsList(): void {
    this.showProducts = true;
    document.body.classList.add('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.add('d-block');
    document.getElementById('order-contaienr').classList.add('blur-div');
  }

  closeNewProducts(): void {
    this.showProducts = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document.getElementById('order-contaienr').classList.remove('blur-div');
    this.getProducts();
  }

  saveOrder(): void { 
    this.savingOrder = true;
    this.orderService.saveDispatchQuantityOrder(this.orderDetails).subscribe(
      (res) => {
        this.newProduct = null;
        this.savingOrder = false;
        if (res.status === 200) {
          this.toastService.showToaster({
            message: `Order for ${(
              this.selectedRetailer.retailer_name as string
            ).toUpperCase()} dispatched successfully!`,
            title: 'Order dispatched:',
            type: 'success',
          });
        }
        this.orderDetails.items = [];
        this.selectedRetailer.isActive = false;
        this.ordersRetailers.find(
          (x) => x.id === this.selectedRetailer.id
        ).isActive = false;
        this.selectedRetailer = JSON.parse(JSON.stringify(null));
      },
      (error) => {
        this.savingOrder = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error in Save Order for dispatch ::>> ', error);
          this.toastService.showToaster({
            message:
              'Something went wrong dispatch cannot be save at the moment!',
            title: 'Error:',
            type: 'error',
          });
        }
      }
    );
  }
  getTaxType(tax_class_id):string{
    if(tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.type;
      }else{
        return 'percentage';
      }
    }
    return 'percentage';
  }
  
  taxAppliedOn(tax_class_id):string{
    if(this.selectedRetailer  && this.selectedRetailer.apply_retail_tax == 1 && tax_class_id > 0 ){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
        return taxclass.tax_applied_on == 'net_price' ? 'net_price':'retail_price';
      }else{
        return 'retail_price';
      }
    }
    return 'retail_price';
  }

  getGstTaxAmount(tax_class_id):any{
    if(tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(this.selectedRetailer.retailer_register == 1){
            return taxclass.gst_filer_retailer_value;
         }
         else{
            return taxclass.gst_nonfiler_retailer_value;
         }
      }
    }
    return 0;
  }
  getAdvIncTaxAmount(tax_class_id):any{
    if(this.selectedRetailer &&  tax_class_id > 0){
      const taxclass  = this.taxClasses?.find(x=> x.tax_class_id == tax_class_id)||null;
      if(taxclass){
         if(this.selectedRetailer.retailer_register == 1){
            return taxclass.adv_inc_filer_retailer_value;
         }
         else{
            return taxclass.adv_inc_nonfiler_retailer_value;
         }
      }
    }
    return 0;
  }
  setOrderItems(): void {  
    this.orderDetails.items   =   this.orderDetails.items.map((item) => {
      let free_qty            =   item.scheme_quantity_free ? +item.scheme_quantity_free : 0;
      let stockQty            =   +item.stockQty;
      let gross_sale_amount   =   item.original_price * stockQty
      let taxAppliedOn        =   this.taxAppliedOn(item.tax_class_id); 
      let finalQty            =   0;
      if(taxAppliedOn == 'net_price'){
        finalQty = stockQty;
      }
      else{
        finalQty = +stockQty + +free_qty;
      }

      let ttl_scheme_discount =   item.scheme_id && (item.scheme_type == 'bundle_offer' || item.scheme_type == 'mix_match') ? (+item.scheme_discount * +item.scheme_bundle_interval): +(stockQty * item.scheme_discount) ;
      let ttl_trade_discount  =   +stockQty * item.trade_discount_pkr;
      let ttl_special_discount=   item.special_discount ? +stockQty * +item.special_discount:0;
      let ttl_extra_discount  =   +item.extra_discount_pkr ? +stockQty * +item.extra_discount : 0;
      let ttl_loyalty_discount=   item.loyalty_offer_discount_pkr ? +stockQty * +item.loyalty_offer_discount_pkr : 0;
      let total_discount      =   ttl_scheme_discount + ttl_trade_discount + ttl_special_discount + ttl_extra_discount + ttl_loyalty_discount;
      let final_price         =   gross_sale_amount - total_discount;                          
  
      
      let gst_tax             =   0;
      let adv_inc_tax         =   0;                           
      let tax_in_value        =   0;                          
      let total_tax_amount    =   0;
      let tax_applied_value   =   0; 
      let tax_in_percentage   =   +item.tax_in_percentage;
      let adv_inc_tax_in_percentage =   +item.adv_inc_tax_in_percentage;
      if(item.order_id && item.order_id > 0){ 
        tax_applied_value     = item.tax_applied_on == 'net_price' ? +( item.unit_price_after_individual_discount == 0 ? 
                                item.original_price:(item.unit_price_after_individual_discount) ): +item.item_retail_price;
         
        if(stockQty > 0 && item.tax_class_id > 0 && taxAppliedOn == 'net_price' && (item.scheme_quantity_free > 0 || item.booked_foc > 0)){  
          tax_in_percentage         = this.getGstTaxAmount(item.tax_class_id);
          adv_inc_tax_in_percentage = this.getAdvIncTaxAmount(item.tax_class_id); 
          item.tax_in_percentage = tax_in_percentage;
          item.adv_inc_tax_in_percentage = adv_inc_tax_in_percentage;
        }
        gst_tax               =   finalQty > 0 ? (tax_in_percentage/ 100) * +tax_applied_value : 0; 
        adv_inc_tax           =   finalQty > 0 ? (adv_inc_tax_in_percentage / 100) * (+tax_applied_value+ +gst_tax) : 0; 
       
      }
      else if(this.selectedRetailer && item.tax_class_id  > 0  && this.selectedRetailer.apply_retail_tax == 1){
       
        tax_applied_value     = this.taxAppliedOn(item.tax_class_id) == 
                                'net_price' ? +( item.unit_price_after_individual_discount == 0 ? 
                                  item.original_price:(item.unit_price_after_individual_discount) ): +item.item_retail_price;
        
        gst_tax               =   finalQty > 0 ? (this.getGstTaxAmount(item.tax_class_id)/ 100) * +tax_applied_value : 0; 
        adv_inc_tax           =   finalQty > 0 ? (this.getAdvIncTaxAmount(item.tax_class_id) / 100) * (+tax_applied_value+ +gst_tax) : 0;  
      }
      tax_in_value          =   gst_tax + adv_inc_tax;                          
      total_tax_amount      =   tax_in_value*finalQty;  
      // if(this.selectedRetailer && item.tax_class_id > 0  && this.selectedRetailer.apply_retail_tax == 1){

      //   let tax_applied_value =  this.taxAppliedOn(item.tax_class_id) == 'net_price' ? +(item.unit_price_after_individual_discount):+item.item_retail_price; 
      //   gst_tax               =  (this.getGstTaxAmount(item.tax_class_id)/ 100) * +tax_applied_value;
      //   adv_inc_tax           =  (this.getAdvIncTaxAmount(item.tax_class_id) / 100) * (+tax_applied_value + +gst_tax); 
      //   console.log("gst_tax",gst_tax);
      //   console.log("adv_inc_tax",adv_inc_tax);
      //   tax_in_value          =   gst_tax + adv_inc_tax;                          
      //   total_tax_amount      =   tax_in_value*finalQty;  
      // }
      finalQty = +stockQty + +free_qty;
      let ttl_amnt_aftr_tax   =   final_price + total_tax_amount; 
      const orderItem = {
        id: item.id || 0,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        brand_id: item.brand_id,
        item_id: item.item_id,
        item_name: item.item_name,
        pref_id: item.pref_id,
        employee_id: this.orderDetails.employee_id,
        item_quantity_booker: item.item_quantity_booker,
        item_quantity_updated: item.item_quantity_booker != finalQty ? finalQty : null ,
        quantity_returned: 0,
        original_price: item.original_price,
        scheme_id: item.scheme_id || 0,
        scheme_type : item.scheme_type,
        scheme_rule: item.scheme_rule,
        scheme_bundle_interval:item.scheme_bundle_interval || 0,
        scheme_min_quantity: item.scheme_min_quantity || 0,
        scheme_quantity_free: item.scheme_quantity_free || 0,
        scheme_discount_type: item.scheme_discount_type || 0,
        gift_value: item.gift_value || 0,
        loyalty_offer_id : item.loyalty_offer_id ? item.loyalty_offer_id :null,
        loyalty_offer_type : item.loyalty_offer_type ? item.loyalty_offer_type :null,
        loyalty_offer_discount_type: item.loyalty_offer_discount_type? item.loyalty_offer_discount_type :null,
        loyalty_offer_discount: item.loyalty_offer_discount? item.loyalty_offer_discount :null,
        loyalty_offer_discount_pkr : item.loyalty_offer_discount_pkr? item.loyalty_offer_discount_pkr :null,  
        scheme_discount: item.scheme_discount,
        unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
        slab_id: item.slab_id,
        slab_type: item.slab_type,
        slab_discount_type: item.slab_discount_type,
        merchant_discount: item.trade_discount,
        merchant_discount_pkr: item.trade_discount_pkr,
        unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
        special_discount: item.special_discount,
        unit_price_after_special_discount:item.unit_price_after_special_discount,
        booker_discount: item.extra_discount ? +item.extra_discount : 0,
        unit_price_after_individual_discount:item.unit_price_after_individual_discount,
        schemeitems:item.schemeitems ? item.schemeitems :null,
        parent_pref_id: item.child,
        parent_unit_id: item.parent_unit_id,
        parent_brand_id: item.brand_id,
        parent_tp: item.parent_trade_price,
        parent_qty_sold: finalQty/item.sub_inventory_quantity,
        parent_value_sold: final_price,
        final_price: final_price,
        campaign_id: item.selectedScheme?.id || 0,
        item_status: item.is_active,
        dispatch_status: 2,
        dispatch_qty: finalQty,
        dispatch_amount: final_price,
        reasoning: '',
        distributor_id: this.orderDetails.distributor_id,
        division_id: this.selectedRetailer.division_id || 0,
        region_id: this.orderDetails.region_id,
        area_id: this.orderDetails.area_id,
        assigned_route_id: this.orderDetails.assigned_route_id,
        territory_id: this.orderDetails.territory_id,
        booked_order_value: item.booked_order_value || 0,
        booked_total_qty: item.booked_total_qty || 0,
        is_deleted: item.isDeleted,
        quantity: finalQty,
        gross_sale_amount: gross_sale_amount,
        item_retail_price: item.item_retail_price,
        total_retail_price: item.item_retail_price * stockQty,
        tax_type: this.selectedRetailer.retailer_register == 1 ? 1:2,
        tax_class_id: item.tax_class_id,
        tax_applied_on: item.order_id && item.order_id > 0 ? item.tax_applied_on : this.taxAppliedOn(item.tax_class_id),
        tax_in_percentage: item.order_id && item.order_id > 0 ? item.tax_in_percentage : this.getGstTaxAmount(item.tax_class_id),
        adv_inc_tax_in_percentage: item.order_id && item.order_id > 0 ? item.adv_inc_tax_in_percentage : this.getAdvIncTaxAmount(item.tax_class_id),
        gst_tax_amount :gst_tax,
        adv_inc_tax_amount :adv_inc_tax,
        gst_tax_amount_temp :gst_tax * stockQty,
        adv_inc_tax_amount_temp :adv_inc_tax * stockQty,
        tax_in_value: tax_in_value,
        total_tax_amount: total_tax_amount,
        total_amount_after_tax: ttl_amnt_aftr_tax,
        total_discount: total_discount, 
        order_id: this.orderDetails.id,
      }; 
      return orderItem;
    });
    this.saveOrder();
  }

  cancelOrder(delete_allocation=0): void {
    this.showCancelOrderModal = false;
    this.savingOrder = true;
    this.orderService.cancelOrder(this.orderDetails.id,delete_allocation,1).subscribe(
      (res) => {
        this.savingOrder = false;
        if (res.status === 200) {
          this.toastService.showToaster({
            message: `Order for ${(
              this.selectedRetailer.retailer_name as string
            ).toUpperCase()} canceled!`,
            title: 'Order dispatched:',
            type: 'success',
          });
          this.orderDetails.items = [];
          this.ordersRetailers = this.ordersRetailers.filter(
            (x) => x.id !== this.selectedRetailer.id
          );
          this.selectedRetailer = null;
          this.getDispatchDetails();
        }
      },
      (error) => {
        this.savingOrder = false;
        if (error.status !== 1 && error.status !== 401) {
          console.log('Error in Save Order for dispatch ::>> ', error);
          this.toastService.showToaster({
            message:
              'Something went wrong order cannot be canceled at the moment!',
            title: 'Error:',
            type: 'error',
          });
        }
      }
    );
  }

  closeHoldOrderModal(event?: Event):void{
    this.showHoldOrderModal = false;
    if (this.holdOrderParams) {
      this.holdOrderParams.hold_reason = '';
      this.holdOrderParams.delete_allocation = false;
    }
  }

  closeCancelOrderModal(event?: Event):void{
    this.showCancelOrderModal = false;
  }

  closeCreateLoadModal(event?: Event): void {
    this.showCreateLoadModal = false;
  }

  closeBillsModal(event?: Event): void {
    this.showBillsModal = false;
  }

  holdOrder(event: Event):void{
    if(this.holdOrderParams.hold_reason && this.holdOrderParams.hold_reason.trim() != ''){
      this.showHoldOrderModal = false;
      this.savingOrder = true;
      this.holdOrderParams.order_id       = this.orderDetails.id;
      this.holdOrderParams.assignment_id  = this.orderDetails.assignment_id;
      
      // return;
      this.orderService.holdOrder(this.holdOrderParams,1).subscribe(
        (res) => {
          this.newProduct = null;
          this.savingOrder = false;
          if (res.status === 200) {
            this.toastService.showToaster({
              message: `Order for ${(
                this.selectedRetailer.retailer_name as string
              ).toUpperCase()} holded successfully!`,
              title: 'Order dispatched:',
              type: 'success',
            });
          }
          this.orderDetails.items = [];
          this.ordersRetailers = this.ordersRetailers.filter(
            (x) => x.id !== this.selectedRetailer.id
          );
          this.selectedRetailer = null;
          this.holdOrderParams.order_id = null;
          this.holdOrderParams.assignment_id = null;
          this.holdOrderParams.hold_reason = '';
          this.holdOrderParams.delete_allocation = false;
          this.getDispatchDetails();
        },
        (error) => {
          this.savingOrder = false;
          if (error.status !== 1 && error.status !== 401) {
            console.log('Error in hold Order for dispatch ::>> ', error);
            this.toastService.showToaster({
              message:
                'Something went wrong dispatch cannot be save at the moment!',
              title: 'Error:',
              type: 'error',
            });
          }
        }
      );
    }else{
        this.toastService.showToaster({
          message:'Please add reason!',
          title: 'Error:',
          type: 'error',
        });
    }

  }

  addOrderBill(index: number, isAdded: boolean): void {
    const retailer_credit_Invoices = this.retailer_credit_Invoices[index];
    if (!isAdded) {
      const parentOrderId = this.ordersRetailers.find(
        (x) => x.retailer_id === retailer_credit_Invoices.retailer_id
      ).id;
      const postModel = getRetailersCreditInvoice(
        retailer_credit_Invoices,
        parentOrderId,
        this.assignmentId
      );
      this.orderService
        .postRetailersCreditInvoices(postModel)
        .subscribe((x) => {
          console.log('postRetailersCreditInvoices => ', x.result);
          this.retailer_credit_Invoices[index].id = x.result.id;
          this.retailer_credit_Invoices[index].is_added = 1;
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
          this.getCreditTabData();
          const toast: Toaster = {
            type: 'success',
            message: 'Remove Successfully',
            title: 'Success:',
          };
          this.toastService.showToaster(toast);
        });
    }

    // order.isAdded = true;
    // let payment = this.credits.find((x) => x.order_id === order.id);
    // if (payment) {
    //   payment.recovery = +order.recovery;
    // } else {
    //   payment = {
    //     recovery: +order.recovery,
    //     order_id: order.id,
    //     retailer_id: order.retailer_id,
    //     dispatched_bill_amount: order.order_total,
    //   };
    //   this.credits.push(payment);
    // }
  }

  removeOrderBill(order: any): void {
    order.isAdded = false;
    order.recovery = 0;
    // this.credits = this.credits.filter(ord => ord.order_id !== order.id);
  }

  searchByRetailer(): void {
    if (this.searchText) {
      this.ordersDispList = this.remainingOrders.filter((ret) =>
        ret.retailer_name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  openConfirmationModal(): void {
    if (this.currentLoadValidation()) {
      const unSelected = this.dispatchOrderDetail.orders.filter(
        (x) => !x.isSelected
      );
      if (this.load.content.length === 3 && unSelected.length !== 0) {
        this.toastService.showToaster({
          type: 'error',
          title: 'Select All Orders:',
          message: 'Some orders are not selected',
        });
        return;
      }
      if (this.load.content.length !== 3 && unSelected.length !== 0) {
        if (this.currentLoadContent.items.length) {
          this.showCreateLoadModal = true;
        } else {
          this.toastService.showToaster({
            type: 'error',
            title: 'Select Orders:',
            message: 'Select orders to create load',
          });
        }
      } else {
        this.saveDispatch();
      }
    }
  }

  saveDispatch(): void {
    this.loading = true;
    let totalRecovery = 0;
    this.credits.map((x) => { totalRecovery = x.recovery + totalRecovery;});
    let totalfocs    = 0;
    this.load.content.map((x) => {totalfocs = +x.total_focs + +totalfocs;});
    let totalProducts = 0;
    this.load.content.map((x) => {totalProducts = +x.total_products + +totalProducts;}); 
    this.load.salesman_id = this.salemanId;
    this.load.total_orders = this.dispatchOrderDetail.orders.length;
    this.load.total_gross_amount =this.dispatchOrderDetail.summary.gross_total || 0;
    this.load.total_trade_offer = this.dispatchOrderDetail.summary.trade_offer || 0;
    this.load.total_trade_discount =this.dispatchOrderDetail.summary.trade_discount || 0;
    this.load.total_special_discount =this.dispatchOrderDetail.summary.special_discount || 0;
    this.load.total_booker_discount =this.dispatchOrderDetail.summary.booker_discount || 0;
    this.load.total_loyalty_discount =this.dispatchOrderDetail.summary.loyalty_discount || 0;
    this.load.total_tax_amount =this.dispatchOrderDetail.summary.total_tax || 0;
    this.load.total_recovery_amount = totalRecovery || 0;
    this.load.total_net_sale = this.dispatchOrderDetail.summary.total_price || 0;
    this.load.total_focs = +totalfocs;
    this.load.total_products = totalProducts;
    this.load.distributor_id = this.distributorId;
    this.load.total_sub_loads = this.load.content.length;
    this.load.processed_date = this.orderDate;
    this.load.assignmentId = this.assignmentId;
    this.load.content      =  this.dispatchService.parseLoads(this.load.content,this.stockAllocation);
    //allocate extra Qty to first  load items
    
    this.load.content = this.load.content.map((x) => {
      delete x.loadNumber;
      return x;
    });
    const order = { load: this.load, payments: this.credits };
    
    this.showFinalLoad = false;  

    
    this.orderService.saveDispatchOrder(order).subscribe(
      (res) => {
        if (res.status === 200) {
          this.finalLoad = res.data;
          setTimeout(() => {
            this.loading = false;
            this.showFinalLoad = true;
            this.initializeLoadSheetColumns();
            // Refresh grid after columns are initialized
            setTimeout(() => {
              if (this.loadSheetGridApi) {
                this.loadSheetGridApi.refreshCells();
                this.loadSheetGridApi.sizeColumnsToFit();
              }
            }, 100);
          }, 500);
          this.dispatchOrderDetail = null;
          this.ordersDispList = [];
          this.remainingOrders = [];
          this.isAllSelected = false;
          this.setLoad();
          this.setCurrentLoad(1);
          this.load.content.push(this.currentLoadContent);
          this.toastService.showToaster({
            type: 'success',
            message: 'Payments and Load saved successfully!',
            title: 'Payments and Load saved:',
          });
          this.currentTab = 5;
          this.tabChanged();
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message: 'Payments and Load not saved, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  currentLoadValidation(): boolean {
    if (!this.currentLoadContent.items.length) {
      this.toastService.showToaster({
        title: 'Load Error:',
        message: 'Please select orders to add into current load',
        type: 'error',
      });
      return false;
    }
    return true;
  }

  changeCurrentLoad(ldNumber: number): void {
    if (this.currentLoadValidation()) {
      this.remainingOrders = this.dispatchOrderDetail.orders.filter(
        (x) => !x.isSelected
      );
      this.currentLoadContent = this.load.content.find(
        (x) => x.loadNumber === ldNumber
      );
      const orders = this.dispatchOrderDetail?.orders.filter((x) => {
        if (this.currentLoadContent.order_ids.includes(x.id)) {
          x.isSelected = true;
          return x;
        }
      });
      if (orders.length) {
        this.remainingOrders = [...orders, ...this.remainingOrders];
      }
      this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    }
  }

  updateDispatchedQty(item: any): void {
    if (+item.issued_qty > 1000) {
      item.issued_qty = 0;
    }
    item.dispatched_qty = +item.issued_qty + item.actual_qty;
  }

  allSelected(): void {
    if (this.isAllSelected) {
      this.remainingOrders = this.remainingOrders.map((order) => {
        order.isSelected = true;
        return order;
      });
      this.setAllOrdersToCurrentLoad();
    } else {
      this.remainingOrders = this.remainingOrders.map((order) => {
        order.isSelected = false;
        return order;
      });
      this.removeAllOrdersFromCurrentLoad();
    }
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
  }

  setAllOrdersToCurrentLoad(): void {
    this.currentLoadContent.items = [];
    this.remainingOrders.forEach((order) => {
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = true;
          }
          return x;
        }
      );
      this.currentLoadContent = this.dispatchService.setLoadContent(
        order,
        this.currentLoadContent
      );
    });
    //It will return only where actual qty or issue qty should be greater than zero
     
      this.currentLoadContent = this.dispatchService.setActiveLoadContent(this.currentLoadContent,this.stockAllocation,this.dispatchOrderDetail);
    
  }

  retailerSelected(order: any): void {
    if (order.isSelected) {
      this.currentLoadContent = this.dispatchService.setLoadContent(
        order,
        this.currentLoadContent
      );
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = true;
          } 
          return x;
        }
      );
    } else {
      this.isAllSelected = false;
      this.currentLoadContent = this.dispatchService.removeOrderFromCurrentLoad(
        order,
        this.currentLoadContent
      );
      this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
        (x) => {
          if (order.id === x.id) {
            x.isSelected = false;
          }
          return x;
        }
      );
    }
    this.remainingOrders = this.remainingOrders.map((x) => {
      if (x.id === order.id) {
        x.isSelected = order.isSelected;
      }
      return x;
    });
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    //It will return only where actual qty or issue qty should be greater than zero 
    this.currentLoadContent = this.dispatchService.setActiveLoadContent(this.currentLoadContent,this.stockAllocation,this.dispatchOrderDetail);
    
  }

  getItemName(itemId: number): string {
    const item = this.inventory.find((x) => x.item_id === itemId);
    return item.item_name;
  }
  getItemSKU(itemId: number): string {
    const item = this.inventory.find((x) => x.item_id === itemId);
    return item.item_sku;
  }

  addCurrentLoad(): void {
    this.remainingOrders = this.remainingOrders.filter(
      (x) =>
        !(this.currentLoadContent.order_ids as Array<number>).includes(x.id)
    );
    this.ordersDispList = JSON.parse(JSON.stringify(this.remainingOrders));
    this.setCurrentLoad(this.load.content.length + 1);
    this.load.content.push(this.currentLoadContent);
    if (this.currentLoadContent.loadNumber === 3) {
      this.isAllSelected = true;
      this.allSelected();
    }
    this.showCreateLoadModal = false;
  }

  removeAllOrdersFromCurrentLoad(): void {
    this.currentLoadContent.items = [];
    this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(
      (x) => {
        if (this.currentLoadContent.order_ids.includes(x.id)) {
          x.isSelected = false;
        }
        return x;
      }
    );
    this.currentLoadContent.order_ids       = [];
    this.currentLoadContent.total_orders    = 0;
    this.currentLoadContent.total_focs      = 0;
    this.currentLoadContent.total_products  = 0;
  }

  completeDispatch(): void {
    this.loading = true;
    this.orderService.completeOrderDispatch(this.finalLoad.load_id).subscribe(
      (res) => {
        this.loading = false;
        this.toastService.showToaster({
          type: 'success',
          message: 'Order dispatch completed successfully!',
          title: 'Order Dipatched Completed:',
        });
        this.router.navigateByUrl('/orders/dispatch-orders');
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message:
              'Order Dispatch cannot be completed at the moment, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  revertDispatch(): void {
    this.loading = true;
    this.orderService.revertOrderDispatch(this.finalLoad.load_id).subscribe(
      (res) => {
        this.loading = false;
        this.toastService.showToaster({
          type: 'success',
          message: 'Order dispatch reverted successfully!',
          title: 'Dipatch Reverted:',
        });
        this.currentTab = 1;
        this.credits = [];
        this.dispatchOrderDetail = null;
        this.ordersDispList = [];
        this.isAllSelected = false;
        this.tabChanged();
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            type: 'error',
            message:
              'Revert cannot be completed at the moment, please try again later!',
            title: 'Error:',
          });
        }
      }
    );
  }

  getBookingSheet(): void {
    const sheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}?emp=${this.salemanId}&date=${this.orderDate}&loadId=${this.finalLoad.load_id}`;
    window.open(sheetUrl);
  }

  getBills(size: string = 'A4'): void {
    if (this.invoiceDate) {
      this.orderService
        .updateDispatchInvoiceDate(this.finalLoad.load_id, this.invoiceDate)
        .subscribe(
          (res) => {
            if (res.status === 200) {
              this.showBillsModal = false;
              const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${this.salemanId}&date=${this.orderDate}&dist_id=${this.distributorId}&size=${size}&status=processed&loadId=${this.finalLoad.load_id}`;
              window.open(billsUrl);
            } else {
              this.toastService.showToaster({
                type: 'error',
                message:
                  'Bill cannot be generated at the moment, please try again later!',
                title: 'Bill cannot be generated:',
              });
            }
          },
          (error) => {
            if (error.status !== 1 && error.status !== 401) {
              this.toastService.showToaster({
                type: 'error',
                message:
                  'Bill cannot be generated at the moment, please try again later!',
                title: 'Bill cannot be generated:',
              });
            }
          }
        );
    } else {
      this.toastService.showToaster({
        type: 'error',
        message: 'Please select invoice date to generate bill(s)!',
        title: 'Please select invoice date:',
      });
    }
  }

  generateLSPDF(): void {
    const billsUrl = `${environment.apiDomain}${API_URLS.LS_PDF}/${this.finalLoad.load_id}/${this.salemanId}/${this.orderDate}`;
    window.open(billsUrl);
  }
}
