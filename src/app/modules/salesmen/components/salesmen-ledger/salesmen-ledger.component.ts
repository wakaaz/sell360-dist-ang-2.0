import { SalesmenService } from './../../services/salesmen.service';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

  selector: 'app-salesmen-ledger',
  templateUrl: 'salesmen-ledger.component.html',
  styleUrls: ['./salesmen-ledger.component.css'],
  standalone: false


})
export class SalesmenLedgerComponent implements OnInit {
  private gridApi!: GridApi;
  
  // AG Grid column definitions
  columnDefs: ColDef[] = [
    { field: 'date', headerName: 'Date', sortable: true, filter: true, width: 150 },
    { 
      field: 'net_sale', 
      headerName: 'Net Sale', 
      sortable: true, 
      filter: true, 
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) return '';
        return 'Rs. ' + params.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    },
    { 
      field: 'cash_payable', 
      headerName: 'Cash Payable', 
      sortable: true, 
      filter: true, 
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) return '';
        return 'Rs. ' + params.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    },
    { 
      field: 'cash_received', 
      headerName: 'Cash Received', 
      sortable: true, 
      filter: true, 
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) return '';
        return 'Rs. ' + params.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    },
    { 
      field: 'balance', 
      headerName: 'Balance', 
      sortable: true, 
      filter: true, 
      width: 150,
      valueFormatter: (params) => {
        if (params.value == null) return '';
        return 'Rs. ' + params.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true
  };

  salesmen = [];
  ledger = [];
  loading = false;
  constructor(private smService: SalesmenService) {
    this.getSalesmen();
  }

  smSelected = null;
  salesman = {
    id: null,
    salary: 0,
    balance: 0,
    amount: 0,
  };

  month: Date | string | null = null;

  amountDue = 0;

  getSalesmen() {
    this.loading = true;
    this.smService.getAllSalesMen().subscribe((x) => {
      this.salesmen = x.data;
      this.loading = false;
    });
  }

  smChanged() {
    this.salesman = this.salesmen.find((s) => s.id == this.smSelected);
  }

  ngOnInit(): void {
    // AG Grid is initialized via columnDefs
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

  getLedger() {
    if (!this.month || !this.salesman.id) {
      return;
    }
    
    this.loading = true;
    
    // Handle date picker value - it can be a Date object or string
    let monthStr: string;
    if (this.month instanceof Date) {
      const year = this.month.getFullYear();
      const month = (this.month.getMonth() + 1).toString().padStart(2, '0');
      monthStr = `${year}-${month}`;
    } else {
      monthStr = this.month;
    }
    
    const monthParts = monthStr.split('-');
    this.smService
      .getSalesmanLedger(
        this.salesman.id,
        monthParts[1],
        monthParts[0]
      )
      .subscribe(
        (x) => {
          this.ledger = x;
          this.loading = false;
          this.salesman.balance = Math.round(
            this.ledger
              .map((x) => parseFloat(x.balance))
              .reduce((partial_sum, a) => partial_sum + a, 0)
          );
          if (this.salesman.balance < 0)
            this.salesman.balance = Math.abs(this.salesman.balance);

          // if (this.salesman.salary > this.salesman.balance)
          //   this.amountDue = this.salesman.salary - (this.salesman.balance < 0 ? this.salesman.balance : this.salesman.balance);
          // else
          //   this.amountDue = this.salesman.balance - this.salesman.salary;

          this.amountDue = this.salesman.salary - this.salesman.balance;
        },
        (error) => {
          this.loading = false;
        }
      );
  }
}
