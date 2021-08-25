import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-orders-list',
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class OrdersListComponent implements OnInit {
    selectedOrderBooker: number;
    showDetailsPopup: boolean;
    byOrderBooker: boolean;
    loading: boolean;
    orderBookers: Array<any> = [];
    salesMen: Array<any> = [];
    orders: Array<any> = [];
    dtOptions: DataTables.Settings = {};

    constructor(
        private ordersService: OrdersService,
        private toastService: ToasterService,
    ) {
    }

    ngOnInit(): void {
        this.byOrderBooker = true;
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };

        this.getNewOrders();
    }

    getAllSalesMen(): void {
    }

    getNewOrders(): void {
        this.loading = true;
        this.ordersService.getNewOrders().subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.orders = res.data;
            }
        }, error => {
            this.loading = false;
            if (error.status !== 401 && error.status !== 1) {
                this.toastService.showToaster({
                    title: 'Error:',
                    message: 'New Orders not fetched, try again later.',
                    type: 'error'
                });
            }
            scrollTo(0, 0);
        });
    }

    openDetailsModal(order: any): void {
        document.body.classList.add('no-scroll');
    }

    closeDetailsModal(): void {
        document.body.classList.remove('no-scroll');
    }

}
