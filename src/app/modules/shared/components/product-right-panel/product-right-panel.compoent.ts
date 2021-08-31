import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { freeProductsRules, schemes } from 'src/app/core/constants/schemes.constant';
import { DataService } from '../../services';

@Component({
    selector: 'app-products-drawer',
    templateUrl: 'product-right-panel.compoent.html',
    styleUrls: ['./product-right-panel.compoent.css']
})

export class ProductsRightPanelComponent implements OnInit, OnChanges {
    @Input() loadingProducts: boolean;
    @Input() allProducts: Array<any>;
    @Input() productSchemes: Array<any>;
    @Input() selectedRetailer: any;
    @Input() productMerchantDiscount: any;

    productSearchText: string;

    isAdded: boolean;
    showQuantityModal: boolean;

    selectedProduct: any = {};

    dispProducts: Array<any> = [];

    @Output() drawerClosed: EventEmitter<boolean> = new EventEmitter();
    @Output() productSelected: EventEmitter<any> = new EventEmitter();

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
    }

    ngOnChanges(change: SimpleChanges): void {
        if (change.allProducts?.currentValue) { this.dispProducts = JSON.parse(JSON.stringify(this.allProducts)); }
    }

    isNumber(event: Event): boolean {
        return true;
    }

    calculateProductDiscounts(selectedProduct, scheme): void {
    }

    addProductToOrder(): void {
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
            this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
        }
    }

    openQuantityModal(product: any): void {
        this.showQuantityModal = true;
        product.schemes = this.dataService.getSchemes(product.item_id,
            product.unit_id, product.pref_id, this.productSchemes, this.selectedRetailer.type_id, this.selectedRetailer.retailer_id);
        if (product.schemes?.length) {
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
        }
        this.selectedProduct = JSON.parse(JSON.stringify(product));
        // this.selectedProduct.selectedScheme = null;
    }

    clickedOutSide(event: Event): void {
        if (!this.showQuantityModal && !(event.target as HTMLElement).classList.contains('dont-close-products')) {
            this.closeProductsList();
        }
    }

    closeProductsList(): void {
        this.drawerClosed.emit(true);
    }

}
