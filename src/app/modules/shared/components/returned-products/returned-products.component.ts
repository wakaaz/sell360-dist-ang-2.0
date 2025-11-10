import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';
import { DataService } from '../../services';

@Component({

    selector: 'app-returned-products',
    templateUrl: './returned-products.component.html',
    styleUrls: ['./returned-products.component.css'],
    encapsulation: ViewEncapsulation.None,
  standalone: false


})

export class ReturnedProductsComponent implements OnInit {

    @Input() productsList: Array<any>;
    @Input() orderReturnedItems: Array<any>;

    selectedProduct: any = {};
    selectedProductForSelect: any = null;
    showModal: boolean = true;

    @Output() productReturned: EventEmitter<any> = new EventEmitter();
    @Output() closeReturned: EventEmitter<boolean> = new EventEmitter();

    constructor(
        private dataService: DataService,
        private toastService: ToasterService,
    ) {
    }

    ngOnInit(): void {
    }

    isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
        return this.dataService.isNumber(event, type);
    }

    isAlreadyInOrder(product: any): any {
        return this.orderReturnedItems.find(x => x.item_id === product.item_id) ? true : false;
    }

    compareProducts = (o1: any, o2: any): boolean => {
        if (!o1 || !o2) {
            return false;
        }
        return o1.item_id === o2.item_id;
    }

    closeModal(event?: Event): void {
        if (event) {
            event.stopPropagation();
        }
        this.showModal = false;
        this.closeReturned.emit(true);
    }

    close(): void {
        this.closeModal();
    }

    productSelected(product: any): void {
        if (product) {
            this.selectedProduct = JSON.parse(JSON.stringify(product));
            this.selectedProductForSelect = product;
        } else {
            this.selectedProduct = {};
            this.selectedProductForSelect = null;
        }
    }

    setReturnedQty(): void {
        if (+this.selectedProduct.stockQty > 1000) {
            this.selectedProduct.stockQty = 0;
        }
        this.selectedProduct.item_quantity_booker = 0;
        this.selectedProduct.dispatch_qty = 0;
        this.selectedProduct.scheme_discount = 0;
        this.selectedProduct.unit_price_after_scheme_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.special_discount = 0;
        this.selectedProduct.unit_price_after_special_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.special_discount_pkr = 0;
        this.selectedProduct.trade_discount = 0;
        this.selectedProduct.unit_price_after_merchant_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.booker_discount = 0;
        this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price;
        this.selectedProduct.trade_discount_pkr = 0;
        this.selectedProduct.tax_amount_pkr = 0;
        this.selectedProduct.tax_class_amount = 0;
        this.selectedProduct.gross_amount = -(this.selectedProduct.item_trade_price * this.selectedProduct.stockQty);
        this.selectedProduct.original_amount = -(this.selectedProduct.item_trade_price * this.selectedProduct.stockQty);
        this.selectedProduct.total_retail_price = -(this.selectedProduct.item_retail_price * this.selectedProduct.stockQty);
        if (this.selectedProduct.extra_discount) {
            this.selectedProduct.booker_discount = +this.selectedProduct.extra_discount;
            this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price
                - this.selectedProduct.booker_discount;
        }
        this.selectedProduct.net_amount = -(this.selectedProduct.unit_price_after_individual_discount
            * this.selectedProduct.stockQty);
    }

    setExtraDiscount(): void {
        if (this.selectedProduct.stockQty) {
            if (this.checkDiscount()) {
                this.selectedProduct.booker_discount = +this.selectedProduct.extra_discount;
                this.selectedProduct.unit_price_after_individual_discount = this.selectedProduct.item_trade_price
                    - this.selectedProduct.booker_discount;
                this.selectedProduct.net_amount = -(this.selectedProduct.unit_price_after_individual_discount
                    * this.selectedProduct.stockQty);
            }
        }
    }

    checkDiscount(): boolean {
        if (this.selectedProduct.extra_discount && +this.selectedProduct.extra_discount > this.selectedProduct.item_trade_price) {
            this.resetDiscount();
            return false;
        }
        return true;
    }

    resetDiscount(): void {
        const toast: Toaster = { type: 'error', title: 'Incorrect discount:',
        message: `Discount should not be greater than item price!` };
        this.toastService.showToaster(toast);
        this.selectedProduct.extra_discount = 0;
        this.setExtraDiscount();
    }

    addReturned(): void {
        const toast: Toaster = { type: 'error', title: 'Fill the fields:', message: 'Please fill all the required fields before adding!' };
        if (!this.selectedProduct.hasOwnProperty('item_name') || !this.selectedProduct.net_amount
            || !this.selectedProduct.returnType || !this.selectedProduct.stockQty) {
            this.toastService.showToaster(toast);
        } else if (this.selectedProduct.extra_discount && +this.selectedProduct.extra_discount > this.selectedProduct.item_trade_price) {
            this.resetDiscount();
        } else {
            this.selectedProduct.productType = 'returned';
            this.selectedProduct.item_quantity_booker = 0;
            this.productReturned.emit(this.selectedProduct);
            this.selectedProduct = {};
            this.selectedProductForSelect = null;
        }
    }

}
