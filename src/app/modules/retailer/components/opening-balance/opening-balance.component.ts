import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from '../../../../core/services/toaster.service';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { GeneralDataService } from '../../../shared/services';
import { RetailerService } from '../../services/retailer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-opening-balance',
    templateUrl: './opening-balance.component.html',
    styleUrls: ['./opening-balance.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class OpeningBalanceComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    loading: boolean;
    submitted: boolean;

    distributorId: number;

    orderBookers: Array<any> = [];
    routes: Array<any> = [];
    retailers: Array<any> = [];
    selectedRetailers: Array<any> = [];

    selectedOrderBooker: any;
    selectedRoute: any;
    selectedRetailer: any;

    constructor(
        private generalDataService: GeneralDataService,
        private toastService: ToasterService,
        private storageService: LocalStorageService,
        private retailerService: RetailerService,
    ) {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.distributorId = this.storageService.getItem('distributor').id;

    }

    ngOnInit(): void {
        this.getAllOrderBookers();
    }

    getAllOrderBookers(): void {
        this.generalDataService.getOrderBookers(this.distributorId).subscribe(res => {
            if (res.status === 200) {
                this.orderBookers = res.data;
            } else {
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Order Bookers cannot be fetched at the moment. Please try again later!',
                    type: 'error'
                });
            }
        });
    }

    getBookerRoutes(): void {
        this.generalDataService.getOrderBookerRoutes(this.selectedOrderBooker.employee_id).subscribe(res => {
            if (res.status === 200) {
                this.routes = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Order Booker Routes cannot be fetched at the moment. Please try again later!',
                    type: 'error'
                });
            }
        });
    }

    getRetailersByRoute(): void {
        this.loading = true;
        this.generalDataService.getRetailersByRoute(this.selectedRoute.id).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.retailers = res.data;
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'Retailers cannot be fetched at the moment. Please try again later!',
                    type: 'error'
                });
            }
        });
    }

    addRetailer(retailer: any): void {
        this.selectedRetailers = this.selectedRetailers.filter(ret => ret.id !== retailer.id);
        this.selectedRetailers.push(retailer);
    }

    removeRetailerFromList(retailer: any): void {
        this.selectedRetailers = this.selectedRetailers.filter(ret => ret.id !== retailer.id);
    }

    isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
        if (event.key && event.key.includes('Arrow') || event.key.includes('Backspace') || event.key.includes('Delete') ||
            (type === 'charges' && event.key.includes('.'))) {
            return true;
        } else if (event.key && event.key.trim() === '') {
            return false;
        }
        return !isNaN(Number(event.key.trim()));
    }

    setOpeningBalance(): void {
        if (this.selectedRetailers.length) {
            this.submitted = true;
            const data = this.selectedRetailers.map(ret => {
                const payload = {
                    retailer_id: ret.id,
                    retailer_balance: +ret.openingBalance,
                    description: 'Opening Balance',
                    employee_id: this.selectedOrderBooker.employee_id
                };
                return payload;
            });
            this.retailerService.addOpeningBalance(data).subscribe(res => {
                this.submitted = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        title: 'Balance Added',
                        message: 'Selected Retailers opening balance added successfully!',
                        type: 'success'
                    });
                    this.selectedRetailers = [];
                    this.getRetailersByRoute();
                }
            }, error => {
                this.submitted = false;
                if (error.status !== 1 && error.status !== 401) {
                    this.toastService.showToaster({
                        title: 'Error:',
                        message: 'Opening balance cannot be added right now. Please try again later!',
                        type: 'error'
                    });
                }
            });
        } else {
            this.toastService.showToaster({
                title: 'Error:',
                message: 'Please add balance and try again!',
                type: 'error'
            });
        }

    }
}
