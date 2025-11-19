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
        `;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
      },
      width: 120,
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
