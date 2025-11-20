import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { DistributorService } from '../../services/distributor.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false


})
export class ListComponent implements OnInit {
  private gridApi!: GridApi;
  
  // AG Grid column definitions
  columnDefs: ColDef[] = [
    { field: 'distributor_name', headerName: 'Name', sortable: true, filter: true, flex: 1 },
    { field: 'tsm', headerName: 'TSM', sortable: true, filter: true, width: 120 },
    { field: 'region_name', headerName: 'Region', sortable: true, filter: true, flex: 1 },
    { field: 'area_name', headerName: 'Area', sortable: true, filter: true, flex: 1 },
    { field: 'territory_name', headerName: 'Territory', sortable: true, filter: true, flex: 1 },
    { field: 'city_name', headerName: 'City', sortable: true, filter: true, flex: 1 },
    { field: 'distributor_address', headerName: 'Address', sortable: true, filter: true, flex: 2 },
    {
      field: 'action',
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const distributor = params.data;
        const distributorId = distributor.id || distributor.distributor_id || distributor.distributorId;
        return `
          <button onclick="window.distributorDetailClick('${distributorId}')" 
                  class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" 
                  title="Detail">Detail</button>

          ${distributor.opening_balance === 0 ? `<button onclick="window.openOpeningBalanceModal('${distributorId}')" 
                  class="bg-gradient-to-r from-[#1e54d3] to-[#0038ba] h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-primary font-primary rounded-[5px] ml-0.5 inline-block" 
                  title="Opening Balance">Opening Balance</button>
          ` : ''}
        `;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
      },
      width: 200,
      sortable: true,
      filter: false,
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  loading: boolean;
  distributors = [];
  currentYear: number = new Date().getFullYear();
  showOpeningBalanceModal: boolean = false;
  selectedDistributorId: string | null = null;
  amountType: string = 'debit'; // 'debit' or 'credit'
  amount: number | null = null;
  amountInput: string = ''; // String input for the form field
  constructor(
    private distributorService: DistributorService,
    private toastService: ToasterService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getDistributorListing();
    this.setupGlobalFunctions();
    // retailer core api call
    // this.distributorService.getDistributorListing().subscribe((data) => {
    //   this.distributorCore = data;
    // });
  }

  setupGlobalFunctions(): void {
    (window as any).distributorDetailClick = (id: string) => {
      console.log('id: ', id);
      this.router.navigate(
        ['/distributors/distributor-details'],
        { queryParams: { id } }
      );
    };
    (window as any).openOpeningBalanceModal = (id: string) => {
      this.openOpeningBalanceModal(id);
    };
  }

  openOpeningBalanceModal(id: string): void {
    this.selectedDistributorId = id;
    this.showOpeningBalanceModal = true;
    this.amountType = 'debit'; // Reset to default
    this.amount = null; // Reset amount
    this.amountInput = ''; // Reset amount input
    document.body.classList.add('no-scroll');
    console.log('this.distributors: ', this.distributors);
  }

  closeOpeningBalanceModal(): void {
    this.showOpeningBalanceModal = false;
    this.selectedDistributorId = null;
    this.amountType = 'debit';
    this.amount = null;
    this.amountInput = '';
    document.body.classList.remove('no-scroll');
  }

  onAmountChange(value: string): void {
    if (value === '' || value === null || value === undefined) {
      this.amount = null;
      return;
    }
    const numValue = parseFloat(value);
    this.amount = isNaN(numValue) ? null : numValue;
  }

  addOpeningBalance(): void {
    
    
    // If amount is null but amountInput has a value, try to convert it
    if (this.amount === null && this.amountInput) {
      this.onAmountChange(this.amountInput);
    }
    
    if (!this.amount || this.amount <= 0) {
      this.toastService.showToaster({
        title: 'Error',
        message: 'Please enter a valid amount.',
        type: 'error',
      });
      return;
    }

    if (!this.selectedDistributorId) {
      this.toastService.showToaster({
        title: 'Error',
        message: 'Distributor ID is missing.',
        type: 'error',
      });
      return;
    }

    const distributor = this.distributors.find(
      (dist: any) => 
        (dist.id || dist.distributor_id || dist.distributorId)?.toString() === this.selectedDistributorId?.toString()
    );

    if (!distributor) {
      this.toastService.showToaster({
        title: 'Error',
        message: 'Distributor not found.',
        type: 'error',
      });
      return;
    }

    // Get distributor_id from the distributor object
    const distributorId = distributor.id || distributor.distributor_id || distributor.distributorId;
    
    // Get parent_id from the distributor object
    const parentDistributorId = distributor.parent_id;

    if (!distributorId) {
      this.toastService.showToaster({
        title: 'Error',
        message: 'Distributor ID is invalid.',
        type: 'error',
      });
      return;
    }

    if (!parentDistributorId) {
      this.toastService.showToaster({
        title: 'Error',
        message: 'Parent distributor ID is missing.',
        type: 'error',
      });
      return;
    }

    // Build the payload
    const payload = {
      distributor_id: distributorId,
      new_balance_amount: this.amount,
      parent_distributor_id: parentDistributorId,
      balance_type: this.amountType
    };

    // Call the API
    this.distributorService.addOpeningBalance(payload).subscribe(
      (res) => {
        this.toastService.showToaster({
          title: 'Success',
          message: 'Opening balance added successfully.',
          type: 'success',
        });
        this.closeOpeningBalanceModal();
        // Refresh the distributor list
        this.getDistributorListing();
      },
      (error) => {
        this.toastService.showToaster({
          title: 'Error',
          message: error?.error?.message || 'Failed to add opening balance. Please try again.',
          type: 'error',
        });
      }
    );
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
  getDistributorListing() {
    this.loading = true;
    this.distributorService.getDistributorListing().subscribe(
      (res) => {
        this.loading = false;
        this.distributors = res.data;
      },
      (error) => {
        this.loading = false;
        this.distributors = [];
        if (error.status !== 401 && error.status !== 1) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Retailers not fetched, try again later.',
            type: 'error',
          });
        }
      }
    );
  }
  
}
