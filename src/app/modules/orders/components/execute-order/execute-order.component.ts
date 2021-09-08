import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-execute-order',
    templateUrl: 'execute-order.component.html',
    styleUrls: ['./execute-order.component.css']
})

export class ExecuteOrderComponent implements OnInit {

    dtOPtions: DataTables.Settings = {};

    loading: boolean;
    savingOrder: boolean;
    showProducts: boolean;
    currentTab: number;

    orderDate: string;

    salemanId: number;

    orderDetails: any = {};
    selectedRetailer: any;
    merchantDiscount: any;
    newProduct: any;
    dispatchSummary: any;
    retailersList: Array<any> = [];
    schemes: Array<any> = [];
    inventory: Array<any> = [];
    allProducts: Array<any> = [];
    specialDiscounts: Array<any> = [];
    discountSlabs: Array<any> = [];

    @Output() cancel: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrdersService,
        private toastService: ToasterService,
    ) {
    }

    ngOnInit(): void {
        this.currentTab = 1;
        this.dtOPtions = {
            pagingType: 'simple_numbers',
        };
        this.getSchemesData();
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId');
        this.orderDate = this.route.snapshot.paramMap.get('date');
        if (!this.salemanId || !this.orderDate) {
            this.router.navigateByUrl('/orders/execution-list');
        } else {
            this.getOrdersBySalemanAndDate();
        }
    }

    getSchemesData(): void {
        this.orderService.getSchemes().subscribe(res => {
            if (res.status === 200) {
                this.schemes = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!'
                });
            }
        });
    }

    getOrdersBySalemanAndDate(): void {
        this.loading = true;
        this.orderService.getExectedOrdersListing(this.salemanId, this.orderDate).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.retailersList = res.data.retailers;
                this.allProducts = res.data.all_products;
                this.inventory = res.data.executed_products;
                this.specialDiscounts = res.data.special_discount;
                this.dispatchSummary = res.data.summary;
            } else {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!'
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Order details not fetched, please try again later!'
                });
            }
        });
    }

    getOrderDetailsByRetailer(retailer: any): void {
        if (this.selectedRetailer?.id !== retailer.id) {
            this.selectedRetailer = retailer;
            this.orderService.getOrderDetails(retailer.id).subscribe(res => {
                if (res.status === 200) {
                    this.orderDetails = res.data;
                    this.orderDetails.items = this.orderDetails.items.map(prod => {
                        const product = this.inventory.find(x => x.item_id === prod.item_id);
                        prod.parent_trade_price = JSON.parse(JSON.stringify(product.parent_trade_price));
                        prod.parent_unit_id = JSON.parse(JSON.stringify(product.parent_unit_id));
                        prod.parent_quantity = JSON.parse(JSON.stringify(product.quantity));
                        prod.child = JSON.parse(JSON.stringify(product.child));
                        prod.item_retail_price = JSON.parse(JSON.stringify(product.item_retail_price));
                        prod.extra_discount = JSON.parse(JSON.stringify(prod.booker_discount));
                        prod.tax_class_amount = JSON.parse(JSON.stringify(product.tax_class_amount));
                        prod.tax_class_id = JSON.parse(JSON.stringify(product.tax_class_id));
                        prod.tax_class_type = JSON.parse(JSON.stringify(product.tax_class_type));
                        prod.pref_id = JSON.parse(JSON.stringify(product.pref_id));
                        prod.unit_id = JSON.parse(JSON.stringify(product.unit_id));
                        prod.unit_name = JSON.parse(JSON.stringify(product.unit_name));
                        prod.brand_id = JSON.parse(JSON.stringify(product.brand_id));
                        prod.is_active = JSON.parse(JSON.stringify(product.is_active));
                        prod.item_trade_price = JSON.parse(JSON.stringify(product.item_trade_price));

                        prod.stockQty = JSON.parse(JSON.stringify(prod.dispatch_qty));
                        prod.net_amount = JSON.parse(JSON.stringify(prod.final_price));
                        prod.gross_amount = prod.unit_price_after_scheme_discount * prod.stockQty;
                        prod.extra_discount_pkr = prod.stockQty * prod.extra_discount;
                        prod.original_amount = prod.item_trade_price * prod.stockQty;
                        prod.special_discount_pkr = prod.special_discount;
                        prod.trade_discount = JSON.parse(JSON.stringify(prod.merchant_discount));
                        prod.trade_discount_pkr = JSON.parse(JSON.stringify(prod.merchant_discount_pkr));
                        prod.tax_amount_pkr = JSON.parse(JSON.stringify(prod.total_tax_amount || 0));
                        prod.selectedScheme = this.schemes.find(scheme => scheme.id === prod.scheme_id);
                        return prod;
                    });
                }
            }, error => {
                this.loading = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast: Toaster = { type: 'error', message: 'Cannot fetch Order Detail. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
            this.getDiscountSlabs();
        }
    }

    getDiscountSlabs(): void {
        if (!this.discountSlabs.length) {
            this.orderService.getDiscountSlabs().subscribe(res => {
                if (res.status === 200) {
                    this.discountSlabs = res.data;
                    this.setMerchantDiscount();
                }
            }, error => {
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast: Toaster = { type: 'error', message: 'Cannot fetch Merchant Discounts. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
        } else {
            this.setMerchantDiscount();
        }
    }

    setMerchantDiscount(): void {
        this.merchantDiscount = this.discountSlabs.find(x => x.region_id === this.selectedRetailer.region_id &&
            this.selectedRetailer.segment_id === x.segment_id && x.channel_id === this.selectedRetailer.retailer_type_id);
    }

    openProductsList(): void {
        this.showProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('order-container').classList.add('blur-div');
    }

    closeNewProducts(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('order-container').classList.remove('blur-div');
    }

    changeTab(selectedTab: number): void {
        this.currentTab = selectedTab;
    }

}
