import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { DataService } from '../../services';

@Component({
    selector: 'app-order-items-list',
    templateUrl: 'order-items.component.html',
    styleUrls: ['./order-items.component.css'],
})

export class OrderItemsListComponent implements OnInit, OnChanges {

    @Input() savingOrder: boolean;
    @Input() orderDetail: any;
    @Input() selectedRetailer: any;
    @Input() merchantDiscount: any;
    @Input() schemes: any;
    @Input() newProduct: any;
    @Input() specialDiscounts: Array<any>;
    @Input() allProducts: Array<any>;

    showProducts: boolean;

    grossAmount: number;
    netAmount: number;
    totalBookerDiscount: number;
    totalSchemeDiscount: number;
    totalSpecialDiscount: number;
    totalMerchantDiscount: number;
    totalAmountAfterScheme: number;
    selectedProductQuantities: number;
    totalTax: number;

    selectedItem: any;

    @Output() openDrawer: EventEmitter<boolean> = new EventEmitter();
    @Output() saveCurrentOrder: EventEmitter<any> = new EventEmitter();
    @Output() cancelCurrentOrder: EventEmitter<any> = new EventEmitter();

    constructor(
        private toastService: ToasterService,
        private dataService: DataService,
    ) {
        this.resetValues();
    }

    ngOnInit(): void {
        this.showProducts = false;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.orderDetail && changes.orderDetail.currentValue.items) {
            this.calculateTotalBill();
        }
        if (changes.newProduct?.currentValue) {
            this.orderDetail.items.push(this.newProduct);
            this.setQuantity(this.newProduct);
        }
        if (changes.savingOrder?.currentValue) {
            this.resetValues();
        }
    }

    resetValues(): void {
        this.totalTax = 0;
        this.netAmount = 0;
        this.grossAmount = 0;
        this.totalBookerDiscount = 0;
        this.totalSchemeDiscount = 0;
        this.totalSpecialDiscount = 0;
        this.totalMerchantDiscount = 0;
        this.totalAmountAfterScheme = 0;
        this.selectedProductQuantities = 0;
    }

    openProductsList(event: Event): void {
        event.stopPropagation();
        if (this.selectedRetailer?.retailer_id) {
            this.openDrawer.emit();
        } else {
            this.toastService.showToaster({
                type: 'error',
                title: 'Error:',
                message: 'Please select order to add products!'
            });
        }
    }

    isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
        if (event.key && event.key.includes('Arrow') || event.key.includes('Backspace') || event.key.includes('Delete') ||
            (type === 'charges' && event.key.includes('.'))) {
            return true;
        } else if (event.key && event.key.trim() === '') {
            return false;
        }
        return !isNaN(Number(event.key.trim()));
    }

    deleteProduct(): void {
        if (this.selectedItem.id) {
            this.selectedItem.stockQty = 0;
            this.setQuantity(this.selectedItem);
            this.selectedItem.isDeleted = true;
        } else {
            this.orderDetail.items = this.orderDetail.items.filter(x => x.item_id !== this.selectedItem.item_id);
            this.totalAmountAfterScheme = this.totalAmountAfterScheme - this.selectedItem.gross_amount;
            this.applySlabOnAllProducts();
        }
        document.getElementById('close-prod-del').click();
    }

    setQuantity(product: any): void {
        if (product.item_trade_price) {
            product.isDeleted = false;
            if (this.orderDetail.items.find(x => x.item_id === product.item_id) && this.totalAmountAfterScheme) {
                this.totalAmountAfterScheme = this.totalAmountAfterScheme - product.gross_amount;
            }
            this.calculateProductDiscounts(product);
            this.calculateProductPrice(product);
            this.calculateTotalBill();
            this.applySlabOnAllProducts();
        }
    }

    applySlabOnAllProducts(): void {
        if (this.merchantDiscount && this.merchantDiscount.discount_filter === 'slab') {
            this.orderDetail.items = this.orderDetail.items.map(product => {
                product = this.dataService.applySlabForTotal(product, this.merchantDiscount, this.totalAmountAfterScheme);
                product = this.calculateProductSpecialDiscount(product);
                if (product.extra_discount) {
                    product.price = product.unit_price_after_special_discount - +product.extra_discount;
                }
                this.calculateNetAmountOfProduct(product);
                return product;
            });
            this.calculateTotalBill();
        }
    }

    calculateProductPrice(product): void {
        product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty,
            product.item_trade_price);
        product.gross_amount = product.unit_price_after_scheme_discount * +product.stockQty;
    }

    calculateProductDiscounts(product: any, scheme?: any): void {
        // Trade Offer
        if (scheme) {
            product.selectedScheme = scheme;
        }
        if (product.selectedScheme) {
            product = this.applyScheme(product);
        } else {
            product.scheme_discount = 0;
            product.price = JSON.parse(JSON.stringify(product.item_trade_price));
            product.unit_price_after_scheme_discount = JSON.parse(JSON.stringify(product.item_trade_price));
        }

        // Trade Discount
        if (this.merchantDiscount) {
            product = this.dataService.applyMerchantDiscountForSingleProduct(this.merchantDiscount, product, this.totalAmountAfterScheme);
        } else {
            product.trade_discount = 0;
            product.trade_discount_pkr = 0;
            product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        }

        // Special Discount
        product = this.calculateProductSpecialDiscount(product);

        // Extra Discount => Booker Discount
        product.extra_discount = 0;
        product.extra_discount_pkr = 0;

        this.calculateNetAmountOfProduct(product);
    }

    calculateProductSpecialDiscount(product: any): any {
        return this.dataService.getSpecialDiscounts(this.selectedRetailer.segment_id,
            this.selectedRetailer.region_id, product, this.specialDiscounts);
    }

    calculateExtraDiscount(product: any): void {
        if (+product.extra_discount < product.unit_price_after_special_discount) {
            product.price = product.unit_price_after_special_discount - +product.extra_discount;
            product.extra_discount_pkr = +product.stockQty * +product.extra_discount;
        } else {
            product.extra_discount = 0;
            product.extra_discount_pkr = 0;
            product.price = product.unit_price_after_special_discount;
            const toast: Toaster = { type: 'error', message: 'Discount should not be greater than item price!', title: 'Error:' };
            this.toastService.showToaster(toast);
        }
        this.calculateNetAmountOfProduct(product);
        this.calculateTotalBill();
    }

    calculateNetAmountOfProduct(product: any): any {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, +product.stockQty);
        this.calculateProductTax(product);
    }

    calculateProductTax(product: any): void {
        if (product.tax_class_amount) {
            product.tax_amount_value = (product.tax_class_amount / 100) * product.item_retail_price;
            product.tax_amount_pkr = product.tax_amount_value * product.stockQty;
            product.net_amount = product.net_amount + product.tax_amount_pkr;
        } else {
            product.tax_amount_value = 0;
            product.tax_amount_pkr = 0;
        }
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

    calculateTotalBill(): void {
        if (this.orderDetail.items.length) {
            this.selectedProductQuantities = this.orderDetail.items.map(product => +product.stockQty).reduce((a, b) => a + b);
        }
        // Gross Amount
        let prices = this.orderDetail.items.map(product => product.original_amount);
        this.grossAmount = this.dataService.calculateItemsBill(prices);
        // Gross Amount
        prices = this.orderDetail.items.map(product => product.gross_amount);
        this.totalAmountAfterScheme = this.dataService.calculateItemsBill(prices);
        // Net Amount
        prices = this.orderDetail.items.map(product => product.net_amount);
        this.netAmount = this.dataService.calculateItemsBill(prices);
        this.selectedRetailer.order_total = this.netAmount;
        // Total Retail Price
        prices = this.orderDetail.items.map(product => product.stockQty * product.item_retail_price);
        const totalRetailPrice = this.dataService.calculateItemsBill(prices);
        // Scheme Discount
        let discount = this.orderDetail.items.map(product => product.scheme_discount);
        this.totalSchemeDiscount = this.dataService.calculateItemsBill(discount);
        // Trade Discount
        discount = this.orderDetail.items.map(product => product.trade_discount_pkr);
        this.totalMerchantDiscount = this.dataService.calculateItemsBill(discount);
        // Special Discount
        discount = this.orderDetail.items.map(product => +product.stockQty * product.special_discount_pkr);
        this.totalSpecialDiscount = this.dataService.calculateItemsBill(discount);
        // Extra Discount
        discount = this.orderDetail.items.map(product => +product.extra_discount_pkr);
        this.totalBookerDiscount = this.dataService.calculateItemsBill(discount);
        // Tax
        const taxes = this.orderDetail.items.map(product => product.tax_amount_pkr);
        this.totalTax = this.dataService.calculateItemsBill(taxes);

        this.orderDetail.total_discount = this.totalSchemeDiscount +
            this.totalMerchantDiscount +
            this.totalSpecialDiscount +
            this.totalBookerDiscount;
        this.orderDetail.total_amount_after_tax = this.netAmount;
        this.orderDetail.gross_sale_amount = this.grossAmount;
        this.orderDetail.total_retail_price = totalRetailPrice;
    }
}
