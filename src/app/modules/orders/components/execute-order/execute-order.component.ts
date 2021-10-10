import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { DataService, GeneralDataService } from '../../../shared/services';
import { PaymentDetail } from '../../models/counter-sale.model';
import { ExecutionService } from '../../services/execution.service';
import { OrdersService } from '../../services/orders.service';
import { SpotSaleService } from '../../services/spot-sale.service';

@Component({
    selector: 'app-execute-order',
    templateUrl: 'execute-order.component.html',
    styleUrls: ['./execute-order.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class ExecuteOrderComponent implements OnInit, OnDestroy {

    dtOPtions: DataTables.Settings = {};

    loading: boolean;
    savingOrder: boolean;
    showReturned: boolean;
    showProducts: boolean;
    isCredit: boolean;
    alreadyFullPayment: boolean;
    isChequeAdded: boolean;
    isCreditAdded: boolean;
    isAdded: boolean;
    isSpotSaleActive: boolean;
    isExpenseAdded: boolean;
    showAddRetailer: boolean;

    paymentDate: string;
    orderDate: string;
    paymentTypeCredit: string;
    paymentTypeCheque: string;
    addedPayment: string;
    bankName: string;
    chequeNumber: string;
    currentPayment: string;

    recoveryAmount: number;
    creditAmount: number;
    chequeAmount: number;
    returnAmount: number;
    dueAmount: number;
    receivableAmount: number;
    amountReceived: number;
    netAmount: number;
    totalPayment: number;
    distributorId: number;
    currentTab: number;
    salemanId: number;
    loadId: number;
    selectedLoadId: number;
    selectedRoute: number;

    cheque: PaymentDetail;
    credit: PaymentDetail;
    cash: PaymentDetail;
    orderDetails: any = {};
    selectedRetailer: any;
    merchantDiscount: any;
    newProduct: any;
    dispatchSummary: any;
    returnedProduct: any;
    selectedOrderBooker: any;
    spotSaleOrder: any = {};
    currentSpotSale: any = {};
    spotRetailer: any;
    finalLoad: any;
    recoveryRetailer: any;
    recoveryListing: Array<any> = [];
    outOfRouteRecovery: Array<any> = [];
    orderBookers: Array<any> = [];
    bookerRoutes: Array<any> = [];
    routeRetailers: Array<any> = [];
    retailersList: Array<any> = [];
    schemes: Array<any> = [];
    inventory: Array<any> = [];
    allProducts: Array<any> = [];
    specialDiscounts: Array<any> = [];
    discountSlabs: Array<any> = [];

    constructor(
        private change: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrdersService,
        private executionService: ExecutionService,
        private toastService: ToasterService,
        private generalDataService: GeneralDataService,
        private dataService: DataService,
        private spotSaleService: SpotSaleService,
        private storageService: LocalStorageService,
    ) {
    }

    ngOnInit(): void {
        this.currentTab = 1;
        this.dtOPtions = {
            pagingType: 'simple_numbers',
        };
        this.showAddRetailer = true;
        this.getSchemesData();
        this.setPaymentInitalValues();
        this.setSpotSaleOrder();
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId');
        this.orderDate = this.route.snapshot.paramMap.get('date');
        this.selectedLoadId = +this.route.snapshot.paramMap.get('loadId');
        if (!this.salemanId || !this.orderDate || !this.selectedLoadId) {
            this.router.navigateByUrl('/orders/execution-list');
        } else {
            this.getOrdersBySalemanAndDate();
            this.getOrderBookers();
        }
    }

    setSpotSaleOrder(): void {
        this.spotSaleOrder = {
            retailers: [],
            orders: [],
            order_total: 0,
            date: new Date().toISOString().split('T')[0],
            territory: '--',
            total_outlets: '--',
            orderBookerName: '--',
        };
    }

    setPaymentInitalValues(): void {
        this.netAmount = 0;
        this.creditAmount = 0;
        this.amountReceived = 0;
        this.chequeAmount = 0;
        this.returnAmount = 0;
        this.dueAmount = 0;
        this.receivableAmount = 0;
        this.recoveryAmount = 0;
        this.totalPayment = 0;
        this.isChequeAdded = false;
        this.isCreditAdded = false;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.distributorId = this.storageService.getItem('distributor').id;
    }

    addNewProductToOrder(product: any): void {
        this.newProduct = product;
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
        this.orderService.getExectedOrdersListing(this.salemanId, this.orderDate, this.selectedLoadId).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.retailersList = res.data.retailers;
                this.allProducts = res.data.all_products;
                this.loadId = res.data.load_id;
                this.spotSaleOrder.retailers = res.data.spot_sale_orders;
                this.inventory = res.data.executed_products;
                this.specialDiscounts = res.data.special_discount;
                this.dispatchSummary = res.data.summary;
                this.recoveryListing = res.data.out_of_route_recovery.map(x => {
                    x.recovery = x.amount_received;
                    x.retailer_id = x.id;
                    x.recoveryAdded = true;
                    return x;
                });
                this.outOfRouteRecovery = res.data.out_of_route_recovery.map(x => {
                    const recovery = {
                        retailer_id: x.id,
                        amount: x.amount_received,
                        booker_id: x.booker_id
                    };
                    return recovery;
                });
                if (res.data.is_dsr) {
                    this.changeTab(4);
                }
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

    getOrderBookers(): void {
        this.generalDataService.getOrderBookers(this.distributorId).subscribe(res => {
            if (res.status === 200) {
                this.orderBookers = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Bookers not fetched, please try again later!'
                });
            }
        });
    }

    getOrderBookerRoutes(): void {
        this.spotSaleOrder.orderBookerName = `${this.selectedOrderBooker.employee_first_name} ${this.selectedOrderBooker.employee_last_name}`;
        this.selectedRoute = null;
        this.bookerRoutes = [];
        this.spotRetailer = null;
        this.routeRetailers = [];
        this.generalDataService.getOrderBookerRoutes(this.selectedOrderBooker.employee_id).subscribe(res => {
            if (res.status === 200) {
                this.bookerRoutes = res.data;
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Routes not fetched, please try again later!'
                });
            }
        });
    }

    getRetaielrsByRoute(routeId: number): void {
        this.spotRetailer = null;
        this.routeRetailers = [];
        this.generalDataService.getRetailersByRoute(routeId).subscribe(res => {
            if (res.status === 200) {
                this.routeRetailers = res.data;
                if (this.spotSaleOrder.retailers.length) {
                    this.routeRetailers = this.routeRetailers.map(x => {
                        const index = this.spotSaleOrder.retailers.findIndex(y => y.retailer_id === x.retailer_id);
                        if (index > -1) {
                            x.isAdded = true;
                        }
                        return x;
                    });
                }
                if (this.retailersList.length) {
                    this.routeRetailers = this.routeRetailers.map(x => {
                        const index = this.retailersList.findIndex(y => y.retailer_id === x.retailer_id);
                        if (index > -1) {
                            x.isAdded = true;
                        }
                        return x;
                    });
                }
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    type: 'error',
                    title: 'Error:',
                    message: 'Retailers not fetched, please try again later!'
                });
            }
        });
    }

    setSpotSaleRetailer(): void {
        this.spotSaleOrder.territory = this.spotRetailer.territory;
        if (!this.spotSaleOrder.retailers.find(x => x.retailer_id === this.spotRetailer.retailer_id)) {
            if (!this.spotSaleOrder.retailers?.length) {
                this.spotSaleOrder.retailers = [];
            }
            this.spotRetailer.isAdded = true;
            delete this.spotRetailer.id;
            this.spotRetailer.region_id = this.selectedOrderBooker.region_id;
            const order = this.spotSaleService.setSpotSaleOrderContent(this.spotRetailer, this.selectedOrderBooker, this.distributorId);
            this.spotSaleOrder.orders.push(order);
            const retailers = JSON.parse(JSON.stringify(this.spotSaleOrder.retailers));
            retailers.push(this.spotRetailer);
            this.spotSaleOrder.retailers = JSON.parse(JSON.stringify(retailers));
            this.showAddRetailer = false;
            this.change.detectChanges();
        }
    }

    getOrderDetailsByRetailer(retailer: any): void {
        if (this.selectedRetailer?.id !== retailer.id) {
            this.savingOrder = true;
            this.newProduct = null;
            this.returnedProduct = null;
            this.resetPaymentValues();
            this.setPaymentInitalValues();
            this.selectedRetailer = JSON.parse(JSON.stringify(retailer));
            this.orderService.getOrderDetails(retailer.id).subscribe(res => {
                this.savingOrder = false;
                if (res.status === 200) {
                    this.orderDetails = res.data;
                    this.orderDetails.returned_items = this.orderDetails.returned_items;
                    this.recoveryAmount = this.orderDetails.recovery;
                    this.orderDetails.recovered = +this.orderDetails.recovered.toFixed(2);
                    if (this.orderDetails.payment && this.orderDetails.payment.length) {
                        this.orderDetails.payment.forEach(pay => {
                            if (pay.payment_mode === 'Cheque') {
                                this.setCheque(pay);
                            } else if (pay.payment_mode === 'Credit') {
                                this.setCredit(pay);
                            } else if (pay.payment_mode === 'Cash') {
                                this.setCash(pay);
                            }
                        });
                    }
                    if (this.orderDetails.returned_items.length) {
                        this.setOrderDetailReturnedItems();
                    } else {
                        this.receivableAmount = this.orderDetails.total_amount_after_tax + this.orderDetails.recovered;
                    }
                    this.setOrderDetailItems();
                    this.calculateReceivable();
                }
            }, error => {
                this.savingOrder = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while getting order detail data :>> ', error.message);
                    const toast: Toaster = { type: 'error', message: 'Cannot fetch Order Detail. Please try again', title: 'Error:' };
                    this.toastService.showToaster(toast);
                }
            });
            this.getDiscountSlabs();
        }
    }

    setCash(payment: any): void {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            return_amount: this.returnAmount || 0,
            recovery: 0,
            amount_received: payment.amount_received
        };
    }

    setCredit(payment: any): void {
        this.paymentTypeCredit = payment.amount_received < this.orderDetails.order_total ? 'partial' : 'full';
        this.credit = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Credit',
            payment_detail: '',
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: payment.amount_received
        };
        this.isCreditAdded = true;
    }

    setCheque(payment: any): void {
        this.paymentTypeCheque = payment.amount_received < this.orderDetails.order_total ? 'partial' : 'full';
        const paymentDetail = JSON.parse(payment.payment_detail);
        this.cheque = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cheque',
            payment_detail: {
                cheque_amount: payment.amount_received,
                bank_name: paymentDetail.bank_name,
                cheque_number: paymentDetail.cheque_number,
                cheque_date: paymentDetail.cheque_date
            },
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: payment.amount_received
        };
        this.isChequeAdded = true;
    }

    setOrderDetailReturnedItems(): void {
        this.orderDetails.returned_items = this.orderDetails.returned_items.map(x => {
            x.item_trade_price = x.original_price;
            x.stockQty = x.quantity_returned;
            x.extra_discount = x.booker_discount;
            x.extra_discount_pkr = x.booker_discount * x.quantity_returned;
            x.productType = 'returned';
            x.special_discount_pkr = 0;
            x.trade_discount = 0;
            x.trade_discount_pkr = 0;
            x.net_amount = x.final_price;
            x.gross_amount = x.gross_sale_amount;
            x.original_amount = x.gross_sale_amount;
            return x;
        });
    }

    setOrderDetailItems(): void {
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

            prod.stockQty = JSON.parse(JSON.stringify(prod.executed_qty));
            prod.net_amount = JSON.parse(JSON.stringify(prod.final_price));
            prod.gross_amount = prod.item_trade_price * prod.stockQty;
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

    setCurrentSpotSaleOrder(retailer: any): void {
        if (!this.isSpotSaleActive) {
            if (retailer.id) {
                this.isSpotSaleActive = true;
                this.getOrderDetailsByRetailer(retailer);
            } else {
                this.resetPaymentValues();
                this.setPaymentInitalValues();
                this.selectedRetailer = { ...retailer };
                this.isSpotSaleActive = true;
                this.orderDetails = this.spotSaleOrder.orders.find(x => x.retailer_id === retailer.retailer_id);
                this.getDiscountSlabs();
            }
        } else {
            const toast: Toaster = {
                type: 'error', message: 'Please complete the current order to move forward!',
                title: 'Spot Sale Error:'
            };
            this.toastService.showToaster(toast);
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
            this.selectedRetailer.segment_id === x.segment_id &&
            x.channel_id === (this.selectedRetailer.retailer_type_id || this.selectedRetailer.type_id));
    }

    handleReturnedProduct(returnedProduct: any): void {
        this.orderDetails.returned_items.push(returnedProduct);
        this.calculateReceivable();
    }

    deleteReturnedProduct(selectedItem: any): void {
        if (selectedItem.id) {
            const productAvalableQty = this.inventory.find(x => x.item_id === selectedItem.item_id)?.available_qty;
            if (productAvalableQty >= selectedItem.quantity_returned || selectedItem.return_type === 'damage') {
                selectedItem.stockQty = 0;
                selectedItem.isDeleted = true;
            } else {
                this.toastService.showToaster({
                    title: 'Returned Product:',
                    message: 'The selected product is part of other order please remove from other orders and delete!',
                    type: 'error'
                });
            }
        } else {
            this.orderDetails.returned_items = this.orderDetails.returned_items.filter(x => x.item_id !== selectedItem.item_id);
            // this.applySlabOnAllProducts();
        }
        document.getElementById('close-prod-del').click();
        this.calculateReceivable();
    }

    calculateReceivable(): void {
        const returnPrices = this.orderDetails.returned_items.filter(x => !x.isDeleted).map(x => x.net_amount);
        this.returnAmount = this.dataService.calculateItemsBill(returnPrices);
        const price = this.orderDetails.items.map(x => x.net_amount);
        this.netAmount = this.dataService.calculateItemsBill(price);
        this.dueAmount = this.netAmount + this.returnAmount;
        this.receivableAmount = this.netAmount + this.orderDetails.recovered + this.returnAmount;
        this.selectedRetailer.order_total = this.dueAmount;
        if (this.currentTab === 2) {
            const retailer = this.spotSaleOrder.retailers.find(x => x.retailer_id === this.selectedRetailer.retailer_id);
            retailer.order_total = this.dueAmount;
        }
        this.calculatePayments();
    }

    openProductsList(): void {
        if (!this.isPaymentAdded()) {
            this.showProducts = true;
            document.body.classList.add('no-scroll');
            document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
            document.getElementById('order-container').classList.add('blur-div');
        }
    }

    isPaymentAdded(): boolean {
        if (this.isChequeAdded || this.isCreditAdded) {
            this.toastService.showToaster({
                title: 'Payment Added:',
                message: 'Please remove the payment to proceed!',
                type: 'error'
            });
            return true;
        }
        return false;
    }

    closeNewProducts(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('order-container').classList.remove('blur-div');
    }

    openReturnedModal(): void {
        if (!this.isPaymentAdded()) {
            this.showReturned = true;
        }
    }

    closeReturnedModal(): void {
        this.showReturned = false;
    }

    changeTab(selectedTab: number): void {
        this.currentTab = selectedTab;
        if (this.currentTab === 1) {
            this.retailersList = this.retailersList.map(x => {
                x.isActive = false;
                return x;
            });
            this.selectedRetailer = null;
            this.orderDetails = null;
        }
        if (this.currentTab === 2) {
            if (this.selectedRetailer) {
                this.orderDetails.items = [];
                this.orderDetails.returned_items = [];
                this.selectedRetailer.isActive = false;
                this.spotSaleOrder.retailers = this.spotSaleOrder.retailers.map(x => {
                    x.isActive = false;
                    return x;
                });
                this.selectedRetailer = null;
                this.orderDetails = null;
            }
            this.resetPaymentValues();
            this.setPaymentInitalValues();
        } else if (this.currentTab === 3) {
            this.selectedOrderBooker = null;
            this.selectedRoute = null;
            this.recoveryRetailer = null;
        } else if (this.currentTab === 4) {
            this.isAdded = false;
            this.getExecutionFinalLoad();
        }
    }

    focused(event: Event): void {
        (event.target as HTMLElement).parentElement.classList.add('focused');
    }

    left(event: Event): void {
        if (!(event.target as HTMLInputElement).value) {
            (event.target as HTMLElement).parentElement.classList.remove('focused');
        }
    }

    isNumber(event: KeyboardEvent): boolean {
        return this.dataService.isNumber(event);
    }

    isFullyPaymentAdded(current: string): void {
        if (this.receivableAmount <= 0) {
            const toast: Toaster = {
                type: 'error',
                message: `Your receivable amount (${this.receivableAmount.toFixed(2)}) is not enough to add payment!`,
                title: `Payment cannot be added`
            };
            this.toastService.showToaster(toast);
            return;
        }
        if (current === 'Credit') {
            this.paymentTypeCredit = '';
        } else {
            this.paymentTypeCheque = '';
        }
        if (!this.selectedRetailer) {
            const toast: Toaster = {
                type: 'error',
                message: `Please select order to add payment details!`,
                title: `Payment cannot be added`
            };
            this.toastService.showToaster(toast);
        } else {
            if ((this.paymentTypeCheque === 'full' || this.paymentTypeCredit === 'full') && this.addedPayment !== current) {
                const toast: Toaster = {
                    type: 'error',
                    message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                    title: `Full Payment selected for ${this.addedPayment}`
                };
                this.toastService.showToaster(toast);
            } else {
                // this.focusForPaymentValues();
                document.getElementById('open-modal-payment').click();
            }
        }
    }

    currentFullPayment(current: string, other: string): void {
        if ((this.paymentTypeCheque === 'full' || this.paymentTypeCredit === 'full') && this.addedPayment !== current) {
            const toast: Toaster = {
                type: 'error',
                message: `You already selected Full payment for ${this.addedPayment} please remove it if you want to add ${this.currentPayment}!`,
                title: `Full Payment selected for ${this.addedPayment}`
            };
            this.toastService.showToaster(toast);
        } else {
            this.addedPayment = current;
            this.currentPayment = other;
        }
    }

    setPartial(current: string): void {
        if (current === this.addedPayment) {
            if (this.credit && current === 'Credit') {
                this.cash.amount_received = this.cash.amount_received + this.credit.amount_received;
                this.credit.amount_received = 0;
            }
            if (this.cheque && current === 'Cheque Payment') {
                this.cash.amount_received = this.cash.amount_received + this.cheque.amount_received;
                this.cheque.amount_received = 0;
            }
            this.addedPayment = '';
            this.currentPayment = '';
            this.alreadyFullPayment = false;
        }
    }

    checkPaymentHasValues(): boolean {
        if (this.isCredit) {
            if (this.paymentTypeCredit === 'full') {
                return this.paymentTypeCredit.length > 0;
            } else {
                return this.paymentTypeCredit.length > 0 && this.creditAmount > -1 &&
                    this.creditAmount <= this.dueAmount - (this.cheque ? this.cheque.amount_received : 0);
            }
        } else {
            if (this.paymentTypeCheque === 'full') {
                return this.paymentTypeCheque.length > 0 && this.bankName.length > 0 &&
                    this.chequeNumber.length > 0 && this.paymentDate.length > 0;
            } else {
                return this.paymentTypeCheque.length > 0 && this.chequeAmount > -1 && this.chequeAmount <= this.cash.amount_received &&
                    this.bankName.length > 0 && this.chequeNumber.length > 0 && this.paymentDate.length > 0;
            }
        }
    }

    removeCheque(): void {
        this.cheque = null;
        this.isChequeAdded = false;
        this.paymentTypeCheque = '';
        this.calculatePayments();
    }

    removeCredit(): void {
        this.credit = null;
        this.isCreditAdded = false;
        this.paymentTypeCredit = '';
        this.calculatePayments();
    }

    makePayment(): void {
        if (this.isCredit) {
            this.credit = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: this.currentTab === 1 ? 'Execution' : 'Spot',
                payment_mode: 'Credit',
                payment_detail: '',
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCredit === 'full' ?
                    JSON.parse(JSON.stringify(this.dueAmount - (this.cheque ? this.cheque.amount_received : 0))) :
                    JSON.parse(JSON.stringify(this.creditAmount))
            };
            this.isCreditAdded = true;
        }
        if (!this.isCredit) {
            this.cheque = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: this.currentTab === 1 ? 'Execution' : 'Spot',
                payment_mode: 'Cheque',
                payment_detail: {
                    cheque_amount: this.paymentTypeCheque === 'full' ? JSON.parse(JSON.stringify(this.receivableAmount)) :
                        JSON.parse(JSON.stringify(this.chequeAmount)),
                    bank_name: JSON.parse(JSON.stringify(this.bankName)),
                    cheque_number: JSON.parse(JSON.stringify(this.chequeNumber)),
                    cheque_date: JSON.parse(JSON.stringify(this.paymentDate))
                },
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCheque === 'full' ? JSON.parse(JSON.stringify(this.receivableAmount)) :
                    JSON.parse(JSON.stringify(this.chequeAmount))
            };
            this.isChequeAdded = true;
        }
        this.calculatePayments();
    }

    addPaymentMethod(): void {
        this.isAdded = true;
        const isPaymentAdded = this.checkPaymentHasValues();
        if (isPaymentAdded) {
            this.isAdded = false;
            this.makePayment();
            document.getElementById('open-modal-payment').click();
        }
    }

    paymentCancelled(): void {
        this.isAdded = false;
        // this.resetPaymentValues();
        this.paymentTypeCredit = '';
        this.paymentTypeCheque = '';
    }

    resetPaymentValues(): void {
        this.chequeAmount = null;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.bankName = '';
        this.chequeNumber = null;
        this.creditAmount = null;
        this.cash = null;
        this.cheque = null;
        this.credit = null;
    }

    calculatePayments(): void {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: this.currentTab === 1 ? 'Execution' : 'Spot',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            return_amount: this.returnAmount || 0,
            recovery: 0,
            amount_received: Math.round((this.receivableAmount + Number.EPSILON) * 100) / 100,
        };
        if (this.cheque) {
            this.cheque.return_amount = this.returnAmount || 0;
            this.cash.amount_received = this.cash.amount_received - this.cheque.amount_received;
        }
        if (this.credit) {
            this.credit.return_amount = this.returnAmount || 0;
            this.cash.amount_received = this.cash.amount_received - this.credit.amount_received;
        }
        this.totalPayment = this.cheque ? this.cash.amount_received + this.cheque.amount_received : this.cash.amount_received;
        if (this.currentTab === 2) {
            const retailer = this.spotSaleOrder.retailers.find(x => x.retailer_id === this.selectedRetailer.retailer_id);
            retailer.order_total = this.dueAmount;
        }
        this.selectedRetailer.order_total = this.dueAmount;
        if (this.currentTab === 1) { this.retailersList.find(x => x.id === this.selectedRetailer.id).order_total = this.dueAmount; }
        if (this.currentTab === 2) {
            this.spotSaleOrder.retailers.find(x => x.retailer_id === this.selectedRetailer.retailer_id).order_total = this.dueAmount;
        }
        this.orderDetails.order_total = this.dueAmount;
        this.orderDetails.total_amount_after_tax = this.dueAmount;
    }

    saveExecutionQuantity(): void {
        this.orderDetails.items = this.executionService.setOrderPayloadItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.returned_items = this.executionService.setOrderPayloadReturnedItems(this.orderDetails, this.selectedRetailer);
        this.cash.amount_received = this.cash.amount_received > -1 ? this.cash.amount_received : this.netAmount;
        this.orderDetails.payment = {
            total_payment: this.totalPayment > -1 ? this.totalPayment : this.netAmount,
            detail: [this.cash]
        };
        if (this.credit) {
            this.orderDetails.payment.detail.push(this.credit);
        }
        if (this.cheque) {
            this.orderDetails.payment.detail.push(this.cheque);
        }
        this.savingOrder = true;
        this.orderService.saveExecutionQuantityOrder(this.orderDetails).subscribe(res => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.inventory = res.data.executed_products;
                this.toastService.showToaster({
                    message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} execution updated successfully!`,
                    title: 'Order execution:',
                    type: 'success'
                });
                this.newProduct = null;
                this.orderDetails.items = [];
                this.orderDetails.returned_items = [];
                this.selectedRetailer.isActive = false;
                if (this.currentTab === 1) { this.retailersList.find(x => x.id === this.selectedRetailer.id).isActive = false; }
                if (this.currentTab === 2) { this.spotSaleOrder.retailers.find(x => x.id === this.selectedRetailer.id).isActive = false; }
                this.selectedRetailer = null;
                this.resetPaymentValues();
                this.setPaymentInitalValues();
            }
        }, error => {
            this.savingOrder = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error in Save Order for execution ::>> ', error);
                this.toastService.showToaster({
                    message: 'Something went wrong execution cannot be save at the moment!',
                    title: 'Error:',
                    type: 'error'
                });
            }
        });
    }

    saveSpotSaleOrder(): void {
        this.savingOrder = true;
        this.orderDetails.load_id = this.loadId;
        this.orderDetails.processed_at = this.orderDate;
        this.orderDetails.processed_by = this.distributorId;
        this.orderDetails.sales_man_id = this.salemanId;
        this.orderDetails.dispatched_by = this.distributorId;
        this.orderDetails.dispatched_at = this.orderDate;
        this.orderDetails.status = 'Processed';
        this.orderDetails.items = this.executionService.setOrderPayloadItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.returned_items = this.executionService.setOrderPayloadReturnedItems(this.orderDetails, this.selectedRetailer);
        this.orderDetails.payment = {
            total_payment: this.totalPayment,
            detail: [this.cash]
        };
        if (this.credit) {
            this.orderDetails.payment.detail.push(this.credit);
        }
        if (this.cheque) {
            this.orderDetails.payment.detail.push(this.cheque);
        }
        this.orderService.saveSpotSaleOrder(this.orderDetails).subscribe(res => {
            this.savingOrder = false;
            this.isSpotSaleActive = false;
            if (res.status === 200) {
                const toast: Toaster = {
                    type: 'success', message: `Spot Sale for ${this.selectedRetailer.retailer_name.toUpperCase()} saved successfully!`,
                    title: 'Spot Sale Saved:'
                };
                this.newProduct = null;
                this.toastService.showToaster(toast);
                this.inventory = res.data.executed_products;
                this.selectedRetailer.id = res.data.order.id;
                const orderIndex = this.spotSaleOrder.orders.findIndex(x => x.retailer_id === this.orderDetails.retailer_id);
                const retailerIndex = this.spotSaleOrder.retailers.findIndex(x => x.retailer_id === this.selectedRetailer.retailer_id);
                this.spotSaleOrder.retailers[retailerIndex].id = res.data.order.id;
                this.spotSaleOrder.retailers[retailerIndex].order_total = res.data.order.order_total;
                this.spotSaleOrder.orders[orderIndex] = JSON.parse(JSON.stringify(res.data.order));
                this.orderDetails = JSON.parse(JSON.stringify(res.data.order));
                const emptyOrder = this.spotSaleOrder.orders.find(x => x.order_total === 0);
                if (emptyOrder) {
                    this.showAddRetailer = false;
                } else {
                    this.showAddRetailer = true;
                }
                this.setOrderDetailItems();
                this.setOrderDetailReturnedItems();
            }
        }, error => {
            this.savingOrder = false;
            this.isSpotSaleActive = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = {
                    type: 'error', message: 'Something went wrong spot sale order not placed, please try again later!',
                    title: 'Spot Sale Error:'
                };
            }
        });
    }

    validateCancel(): any {
        if (!this.orderDetails.returned_items?.length) {
            return true;
        } else {
            let isOrderValid = true;
            const returnedProduct = this.orderDetails.returned_items.find(product => {
                const productAvalableQty = this.inventory.find(x => x.item_id === product.item_id)?.available_qty;
                if (productAvalableQty < product.quantity_returned && product.return_type !== 'damage') {
                    isOrderValid = false;
                    return product;
                }
            });
            if (!isOrderValid && returnedProduct) {
                this.toastService.showToaster({
                    title: 'Returned Product:',
                    message: 'The selected order has returned products which or part of other orders, cannot cancel the order!',
                    type: 'error'
                });
            }
            return isOrderValid;
        }
    }

    cancelOrder(): void {
        document.getElementById('close-del').click();
        if (this.validateCancel()) {
            this.savingOrder = true;
            this.orderService.canceleExecutionOrder(this.orderDetails.id).subscribe(res => {
                this.savingOrder = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} canceled!`,
                        title: 'Order Execution:',
                        type: 'success'
                    });
                    // this.orderDetails = null;
                    this.newProduct = null;
                    this.selectedRetailer = null;
                    this.orderDetails.items = [];
                    this.orderDetails.returned_items = [];
                    this.setPaymentInitalValues();
                    this.getOrdersBySalemanAndDate();
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
    }

    cancelSpotSale(): void {
        if (this.orderDetails.id) {
            this.cancelSpotSaleOrder();
        } else {
            this.removeSpotOrder();
            document.getElementById('close-del').click();
        }
    }

    cancelSpotSaleOrder(): void {
        document.getElementById('close-del').click();
        if (this.validateCancel()) {
            this.savingOrder = true;
            this.orderService.cancelSpotSaleOrder(this.orderDetails.id).subscribe(res => {
                this.savingOrder = false;
                this.isSpotSaleActive = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} canceled!`,
                        title: 'Spot Order:',
                        type: 'success'
                    });
                    this.newProduct = null;
                    this.inventory = res.data.executed_products;
                    this.removeSpotOrder();
                }
            }, error => {
                this.savingOrder = false;
                this.isSpotSaleActive = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error in cancel spot sale Order ::>> ', error);
                    this.toastService.showToaster({
                        message: 'Something went wrong order cannot be canceled at the moment!',
                        title: 'Error:',
                        type: 'error'
                    });
                }
            });
        }
    }

    removeSpotOrder(): void {
        this.selectedRetailer.isAdded = false;
        this.spotSaleOrder.retailers = this.spotSaleOrder.retailers.filter(x => x.retailer_id !== this.selectedRetailer.retailer_id);
        this.spotSaleOrder.orders = this.spotSaleOrder.orders.filter(x => x.retailer_id !== this.selectedRetailer.retailer_id);
        this.orderDetails.items = [];
        this.orderDetails.returned_items = [];
        this.isSpotSaleActive = false;
        this.selectedRetailer = null;
        const emptyOrder = this.spotSaleOrder.orders.find(x => x.order_total === 0);
        if (emptyOrder) {
            this.showAddRetailer = false;
        } else {
            this.showAddRetailer = true;
        }
        this.resetPaymentValues();
        this.setPaymentInitalValues();
    }

    getExecutionFinalLoad(): void {
        this.loading = true;
        this.orderService.getExecutionFinalLoad(this.loadId, this.outOfRouteRecovery).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.finalLoad = res.data;
                this.recoveryListing = res.data.out_of_route_recovery.map(x => {
                    x.recovery = x.amount_received;
                    x.retailer_id = x.id;
                    x.recoveryAdded = true;
                    return x;
                });
                this.outOfRouteRecovery = res.data.out_of_route_recovery.map(x => {
                    const recovery = {
                        retailer_id: x.id,
                        amount: x.amount_received,
                        booker_id: x.booker_id
                    };
                    return recovery;
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                console.log('Error while fetching execution delivery challan :>> ', error);
                this.toastService.showToaster({
                    message: 'Delivery challan not fetched, please try again later!',
                    title: 'Delivery Challan Error:',
                    type: 'error'
                });
            }
        });
    }

    getExpense(id: number): string {
        return this.finalLoad.expense_types.find(y => y.id === id).name;
    }

    addExpense(type: any, amount: any): void {
        if (type.value && amount.value) {
            const expenses = JSON.parse(JSON.stringify(this.finalLoad.expense_detail));
            const expIndex = expenses.findIndex(x => x.expense_type === +type.value);
            if (expIndex > -1) {
                expenses[expIndex].amount = amount.value;
            } else {
                expenses.push({ expense_type: +type.value, amount: +amount.value });
            }
            type.value = '';
            amount.value = '';
            this.finalLoad.expense_detail = JSON.parse(JSON.stringify(expenses));

            this.setIsExpenseAdded();
        } else {
            this.toastService.showToaster({
                type: 'error',
                title: 'Expense Error:',
                message: 'Please select expense type and add amount!'
            });
        }
    }

    removeExpense(type: string): void {
        this.finalLoad.expense_detail = this.finalLoad.expense_detail.filter(x => x.expense_type !== type);
        this.setIsExpenseAdded();
    }

    setIsExpenseAdded(): void {
        this.isExpenseAdded = true;
        setTimeout(() => {
            this.isExpenseAdded = false;
        }, 500);
    }

    saveExpense(): void {
        document.getElementById('close-expense').click();
        // if (this.finalLoad.expense_detail.length) {
        //     this.isAdded = true;
        //     this.finalLoad.expense_detail = this.finalLoad.expense_detail.map(x => {
        //         return { expense_type: +x.expense_type, amount: +x.amount };
        //     });
        //     this.orderService.saveExecutionExpense(this.loadId, this.salemanId, this.orderDate, this.finalLoad.expense_detail)
        //         .subscribe(res => {
        //             this.isAdded = false;
        //             if (res.status === 200) {
        //                 this.toastService.showToaster({
        //                     title: 'Expense Saved:',
        //                     message: 'Expense saved successfully!',
        //                     type: 'success'
        //                 });
        //                 this.finalLoad = res.data;
        //             }
        //         }, error => {
        //             this.isAdded = false;
        //             if (error.status !== 1 && error.status !== 401) {
        //                 console.log('Error while saving expenses :>> ', error);
        //                 this.toastService.showToaster({
        //                     title: 'Expense Error:',
        //                     message: 'Expense not saved, please try again before marking complete!',
        //                     type: 'error'
        //                 });
        //             }
        //         });
        // }
        this.isAdded = true;
        this.finalLoad.expense_detail = this.finalLoad.expense_detail.map(x => {
            return { expense_type: +x.expense_type, amount: +x.amount };
        });
        this.orderService.saveExecutionExpense(this.loadId, this.salemanId, this.orderDate, this.finalLoad.expense_detail)
            .subscribe(res => {
                this.isAdded = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        title: 'Expense Saved:',
                        message: 'Expense saved successfully!',
                        type: 'success'
                    });
                    this.finalLoad = res.data;
                }
            }, error => {
                this.isAdded = false;
                if (error.status !== 1 && error.status !== 401) {
                    console.log('Error while saving expenses :>> ', error);
                    this.toastService.showToaster({
                        title: 'Expense Error:',
                        message: 'Expense not saved, please try again before marking complete!',
                        type: 'error'
                    });
                }
            });
    }

    checkRecovery(retailer): void {
        if (+retailer.recovery > retailer.balance) {
            this.toastService.showToaster({
                title: 'Recovery Error:',
                message: 'Recovered amount cannot be greater than credit!',
                type: 'error'
            });
            retailer.recovery = 0;
        }
    }

    setRecoveryRetailer(): void {
        this.isAdded = true;
        this.orderService.checkBalance(this.recoveryRetailer.retailer_id).subscribe(res => {
            this.isAdded = false;
            if (res.status) {
                if (res.data[0].balance > 0) {
                    this.recoveryRetailer.isAdded = true;
                    this.recoveryRetailer.balance = res.data[0].balance;
                    this.recoveryRetailer.recovery = 0;
                    this.recoveryRetailer.recoveryAdded = false;
                    this.recoveryListing.push(this.recoveryRetailer);
                    this.isAdded = false;
                } else {
                    this.toastService.showToaster({
                        title: 'Recovery:',
                        message: `${this.recoveryRetailer.retailer_name.toUpperCase()} has no credit to add recovery!`,
                        type: 'error'
                    });
                }
            }
        });
    }

    addRevoery(retaielr: any): void {
        retaielr.recoveryAdded = true;
        const recoveryData = {
            retailer_id: retaielr.retailer_id,
            amount: +retaielr.recovery,
            booker_id: retaielr.booker_id || this.selectedOrderBooker.employee_id
        };
        this.outOfRouteRecovery.push(recoveryData);
    }

    removeRecovery(retailer: any): void {
        if (retailer.order_payment_id) {
            this.orderService.removeOutOfRuoteRecovery(retailer.order_payment_id).subscribe(res => {
                if (res.status === 200) {
                    this.resetRecoveryValues(retailer);
                }
            });
        } else {
            this.resetRecoveryValues(retailer);
        }
    }

    resetRecoveryValues(retailer: any): void {
        this.isAdded = true;
        retailer.recoveryAdded = false;
        retailer.recovery = 0;
        this.outOfRouteRecovery = this.outOfRouteRecovery.filter(x => x.retailer_id !== retailer.retailer_id);
        this.recoveryListing = this.recoveryListing.filter(x => x.retailer_id !== retailer.retailer_id);
        setTimeout(() => {
            this.isAdded = false;
        }, 500);
    }

    checkRecieveable(): void {
        if (+this.amountReceived === 0) {
            this.toastService.showToaster({
                title: 'Execution Error:',
                message: 'Please add received amount!',
                type: 'error'
            });
        } else {
            document.getElementById('show-complete').click();
        }
    }

    amountReceivedMax(): void {
        const receiable = this.finalLoad.dsr.total_amount_recieveable.toFixed(2);
        if (+this.amountReceived > +receiable) {
            this.toastService.showToaster({
                title: 'Execution Error:',
                message: `Received amount cannot be greater than ${this.finalLoad.dsr.total_amount_recieveable}!`,
                type: 'error'
            });
            this.amountReceived = 0;
        }
    }

    markCompelet(): void {
        document.getElementById('close-complete').click();
        this.loading = true;
        this.orderService.markCompeleteExecution(this.loadId, +this.amountReceived).subscribe(res => {
            this.loading = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    title: 'Execution Completed:',
                    message: 'Execution completed successfully!',
                    type: 'success'
                });
                this.router.navigateByUrl('/orders/execution-list');
            }
        }, error => {
            this.loading = false;
            console.log('Execution complete Error :>> ', error);
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({
                    title: 'Execution Error:',
                    message: 'Execution not completed, please try again later!',
                    type: 'error'
                });
            }
        });
    }

    generateDSR(): void {
        const url = `${environment.apiDomain}${API_URLS.DSR_PDF}/${this.finalLoad.dsr.id}`;
        window.open(url);
    }

    ngOnDestroy(): void {
        this.change.detach();
    }
}
