import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { DataService, GeneralDataService } from '../../../shared/services';
import { InventoryService } from '../../services/inventory.service';
import { ColDef, GridApi, GridReadyEvent, ModuleRegistry, AllCommunityModule, ICellRendererParams } from 'ag-grid-community';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({

    selector: 'app-add-stock',
    templateUrl: 'add-stock.component.html',
    styleUrls: ['./add-stock.component.css'],
    encapsulation: ViewEncapsulation.None,
  standalone: false


})

export class AddStockComponent implements OnInit {

    private gridApi!: GridApi;
    
    // AG Grid column definitions
    columnDefs: ColDef[] = [
        { 
            field: 'item_sku', 
            headerName: 'ITEM SKU', 
            sortable: true, 
            filter: true, 
            width: 150 
        },
        { 
            field: 'item_name', 
            headerName: 'ITEM NAME', 
            sortable: true, 
            filter: true, 
            flex: 1,
            cellRenderer: (params: ICellRendererParams) => {
                const product = params.data;
                return `
                    <div class="flex items-center gap-2">
                        <img src="${product.thumbnail || ''}" alt="${product.item_name}" class="w-8 h-8 object-cover rounded" onerror="this.style.display='none'"/>
                        <span>${product.item_name || ''}</span>
                    </div>
                `;
            }
        },
        { 
            field: 'brand_name', 
            headerName: 'ITEM BRAND', 
            sortable: true, 
            filter: true, 
            width: 280 
        },
        { 
            field: 'unit_name', 
            headerName: 'UNITS', 
            sortable: true, 
            filter: true, 
            width: 130 
        },
        {
            field: 'add_stock',
            headerName: 'ADD STOCK',
            cellRenderer: (params: ICellRendererParams) => {
                const product = params.data;
                return `
                    <input 
                        type="number" 
                        class="itemQTY w-[80px] h-[26px] px-2 py-1 text-[13px] border border-gray-300 dark:border-[#434343] rounded-[5px] bg-white dark:bg-[#141414] text-gray-900 dark:text-white focus:outline-none focus:border-primary dark:focus:border-primary" 
                        min="0" 
                        placeholder="0"
                        data-item-id="${product.item_id}"
                        value="${product.stockQty || ''}"
                    />
                `;
            },
            width: 150,
            sortable: false,
            filter: false
        },
        {
            field: 'actions',
            headerName: 'ACTIONS',
            cellRenderer: (params: ICellRendererParams) => {
                const product = params.data;
                const stockQty = product.stockQty || 0;
                if (product.isAdded) {
                    return `
                        <button 
                            type="button"
                            data-action="remove"
                            data-item-id="${product.item_id}" 
                            class="bg-red-600 h-auto leading-none py-[4px] px-[5px] text-white text-[11px] border border-red-600 hover:bg-red-700 hover:border-red-700 font-primary rounded-[5px] ml-0.5 action-btn"
                        >
                            Remove
                        </button>
                    `;
                } else {
                    const disabled = !stockQty || stockQty <= 0;
                    return `
                        <button 
                            type="button"
                            data-action="add"
                            data-item-id="${product.item_id}"
                            class="py-[4px] px-[5px] leading-none text-[11px] rounded-[5px] font-primary border border-primary bg-transparent text-primary hover:bg-primary hover:text-white dark:text-white dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors add-product-btn action-btn ${disabled ? 'opacity-50 cursor-not-allowed' : ''}"
                            ${disabled ? 'disabled' : ''}
                        >
                            Add
                        </button>
                    `;
                }
            },
            width: 120,
            sortable: false,
            filter: false,
            pinned: 'right'
        }
    ];

    defaultColDef: ColDef = {
        resizable: true,
        sortable: true,
        filter: true
    };

    products: Array<any> = [];
    dispProducts: Array<any> = [];
    categories: Array<any> = [];
    brands: Array<any> = [];
    stock: Array<any> = [];
    units: Array<string> = [];
    submitted: boolean;
    loading: boolean;
    selectedUnit: string;
    selectedBrand: string;
    selectedCategory: string;

    constructor(
        private router: Router,
        private inventoryService: InventoryService,
        private generalDataService: GeneralDataService,
        private dataService: DataService,
        private toastService: ToasterService,
    ) {
        this.setupGlobalFunctions();
    }

