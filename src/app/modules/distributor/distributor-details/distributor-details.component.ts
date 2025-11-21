import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { DistributorService } from '../services/distributor.service';
import {
  DistributorDetailsUtils,
  IDistributorDetailsResponse,
  IDistributorInvoice,
  IDistributor,
  IPaymentDetail,
  IAddInvoicePayload,
} from './distributor-details.utils';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  AllCommunityModule,
} from 'ag-grid-community';
import { environment } from 'src/environments/environment';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { PrimaryOrdersService } from 'src/app/modules/orders/primary-orders/services/primary-orders.service';
import { PrimaryOrder } from 'src/app/modules/orders/primary-orders/_models/order';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-distributor-details',
  standalone: false,
  templateUrl: './distributor-details.component.html',
  styleUrl: './distributor-details.component.css',
})
export class DistributorDetailsComponent implements OnInit {
  private gridApi!: GridApi;

  // AG Grid column definitions for invoices
  columnDefs: ColDef[] = [
    {
      field: 'invoice_number',
      headerName: 'Invoice No.',
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      field: 'invoice_date',
      headerName: 'Date',
      sortable: true,
      filter: true,
      width: 150,
      valueFormatter: (params) => {
        if (!params.value) return '';

        const date = new Date(params.value);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
        const day = date.getDate().toString().padStart(2, '0');
      
        return `${year}-${month}-${day}`;
      },
    },
    {
      field: 'order_id',
      headerName: 'Order ID',
      sortable: true,
      filter: false,
      width: 120,
    },
    {
      field: 'invoice_amount',
      headerName: 'Invoice Amount',
      sortable: true,
      filter: false,
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
      field: 'paid_amount',
      headerName: 'Paid Amount',
      sortable: true,
      filter: false,
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
      field: 'amount_due',
      headerName: 'Amount Due',
      sortable: true,
      filter: false,
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
      field: 'aging',
      headerName: 'Aging (Days)',
      sortable: true,
      filter: false,
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const invoice = params.data;
        const orderId = invoice.order_id;
        return `
          <div class="flex gap-1 flex-wrap items-center h-full">
            <button onclick="window.viewInvoiceDetail('${orderId}')" 
                    class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" 
                    title="View Invoice">View Invoice</button>
            <button onclick="window.viewOrderDetail('${orderId}')" 
                    class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" 
                    title="View Order">View Order</button>
            ${
              invoice.amount_due > 0
                ? `<button onclick="window.PayNow('${orderId}')" 
                    class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px]" 
                    title="View Payment">Pay Now</button>`
                : ''
            }
          </div>
        `;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '8px 4px',
      },
      width: 300,
      sortable: false,
      filter: false,
    },
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };

  loading: boolean = false;
  invoices: IDistributorInvoice[] = [];
  distributorId: string | null = null;
  distributor: IDistributor | null = null;
  showOrderDetailModal: boolean = false;
  orderDetailLoading: boolean = false;
  order: PrimaryOrder | null = null;
  showPaymentModal: boolean = false;
  paymentLoading: boolean = false;
  selectedInvoice: IDistributorInvoice | null = null;
  paymentDetail: IPaymentDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private toastService: ToasterService,
    private distributorService: DistributorService,
    private primaryOrderService: PrimaryOrdersService,
    private storageService: LocalStorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Get distributor ID from query params
    this.route.queryParams.subscribe((params) => {
      this.distributorId = params['id'] || null;
      if (this.distributorId) {
        this.getInvoices();
      }
    });
    this.setupGlobalFunctions();
  }

  setupGlobalFunctions(): void {
    const self = this;
    (window as any).viewInvoiceDetail = (orderId: string) => {
      if (!orderId) {
        self.toastService.showToaster({
          title: 'Error:',
          message: 'Order ID is missing.',
          type: 'error',
        });
        return;
      }
      
      const url = `${environment.apiDomain}${API_URLS.DISTRIBUTOR_INVOICE_PDF}?order_id=${orderId}`;
      window.open(url, '_blank');
    };

    (window as any).viewOrderDetail = (orderId: string) => {
      if (!orderId) {
        self.toastService.showToaster({
          title: 'Error:',
          message: 'Order ID is missing.',
          type: 'error',
        });
        return;
      }
      self.openOrderDetailModal(parseInt(orderId));
    };
    (window as any).PayNow = (orderId: string) => {
      if (!orderId) {
        self.toastService.showToaster({
          title: 'Error:',
          message: 'Order ID is missing.',
          type: 'error',
        });
      }
      self.openPaymentModal(parseInt(orderId));
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

  getInvoices(): void {
    if (!this.distributorId) {
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();

    // Get distributor details using utils
    DistributorDetailsUtils.getDistributorDetails(
      this.distributorService,
      this.distributorId
    ).subscribe(
      (res: IDistributorDetailsResponse) => {
        this.loading = false;

        if (res && res.data) {
          this.distributor = res.data.distributor;
          
          this.invoices = res.data.invoices || [];
        } else {
          this.invoices = [];
        }
        this.cdr.detectChanges();

      },
      (error) => {
        this.loading = false;
        console.error('Error fetching distributor details:', error);
        console.error('Error Response:', error);
        this.invoices = [];
        this.distributor = null;

        if (error.status !== 401 && error.status !== 1) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Distributor details not fetched, try again later.',
            type: 'error',
          });
        }
        this.cdr.detectChanges();

      }
    );
  }

  openOrderDetailModal(id: number): void {
    this.order = null;
    this.showOrderDetailModal = true;
    document.body.classList.add('no-scroll');
    this.cdr.detectChanges();
    this.getOrderDetail(id);
  }
  openPaymentModal(id: number): void {
    this.selectedInvoice =
      this.invoices.find((inv) => inv.order_id === id) || null;
    if (this.selectedInvoice) {
      this.paymentDetail = {
        ...this.selectedInvoice,
        recovery_amount: 0,
        discount_amount: 0,
      };
    this.showPaymentModal = true;
    document.body.classList.add('no-scroll');
    this.cdr.detectChanges();
    } else {
      this.toastService.showToaster({
        title: 'Error:',
        message: 'Invoice not found.',
        type: 'error',
      });
    }
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.paymentLoading = false;
    this.selectedInvoice = null;
    this.paymentDetail = null;
    document.body.classList.remove('no-scroll');
    this.cdr.detectChanges();
  }

  onRecoveryAmountChange(): void {
    if (!this.paymentDetail || !this.selectedInvoice) {
      return;
    }

    const amountDue = Math.round(this.selectedInvoice.amount_due * 100) / 100; // Round to 2 decimal places
    let recoveryAmount = this.paymentDetail.recovery_amount;
    let discountAmount = this.paymentDetail.discount_amount;

    if (
      recoveryAmount === null ||
      recoveryAmount === undefined ||
      isNaN(recoveryAmount)
    ) {
      recoveryAmount = 0;
    }

    recoveryAmount = Math.round(recoveryAmount * 100) / 100;
    discountAmount = Math.round(discountAmount * 100) / 100;

    if (recoveryAmount < 0) {
      this.toastService.showToaster({
        title: 'Error:',
        message: 'Recovery amount cannot be negative.',
        type: 'error',
      });
      recoveryAmount = 0;
    }

    if (recoveryAmount > amountDue) {
      recoveryAmount = amountDue;
    }

    const total = Math.round((recoveryAmount + discountAmount) * 100) / 100;
    if (total > amountDue) {
      discountAmount = Math.max(
        0,
        Math.round((amountDue - recoveryAmount) * 100) / 100
      );
    }

    const balance =
      Math.round((amountDue - recoveryAmount - discountAmount) * 100) / 100;
    if (balance < 0) {
      discountAmount = Math.max(
        0,
        Math.round((amountDue - recoveryAmount) * 100) / 100
      );
    }

    recoveryAmount = Math.round(recoveryAmount * 100) / 100;
    discountAmount = Math.round(discountAmount * 100) / 100;

    this.paymentDetail.recovery_amount = recoveryAmount;
    this.paymentDetail.discount_amount = discountAmount;

    this.cdr.detectChanges();
  }

  onDiscountAmountChange(): void {
    if (!this.paymentDetail || !this.selectedInvoice) {
      return;
    }

    const amountDue = Math.round(this.selectedInvoice.amount_due * 100) / 100; // Round to 2 decimal places
    let recoveryAmount = this.paymentDetail.recovery_amount;
    let discountAmount = this.paymentDetail.discount_amount;

    if (
      discountAmount === null ||
      discountAmount === undefined ||
      isNaN(discountAmount)
    ) {
      discountAmount = 0;
    }

    recoveryAmount = Math.round(recoveryAmount * 100) / 100;
    discountAmount = Math.round(discountAmount * 100) / 100;

    if (discountAmount < 0) {
      this.toastService.showToaster({
        title: 'Error:',
        message: 'Discount amount cannot be negative.',
        type: 'error',
      });
      discountAmount = 0;
    }

    if (discountAmount > amountDue) {
      discountAmount = amountDue;
    }

    const total = Math.round((recoveryAmount + discountAmount) * 100) / 100;
    if (total > amountDue) {
      recoveryAmount = Math.max(
        0,
        Math.round((amountDue - discountAmount) * 100) / 100
      );
    }

    const balance =
      Math.round((amountDue - recoveryAmount - discountAmount) * 100) / 100;
    if (balance < 0) {
      recoveryAmount = Math.max(
        0,
        Math.round((amountDue - discountAmount) * 100) / 100
      );
    }

    recoveryAmount = Math.round(recoveryAmount * 100) / 100;
    discountAmount = Math.round(discountAmount * 100) / 100;

    this.paymentDetail.recovery_amount = recoveryAmount;
    this.paymentDetail.discount_amount = discountAmount;

    this.cdr.detectChanges();
  }

  addPayment(): void {
    if (!this.selectedInvoice || !this.paymentDetail) {
      return;
    }

    this.onRecoveryAmountChange();
    this.onDiscountAmountChange();

    const amountDue = Math.round(this.selectedInvoice.amount_due * 100) / 100;
    const recoveryAmount =
      Math.round(this.paymentDetail.recovery_amount * 100) / 100;
    const discountAmount =
      Math.round(this.paymentDetail.discount_amount * 100) / 100;
    const totalRecovery =
      Math.round((recoveryAmount + discountAmount) * 100) / 100;

    if (totalRecovery > amountDue) {
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Recovery and discount amounts cannot exceed the amount due.',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }


    const balance =
      Math.round((amountDue - recoveryAmount - discountAmount) * 100) / 100;
    if (balance < 0) {
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Balance cannot be negative. Please adjust the amounts.',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }

    if (recoveryAmount === 0 && discountAmount === 0) {
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Please enter at least one amount (recovery or discount).',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }

    if(discountAmount > recoveryAmount) {
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Discount amount cannot be greater than recovery amount.',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }

    if(recoveryAmount< 0){
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Recovery amount cannot be negative.',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }
    if(discountAmount< 0){
      setTimeout(() => {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Discount amount cannot be negative.',
          type: 'error',
        });
        this.cdr.detectChanges();
      }, 0);
      return;
    }

    this.paymentLoading = true;
    this.cdr.detectChanges();

    const loggedInDistributor = this.storageService.getItem(
      localStorageKeys.distributor
    );
    if (!loggedInDistributor || !loggedInDistributor.id) {
      this.paymentLoading = false;
      this.cdr.detectChanges();
      this.toastService.showToaster({
        title: 'Error:',
        message:
          'Unable to get logged-in user information. Please login again.',
        type: 'error',
      });
      return;
    }

    const payload: IAddInvoicePayload = {
      distributor_id: parseInt(loggedInDistributor.id as string),
      order_id: this.selectedInvoice.order_id,
      recovery_amount:
        Math.round(this.paymentDetail.recovery_amount * 100) / 100,
      discount_amount:
        Math.round(this.paymentDetail.discount_amount * 100) / 100,
    };

    DistributorDetailsUtils.addInvoiceRecovery(
      this.distributorService,
      payload
    ).subscribe({
      next: (res) => {
        this.paymentLoading = false;
        console.log('Payment added successfully:', res);
        this.toastService.showToaster({
          title: 'Success:',
          message: 'Payment added successfully.',
          type: 'success',
        });
        this.cdr.detectChanges();

        // Use setTimeout to ensure toast is shown before closing modal
        setTimeout(() => {
          this.closePaymentModal();        
          if (this.distributorId) {
            this.getInvoices();
          }
        }, 100);
      },
      error: (error) => {
        this.paymentLoading = false;
        console.error('Error adding payment:', error);
        this.toastService.showToaster({
          title: 'Error:',
          message:
            error?.error?.message ||
            'Error adding payment. Please try again later.',
          type: 'error',
        });
        this.cdr.detectChanges();
      },
      
    });
  }
  getOrderDetail(id: number): void {
    this.orderDetailLoading = true;
    this.primaryOrderService.getOderDetailById(id).subscribe(
      (res) => {
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
          this.order.orderContent =
            this.primaryOrderService.getPrimaryOrderItem([...res.data.content]);

          this.orderDetailLoading = false;
          this.cdr.detectChanges();
        }
      },
      (error) => {
        this.orderDetailLoading = false;
        this.cdr.detectChanges();
      }
    );
  }

  closeOrderDetailModal(): void {
    this.showOrderDetailModal = false;
    document.body.classList.remove('no-scroll');
  }
}
