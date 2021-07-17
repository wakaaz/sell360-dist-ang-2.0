import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { DataTableDirective } from 'angular-datatables';
import { from, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ToasterService } from 'src/app/core/services/toaster.service';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { DistributorPurchaseModel, ItemModel } from '../../model/distributor-purchase.model';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'app-distributor-purchase',
    templateUrl: './distributor-purchase.component.html',
    styleUrls: ['./distributor-purchase.component.css']
})

export class DistributorPurchaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(DataTableDirective, { static: false })
    dtPurchasedProducts: DataTableDirective;

    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<any> = new Subject<any>();
    dtOptions: DataTables.Settings = {};

    showFreeProducts: boolean;
    addNewProducts: boolean;
    loadingProducts: boolean;
    submitted: boolean;
    loading: boolean;

    distributorPurchase: DistributorPurchaseModel;

    subTotalBill: number;
    totalBill: number;
    distributionDiscount: number;

    purchasedProductsIds: Array<number> = [];
    freeProductsIds: Array<number> = [];
    freeProducts: Array<any>;
    purchasedProducts: Array<any>;
    products: Array<any>;
    productsDispList: Array<any>;
    productPrefs: Array<any>;
    itemMargin: Array<any>;

    constructor(
        private change: ChangeDetectorRef,
        private router: Router,
        private inventoryService: InventoryService,
        private toastService: ToasterService,
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
        this.distributorPurchase = {
            dcDate: '  ',
            dcNo: '',
            invoiceDate: '  ',
            invoiceNo: '',
            poDate: '  ',
            poNo: null,
            receivedDate: '  ',
            receivedNo: null,
            remark: '',
            gst: 0,
            fare: 0,
            supplier: 'shahi',
            original_amount: 0,
            discount: 0,
            net_amount: 0,
            items: [],
            free: []
        };
        this.loading = false;
        this.showFreeProducts = false;
        this.addNewProducts = false;
        this.subTotalBill = 0;
        this.totalBill = 0;
        this.freeProducts = [];
        this.purchasedProducts = [];
        this.productPrefs = [];
        this.itemMargin = [];
        this.getDistributorInventory();
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }

    getDistributorInventory(): void {
        this.loadingProducts = true;
        this.inventoryService.getDistributorPurchaseData().subscribe((res: any) => {
            this.loadingProducts = false;
            if (res.status === 200) {
                this.productPrefs = res.data.prefs;
                this.itemMargin = res.data.itemMargin;
                this.products = res.data.inventory.map(x => {
                    x.discount = 0;
                    x.discount_type = 'percentage',
                        x.discount_type_value = this.itemMargin.find(m => m.item_id === x.item_id)?.discount || 0;
                    x.net_amount = 0;
                    x.quantity = 0;
                    x.original_amount = 0;
                    return x;
                });
                this.productsDispList = JSON.parse(JSON.stringify(this.products));
            }
        }, error => {
            this.loadingProducts = false;
        });
    }

    searchProducts(searchText: string): void {
        if (searchText) {
            this.productsDispList = this.products.filter(product => product.item_name.toLowerCase().includes(searchText.toLowerCase()));
        } else {
            this.productsDispList = JSON.parse(JSON.stringify(this.products));
        }
    }

    addSelectedProduct(product: any): void {
        if (this.showFreeProducts) {
            this.freeProducts.push(JSON.parse(JSON.stringify(product)));
            this.freeProductsIds.push(product.item_id);
            this.rerenderPurchasedProducts();
        } else {
            this.purchasedProducts.push(JSON.parse(JSON.stringify(product)));
            this.purchasedProductsIds.push(product.item_id);
            this.rerenderPurchasedProducts();
        }
    }

    getArray(): Array<any> {
        return this.showFreeProducts ? this.freeProducts : this.purchasedProducts;
    }

    rerenderPurchasedProducts(): void {
        from(this.dtPurchasedProducts.dtInstance)
            .pipe(tap(dt => dt.destroy()))
            .subscribe(fr => {
                this.dtTrigger.next();
                this.change.detectChanges();
            });
    }

    removeSelectedProduct(product: any): void {
        if (this.showFreeProducts) {
            const ind = this.freeProducts.findIndex(x => x.item_id === product.item_id);
            this.freeProducts.splice(ind, 1);
            this.freeProductsIds.splice(ind, 1);
        } else {
            const ind = this.purchasedProducts.findIndex(x => x.item_id === product.item_id);
            this.purchasedProducts.splice(ind, 1);
            this.purchasedProductsIds.splice(ind, 1);
            this.distributionDiscount -= product.discount;
        }
        this.rerenderPurchasedProducts();
    }

    openNewProducts(event: Event): void {
        event.stopPropagation();
        this.addNewProducts = true;
        document.body.classList.add('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.add('d-block');
        document.getElementById('purchase-list').classList.add('blur-div');
    }

    closeNewProducts(): void {
        this.addNewProducts = false;
        document.body.classList.remove('no-scroll');
        document.getElementsByClassName('overlay-blure')[0].classList.remove('d-block');
        document.getElementById('purchase-list').classList.remove('blur-div');
    }

    clickOutSide(event: Event): void {
        if (!(event.target as HTMLElement).className.includes('ng-option')
            && !(event.target as HTMLElement).className.includes('ng-value-icon left')) {
            this.closeNewProducts();
        }
    }

    isInTheArray(productId: number): boolean {
        if (this.showFreeProducts) {
            return this.freeProductsIds.includes(productId);
        } else {
            return this.purchasedProductsIds.includes(productId);
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
        if (event.key.includes('Arrow') || event.key.includes('Backspace') || event.key.includes('Delete') || event.key.includes('.')) {
            return true;
        }
        return !isNaN(Number(event.key));
    }

    getUnits(itemId: number): Array<any> {
        return this.productPrefs.filter(pref => pref.item_id === itemId);
    }

    setPreference(item: ItemModel, prefId: any, isFree: boolean = false): void {
        const selectedPref = this.productPrefs.find(x => x.pref_id === +prefId);
        item.pref_id = selectedPref.pref_id;
        item.unit_id = selectedPref.unit_id;
        item.unit_name = selectedPref.unit_name;
        if (item.quantity > 0) {
            item.original_amount = this.dataService.calculateUnitPrice(item.quantity, selectedPref.item_trade_price);
            item.discount = this.dataService.calculateDiscount(item.discount_type_value,
                item.discount_type, item.original_amount);
            item.net_amount = item.original_amount - item.discount;
            if (!isFree) {
                this.calculateSubTotal();
            }
        }
    }

    getUnitPrice(item: ItemModel, isFree: boolean = false): void {
        if (item.pref_id) {
            const unitPrice = this.productPrefs.find(x => x.pref_id === item.pref_id).item_trade_price;
            item.original_amount = this.dataService.calculateUnitPrice(item.quantity, unitPrice);
            item.discount = this.dataService.calculateDiscount(item.discount_type_value,
                item.discount_type, item.original_amount);
            item.net_amount = item.original_amount - item.discount;
            if (!isFree) {
                this.calculateSubTotal();
            }
        }
    }

    calculateSubTotal(): void {
        const prices = [];
        this.distributorPurchase.discount = 0;
        this.purchasedProducts.forEach(product => {
            this.distributorPurchase.discount += product.discount;
            prices.push(product.original_amount);
            if (prices.length === this.purchasedProducts.length) {
                this.distributorPurchase.original_amount = this.dataService.calculateItemsBill(prices);
            }
        });
        this.calculateTotal();
    }

    calculateTotal(): void {
        this.distributorPurchase.net_amount = +this.distributorPurchase.original_amount +
            +this.distributorPurchase.gst + +this.distributorPurchase.fare - this.distributorPurchase.discount;
    }

    placeOrder(): void {
        this.submitted = true;
        if (this.validateForm()) {
            this.loading = true;
            this.distributorPurchase.discount = Number(this.distributorPurchase.discount.toFixed(2));
            this.distributorPurchase.net_amount = Number(this.distributorPurchase.net_amount.toFixed(2));
            this.distributorPurchase.original_amount = Number(this.distributorPurchase.original_amount.toFixed(2));
            this.distributorPurchase.items = this.purchasedProducts.map(product => {
                const regularProduct = {
                    type: 'regular',
                    pref_id: product.pref_id,
                    unit_id: product.unit_id,
                    item_id: product.item_id,
                    item_name: product.item_name,
                    unit_name: product.unit_name,
                    quantity: product.quantity,
                    original_amount: product.original_amount.toFixed(2),
                    discount: product.discount.toFixed(2),
                    discount_type: 'percentage',
                    discount_type_value: product.discount_type_value,
                    net_amount: product.net_amount.toFixed(2),
                };
                return regularProduct;
            });
            this.distributorPurchase.free = this.freeProducts.map(product => {
                const regularProduct = {
                    type: 'free',
                    pref_id: product.pref_id,
                    unit_id: product.unit_id,
                    item_id: product.item_id,
                    item_name: product.item_name,
                    unit_name: product.unit_name,
                    quantity: product.quantity,
                    original_amount: product.original_amount.toFixed(2),
                    discount: product.original_amount,
                    discount_type: 'percentage',
                    discount_type_value: 100,
                    net_amount: 0,
                };
                return regularProduct;
            });
            this.inventoryService.addDistributorPurchase(this.distributorPurchase).subscribe(res => {
                this.loading = false;
                this.toastService.showToaster({
                    title: 'Order Placed:',
                    message: 'Your order is placed successfully.',
                    type: 'success'
                });
                this.router.navigateByUrl('/inventory/gallery');
            }, error => {
                this.loading = false;
                if (error.status !== 401 && error.status !== 1) {
                    this.toastService.showToaster({
                        title: 'Error:',
                        message: 'Order is not placed, try again later.',
                        type: 'error'
                    });
                }
            });
        }
    }

    validateForm(): boolean {
        if (
            !this.distributorPurchase.dcDate ||
            !this.distributorPurchase.dcNo ||
            this.distributorPurchase.discount === null ||
            this.distributorPurchase.fare === null ||
            this.distributorPurchase.gst === null ||
            !this.distributorPurchase.invoiceDate ||
            !this.distributorPurchase.invoiceNo ||
            (!this.purchasedProducts.length && !this.freeProducts.length) ||
            this.distributorPurchase.net_amount === null ||
            !this.distributorPurchase.original_amount ||
            !this.distributorPurchase.poDate ||
            !this.distributorPurchase.poNo ||
            !this.distributorPurchase.receivedDate ||
            !this.distributorPurchase.receivedNo ||
            !this.distributorPurchase.remark ||
            !this.distributorPurchase.supplier
        ) {
            return false;
        } else {
            return true;
        }
    }

    ngOnDestroy(): void {
        if (this.dtTrigger) { this.dtTrigger.unsubscribe(); }
        this.change.detach();
    }

}
