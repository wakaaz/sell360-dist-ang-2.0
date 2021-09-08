import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService, Toaster } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-orderexecution-list',
    templateUrl: 'execution-list.component.html',
    styleUrls: ['./execution-list.component.css']
})

export class OrderExecutionListComponent implements OnInit {

    dtOptions: DataTables.Settings = {};

    showExecuteOrder: boolean;
    loading: boolean;

    ordersList: Array<any> = [];

    constructor(
        private router: Router,
        private orderService: OrdersService,
        private toastServicer: ToasterService,
    ) {
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
                const toast: Toaster = {type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:'};
                this.toastServicer.showToaster(toast);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Cannot fetch orders list for execution :>> ', error.messge);
                const toast: Toaster = {type: 'error', message: 'Cannot fetch orders list, please try again later!', title: 'Error:'};
                this.toastServicer.showToaster(toast);
            }
        });
    }

}
