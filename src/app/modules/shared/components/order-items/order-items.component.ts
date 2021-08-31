import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { DataService } from '../../services';

@Component({
    selector: 'app-order-items-list',
    templateUrl: 'order-items.component.html',
    styleUrls: ['./order-items.component.css'],
})

export class OrderItemsListComponent implements OnInit, OnChanges {

    @Input() orderDetail: any;
    @Input() selectedRetailer: any;
    @Input() merchantDiscount: any;
    @Input() schemes: any;
    @Input() specialDiscounts: Array<any>;

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

    @Output() openDrawer: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private toastService: ToasterService,
        private dataService: DataService,
    ) {
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

    ngOnInit(): void {
        this.showProducts = false;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedRetailer || changes.merchantDiscount || changes.specialDiscount || changes.orderDetail) {
            if (this.selectedRetailer &&
                this.merchantDiscount &&
                this.specialDiscounts
                && this.orderDetail.order_detail) {
                this.orderDetail.order_detail.map(item => {
                    this.setQuantity(item);
                });
            }
        }
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

    deleteProduct(item: any): void {
    }

    setQuantity(product: any): void {
        if (product.tp) {
            if (this.orderDetail.order_detail.find(x => x.item_id === product.item_id) && this.totalAmountAfterScheme) {
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
            this.orderDetail.order_detail = this.orderDetail.order_detail.map(product => {
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
        product.net_amount = this.dataService.calculateUnitPrice(+product.stockQty, product.price);
        product.original_amount = this.dataService.calculateUnitPrice(+product.stockQty,
            product.tp);
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
            product.price = JSON.parse(JSON.stringify(product.tp));
            product.unit_price_after_scheme_discount = JSON.parse(JSON.stringify(product.tp));
        }

        // Trade Discount
        if (this.merchantDiscount) {
            product = this.dataService.applyMerchantDiscountForSingleProduct(this.merchantDiscount, product, this.grossAmount);
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

    calculateNetAmountOfProduct(product: any): any {
        product.net_amount = this.dataService.calculateUnitPrice(product.price, +product.stockQty);
        this.calculateProductTax(product);
    }

    calculateProductTax(product: any): void {
        if (product.tax_class_amount) {
            product.tax_amount_value = this.dataService.roundUptoTwoDecimal(
                ((product.tax_class_amount / 100) * product.item_retail_price));
            product.tax_amount_pkr = this.dataService.roundUptoTwoDecimal(product.tax_amount_value * product.stockQty);
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
        if (this.orderDetail.order_detail.length) {
            this.selectedProductQuantities = this.orderDetail.order_detail.map(product => +product.stockQty).reduce((a, b) => a + b);
        }
        // Gross Amount
        let prices = this.orderDetail.order_detail.map(product => product.original_amount);
        this.grossAmount = this.dataService.calculateItemsBill(prices);
        // Gross Amount
        prices = this.orderDetail.order_detail.map(product => product.gross_amount);
        this.totalAmountAfterScheme = this.dataService.calculateItemsBill(prices);
        // Net Amount
        prices = this.orderDetail.order_detail.map(product => product.net_amount);
        this.netAmount = this.dataService.calculateItemsBill(prices);
        // Order Original
        prices = this.orderDetail.order_detail.map(product => product.original_amount);
        this.grossAmount = JSON.parse(JSON.stringify(this.netAmount));
        // Scheme Discount
        let discount = this.orderDetail.order_detail.map(product => product.scheme_discount);
        this.totalSchemeDiscount = this.dataService.calculateItemsBill(discount);
        // Trade Discount
        discount = this.orderDetail.order_detail.map(product => product.trade_discount_pkr);
        this.totalMerchantDiscount = this.dataService.calculateItemsBill(discount);
        // Special Discount
        discount = this.orderDetail.order_detail.map(product => +product.stockQty * product.special_discount_pkr);
        this.totalSpecialDiscount = this.dataService.calculateItemsBill(discount);
        // Extra Discount
        discount = this.orderDetail.order_detail.map(product => +product.extra_discount_pkr);
        this.totalBookerDiscount = this.dataService.calculateItemsBill(discount);
        // Tax
        const taxes = this.orderDetail.order_detail.map(product => product.tax_amount_pkr);
        this.totalTax = this.dataService.calculateItemsBill(taxes);

    }
}
