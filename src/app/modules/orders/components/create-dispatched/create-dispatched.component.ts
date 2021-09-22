import { Component, OnInit } from '@angular/core';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { environment } from 'src/environments/environment';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-create-dispatched',
    templateUrl: 'create-dispatched.component.html',
    styleUrls: ['./create-dispatched.component.css']
})

export class CreateDispatchedComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    bookingSheetUrl: string;

    loading: boolean;

    ordersList: Array<any> = [];

    constructor(
        private toastService: ToasterService,
        private orderService: OrdersService,
    ) {
        this.bookingSheetUrl = `${environment.apiDomain}${API_URLS.BOOKING_SHEET_PDF}`;
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.getDispatchOrderListing();
    }

    getDispatchOrderListing(): void {
        this.loading = true;
        this.orderService.getDispatchOrdersListing().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersList = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = {
                    type: 'error',
                    message: 'Dispatch Order list cannot be fetched at the moment! Please try again',
                    title: 'Error:'
                };
                this.toastService.showToaster(toast);
            }
        });
    }

    loadBookingSheet(order: any): void {
        const sheetUrl = `${this.bookingSheetUrl}?emp=${order.sales_man_id}&date=${order.date}&assignmentId=${order.assignment_id}`;
        window.open(sheetUrl);
    }
}
