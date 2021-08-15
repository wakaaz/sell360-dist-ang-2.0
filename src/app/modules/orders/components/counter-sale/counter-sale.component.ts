import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services/data.service';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { freeProductsRules, schemes } from 'src/app/core/constants/schemes.constant';

@Component({
    selector: 'app-counter-sale',
    templateUrl: './counter-sale.component.html',
    styleUrls: ['./counter-sale.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class CounterSaleComponent implements OnInit {

    showProducts: boolean;
    showQuantityModal: boolean;
    isCredit: boolean;
    loadingProducts: boolean;

    grossAmount: number;
    tradeOffer: number;
    tradeDiscount: number;
    specialDiscount: number;
    extraDiscount: number;
    tax: number;
    dueAmount: number;
    selectedEmployee: number;
    selectedRoute: number;
    selectedRegion: number;
    selectedSegment: number;

    productSearchText: string;

    selectedProduct: any = {};
    selectedRetailer: any;

    allProducts: Array<any> = [];
    dispProducts: Array<any> = [];
    specialDiscounts: Array<any> = [];
    prefrences: Array<any> = [];
    orderBookers: Array<any> = [];
    routes: Array<any> = [];
    retailers: Array<any> = [];
    selectedProducts: Array<any> = [];
    selectedProductsIds: Array<any> = [];
    schemes: Array<any> = [];

    constructor(
        private storageService: LocalStorageService,
        private ordersService: OrdersService,
        private toastService: ToasterService,
        private dataService: DataService,
    ) {
    }

    ngOnInit(): void {
        this.grossAmount = 0.00;
        this.tradeOffer = 0.00;
        this.tradeDiscount = 0.00;
        this.specialDiscount = 0.00;
        this.extraDiscount = 0.00;
        this.tax = 0.00;
        this.dueAmount = 0.00;
        this.getOrderBookers();
        this.getCounterSaleData();
        this.getSchemesData();
    }

    getOrderBookers(): void {
        const distributor = this.storageService.getItem('distributor');
        this.ordersService.getOrderBookers(distributor.id).subscribe(res => {
            if (res.status === 200) {
                this.orderBookers = res.data;
            } else {
                const toast: Toaster = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = { type: 'error', message: 'Cannot fetch order bookers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getCounterSaleData(): void {
        this.loadingProducts = true;
        this.ordersService.getCounterSaleData().subscribe((res: any) => {
            this.loadingProducts = false;
            if (res.status === 200) {
                this.allProducts = res.data.inventory.map(pr => {
                    pr.net_amount = 0.00;
                    return pr;
                });
                debugger;
                this.specialDiscounts = res.data.special_discount;
                this.prefrences = res.data.prefs;
                this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
            } else {
                const toast: Toaster = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            this.loadingProducts = false;
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = { type: 'error', message: 'Cannot fetch counter sale data. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getSchemesData(): void {
        this.ordersService.getSchemes().subscribe(res => {
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

    goBack(): void {
        window.history.back();
    }

    getRoutes(): void {
        const employee = this.orderBookers.find(x => x.employee_id === this.selectedEmployee);
        this.selectedRegion = employee.region_id;
        this.selectedSegment = employee.segment_id;
        this.ordersService.getOrderBookerRoutes(this.selectedEmployee).subscribe(res => {
            if (res.status === 200) {
                this.routes = res.data;
            } else {
                const toast: Toaster = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = { type: 'error', message: 'Cannot fetch order booker routes. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    getRetailerByRoute(): void {
        this.ordersService.getRetailersByRoute(this.selectedRoute).subscribe(res => {
            if (res.status === 200) {
                this.retailers = res.data;
            } else {
                const toast: Toaster = { type: 'error', message: res.message, title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        }, error => {
            if (error.status !== 1 && error.status !== 401) {
                const toast: Toaster = { type: 'error', message: 'Cannot fetch retailers. Please try again', title: 'Error:' };
                this.toastService.showToaster(toast);
            }
        });
    }

    openQuantityModal(product: any): void {
        this.showQuantityModal = true;
        this.selectedProduct = product;
        this.selectedProduct.pref_id = null;
        this.selectedProduct.unit_id = null;
        this.selectedProduct.unit_name = null;
        this.selectedProduct.quantity = null;
        this.selectedProduct.schemes = [];
        this.selectedProduct.selectedScheme = null;
        this.selectedProduct.units = this.prefrences.filter(x => x.item_id === product.item_id);
    }

    showProductsList(event: Event): void {
        event.stopPropagation();
        if (this.selectedRetailer) {
            this.showProducts = true;
            document.body.classList.add('no-scroll');
            document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
            document.getElementById('counter-sale').classList.add('blur-div');
        } else {
            this.toastService.showToaster({
                type: 'error',
                message: 'Please select Retailer first!',
                title: 'Fill required fields:'
            });
        }
    }

    setPrefrence(prefId: number, product: any): void {
        const prefrence = this.prefrences.find(x => x.pref_id === +prefId);
        product.unit_id = prefrence.unit_id;
        product.item_trade_price = prefrence.item_trade_price;
        product.unit_name = prefrence.unit_name;
        product.schemes = this.dataService.getSchemes(product.item_id,
            product.unit_id, product.pref_id, this.schemes, this.selectedRetailer);
        if (product.quantity) {
            product.schemes = product.schemes.map(scheme => {
                switch (scheme.scheme_type) {
                    case 'free_product':
                        scheme.name = schemes.free_products;
                        scheme.rule_name = freeProductsRules[scheme.scheme_rule];
                        break;
                    case 'dotp':
                        scheme.name = schemes.dotp;
                        break;
                    default:
                        scheme.name = schemes.gift;
                        break;
                }
                return scheme;
            });
            this.calculateProductDiscounts(product);
            this.calculateProductPrice(product);
            this.calculateTotalBill();
        }
    }

    isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
        if (event.key.includes('Arrow') || event.key.includes('Backspace') || event.key.includes('Delete') ||
            (type === 'charges' && event.key.includes('.'))) {
            return true;
        } else if (event.key.trim() === '') {
            return false;
        }
        return !isNaN(Number(event.key.trim()));
    }

    setQuantity(product: any): void {
        if (product.item_trade_price) {
            this.calculateProductDiscounts(product);
            this.calculateProductPrice(product);
            this.calculateTotalBill();
        }
    }

    calculateProductPrice(product): void {
        product.net_amoutn = this.dataService.calculateUnitPrice(+product.quantity, product.price);
        product.original_amount = this.dataService.calculateUnitPrice(+product.quantity,
            product.item_trade_price);
    }

    addProductToOrder(): void {
        this.showQuantityModal = false;
        this.selectedProducts.push(this.selectedProduct);
        this.selectedProductsIds.push(this.selectedProduct.item_id);
        this.calculateTotalBill();
        document.getElementById('pl-qty-close').click();
    }

    removeProductFromOrder(product: any): void {
        this.selectedProducts = this.selectedProducts.filter(x => x.item_id !== product.item_id);
        this.selectedProductsIds = this.selectedProductsIds.filter(x => x !== product.item_id);
        this.calculateTotalBill();
    }

    calculateProductDiscounts(product: any, scheme?: any): void {
        if (scheme) {
            product.selectedScheme = scheme;
        }
        if (product.selectedScheme) {
            product = this.applyScheme(product);
        } else {
            product.scheme_discount = 0;
            product.price = JSON.parse(JSON.stringify(product.item_trade_price));
        }

        // Trade Discount Static for now
        product.trade_discount = 0;
        product.extra_discount = 0;
        product = this.dataService.getSpecialDiscounts(this.selectedSegment,
            this.selectedRegion, product, this.specialDiscounts);
        this.calculateNetAmountOfProduct(product);
    }

    calculateExtraDiscount(product: any): void {
        this.calculateNetAmountOfProduct(product);
        product.net_amount = product.net_amount - +product.extra_discount;
        this.calculateTotalBill();
    }

    calculateNetAmountOfProduct(product: any): any {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, product.quantity);
    }

    calculateTotalBill(): void {
        // Gross Amount
        let prices = this.selectedProducts.map(product => product.original_amount);
        this.grossAmount = this.dataService.calculateItemsBill(prices);
        // Net Amount
        prices = this.selectedProducts.map(product => product.net_amount);
        this.dueAmount = this.dataService.calculateItemsBill(prices);
        // Scheme Discount
        let discount = this.selectedProducts.map(product => product.scheme_discount);
        this.tradeOffer = this.dataService.calculateItemsBill(discount);
        // Trade Discount
        discount = this.selectedProducts.map(product => product.trade_discount);
        this.tradeDiscount = this.dataService.calculateItemsBill(discount);
        // Special Discount
        discount = this.selectedProducts.map(product => product.special_discount);
        this.specialDiscount = this.dataService.calculateItemsBill(discount);
        // Extra Discount
        discount = this.selectedProducts.map(product => product.extra_discount);
        this.extraDiscount = this.dataService.calculateItemsBill(discount);
    }

    applyScheme(product: any): any {
        switch (product.selectedScheme.scheme_type) {
            case 'free_product':
                product = this.applyFreeProductScheme(product);
                break;
            case 'dotp':
                product = this.applyDOTPScheme(product);
                break;
            default:
                product = this.applyGiftScheme(product);
                break;
        }
        return product;
    }

    applyFreeProductScheme(product: any): any {
        product = this.dataService.applyFreeProductScheme(product);
        return product;
    }

    applyDOTPScheme(product: any): any {
        return this.dataService.getSDForDOTP(product);
    }

    applyGiftScheme(product: any): any {
        return this.dataService.getSDForGift(product);
    }

    closeQuantityModal(event: Event): void {
        if (this.showQuantityModal && !(event.target as HTMLElement).classList.contains('dont-close-quantity')) {
            this.showQuantityModal = false;
            this.selectedProduct = JSON.parse(JSON.stringify({}));
        }
    }

    searchProduct(): void {
        if (this.productSearchText) {
            this.dispProducts = this.allProducts.filter(prod =>
                prod.item_name.toLowerCase().includes(this.productSearchText.toLowerCase()));
        } else {
            this.dispProducts = this.allProducts.filter(prod =>
                prod.item_name.toLowerCase().includes(this.productSearchText.toLowerCase()));
        }
    }

    isAlreadyAdded(itemId: number): boolean {
        return this.selectedProductsIds.includes(itemId);
    }

    clickedOutSide(event: Event): void {
        if (this.showProducts && !this.showQuantityModal && !(event.target as HTMLElement).classList.contains('dont-close-products')) {
            this.closeProductsList();
        }
    }

    closeProductsList(): void {
        this.showProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('counter-sale').classList.remove('blur-div');
    }

}