    ngOnInit(): void {
        this.submitted = false;
        this.units = ['All Units', 'Piece', 'Box', 'Carton', 'Dozen', 'Half Dozen', 'Strip', '12 Pack', '18 Pack', 'Jar'];
        this.selectedUnit = 'All Units';
        this.selectedBrand = 'all';
        this.selectedCategory = 'all';
        this.getAllProducts();
        this.getBrands();
        this.getCategories();
    }

    setupGlobalFunctions(): void {
        // Global functions are no longer needed as we use event delegation
        // But keeping for backward compatibility if needed elsewhere
    }

    onGridReady(params: GridReadyEvent): void {
        this.gridApi = params.api;
        
        // Attach event listeners to input fields after grid is ready
        this.attachInputListeners();
    }

    attachInputListeners(): void {
        setTimeout(() => {
            // Use event delegation on the grid container to handle all inputs and buttons
            const gridContainer = document.querySelector('.ag-theme-quartz');
            if (gridContainer) {
                // Remove old listeners by checking flag (only if not already attached)
                if (!(gridContainer as any).__listenersAttached) {
                    // Handle input keydown
                    gridContainer.addEventListener('keydown', (e: Event) => {
                        const target = e.target as HTMLElement;
                        if (target.classList.contains('itemQTY')) {
                            this.isNumber(e as KeyboardEvent);
                        }
                    });
                    
                    // Handle input value changes
                    gridContainer.addEventListener('input', (e: Event) => {
                        const target = e.target as HTMLInputElement;
                        if (target.classList.contains('itemQTY')) {
                            const itemId = parseInt(target.getAttribute('data-item-id') || '0');
                            const value = parseInt(target.value) || 0;
                            
                            // Update the data first
                            const product = this.dispProducts.find((x) => x.item_id === itemId);
                            if (product) {
                                product.stockQty = value;
                            }
                            
                            // Immediately update button state via DOM (for instant feedback)
                            const button = gridContainer.querySelector(`button[data-item-id="${itemId}"][data-action="add"]`) as HTMLButtonElement;
                            if (button && !product?.isAdded) {
                                const disabled = !value || value <= 0;
                                button.disabled = disabled;
                                if (disabled) {
                                    button.classList.add('opacity-50', 'cursor-not-allowed');
                                } else {
                                    button.classList.remove('opacity-50', 'cursor-not-allowed');
                                }
                            }
                            
                            // Update the grid row data and refresh cells
                            if (this.gridApi) {
                                this.gridApi.forEachNode((rowNode) => {
                                    if (rowNode.data && rowNode.data.item_id === itemId) {
                                        // Update the row data directly (same reference)
                                        rowNode.data.stockQty = value;
                                        // Force refresh of the ACTIONS column using field name
                                        this.gridApi.refreshCells({ 
                                            rowNodes: [rowNode],
                                            columns: ['actions'],
                                            force: true
                                        });
                                    }
                                });
                            }
                        }
                    });
                    
                    // Handle button clicks using event delegation
                    gridContainer.addEventListener('click', (e: Event) => {
                        const target = e.target as HTMLElement;
                        const button = target.closest('.action-btn') as HTMLButtonElement;
                        if (button) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            const itemId = parseInt(button.getAttribute('data-item-id') || '0');
                            const action = button.getAttribute('data-action');
                            
                            if (action === 'add') {
                                const product = this.dispProducts.find((x) => x.item_id === itemId);
                                if (product) {
                                    // Get the stock quantity from the input field
                                    const inputElement = gridContainer.querySelector(`input.itemQTY[data-item-id="${itemId}"]`) as HTMLInputElement;
                                    if (inputElement) {
                                        product.stockQty = parseInt(inputElement.value) || 0;
                                    }
                                    if (product.stockQty && product.stockQty > 0) {
                                        this.addProduct(product);
                                        // Refresh the grid to update the button state
                                        if (this.gridApi) {
                                            this.gridApi.forEachNode((rowNode) => {
                                                if (rowNode.data && rowNode.data.item_id === itemId) {
                                                    this.gridApi.refreshCells({ 
                                                        rowNodes: [rowNode],
                                                        columns: ['actions'],
                                                        force: true
                                                    });
                                                }
                                            });
                                        }
                                    } else {
                                        this.toastService.showToaster({
                                            title: 'Error:',
                                            message: 'Please enter a quantity greater than 0!',
                                            type: 'error'
                                        });
                                    }
                                }
                            } else if (action === 'remove') {
                                const product = this.dispProducts.find((x) => x.item_id === itemId);
                                if (product) {
                                    // Reset the stock quantity to 0
                                    product.stockQty = 0;
                                    
                                    // Reset the input field value
                                    const inputElement = gridContainer.querySelector(`input.itemQTY[data-item-id="${itemId}"]`) as HTMLInputElement;
                                    if (inputElement) {
                                        inputElement.value = '';
                                    }
                                    
                                    // Remove the product from stock
                                    this.removeProduct(product);
                                    
                                    // Refresh the grid to update both input and button state
                                    if (this.gridApi) {
                                        this.gridApi.forEachNode((rowNode) => {
                                            if (rowNode.data && rowNode.data.item_id === itemId) {
                                                // Update the row data to reset stockQty
                                                rowNode.data.stockQty = 0;
                                                // Refresh both the input column and actions column
                                                this.gridApi.refreshCells({ 
                                                    rowNodes: [rowNode],
                                                    columns: ['add_stock', 'actions'],
                                                    force: true
                                                });
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    });
                    
                    (gridContainer as any).__listenersAttached = true;
                }
            }
        }, 100);
    }

    onQuickFilterChanged(event: any): void {
        const filterValue = event.target.value;
        if (this.gridApi) {
            this.gridApi.setGridOption('quickFilterText', filterValue);
        }
    }

    getAllProducts(): void {
        this.loading = true;
        this.generalDataService.getProductsWithPrefType('secondary').subscribe((res: any) => {
            this.loading = false;
            if (res.status === 200) {
                this.products = res.data;
                this.dispProducts = JSON.parse(JSON.stringify(this.products));
                // Attach listeners after products are loaded
                setTimeout(() => {
                    this.attachInputListeners();
                }, 200);
            }
        }, error => {
            this.loading = false;
            if (error.status !== 1 && error.status !== 401) {
                this.toastService.showToaster({ title: 'Error:', message: 'Something went wrong while fetching products!', type: 'error' });
            }
        });
    }

    isNumber(event: KeyboardEvent): boolean {
        return this.dataService.isNumber(event, 'quantity');
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

    filterProducts(): void {
        this.loading = true;
        const selected = [];
        if (this.selectedBrand && this.selectedBrand !== 'all') {
            const brand = product => product.brand_name.toLowerCase() === this.selectedBrand.toLowerCase();
            selected.push(brand);
        }
        if (this.selectedUnit && this.selectedUnit !== 'All Units') {
            const unit = product => product.unit_name.toLowerCase() === this.selectedUnit.toLowerCase();
            selected.push(unit);
        }
        if (this.selectedCategory && this.selectedCategory !== 'all') {
            const category = product => product.sub_cat.toLowerCase() === this.selectedCategory.toLowerCase();
            selected.push(category);
        }
        if (selected.length) {
            const filteredProducts = this.products.filter(product => selected.every(f => f(product)));
            this.dispProducts = JSON.parse(JSON.stringify(filteredProducts));
        } else {
            this.dispProducts = JSON.parse(JSON.stringify(this.products));
        }
        setTimeout(() => {
            this.loading = false;
            // Re-attach event listeners after filtering
            this.attachInputListeners();
        }, 1000);
    }

    addProduct(product: any): void {
        product.isAdded = true;
        const { pref_id, unit_id, item_id, unit_name, item_name } = product;
        this.stock.push({ pref_id, unit_id, item_id, unit_name, item_name, quantity: product.stockQty });
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
                    this.router.navigateByUrl('/retailer/opening-balance');
                } else if (res.status === 208) {
                    this.toastService.showToaster({ title: 'Error:', message: 'Your stock already added. If you want to add more stock go to Distributor Purchase!', type: 'error' });
                }
            }, error => {
                this.submitted = false;
                if (error.status !== 1 && error.status !== 401) {
                    this.toastService.showToaster({ title: 'Error:', message: 'Something went wrong while adding stock!', type: 'error' });
                }
            });
        } else {
            this.toastService.showToaster({
                title: 'Error:',
                message: 'Please select product with quantity to add in stock!',
                type: 'error'
            });
        }
    }

}
