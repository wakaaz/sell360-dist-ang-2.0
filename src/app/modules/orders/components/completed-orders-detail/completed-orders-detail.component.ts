import { LocalStorageService } from './../../../../core/services/storage.service';
import { environment } from 'src/environments/environment';
import { OrdersService } from './../../services/orders.service';
import { ReportsService } from './../../../reports/services/reports.service';
import { ToasterService } from './../../../../core/services/toaster.service';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-completed-orders-detail',
  templateUrl: './completed-orders-detail.component.html',
  styleUrls: ['./completed-orders-detail.component.css'],
  standalone: false
})
export class CompletedOrdersDetailComponent implements OnInit {

  private gridApi!: GridApi;

  loading = false;
  dateValue = new Date();
  loadsheets = [];

  get date(): string {
    const year = this.dateValue.getFullYear();
    const month = (this.dateValue.getMonth() + 1).toString().padStart(2, '0');
    const day = this.dateValue.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Load ID', sortable: true, filter: true, width: 120 },
    { field: 'salesman', headerName: 'Salesman', sortable: true, filter: true, flex: 1 },
    {
      field: 'total_net_sale',
      headerName: 'Sales Amount',
      sortable: true,
      filter: true,
      width: 150,
      valueFormatter: (params) => {
        if (!params.value) return '';
        return 'Rs. ' + params.value.toFixed(2);
      }
    },
    {
      field: 'actions',
      headerName: 'Action',
      cellRenderer: (params: any) => {
        const sheet = params.data;
        return `
          <div class="flex gap-1">
            <button onclick="window.loadSheetClick('${sheet.id}', '${sheet.salesman_id}', '${sheet.date}')" 
                    class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Load Sheet">Load Sheet</button>
            <button onclick="window.billsClick('${sheet.id}', '${sheet.salesman_id}', '${sheet.date}')" 
                    class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="Bills">Bills</button>
            <button onclick="window.dsrClick('${sheet.dsrId}')" 
                    class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" title="DSR">DSR</button>
          </div>
        `;
      },
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
      },
      width: 300,
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
    private ordersService: OrdersService,
    private toastService: ToasterService,
    private ls: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.setupGlobalFunctions();
  }

  setupGlobalFunctions(): void {
    (window as any).loadSheetClick = (loadId: string, salesManId: string, date: string) => {
      this.routeToPdf('ls', { id: loadId, salesman_id: salesManId, date: date });
    };

    (window as any).billsClick = (loadId: string, salesManId: string, date: string) => {
      this.routeToPdf('bills', { id: loadId, salesman_id: salesManId, date: date });
    };

    (window as any).dsrClick = (dsrId: string) => {
      this.routeToPdf('dsr', { dsrId: dsrId });
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

  routeToPdf(mod, sheet) {
    if (mod == 'ls')
      window.open(
        `${environment.apiDomain}/LoadSheetDataPdf/${sheet.id}/${sheet.salesman_id}/${sheet.date}`,
        '_blank'
      );
    else if (mod == 'bs')
      window.open(
        `${environment.apiDomain}/BookingSheetPdf?emp=${sheet.salesman_id}&date=${sheet.date}&loadId=${sheet.id}`,
        '_blank'
      );
    else if (mod == 'bills')
      window.open(
        `${environment.apiDomain}/GetAllBillsDetail?type=bill&emp=${
          sheet.salesman_id
        }&date=${sheet.date}&dist_id=${
          this.ls.getItem('distributor').id
        }&size=A4&status=processed&loadId=${sheet.id}`,
        '_blank'
      );
    else if (mod == 'dsr')
      window.open(
        `${environment.apiDomain}/pdfDSRNew/${sheet.dsrId}`,
        '_blank'
      );
  }

  onDateChange(date: Date | null): void {
    if (date) {
      this.dateValue = date;
      this.getData();
    }
  }

  getData() {
    this.loading = true;

    this.ordersService
      .getCompletedOrdersLoadsheets(this.date)
      .subscribe((res) => {
        this.loadsheets = res;
        this.loading = false;
      });
  }
}
