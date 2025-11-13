import { Component, OnInit } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { InventoryService } from '../../services/inventory.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-distributor-stock',
  templateUrl: 'stock.component.html',
  styleUrls: ['./stock.component.css'],
  standalone: false


})
export class StockComponent implements OnInit {
  private gridApi!: GridApi;
  
  // AG Grid column definitions
  columnDefs: ColDef[] = [
    { field: 'item_sku', headerName: 'SKU', sortable: true, filter: true, width: 120 },
    { field: 'item_name', headerName: 'Product Name', sortable: true, filter: true, flex: 1 },
    { field: 'brand_name', headerName: 'Brand', sortable: true, filter: true, flex: 1 },
    { field: 'sub_cat', headerName: 'Sub Category', sortable: true, filter: true, flex: 1 },
    { 
      field: 'stock', 
      headerName: 'Current Stock', 
      sortable: true, 
      filter: true, 
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) return '0';
        return params.value.toLocaleString('en-US');
      }
    },
    {
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const product = params.data;
        return `
          <button 
            onclick="window.viewHistory('${product.item_id}')" 
            class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]"
            title="View History">
            View History
          </button>
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

  loading: boolean;
  historyLoading: boolean;
  showHistory: boolean;
  productsStock: Array<any> = [];
  historyFilter: string | null = null;
  historyDateFrom: Date | string | null = null;
  historyDateTo: Date | string | null = null;
  selectedProductId: number;
  timer: any;
  selectedName: string;

  stockHistory: Array<any> = [];

  constructor(
    private inventoryService: InventoryService,
    private toasterService: ToasterService
  ) {
    this.setupGlobalFunctions();
  }

  ngOnInit(): void {
    this.getProductsWithStock();
  }

  setupGlobalFunctions(): void {
    (window as any).viewHistory = (itemId: string) => {
      const product = this.productsStock.find((x) => x.item_id === parseInt(itemId));
      if (product) {
        this.getHistory(product.item_id, new Event('click'));
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

  getProductsWithStock(): void {
    this.loading = true;
    this.inventoryService.getProductsWithStock().subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 200) {
          this.productsStock = res.data;
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          const toast: Toaster = {
            title: 'Error:',
            message:
              'Something went wrong while getting stock please try again!',
            type: 'error',
          };
          this.toasterService.showToaster(toast);
        }
      }
    );
  }

  getHistory(itemId: number, event: Event): void {
    event.stopPropagation();
    this.selectedName = this.productsStock.find(
      (x) => x.item_id === itemId
    ).item_name;
    this.selectedProductId = itemId;
    this.showHistory = true;
    // Reset filter and dates - user will select them manually
    this.historyFilter = null;
    this.historyDateFrom = null;
    this.historyDateTo = null;
    this.stockHistory = null;
    // Don't call getStockHistory() - wait for user to select filter and date
  }

  dateChanged(): void {
    this.resetTimer();
    // Only fetch history if filter and required dates are selected
    if (
      this.historyFilter &&
      (
        ((this.historyFilter === 'monthly' || this.historyFilter === 'daily') &&
          this.historyDateFrom) ||
        (this.historyFilter === 'range' &&
          this.historyDateFrom &&
          this.historyDateTo)
      )
    ) {
      // Set loading state immediately when user selects date/filter
      this.historyLoading = true;
      this.stockHistory = null;
      this.getStockHistory();
    } else {
      // Clear history if filter or date is not selected
      this.stockHistory = null;
      this.historyLoading = false;
    }
  }

  getStockHistory(): void {
    // Ensure loading state is set (already set in dateChanged, but ensure it's set here too)
    this.historyLoading = true;
    this.stockHistory = null;
    
    if (!this.timer) {
      let value = {};
      
      // Handle date picker value - it can be a Date object or string
      let dateFromStr: string;
      let dateToStr: string;
      
      if (this.historyDateFrom instanceof Date) {
        dateFromStr = this.historyDateFrom.toISOString().split('T')[0];
      } else {
        dateFromStr = this.historyDateFrom || '';
      }
      
      if (this.historyDateTo instanceof Date) {
        dateToStr = this.historyDateTo.toISOString().split('T')[0];
      } else {
        dateToStr = this.historyDateTo || '';
      }
      
      if (this.historyFilter === 'monthly') {
        const dateFrom = this.historyDateFrom instanceof Date ? this.historyDateFrom : new Date(this.historyDateFrom);
        value = {
          month: dateFrom.getMonth() + 1,
          year: dateFrom.getFullYear(),
        };
      } else if (this.historyFilter === 'daily') {
        value = { date: dateFromStr };
      } else {
        value = {
          from: dateFromStr,
          to: dateToStr,
        };
      }
      this.timer = setTimeout(() => {
        this.inventoryService
          .getProductStockHistory(
            this.selectedProductId,
            this.historyFilter,
            value
          )
          .subscribe(
            (res) => {
              this.historyLoading = false;
              if (res.status === 200) {
                this.stockHistory = res.data.history;
              }
              this.resetTimer();
            },
            (error) => {
              this.historyLoading = false;
              this.resetTimer();
              if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = {
                  title: 'Error:',
                  message:
                    'Something went wrong while getting stock history please try again!',
                  type: 'error',
                };
                this.toasterService.showToaster(toast);
              }
            }
          );
      }, 2000);
    }
  }

  resetTimer(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
  }

  clickOutSide(event: Event): void {
    if (!(event.target as HTMLElement).className.includes('paginate_button')) {
      this.closeHistory();
    }
  }

  closePopup(): void {
    document.getElementById('close-history-btn').click();
  }

  closeHistory(): void {
    if (this.showHistory) {
      this.showHistory = false;
      this.historyFilter = null;
      this.historyDateTo = null;
      this.historyDateFrom = null;
      this.stockHistory = null;
    }
  }
}
