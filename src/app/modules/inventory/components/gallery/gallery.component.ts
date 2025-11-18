import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

import { InventoryService } from '../../services/inventory.service';

@Component({

    selector: 'app-gallerty-component',
    templateUrl: 'gallery.component.html',
    styleUrls: ['./gallery.component.css'],
  standalone: false


})

export class GalleryComponent implements OnInit, OnDestroy {

    searchText: string;
    sortFilter: string;

    selectedBrand: string;
    selectedCategory: string;

    totalProducts: number;
    pageNum: number;
    pageCount: number;
    productsPerPage: number = 12;
    lastVisitedPage: number;

    showList: boolean = true;

    loading: boolean;
    loadingError: boolean;

    timer: any;

    products: Array<any>;
    productsFilteredArray: Array<any>;
    productDispList: Array<any>;
    categories: Array<any>;
    brands: Array<any>;

    constructor(
        private inventoryService: InventoryService,
    ) {
    }

    ngOnInit(): void {
        this.searchText = '';
        this.sortFilter = '0';
        this.selectedBrand = 'All Brands';
        this.selectedCategory = 'All Categories';
        this.totalProducts = 0;
        this.showList = true;
        this.setProductsPerPage();
        this.loading = false;
        this.loadingError = false;
        this.getAllProducts();
        this.getBrands();
        this.getCategories();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        const previousProductsPerPage = this.productsPerPage;
        this.setProductsPerPage();
        
        if (previousProductsPerPage !== this.productsPerPage && this.productsFilteredArray) {
            this.countPagesAndProductsDisp(this.productsFilteredArray);
        }
    }

    setProductsPerPage(): void {
        // List view always uses 12 products per page
        // Grid view: 15 products per page for screens > 1440px, otherwise 12
        if (this.showList) {
            this.productsPerPage = 12;
        } else {
            // Grid view: check screen size
            if (typeof window !== 'undefined' && window.innerWidth > 1440) {
                this.productsPerPage = 15;
            } else {
                this.productsPerPage = 12;
            }
        }
    }

    toggleView(isListView: boolean): void {
        const previousProductsPerPage = this.productsPerPage;
        this.showList = isListView;
        this.setProductsPerPage();
        
        // If productsPerPage changed, recalculate pagination
        if (previousProductsPerPage !== this.productsPerPage && this.productsFilteredArray) {
            this.countPagesAndProductsDisp(this.productsFilteredArray);
        }
    }

    ngOnDestroy(): void {
        // Cleanup if needed
    }

