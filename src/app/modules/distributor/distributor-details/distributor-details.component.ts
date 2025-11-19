import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { DistributorService } from '../services/distributor.service';
import {
  DistributorDetailsUtils,
  IDistributorDetailsResponse,
  IDistributorInvoice,
  IDistributor,
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
      filter: true,
      width: 120,
    },
    {
      field: 'invoice_amount',
      headerName: 'Invoice Amount',
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
      field: 'paid_amount',
      headerName: 'Paid Amount',
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
      field: 'amount_due',
      headerName: 'Amount Due',
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
      field: 'aging',
      headerName: 'Aging (Days)',
      sortable: true,
      filter: true,
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const invoice = params.data;
        const orderId = invoice.order_id;
        return `
          <button onclick="window.viewInvoiceDetail('${orderId}')" 
                  class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" 
                  title="View">View</button>
        `;
      },
      
      width: 120,
      sortable: true,
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

  constructor(
    private route: ActivatedRoute,
    private toastService: ToasterService,
    private distributorService: DistributorService
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
      }
    );
  }
}
