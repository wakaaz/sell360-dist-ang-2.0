import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

import { ToasterService } from 'src/app/core/services/toaster.service';
import { ReportsService } from '../../services/reports.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

    selector: 'app-purchase-history',
    templateUrl: './purchase-history.component.html',
    styleUrls: ['./purchase-history.component.css'],
  standalone: false


})

export class PurchaseHisotryComponent implements OnInit {

    private gridApi!: GridApi;
    purchasesHistory: Array<any> = [];
    loading: boolean;

    columnDefs: ColDef[] = [
        { field: 'poDate', headerName: 'Purchase Date', sortable: true, filter: true, flex: 1 },
        { field: 'receivedNo', headerName: 'Received No.', sortable: true, filter: true, flex: 1 },
        { field: 'invoiceNo', headerName: 'Inv. No.', sortable: true, filter: true, flex: 1 },
        { field: 'poNo', headerName: 'P.O No.', sortable: true, filter: true, flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            cellRenderer: (params: any) => {
                const history = params.data;
                return `
                    <button onclick="window.viewDetails('${history.id}')" 
                            class="bg-transparent h-auto leading-none py-[4px] px-[5px] text-primary text-[11px] border border-primary hover:bg-primary hover:text-white font-primary rounded-[5px] mb-1 ml-0.5" 
                            title="Details">Details</button>
                `;
            },
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
            },
            width: 120,
            sortable: false,
            filter: false,
            pinned: 'right'
        }
    ];

    defaultColDef: ColDef = {
        resizable: true,
        sortable: true,
        filter: true,
        // Enable quick filter for all columns
        getQuickFilterText: (params) => {
            return params.value?.toString() || '';
        }
    };

    constructor(
        private reportService: ReportsService,
        private toastService: ToasterService,
        private router: Router,
    ) {
    }

    ngOnInit(): void {
        this.purchasesHistory = [];
        this.getPurchasesHistory();
        this.setupGlobalFunctions();
    }

    setupGlobalFunctions(): void {
        (window as any).viewDetails = (id: string) => {
            this.router.navigate(['/reports/purchase', id]);
        };
    }

    onGridReady(params: GridReadyEvent): void {
        this.gridApi = params.api;
        // Enable quick filter on grid ready
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', '');
        }
    }

    onQuickFilterChanged(event: any): void {
        const filterValue = event.target?.value || '';
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', filterValue);
        } else {
            // If gridApi is not ready yet, try again after a short delay
            setTimeout(() => {
                if (this.gridApi) {
                    this.gridApi.setGridOption('quickFilterText', filterValue);
                }
            }, 100);
        }
    }

    getPurchasesHistory(): void {
        this.loading = true;
        this.reportService.getDistributorPurchaseHistory().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                const historyData = res.data;
                this.purchasesHistory = historyData.map(history => {
                    const payload = JSON.parse(history.payload);
                    return {
                        id: history.id,
                        poDate: payload.poDate,
                        receivedNo: payload.receivedNo,
                        invoiceNo: payload.invoiceNo,
                        poNo: payload.poNo
                    };
                });
            }

        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    type: 'error',
                    message: 'Something went wrong please try again'
                });
            }
        });
    }

}
