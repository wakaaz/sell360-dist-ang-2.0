import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Toaster, ToasterService } from '../../../../core/services/toaster.service';
import { DataService } from '../../../shared/services/data.service';

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

    selectedEmployee: string;
    selectedRetailer: string;
    selectedRoute: string;
    productSearchText: string;

    selectedProduct: any = {};

    allProducts: Array<any> = [];
    dispProducts: Array<any> = [];
    discounts: Array<any> = [];
    prefrences: Array<any> = [];
    employees: Array<any> = [];
    routes: Array<any> = [];
    retailers: Array<any> = [];
    selectedProducts: Array<any> = [];
    selectedProductsIds: Array<any> = [];

    constructor(
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
        this.getCounterSaleData();
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
                this.discounts = res.data.special_discount;
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

    goBack(): void {
        window.history.back();
    }

    openQuantityModal(product: any): void {
        this.showQuantityModal = true;
        this.selectedProduct = product;
        this.selectedProduct.pref_id = null;
        this.selectedProduct.unit_id = null;
        this.selectedProduct.unit_name = null;
        this.selectedProduct.quantity = null;
        this.selectedProduct.units = this.prefrences.filter(x => x.item_id === product.item_id);
    }

    showProductsList(event: Event): void {
        event.stopPropagation();
        this.showProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('counter-sale').classList.add('blur-div');
    }

    setPrefrence(prefId: number): void {
        const prefrence = this.prefrences.find(x => x.pref_id === +prefId);
        this.selectedProduct.unit_id = prefrence.unit_id;
        this.selectedProduct.item_trade_price = prefrence.item_trade_price;
        this.selectedProduct.unit_name = prefrence.unit_name;
        if (this.selectedProduct.quantity) {
            this.calculateProductPrice();
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

    setQuantity(): void {
        if (this.selectedProduct.item_trade_price) {
            this.calculateProductPrice();
        }
    }

    calculateProductPrice(): void {
        this.selectedProduct.original_amount = this.dataService.calculateUnitPrice(+this.selectedProduct.quantity,
            this.selectedProduct.item_trade_price);
    }

    addProductToOrder(): void {
        this.showQuantityModal = false;
        this.selectedProducts.push(this.selectedProduct);
        this.selectedProductsIds.push(this.selectedProduct.item_id);
        document.getElementById('pl-qty-close').click();
    }

    removeProductFromOrder(product: any): void {
        this.selectedProducts = this.selectedProducts.filter(x => x.item_id !== product.item_id);
        this.selectedProductsIds = this.selectedProductsIds.filter(x => x !== product.item_id);
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
