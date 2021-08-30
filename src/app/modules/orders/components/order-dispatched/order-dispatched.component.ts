import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralDataService } from 'src/app/modules/shared/services';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-dispatch-order',
    templateUrl: 'order-dispatched.component.html',
    styleUrls: ['./order-dispatched.component.css'],
})

export class OrderDispatchedComponent implements OnInit {

    loading: boolean;
    loadingProduct: boolean;
    showProducts: boolean;

    salemanId: number;
    orderDate: string;

    orderDetails: any = {};

    inventory: Array<any> = [];
    ordersRetailers: Array<any> = [];
    specialDiscounts: Array<any> = [];
    schemes: Array<any> = [];
    discountSlabs: Array<any> = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private toastService: ToasterService,
        private generalDataService: GeneralDataService,
        private orderService: OrdersService,
    ) {
    }

    ngOnInit(): void {
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId') || null;
        this.orderDate = this.route.snapshot.paramMap.get('date');
        if (!this.salemanId || !this.orderDate) {
            this.router.navigateByUrl('/orders/dispatch-orders');
            const toast: Toaster = { type: 'error', message: 'No order selected to dispatch!', title: 'Error:' };
            this.toastService.showToaster(toast);
        } else {
            this.getDispatchDetails();
            this.getProducts();
            this.getSchemes();
        }
    }

    getDispatchDetails(): void {
        this.loading = true;
        this.orderService.getDispatchDetailBySalemanAndDate(this.salemanId, this.orderDate).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.ordersRetailers = res.data.retailers.map(ret => {
                    ret.isActive = false;
                    return ret;
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while getting orders data :>> ', error.message);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch Orders. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getProducts(): void {
        this.loadingProduct = true;
        this.orderService.getCounterSaleData().subscribe(res => {
            this.loadingProduct = false;
            if (res.status === 200) {
                this.inventory = res.data.inventory;
                this.specialDiscounts = res.data.special_discount;
            }
        }, error => {
            this.loadingProduct = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while getting products data :>> ', error.message);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch Products. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getSchemes(): void {
        this.orderService.getSchemes().subscribe(res => {
            if (res.status === 200) {
                this.schemes = res.data;
            } else {
                const toast: Toaster = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = { type: 'error', message: 'Cannot fetch Trade Offers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getOrderDetailsByRetailer(retailer: any): void {
        this.orderService.getViewOrderDetailById(retailer.id).subscribe(res => {
            if (res.status === 200) {
                this.orderDetails = res.data;
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while getting order detail data :>> ', error.message);
                const toast: Toaster = { type: 'error', message: 'Cannot fetch Order Detail. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    openProductsList(): void {
        this.showProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('order-contaienr').classList.add('blur-div');
    }

    closeNewProducts(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('order-contaienr').classList.remove('blur-div');
    }
}
