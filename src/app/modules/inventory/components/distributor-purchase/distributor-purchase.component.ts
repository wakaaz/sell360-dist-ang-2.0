import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from 'src/app/core/services/toaster.service';
import { GeneralDataService, DataService } from '../../../shared/services';
import {
  DistributorPurchaseModel,
  ItemModel,
} from '../../model/distributor-purchase.model';
import { InventoryService } from '../../services/inventory.service';

@Component({

  selector: 'app-distributor-purchase',
  templateUrl: './distributor-purchase.component.html',
  styleUrls: ['./distributor-purchase.component.css'],
  standalone: false


})
export class DistributorPurchaseComponent
  implements OnInit, OnDestroy
{

  showFreeProducts: boolean;
  addNewProducts: boolean;
  loadingProducts: boolean;
  submitted: boolean;
  loading: boolean;

  distributorPurchase: DistributorPurchaseModel;
  
  // Date picker bindings
  receivedDate: Date | null;
  invoiceDate: Date | null;
  poDate: Date | null;
  dcDate: Date | null;

  subTotalBill: number;
  totalBill: number;

  purchasedProductsIds: Array<number> = [];
  freeProductsIds: Array<number> = [];
  freeProducts: Array<any>;
  purchasedProducts: Array<any>;
  products: Array<any>;
  primaryProducts: Array<any> = [];
  secondaryProducts: Array<any> = [];
  productsDispList: Array<any>;
  productPrefs: Array<any>;
  itemMargin: Array<any>;
  searchFilterText: string = '';
  filteredPurchasedProducts: Array<any> = [];
  filteredFreeProducts: Array<any> = [];

  constructor(
    private change: ChangeDetectorRef,
    private router: Router,
    private inventoryService: InventoryService,
    private toastService: ToasterService,
    private generalDataService: GeneralDataService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
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
      supplier: 'sell360',
      original_amount: 0,
      discount: 0,
      net_amount: 0,
      items: [],
      free: [],
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
    this.searchFilterText = '';
    this.filteredPurchasedProducts = [];
    this.filteredFreeProducts = [];
    // Initialize date picker bindings
    this.receivedDate = null;
    this.invoiceDate = null;
    this.poDate = null;
    this.dcDate = null;
    this.getDistributorInventory();
  }

  getPopupContainer = (trigger: HTMLElement): HTMLElement => {
    return trigger.parentElement!;
  };

  getDistributorInventory(): void {
    this.inventoryService.getDistributorPurchaseData().subscribe(
      (res: any) => {
        if (res.status === 200) {
          this.products = res.data.inventory.map((x) => {
            x.discount = 0;
            (x.discount_type = 'percentage'),
              (x.discount_type_value =
                res.data.itemMargin.find((m) => m.item_id === x.item_id)
                  ?.discount || 0);
            x.net_amount = 0;
            x.stockQty = 0;
            x.original_amount = 0;
            return x;
          });
          this.primaryProducts = this.products.filter(
            (prod) => prod.child === 0
          );
          this.secondaryProducts = this.products.filter(
            (prod) => prod.child !== 0
          );
          this.productsDispList = JSON.parse(
            JSON.stringify(this.secondaryProducts)
          );
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Products not fetched, please try again later.',
            type: 'error',
          });
        }
      }
    );
  }

  getProductsWithPrefType(): void {
    this.loadingProducts = true;
    this.generalDataService.getProductsWithPrefType('').subscribe(
      (res: any) => {
        this.loadingProducts = false;
        if (res.status === 200) {
          this.products = res.data.invetory.map((x) => {
            x.discount = 0;
            (x.discount_type = 'percentage'),
              (x.discount_type_value =
                res.data.itemMargin.find((m) => m.item_id === x.item_id)
                  ?.discount || 0);
            x.net_amount = 0;
            x.stockQty = 0;
            x.original_amount = 0;
            x.pref_id = '0';
            return x;
          });
          this.primaryProducts = this.products.filter(
            (prod) => prod.child === 0
          );
          this.secondaryProducts = this.products.filter(
            (prod) => prod.child !== 0
          );
          this.productsDispList = JSON.parse(
            JSON.stringify(this.secondaryProducts)
          );
        }
      },
      (error) => {
        this.loadingProducts = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Products not fetched, please try again later.',
            type: 'error',
          });
        }
      }
    );
  }

  searchProducts(searchText: string): void {
    if (searchText) {
      this.productsDispList = this.showFreeProducts
        ? this.secondaryProducts.filter((product) =>
            product.item_name.toLowerCase().includes(searchText.toLowerCase())
          )
        : this.primaryProducts.filter((product) =>
            product.item_name.toLowerCase().includes(searchText.toLowerCase())
          );
    } else {
      this.productsDispList = this.showFreeProducts
        ? JSON.parse(JSON.stringify(this.secondaryProducts))
        : JSON.parse(JSON.stringify(this.primaryProducts));
    }
  }

  addSelectedProduct(product: any): void {
    const selectedProduct = JSON.parse(JSON.stringify(product));
    selectedProduct.stockQty = 1;
    selectedProduct.tradePrice = 0;
    if (this.showFreeProducts) {
      // Free products discount and payable amount
      selectedProduct.original_amount =
        selectedProduct.stockQty * selectedProduct.item_trade_price;
      selectedProduct.discount = selectedProduct.original_amount;
      selectedProduct.discount_type = 'percentage';
      selectedProduct.discount_type_value = 100;
      selectedProduct.net_amount = 0;

      this.freeProducts.push(selectedProduct);
      this.freeProductsIds.push(selectedProduct.item_id);
      this.calculatePurchasedSubTotal();
      this.rerenderPurchasedProducts();
    } else {
      this.purchasedProducts.push(selectedProduct);
      this.purchasedProductsIds.push(selectedProduct.item_id);
      this.rerenderPurchasedProducts();
    }
    this.getUnitPrice(selectedProduct);
  }

  getArray(): Array<any> {
    if (this.searchFilterText && this.searchFilterText.trim() !== '') {
      // Return filtered array if search text exists
      return this.showFreeProducts ? this.filteredFreeProducts : this.filteredPurchasedProducts;
    }
    // Return original array if no search text
    return this.showFreeProducts ? this.freeProducts : this.purchasedProducts;
  }

  onQuickFilterChanged(event: any): void {
    const filterValue = event.target?.value || '';
    this.searchFilterText = filterValue.trim().toLowerCase();
    
    if (this.searchFilterText === '') {
      // Clear filtered arrays when search is empty
      this.filteredPurchasedProducts = [];
      this.filteredFreeProducts = [];
    } else {
      // Filter purchased products - search across all columns
      this.filteredPurchasedProducts = this.purchasedProducts.filter((product) => {
        const sku = (product.item_sku || '').toLowerCase();
        const name = (product.item_name || '').toLowerCase();
        const unitName = (product.unit_name || '').toLowerCase();
        const stockQty = (product.stockQty || '').toString().toLowerCase();
        const tradePrice = (product.item_trade_price || '').toString().toLowerCase();
        const margin = (product.discount_type_value || '').toString().toLowerCase();
        const netAmount = (product.net_amount || '').toString().toLowerCase();
        
        return sku.includes(this.searchFilterText) || 
               name.includes(this.searchFilterText) ||
               unitName.includes(this.searchFilterText) ||
               stockQty.includes(this.searchFilterText) ||
               tradePrice.includes(this.searchFilterText) ||
               margin.includes(this.searchFilterText) ||
               netAmount.includes(this.searchFilterText);
      });
      
      // Filter free products - search across all columns
      this.filteredFreeProducts = this.freeProducts.filter((product) => {
        const sku = (product.item_sku || '').toLowerCase();
        const name = (product.item_name || '').toLowerCase();
        const unitName = (product.unit_name || '').toLowerCase();
        const stockQty = (product.stockQty || '').toString().toLowerCase();
        const tradePrice = (product.item_trade_price || '').toString().toLowerCase();
        
        return sku.includes(this.searchFilterText) || 
               name.includes(this.searchFilterText) ||
               unitName.includes(this.searchFilterText) ||
               stockQty.includes(this.searchFilterText) ||
               tradePrice.includes(this.searchFilterText);
      });
    }
    
    // Trigger change detection to update the table
    this.rerenderPurchasedProducts();
  }

  rerenderPurchasedProducts(): void {
    // Trigger change detection for simple table
    this.change.detectChanges();
  }

  removeSelectedProduct(product: any): void {
    if (this.showFreeProducts) {
      const ind = this.freeProducts.findIndex(
        (x) => x.item_id === product.item_id
      );
      this.freeProducts.splice(ind, 1);
      this.freeProductsIds.splice(ind, 1);
    } else {
      const ind = this.purchasedProducts.findIndex(
        (x) => x.item_id === product.item_id
      );
      this.purchasedProducts.splice(ind, 1);
      this.purchasedProductsIds.splice(ind, 1);
    }
    this.calculatePurchasedSubTotal();
    this.rerenderPurchasedProducts();
  }

  openNewProducts(event: Event): void {
    event.stopPropagation();
    this.productsDispList = this.showFreeProducts
      ? JSON.parse(JSON.stringify(this.secondaryProducts))
      : JSON.parse(JSON.stringify(this.primaryProducts));
    this.addNewProducts = true;
    document.body.classList.add('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.add('d-block');
    document.getElementById('purchase-list').classList.add('blur-div');
  }

  closeNewProducts(): void {
    this.addNewProducts = false;
    document.body.classList.remove('no-scroll');
    document
      .getElementsByClassName('overlay-blure')[0]
      .classList.remove('d-block');
    document.getElementById('purchase-list').classList.remove('blur-div');
  }

  clickOutSide(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target) return;
    
    // Handle different types of className (string, SVGAnimatedString, DOMTokenList, etc.)
    let className = '';
    if (typeof target.className === 'string') {
      className = target.className;
    } else if (target.className && typeof target.className === 'object') {
      // Handle SVGAnimatedString or DOMTokenList
      const classNameObj = target.className as any;
      if ('baseVal' in classNameObj) {
        className = classNameObj.baseVal || '';
      } else if (typeof classNameObj.toString === 'function') {
        className = classNameObj.toString();
      } else if (Array.isArray(classNameObj)) {
        className = classNameObj.join(' ');
      }
    }
    
    // Only proceed if className is a string and has the includes method
    if (typeof className === 'string' && typeof className.includes === 'function') {
      if (
        !className.includes('ng-option') &&
        !className.includes('ng-value-icon left')
      ) {
        this.closeNewProducts();
      }
    } else {
      // If we can't determine className, close anyway to be safe
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

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.onerror = null;
      img.src = 'assets/images/default_product.jpg';
    }
  }

  /*getUnits(itemId: number): Array<any> {
        return this.productPrefs.filter(pref => pref.item_id === itemId);
    }

    setPreference(item: ItemModel, prefId: any, isFree: boolean = false): void {
        const selectedPref = this.productPrefs.find(x => x.pref_id === +prefId);
        item.pref_id = selectedPref.pref_id;
        item.unit_id = selectedPref.unit_id;
        item.unit_name = selectedPref.unit_name;
        item.tradePrice = selectedPref.item_trade_price;
        if (item.quantity > 0) {
            item.original_amount = this.dataService.calculateUnitPrice(item.quantity, selectedPref.item_trade_price);
            item.discount = this.dataService.calculateDiscount(item.discount_type_value,
                item.discount_type, item.original_amount);
            item.net_amount = item.original_amount - item.discount;
            this.calculatePurchasedSubTotal();
        }
    }*/

  getUnitPrice(item: any, isFree: boolean = false): void {
    if (+item.stockQty > 1000) {
      item.stockQty = 0;
    }
    item.original_amount = this.dataService.calculateUnitPrice(
      item.stockQty,
      item.item_trade_price
    );
    item.discount = this.dataService.calculateDiscount(
      item.discount_type_value,
      item.discount_type,
      item.original_amount
    );
    item.net_amount = item.original_amount - item.discount;
    this.calculatePurchasedSubTotal();
  }

  calculatePurchasedSubTotal(): void {
    const prices = [];
    this.distributorPurchase.discount = 0;
    if (this.purchasedProducts.length) {
      this.purchasedProducts.forEach((product) => {
        this.distributorPurchase.discount += +product.discount;
        prices.push(+product.original_amount);
        if (prices.length === this.purchasedProducts.length) {
          this.calculateFreeSubTotal(prices);
        }
      });
    } else {
      this.calculateFreeSubTotal(prices);
    }
  }

  calculateFreeSubTotal(prices: Array<number>): void {
    if (this.freeProducts.length) {
      this.freeProducts.forEach((product, index) => {
        this.distributorPurchase.discount += +product.discount;
        prices.push(+product.original_amount);
        if (index === this.freeProducts.length - 1) {
          this.distributorPurchase.original_amount =
            this.dataService.calculateItemsBill(prices);
        }
      });
    } else {
      this.distributorPurchase.original_amount =
        this.dataService.calculateItemsBill(prices);
    }
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.distributorPurchase.net_amount =
      +this.distributorPurchase.original_amount +
      +this.distributorPurchase.gst +
      +this.distributorPurchase.fare -
      this.distributorPurchase.discount;
  }

  placeOrder(): void {
    this.submitted = true;
    if (this.validateForm()) {
      this.loading = true;
      
      // Ensure all date fields are strings in the correct format
      const formatDate = (date: any): string => {
        if (date instanceof Date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        }
        if (typeof date === 'string') {
          return date;
        }
        return '  ';
      };
      
      this.distributorPurchase.dcDate = formatDate(this.distributorPurchase.dcDate);
      this.distributorPurchase.invoiceDate = formatDate(this.distributorPurchase.invoiceDate);
      this.distributorPurchase.poDate = formatDate(this.distributorPurchase.poDate);
      this.distributorPurchase.receivedDate = formatDate(this.distributorPurchase.receivedDate);
      
      this.distributorPurchase.discount = Number(
        this.distributorPurchase.discount
      );
      this.distributorPurchase.net_amount = Number(
        this.distributorPurchase.net_amount
      );
      this.distributorPurchase.original_amount = Number(
        this.distributorPurchase.original_amount
      );
      this.distributorPurchase.items = this.purchasedProducts.map((product) => {
        const regularProduct = {
          type: 'regular',
          pref_id: product.pref_id,
          unit_id: product.unit_id,
          item_id: product.item_id,
          item_sku: product.item_sku,
          child: product.child,
          item_name: product.item_name,
          unit_name: product.unit_name,
          quantity: product.stockQty,
          original_amount: product.original_amount,
          discount: product.discount,
          discount_type: 'percentage',
          discount_type_value: product.discount_type_value,
          net_amount: product.net_amount,
        };
        return regularProduct;
      });
      this.distributorPurchase.free = this.freeProducts.map((product) => {
        const regularProduct = {
          type: 'free',
          pref_id: product.pref_id,
          unit_id: product.unit_id,
          item_id: product.item_id,
          child: product.child,
          item_sku: product.item_sku,
          item_name: product.item_name,
          unit_name: product.unit_name,
          quantity: product.stockQty,
          original_amount: product.original_amount,
          discount: product.original_amount,
          discount_type: 'percentage',
          discount_type_value: 100,
          net_amount: 0,
        };
        return regularProduct;
      });
      this.inventoryService
        .addDistributorPurchase(this.distributorPurchase)
        .subscribe(
          (res) => {
            this.loading = false;
            this.submitted = false;
            this.toastService.showToaster({
              title: 'Order Placed:',
              message: 'Your order is placed successfully.',
              type: 'success',
            });
            this.router.navigateByUrl('/reports/purchase-history');
          },
          (error) => {
            this.loading = false;
            this.submitted = false;
            if (error.status !== 401 && error.status !== 1) {
              this.toastService.showToaster({
                title: 'Error:',
                message: 'Order is not placed, try again later.',
                type: 'error',
              });
            }
            scrollTo(0, 0);
          }
        );
    }
  }

  onDatePickerChange(date: any, field: string) {
    console.log('date :>> ', date);
    // Convert Date object to string format 'yyyy-MM-dd' as expected by the model
    if (date instanceof Date) {
      // Format date as 'yyyy-MM-dd'
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      this.distributorPurchase[field] = dateString;
    } else if (date === null || date === undefined) {
      // Reset to default empty string format
      this.distributorPurchase[field] = '  ';
    } else if (typeof date === 'string') {
      // If it's already a string, use it
      this.distributorPurchase[field] = date;
    } else {
      // Fallback: convert to string
      this.distributorPurchase[field] = String(date);
    }
  }

  validateForm(): boolean {
    // Helper function to check if date field is valid
    const isValidDateField = (field: any): boolean => {
      if (field === null || field === undefined) return false;
      if (field instanceof Date) return true;
      if (typeof field === 'string') {
        const trimmed = field.trim();
        return trimmed !== '' && trimmed !== '  ';
      }
      // Handle any other type (shouldn't happen, but be safe)
      return false;
    };

    // Helper function to check if string field is valid
    const isValidStringField = (field: any): boolean => {
      if (!field) return false;
      if (typeof field === 'string') {
        return field.trim() !== '';
      }
      return false;
    };

    if (
      !isValidDateField(this.distributorPurchase.dcDate) ||
      !isValidStringField(this.distributorPurchase.dcNo) ||
      this.distributorPurchase.discount === null ||
      this.distributorPurchase.fare === null ||
      this.distributorPurchase.gst === null ||
      !isValidDateField(this.distributorPurchase.invoiceDate) ||
      !isValidStringField(this.distributorPurchase.invoiceNo) ||
      (!this.purchasedProducts.length && !this.freeProducts.length) ||
      this.distributorPurchase.net_amount === null ||
      !this.distributorPurchase.original_amount ||
      !isValidDateField(this.distributorPurchase.poDate) ||
      !isValidStringField(this.distributorPurchase.poNo) ||
      !isValidDateField(this.distributorPurchase.receivedDate) ||
      !isValidStringField(this.distributorPurchase.receivedNo) ||
      !isValidStringField(this.distributorPurchase.remark) ||
      !isValidStringField(this.distributorPurchase.supplier)
    ) {
      this.toastService.showToaster({
        title: 'Error:',
        message:
          'Please fill all the fields and select products to purchase and select the product units!',
        type: 'error',
      });
      scrollTo(0, 0);
      return false;
    } else {
      const unPrefPurchased = this.purchasedProducts.filter(
        (x) => x.pref_id === '0'
      );
      const unPrefFree = this.freeProducts.filter((x) => x.pref_id === '0');
      if (unPrefFree.length > 0 || unPrefPurchased.length > 0) {
        this.toastService.showToaster({
          title: 'Error:',
          message: 'Please select the unit for all products!',
          type: 'error',
        });
        scrollTo(0, 0);
        return false;
      } else {
        return true;
      }
    }
  }

  ngOnDestroy(): void {
    this.change.detach();
  }
}