    getAllProducts(): void {
        this.loading = true;
        this.loadingError = false;
        this.inventoryService.getProducts().subscribe((res: any) => {
            this.loading = false;
            if (res.status === 200) {
                this.products = res.data;
                this.countPagesAndProductsDisp(this.products);
            }
        }, error => {
            this.loading = false;
            if (error.status === 1) {
                this.loadingError = true;
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

    countPagesAndProductsDisp(products: Array<any>): void {
        this.totalProducts = products.length;
        this.pageCount = Math.ceil(this.totalProducts / this.productsPerPage);
        this.pageNum = 1;
        this.lastVisitedPage = 0;
        this.productsFilteredArray = JSON.parse(JSON.stringify(products));
        this.productDispList = products.slice(0, this.productsPerPage);
    }

    getProductsByPageID(page: number, event: Event): void {
        event.stopPropagation();
        event.preventDefault();
        this.pageNum = page;
        this.lastVisitedPage = this.productsPerPage * (page - 1);
        this.productDispList = this.productsFilteredArray.slice(this.lastVisitedPage, this.productsPerPage * this.pageNum);
    }

    filterProducts(): void {
        const selected = [];
        if (this.searchText) {
            const searchTextLower = this.searchText.toLowerCase().trim();
            const search = item => {
                // Search across all columns: S.No (item_id), Item SKU, Item Name, Item Brand
                return (
                    String(item.item_id).toLowerCase().includes(searchTextLower) ||
                    (item.item_sku && item.item_sku.toLowerCase().includes(searchTextLower)) ||
                    (item.item_name && item.item_name.toLowerCase().includes(searchTextLower)) ||
                    (item.brand_name && item.brand_name.toLowerCase().includes(searchTextLower))
                );
            };
            selected.push(search);
        }
        if (this.selectedBrand && this.selectedBrand !== 'All Brands') {
            const brand = product => product.brand_name.toLowerCase() === this.selectedBrand.toLowerCase();
            selected.push(brand);
        }
        if (this.selectedCategory && this.selectedCategory !== 'All Categories') {
            const category = product => product.sub_cat.toLowerCase() === this.selectedCategory.toLowerCase();
            selected.push(category);
        }
        if (selected.length) {
            const filteredProducts = this.products.filter(product => selected.every(f => f(product)));
            this.countPagesAndProductsDisp(filteredProducts);
        } else {
            this.countPagesAndProductsDisp(this.products);
        }
        if (this.sortFilter && this.sortFilter !== '0') {
            this.sortProducts();
        }
    }

    sortProducts(): void {
        switch (this.sortFilter) {
            case 'asc':
            case 'desc':
                this.productsFilteredArray = this.sortAscDesc(this.productsFilteredArray, this.sortFilter);
                break;

            case 'latest':
            case 'oldest':
                this.productsFilteredArray = this.sortAsCreated(this.productsFilteredArray, this.sortFilter);
                break;

            default:
                break;
        }
        this.countPagesAndProductsDisp(this.productsFilteredArray);
    }

    sortAscDesc(actualArray: Array<any>, sortBy: string): Array<any> {
        const sortedArray = actualArray.sort((a: any, b: any) => {
            if (sortBy === 'asc') {
                if (a.item_name.toLowerCase() > b.item_name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (b.item_name.toLowerCase() > a.item_name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
        return sortedArray;
    }

    sortAsCreated(actualArray: Array<any>, sortBy: string): Array<any> {
        const sortedArray = actualArray.sort((a: any, b: any) => {
            if (sortBy === 'latest') {
                if (a.item_id > b.item_id) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (b.item_id > a.item_id) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
        return sortedArray;
    }

    resetTimer(): void {
        clearTimeout(this.timer);
        this.timer = undefined;
    }

    getRange(start: number, pageCount): Array<number> {
        return Array.apply(0, Array(pageCount)).map((element: number, j: number) => {
            return j + start;
        });
    }

    getPaginationPages(): Array<number | string> {
        const pages: Array<number | string> = [];
        const current = this.pageNum;
        const total = this.pageCount;
        const delta = 3; // Number of pages to show after current page when at start

        // If total pages is 7 or less, show all pages
        if (total <= 7) {
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
            return pages;
        }

        // Always show first page
        pages.push(1);

        // When on first few pages (1-4), show consecutive pages
        if (current <= 4) {
            // Show pages 2, 3, 4 after page 1
            for (let i = 2; i <= Math.min(4, total - 1); i++) {
                pages.push(i);
            }
            // Add ellipsis if there's a gap before last page
            if (total > 5) {
                pages.push('ellipsis-end');
            }
        } 
        // When on last few pages
        else if (current >= total - 3) {
            // Add ellipsis after first page
            pages.push('ellipsis-start');
            // Show last few pages before last
            for (let i = Math.max(2, total - 3); i < total; i++) {
                pages.push(i);
            }
        }
        // When in the middle
        else {
            // Add ellipsis after first page
            pages.push('ellipsis-start');
            // Show pages around current (2 pages before and after)
            for (let i = current - 1; i <= current + 1; i++) {
                pages.push(i);
            }
            // Add ellipsis before last page
            pages.push('ellipsis-end');
        }

        // Always show last page (if more than 1 page)
        if (total > 1) {
            pages.push(total);
        }

        return pages;
    }

}
