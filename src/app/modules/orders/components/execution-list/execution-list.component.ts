import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';
import { ToasterService, Toaster } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({

    selector: 'app-orderexecution-list',
    templateUrl: 'execution-list.component.html',
    styleUrls: ['./execution-list.component.css'],
  standalone: false


})

export class OrderExecutionListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};

    bookingSheetUrl: string;
    showExecuteOrder: boolean;
    loading: boolean;
    selectedLoadId: number;
    distributorId: number;

    ordersList: Array<any> = [];

    constructor(
        private router: Router,
        private orderService: OrdersService,
        private toastServicer: ToasterService,
        private storageService: LocalStorageService,
    ) {
        this.bookingSheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}`;
        this.distributorId = storageService.getItem('distributor').id;
    }

    ngOnInit(): void {
        this.showExecuteOrder = false;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getExecutionList();
    }

    getExecutionList(): void {
        this.loading = true;
        this.orderService.getExecutionList().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersList = res.data;
            } else {
                console.log('Error when fetching orders :>> ', res.message);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Cannot fetch orders list for execution :>> ', error.messge);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:' };
                this.toastServicer.showToaster(toast);
            }
        });
    }

    loadBookingSheet(order: any): void {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&loadId=${order.load_id}`;
        window.open(sheetUrl);
    }

    loadLoadSheet(order: any): void {
        const sheetUrl = `${environment.apiDomain}${API_URLS.LS_PDF}/${order.load_id}/${order.sales_man_id}/${order.date}`;
        window.open(sheetUrl);
    }

    loadBills(order: any): void {
        const billsUrl = `${environment.apiDomain}${API_URLS.BILLS}?type=bill&emp=${order.sales_man_id}&date=${order.date}&dist_id=${this.distributorId}&size=A4&status=processed&loadId=${order.load_id}`;
        window.open(billsUrl);
    }

    revertOrder(): void {
      this.loading = true;
      document.getElementById('close-revert').click();
      this.orderService.revertOrder('load', this.selectedLoadId).subscribe(res => {
        this.loading = false;
        if (res.status === 200) {
          this.toastServicer.showToaster({
            title: 'Revet Success:',
            message: 'The order reverted successfully!',
            type: 'success'
          });
          this.router.navigateByUrl('/orders');
        } else {
          this.toastServicer.showToaster({
            title: 'Revet Error:',
            message: 'The order cannot be reverted at the momnent, please try again later.',
            type: 'error'
          });
        }
      }, error => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastServicer.showToaster({
            title: 'Revet Error:',
            message: 'The order cannot be reverted at the momnent, please try again later.',
            type: 'error'
          });
        }
      });
    }

}
