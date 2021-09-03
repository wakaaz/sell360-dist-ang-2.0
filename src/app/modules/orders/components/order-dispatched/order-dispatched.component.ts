import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, GeneralDataService } from '../../../shared/services';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { OrdersService } from '../../services/orders.service';

@Component({
    selector: 'app-dispatch-order',
    templateUrl: 'order-dispatched.component.html',
    styleUrls: ['./order-dispatched.component.css'],
})

export class OrderDispatchedComponent implements OnInit {

    dtOptions: DataTables.Settings;
    loading: boolean;
    loadingProduct: boolean;
    showProducts: boolean;
    savingOrder: boolean;

    salemanId: number;
    currentTab: number;
    orderDate: string;

    orderDetails: any = {};
    selectedRetailer: any;
    merchantDiscount: any;
    newProduct: any;
    dispatchOrderDetail: any;

    inventory: Array<any> = [];
    ordersRetailers: Array<any> = [];
    specialDiscounts: Array<any> = [];
    schemes: Array<any> = [];
    discountSlabs: Array<any> = [];
    credits: Array<any> = [];

    constructor(
        private change: ChangeDetectorRef,
        private router: Router,
        private route: ActivatedRoute,
        private toastService: ToasterService,
        private dataService: DataService,
        private generalDataService: GeneralDataService,
        private orderService: OrdersService,
    ) {
    }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.currentTab = 1;
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId') || null;
        this.orderDate = this.route.snapshot.paramMap.get('date');
        if (!this.salemanId || !this.orderDate) {
            this.router.navigateByUrl('/orders/dispatch-orders');
            const toast: Toaster = { type: 'error', message: 'No order selected to dispatch!', title: 'Error:' };
            this.toastService.showToaster(toast);
        } else {
            this.getProducts();
            this.getSchemes();
            this.getDispatchDetails();
        }
    }

    tabChanged(): void {
        switch (this.currentTab) {
            case 1:
                this.savingOrder = true;
                this.selectedRetailer = JSON.parse(JSON.stringify(null));
                this.orderDetails.items = [];
                this.getDispatchDetails();
                break;
            case 2:
                this.getDispatchOrdersDetail();
                break;
            case 3:

                break;

            default:
                break;
        }
    }

    isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
        return this.dataService.isNumber(event, type);
    }

    getDispatchDetails(): void {
        this.loading = true;
        this.savingOrder = false;
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

    getDispatchOrdersDetail(): void {
        if (!this.dispatchOrderDetail || !this.dispatchOrderDetail.summary) {
            this.loading = true;
            this.orderService.getDispatchOrdersDetail(this.salemanId, this.orderDate).subscribe(res => {
                this.loading = false;
                if (res.status === 200) {
                    this.dispatchOrderDetail = res.data;
                    this.dispatchOrderDetail.orders = this.dispatchOrderDetail.orders.map(order => {
                        order.isAdded = false;
                        const isInCredit = this.credits.find(x => x.order_id === order.id);
                        if (isInCredit) {
                            order.isAdded = true;
                        }
                        return order;
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
        if (this.selectedRetailer?.id !== retailer.id) {
            this.selectedRetailer = retailer;
            this.orderService.getDispatchOrderDetails(retailer.id).subscribe(res => {
                if (res.status === 200) {
                    this.orderDetails = res.data;
                    this.orderDetails.items = this.orderDetails.items.map(prod => {
                        const product = this.inventory.find(x => x.item_id === prod.item_id);
                        prod.item_trade_price = JSON.parse(JSON.stringify(product.item_trade_price));
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

    addNewProductToOrder(product: any): void {
        this.newProduct = product;
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
        document.getElementById('order-contaienr').classList.add('blur-div');
    }

    closeNewProducts(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('order-contaienr').classList.remove('blur-div');
    }

    saveOrder(): void {
        this.savingOrder = true;
        console.log('this.orderDetails :>> ', this.orderDetails);
        this.orderService.saveDispatch(this.orderDetails).subscribe(res => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} dispatched successfully!`,
                    title: 'Order dispatched:',
                    type: 'success'
                });
            }
            this.orderDetails.items = [];
            this.selectedRetailer.isActive = false;
            this.selectedRetailer = JSON.parse(JSON.stringify(null));
        }, error => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for dispatch ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong dispatch cannot be save at the moment!',
                    title: 'Error:',
                    type: 'error'
                });
            }
        });
    }

    setOrderItems(): void {
        this.orderDetails.items = this.orderDetails.items.map(item => {
            const orderItem = {
                id: item.id || 0,
                employee_id: this.orderDetails.employee_id,
                pref_id: item.pref_id,
                item_quantity_booker: item.item_quantity_booker,
                item_quantity_updated: item.item_quantity_updated || 0,
                quantity_returned: 0,
                original_price: item.item_trade_price,
                scheme_discount: item.scheme_discount / +item.stockQty,
                unit_price_after_scheme_discount: item.unit_price_after_scheme_discount,
                merchant_discount: item.trade_discount,
                merchant_discount_pkr: item.trade_discount_pkr / +item.stockQty,
                unit_price_after_merchant_discount: item.unit_price_after_merchant_discount,
                special_discount: item.special_discount,
                unit_price_after_special_discount: item.unit_price_after_special_discount,
                booker_discount: item.extra_discount,
                unit_price_after_individual_discount: item.unit_price_after_individual_discount || item.price,
                unit_id: item.unit_id,
                unit_name: item.unit_name,
                brand_id: item.brand_id,
                item_id: item.item_id,
                item_name: item.item_name,
                scheme_id: item.selectedScheme?.id || 0,
                scheme_min_quantity: item.selectedScheme?.min_qty || 0,
                scheme_quantity_free: item.selectedScheme?.quantity_free || 0,
                scheme_rule: item.selectedScheme?.rule_name || '',
                gift_value: item.gift_value || 0,
                parent_pref_id: item.child,
                parent_unit_id: item.parent_unit_id,
                parent_brand_id: item.brand_id,
                parent_tp: item.parent_trade_price,
                parent_qty_sold: this.dataService.getParentQty(item.stockQty, item.parent_quantity || item.quantity),
                parent_value_sold: item.net_amount,
                final_price: item.net_amount,
                campaign_id: item.selectedScheme?.id || 0,
                item_status: item.is_active,
                dispatch_status: 2,
                dispatch_qty: +item.stockQty,
                dispatch_amount: item.net_amount,
                reasoning: '',
                distributor_id: this.orderDetails.distributor_id,
                division_id: this.selectedRetailer.division_id || 1,
                region_id: this.orderDetails.region_id,
                area_id: this.orderDetails.area_id,
                assigned_route_id: this.orderDetails.assigned_route_id,
                territory_id: this.orderDetails.territory_id,
                booked_order_value: item.booked_order_value || 0,
                booked_total_qty: item.booked_total_qty || 0,
                is_deleted: item.isDeleted,
                quantity: +item.stockQty,
                gross_sale_amount: item.original_amount,
                total_retail_price: item.item_retail_price * item.stockQty,
                tax_class_id: item.tax_class_id,
                tax_in_percentage: item.tax_class_amount,
                tax_in_value: item.tax_amount_value || 0,
                total_tax_amount: item.tax_amount_pkr || 0,
                total_amount_after_tax: item.net_amount,
                total_discount: item.scheme_discount +
                    item.trade_discount_pkr + (+item.stockQty * item.special_discount) + item.extra_discount_pkr,
                order_id: this.orderDetails.id
            };
            return orderItem;
        });
        this.saveOrder();
    }

    cancelOrder(): void {
        document.getElementById('close-del').click();
        this.savingOrder = true;
        this.orderService.cancelOrder(this.orderDetails.id).subscribe(res => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} canceled!`,
                    title: 'Order dispatched:',
                    type: 'success'
                });
                this.orderDetails.items = [];
                this.ordersRetailers = this.ordersRetailers.filter(x => x.id !== this.selectedRetailer.id);
                this.selectedRetailer = null;
                this.getDispatchDetails();
            }
        }, error => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for dispatch ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong order cannot be canceled at the moment!',
                    title: 'Error:',
                    type: 'error'
                });
            }
        });
    }

    addOrderBill(order: any): void {
        order.isAdded = true;
        const { distributor_id, employee_id, sales_man_id, recovery, invoice_number } = order;
        const orderId = order.id;
        const dispatchAmount = order.total_amount_after_tax;
        this.credits.push({
            payment_mode: 'Cash', pyament_detail: '', invoice_number,
            distributor_id, employee_id, saleman_id: sales_man_id, recovery, order_id: orderId,
            dispatched_bill_amount: dispatchAmount, amount_received: recovery
        });
    }

    removeOrderBill(order: any): void {
        order.isAdded = false;
        order.recovery = 0;
        this.credits = this.credits.filter(ord => ord.order_id !== order.id);
    }

}
