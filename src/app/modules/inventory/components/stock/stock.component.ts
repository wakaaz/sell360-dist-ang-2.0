import { Component, OnInit } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'app-distributor-stock',
    templateUrl: 'stock.component.html',
    styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    loading: boolean;
    historyLoading: boolean;
    showHistory: boolean;
    productsStock: Array<any> = [];
    historyFilter: string;
    historyDateFrom: string;
    historyDateTo: string;
    selectedProductId: number;
    timer: any;

    stockHistory: Array<any> = [];

    constructor(
        private inventoryService: InventoryService,
        private toasterService: ToasterService,
    ) {
    }

    ngOnInit(): void {
        this.historyFilter = 'monthly';
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getProductsWithStock();
    }

    getProductsWithStock(): void {
        this.loading = true;
        this.inventoryService.getProductsWithStock().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.productsStock = res.data;
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = {
                    title: 'Error:',
                    message: 'Something went wrong while getting stock please try again!',
                    type: 'error'
                };
                this.toasterService.showToaster(toast);
            }
        });
    }

    getHistory(itemId: number, event: Event): void {
        event.stopPropagation();
        this.selectedProductId = itemId;
        this.showHistory = true;
        this.historyDateFrom = new Date().toISOString().split('T')[0];
        this.getStockHistory();
        document.getElementById('open-history').click();
    }

    dateChanged(): void {
        this.resetTimer();
        if (((this.historyFilter === 'monthly' || this.historyFilter === 'daily') && this.historyDateFrom) ||
        (this.historyFilter === 'range' && this.historyDateFrom && this.historyDateTo)) {
            this.getStockHistory();
        }
    }

    getStockHistory(): void {
        if (!this.timer) {
            let value = '';
            this.stockHistory = null;
            this.historyLoading = true;
            if (this.historyFilter === 'monthly') {
                value = `month=${new Date(this.historyDateFrom).getMonth() + 1}&year=${new Date(this.historyDateFrom).getFullYear()}`;
            } else if (this.historyFilter === 'daily') {
                value = `date=${this.historyDateFrom}`;
            } else {
                value = `to=${this.historyDateFrom}&to=${this.historyDateTo}`;
            }
            this.timer = setTimeout(() => {
                this.inventoryService.getProductStockHistory(this.selectedProductId, this.historyFilter, value).subscribe(res => {
                    this.historyLoading = false;
                    if (res.status === 200) {
                        this.stockHistory = res.data.history;
                    }
                    this.resetTimer();
                }, error => {
                    this.historyLoading = false;
                    this.resetTimer();
                    if (error.status !== 1 && error.status !== 401) {
                        const toast: Toaster = {
                            title: 'Error:',
                            message: 'Something went wrong while getting stock history please try again!',
                            type: 'error'
                        };
                        this.toasterService.showToaster(toast);
                    }
                });
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

    closeHistory(): void {
        if (this.showHistory) {
            this.showHistory = false;
            this.historyFilter = 'monthly';
            this.historyDateTo = '';
            this.historyDateFrom = '';
        }
    }

}
