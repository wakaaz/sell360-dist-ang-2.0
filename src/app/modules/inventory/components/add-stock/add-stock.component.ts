import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
    selector: 'app-add-stock',
    templateUrl: 'add-stock.component.html',
    styleUrls: ['./add-stock.component.css']
})

export class AddStockComponent implements OnInit {

    dtOptions: DataTables.Settings = {};
    products: Array<any> = [];
    categories: Array<any> = [];
    brands: Array<any> = [];
    stock: Array<any> = [];
    submitted: boolean;
    loading: boolean;
    noProducts: boolean;

    constructor(
        private router: Router,
        private inventoryService: InventoryService,
        private toastService: ToasterService,
    ) {
        this.dtOptions = {
            pagingType: 'simple_numbers'
        };
    }

    ngOnInit(): void {
        this.submitted = false;
        this.getAllProducts();
        this.getBrands();
        this.getCategories();
    }

    getAllProducts(): void {
        this.loading = true;
        this.inventoryService.getDistributorPurchaseData().subscribe((res: any) => {
            this.loading = false;
            if (res.status === 200) {
                this.products = res.data.prefs.map(x => {
                    const product = res.data.inventory.find(p => p.item_id === x.item_id);
                    product.isAdded = false;
                    return {...x, ...product};
                });
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({title: 'Error:', message: 'Something went wrong while fetching products!', type: 'error'});
            }
        });
    }

    getBrands(): void {
        this.inventoryService.getBrnads().subscribe((res: any) => {
            this.brands = res.data;
        }, error => {
            console.log('Error while getting brands', error);
        });
    }

    getCategories(): void {
        this.inventoryService.getCategories().subscribe((res: any) => {
            this.categories = res.data;
        }, error => {
            console.log('Error while getting brands', error);
        });
    }

    addProduct(product: any): void {
        product.isAdded = true;
        const {pref_id, unit_id, item_id, unit_name, item_name, quantity } = product;
        this.stock.push({pref_id, unit_id, item_id, unit_name, item_name, quantity });
    }

    removeProduct(product: any): void {
        product.isAdded = false;
        this.stock = this.stock.filter(x => x.item_id !== product.item_id);
    }

    addOpeningStock(): void {
        if (this.stock.length) {
            this.submitted = true;
            this.inventoryService.addDistributorOpeningStock(this.stock).subscribe(res => {
                this.submitted = false;
                if (res.status === 200) {
                    this.toastService.showToaster({
                        title: 'Stock Added', message: 'Opening Stock added successfully!', type: 'success'
                    });
                    this.router.navigateByUrl('/inventory/stock');
                } else if (res.type === 'error') {
                    this.toastService.showToaster({title: 'Error:', message: res.message, type: 'error'});
                }
            }, error => {
                this.submitted = false;
                if (error.status !== 1 && error.status !== 401) {
                    this.toastService.showToaster({title: 'Error:', message: 'Something went wrong while adding stock!', type: 'error'});
                }
            });
        } else {
            this.noProducts = true;
            setTimeout(() => {
                this.noProducts = false;
            }, 3000);
        }
    }
}
