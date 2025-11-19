import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  AllCommunityModule,
} from 'ag-grid-community';
import { PrimaryOrdersService } from '../../../orders/primary-orders/services/primary-orders.service';
import { ToasterService } from 'src/app/core/services/toaster.service';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-received-order',
  standalone: false,
  templateUrl: './received-order.component.html',
  styleUrl: './received-order.component.css',
})
export class ReceivedOrderComponent implements OnInit {
  private gridApi!: GridApi;

  loading: boolean = false;
  receivedOrders: Array<any> = [];
  showReceivedSidebar: boolean = false;
  orderProducts: Array<any> = [];
  filteredOrderProducts: Array<any> = [];
  productSearchText: string = '';
  currentOrderId: number = null;
  sidebarJustOpened: boolean = false;
  savingReceived: boolean = false;

  // AG Grid column definitions
  columnDefs: ColDef[] = [];
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  constructor(
    // private primaryOrderService: PrimaryOrdersService,
    private toastService: ToasterService,
    private cdr: ChangeDetectorRef
  ) {
    this.columnDefs = this.getColumnDefs();
    this.setupGlobalFunctions();
  }

  ngOnInit(): void {
    // Load static data
    this.loadReceivedOrders();
  }

  getColumnDefs(): ColDef[] {
    const component = this;

    return [
      {
        field: 'id',
        headerName: 'Order ID',
        sortable: true,
        filter: true,
        width: 120,
      },
      {
        field: 'date',
        headerName: 'Date',
        sortable: true,
        filter: true,
        width: 150,
      },
      {
        field: 'distributor_name',
        headerName: 'Distributor',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        field: 'employee_name',
        headerName: 'Employee',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        field: 'total_products',
        headerName: 'Total Products',
        sortable: true,
        filter: true,
        width: 150,
      },
      {
        field: 'order_total',
        headerName: 'Order Total',
        sortable: true,
        filter: true,
        width: 150,
        valueFormatter: (params) => {
          if (params.value == null) return '';
          return params.value.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
        },
      },
      {
        field: 'actions',
        headerName: 'Action',
        cellRenderer: (params: any) => {
          const order = params.data;

          return `
            <div class="flex gap-1 flex-wrap">
              <button onclick="window.viewDetailsClick('${order.id}')" 
                      class="h-auto leading-none py-[4px] px-[5px] text-secondary hover:text-white hover:bg-primary dark:text-white text-[11px] border border-primary dark:border-primary font-primary rounded-[5px] ml-0.5 inline-block" title="Add Received">Add Received</button>
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
        pinned: 'right',
      },
    ];
  }

  setupGlobalFunctions(): void {
    (window as any).viewDetailsClick = (orderId: string) => {
      this.viewOrderDetails(parseInt(orderId));
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

  loadReceivedOrders(): void {
    // Static data - will be replaced with API call later
    this.receivedOrders = [
      {
        id: 1001,
        date: '2024-01-15',
        distributor_name: 'ABC Distributors',
        employee_name: 'John Doe',
        total_products: 25,
        order_total: 125000.5,
      },
      {
        id: 1002,
        date: '2024-01-16',
        distributor_name: 'XYZ Trading Co.',
        employee_name: 'Jane Smith',
        total_products: 18,
        order_total: 87500.75,
      },
      {
        id: 1003,
        date: '2024-01-17',
        distributor_name: 'Global Supplies Ltd.',
        employee_name: 'Mike Johnson',
        total_products: 32,
        order_total: 156750.0,
      },
      {
        id: 1004,
        date: '2024-01-18',
        distributor_name: 'Prime Distributors',
        employee_name: 'Sarah Williams',
        total_products: 15,
        order_total: 67500.25,
      },
      {
        id: 1005,
        date: '2024-01-19',
        distributor_name: 'Elite Trading',
        employee_name: 'David Brown',
        total_products: 28,
        order_total: 142300.8,
      },
    ];
  }

  viewOrderDetails(orderId: number): void {
    this.currentOrderId = orderId;
    this.sidebarJustOpened = true;
    this.showReceivedSidebar = true;
    document.body.classList.add('no-scroll');
    this.cdr.detectChanges();

    // Static data - will be replaced with API call later
    this.loadOrderProductsStatic(orderId);

    // Allow click-outside after a delay
    setTimeout(() => {
      this.sidebarJustOpened = false;
    }, 500);
  }

  loadOrderProductsStatic(orderId: number): void {
    // Static product data - will be replaced with API call later
    // TODO: Replace with API call: this.primaryOrderService.getOderDetailById(orderId)
    this.orderProducts = [
      {
        id: 1,
        product_name: 'Product A - Premium Quality',
        qty: 25,
        primary_qty: 10,
        unit_quantity: 25,
        unit_name: 'Box',
        received_primary_qty: 0,
        received_unit_quantity: 0,
        item_sku: 'SKU-001',
        updateLoading: false,
      },
      {
        id: 2,
        product_name: 'Product B - Standard Pack',
        qty: 18,
        primary_qty: 6,
        unit_quantity: 18,
        unit_name: 'Piece',
        received_primary_qty: 0,
        received_unit_quantity: 0,
        item_sku: 'SKU-002',
        updateLoading: false,
      },
      {
        id: 3,
        product_name: 'Product C - Deluxe Edition',
        qty: 32,
        primary_qty: 8,
        unit_quantity: 32,
        unit_name: 'Carton',
        received_primary_qty: 0,
        received_unit_quantity: 0,
        item_sku: 'SKU-003',
        updateLoading: false,
      },
      {
        id: 4,
        product_name: 'Product D - Economy Size',
        qty: 15,
        primary_qty: 5,
        unit_quantity: 15,
        unit_name: 'Pack',
        received_primary_qty: 0,
        received_unit_quantity: 0,
        item_sku: 'SKU-004',
        updateLoading: false,
      },
      {
        id: 5,
        product_name: 'Product E - Professional Grade',
        qty: 28,
        primary_qty: 7,
        unit_quantity: 28,
        unit_name: 'Unit',
        received_primary_qty: 0,
        received_unit_quantity: 0,
        item_sku: 'SKU-005',
        updateLoading: false,
      },
    ];

    // Initialize filtered products
    this.filteredOrderProducts = [...this.orderProducts];
    this.productSearchText = '';
    this.cdr.detectChanges();
  }

  searchProduct(): void {
    if (!this.productSearchText || this.productSearchText.trim() === '') {
      this.filteredOrderProducts = [...this.orderProducts];
    } else {
      const searchTerm = this.productSearchText.trim();
      const searchTermLower = searchTerm.toLowerCase();
      this.filteredOrderProducts = this.orderProducts.filter((product) => {
        return (
          product.product_name?.toLowerCase().includes(searchTermLower) ||
          product.item_sku?.toLowerCase().includes(searchTermLower) ||
          product.qty?.toString().includes(searchTerm) ||
          product.primary_qty?.toString().includes(searchTerm) ||
          product.unit_quantity?.toString().includes(searchTerm) ||
          product.unit_name?.toLowerCase().includes(searchTermLower) ||
          product.received_primary_qty?.toString().includes(searchTerm) ||
          product.received_unit_quantity?.toString().includes(searchTerm)
        );
      });
    }
    this.cdr.detectChanges();
  }

  closeReceivedSidebar(): void {
    this.showReceivedSidebar = false;
    this.orderProducts = [];
    this.filteredOrderProducts = [];
    this.productSearchText = '';
    this.currentOrderId = null;
    this.sidebarJustOpened = false;
    document.body.classList.remove('no-scroll');
    this.cdr.detectChanges();
  }

  clickedOutSide(event: Event): void {
    if (!this.showReceivedSidebar) {
      return;
    }

    if (this.sidebarJustOpened) {
      return;
    }

    const target = event.target as HTMLElement;

    if (
      target.classList.contains('dont-close-received') ||
      target.closest('.dont-close-received') ||
      target.closest('#received-sidebar > div')
    ) {
      return;
    }

    const sidebarElement = document.getElementById('received-sidebar');
    if (
      sidebarElement &&
      (target === sidebarElement || target === event.currentTarget)
    ) {
      this.closeReceivedSidebar();
    }
  }

  isNumber(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow: backspace, delete, tab, escape, enter
    if (
      [46, 8, 9, 27, 13].indexOf(charCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (charCode === 65 && event.ctrlKey === true) ||
      (charCode === 67 && event.ctrlKey === true) ||
      (charCode === 86 && event.ctrlKey === true) ||
      (charCode === 88 && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      (charCode >= 35 && charCode <= 39)
    ) {
      return true;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (event.shiftKey || charCode < 48 || charCode > 57) &&
      (charCode < 96 || charCode > 105)
    ) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onUpdateReceivedPrimaryQty(product: any): void {
    // Validate received_primary_qty doesn't exceed primary_qty
    const maxPrimaryQty = product.primary_qty || product.qty;
    if (+product.received_primary_qty > +maxPrimaryQty) {
      product.received_primary_qty = maxPrimaryQty;
      this.toastService.showToaster({
        type: 'error',
        message:
          'Received primary quantity cannot exceed ordered primary quantity',
        title: 'Error:',
      });
    }
  }

  onUpdateReceivedUnitQty(product: any): void {
    // Validate received_unit_quantity doesn't exceed unit_quantity
    const maxUnitQty = product.unit_quantity || product.qty;
    if (+product.received_unit_quantity > +maxUnitQty) {
      product.received_unit_quantity = maxUnitQty;
      this.toastService.showToaster({
        type: 'error',
        message: 'Received unit quantity cannot exceed ordered unit quantity',
        title: 'Error:',
      });
    }
  }

  saveReceivedOrder(): void {
    // TODO: Implement API call to save received order
    this.savingReceived = true;
    this.cdr.detectChanges();

    // Simulate API call
    setTimeout(() => {
      this.savingReceived = false;
      this.toastService.showToaster({
        type: 'success',
        message: 'Received order saved successfully!',
        title: 'Success:',
      });
      this.closeReceivedSidebar();
      // Refresh orders list
      this.loadReceivedOrders();
    }, 1000);
  }
}
