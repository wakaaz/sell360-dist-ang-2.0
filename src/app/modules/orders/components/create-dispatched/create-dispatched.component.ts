import { Component, OnInit } from '@angular/core';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-create-dispatched',
    templateUrl: 'create-dispatched.component.html',
    styleUrls: ['./create-dispatched.component.css']
})

export class CreateDispatchedComponent implements OnInit {
    dtOptions: DataTables.Settings = {};

    loading: boolean;

    ordersList: Array<any> = [];

    constructor(
        private toastService: ToasterService,
        private orderService: OrdersService,
    ) {
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
}
