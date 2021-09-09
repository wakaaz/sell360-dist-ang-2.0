import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services';
import { PaymentDetail } from '../../models/counter-sale.model';
import { ExecutionService } from '../../services/execution.service';
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
    showReturned: boolean;
    showProducts: boolean;
    isCredit: boolean;
    alreadyFullPayment: boolean;
    isChequeAdded: boolean;
    isCreditAdded: boolean;
    isAdded: boolean;

    paymentDate: string;
    orderDate: string;
    paymentTypeCredit: string;
    paymentTypeCheque: string;
    addedPayment: string;
    bankName: string;
    chequeNumber: string;
    currentPayment: string;

    creditAmount: number;
    chequeAmount: number;
    returnAmount: number;
    receivableAmount: number;
    totalPayment: number;
    distributorId: number;
    currentTab: number;
    salemanId: number;

    cheque: PaymentDetail;
    credit: PaymentDetail;
    cash: PaymentDetail;
    orderDetails: any = {};
    selectedRetailer: any;
    merchantDiscount: any;
    newProduct: any;
    dispatchSummary: any;
    returnedProduct: any;
    retailersList: Array<any> = [];
    schemes: Array<any> = [];
    inventory: Array<any> = [];
    allProducts: Array<any> = [];
    specialDiscounts: Array<any> = [];
    discountSlabs: Array<any> = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private orderService: OrdersService,
        private executionService: ExecutionService,
        private toastService: ToasterService,
        private dataService: DataService,
        private storageService: LocalStorageService,
    ) {
    }

    ngOnInit(): void {
        this.currentTab = 1;
        this.dtOPtions = {
            pagingType: 'simple_numbers',
        };
        this.getSchemesData();
        this.setPaymentInitalValues();
        this.salemanId = +this.route.snapshot.paramMap.get('saleManId');
        this.orderDate = this.route.snapshot.paramMap.get('date');
        if (!this.salemanId || !this.orderDate) {
            this.router.navigateByUrl('/orders/execution-list');
        } else {
            this.getOrdersBySalemanAndDate();
        }
    }

    setPaymentInitalValues(): void {
        this.creditAmount = 0;
        this.chequeAmount = 0;
        this.returnAmount = 0;
        this.receivableAmount = 0;
        this.totalPayment = 0;
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
                    this.orderDetails.returned_items = [];
                    this.receivableAmount = this.orderDetails.total_amount_after_tax;
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
                    this.calculatePayments();
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

    handleReturnedProduct(returnedProduct: any): void {
        this.orderDetails.returned_items.push(returnedProduct);
        this.calculateReceivable();
    }

    deleteReturnedProduct(selectedItem: any): void {
        if (selectedItem.id) {
            selectedItem.stockQty = 0;
            // this.setQuantity(selectedItem);
            selectedItem.isDeleted = true;
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
        this.receivableAmount = this.orderDetails.total_amount_after_tax + this.returnAmount;
        this.calculatePayments();
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

    openReturnedModal(): void {
        this.showReturned = true;
    }

    closeReturnedModal(): void {
        this.showReturned = false;
    }

    changeTab(selectedTab: number): void {
        this.currentTab = selectedTab;
    }

    focused(event: Event): void {
        (event.target as HTMLElement).parentElement.classList.add('focused');
    }

    left(event: Event): void {
        if (!(event.target as HTMLInputElement).value) {
            (event.target as HTMLElement).parentElement.classList.remove('focused');
        }
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
                this.focusForPaymentValues();
                document.getElementById('open-modal-payment').click();
            }
        }
    }

    focusForPaymentValues(): void {
        if (this.isCredit && this.creditAmount) {
            document.getElementById('Amount2').parentElement.classList.add('focused');
        } else {
            if (this.chequeAmount) { document.getElementById('Amount1').parentElement.classList.add('focused'); }
            if (this.bankName) { document.getElementById('chequeBankName').parentElement.classList.add('focused'); }
            if (this.chequeNumber) { document.getElementById('chequeNum').parentElement.classList.add('focused'); }
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
                return this.paymentTypeCredit.length > 0 && this.creditAmount > -1 && this.creditAmount <= this.cash.amount_received;
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
                type: 'Counter',
                payment_mode: 'Credit',
                payment_detail: '',
                dispatched_bill_amount: 0,
                recovery: 0,
                amount_received: this.paymentTypeCredit === 'full' ? JSON.parse(JSON.stringify(this.receivableAmount)) :
                    JSON.parse(JSON.stringify(this.creditAmount))
            };
            this.isCreditAdded = true;
        }
        if (!this.isCredit) {
            this.cheque = {
                retailer_id: this.selectedRetailer.retailer_id,
                distributor_id: this.distributorId,
                type: 'Counter',
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
        this.resetPaymentValues();
        this.paymentTypeCredit = '';
        this.paymentTypeCheque = '';
    }

    resetPaymentValues(): void {
        this.chequeAmount = null;
        this.paymentDate = new Date().toISOString().split('T')[0];
        this.bankName = '';
        this.chequeNumber = null;
        this.creditAmount = null;
    }

    calculatePayments(): void {
        this.cash = {
            retailer_id: this.selectedRetailer.retailer_id,
            distributor_id: this.distributorId,
            type: 'Counter',
            payment_mode: 'Cash',
            payment_detail: '',
            dispatched_bill_amount: 0,
            recovery: 0,
            amount_received: Math.round((this.receivableAmount + Number.EPSILON) * 100) / 100
        };
        if (this.cheque) {
            this.cash.amount_received = this.cash.amount_received - this.cheque.amount_received;
        }
        if (this.credit) {
            this.cash.amount_received = this.cash.amount_received - this.credit.amount_received;
        }
        this.totalPayment = this.cheque ? this.cash.amount_received + this.cheque.amount_received : this.cash.amount_received;
    }

    saveExecutionQuantity(): void {
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
        this.savingOrder = true;
        this.orderService.saveExecutionQuantityOrder(this.orderDetails).subscribe(res => {
            this.savingOrder = false;
            if (res.status === 200) {
                this.toastService.showToaster({
                    message: `Order for ${(this.selectedRetailer.retailer_name as string).toUpperCase()} execution updated successfully!`,
                    title: 'Order execution:',
                    type: 'success'
                });
            }
            this.orderDetails.items = [];
            this.selectedRetailer.isActive = false;
            this.selectedRetailer = JSON.parse(JSON.stringify(null));
            this.resetPaymentValues();
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
                this.orderDetails = null;
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
