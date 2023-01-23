import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  freeProductsRules,
  schemes,
} from '../../../../core/constants/schemes.constant';
import {
  Toaster,
  ToasterService,
} from '../../../../core/services/toaster.service';
import { DataService } from '../../services';

@Component({
  selector: 'app-products-drawer',
  templateUrl: 'product-right-panel.compoent.html',
  styleUrls: ['./product-right-panel.compoent.css'],
})
export class ProductsRightPanelComponent implements OnInit, OnChanges {
  @Input() loadingProducts: boolean;
  @Input() allProducts: Array<any>;
  @Input() orderedProducts: Array<any>;
  @Input() productSchemes: Array<any>;
  @Input() specialDiscounts: Array<any>;
  @Input() selectedRetailer: any;
  @Input() productMerchantDiscount: any;
  @Input() discountSlabs: any;
  @Input() orderType: string;

  productSearchText: string;

  isAdded: boolean;
  showQuantityModal: boolean;

  selectedProduct: any = {};

  dispProducts: Array<any> = [];

  @Output() drawerClosed: EventEmitter<boolean> = new EventEmitter();
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  constructor(
    private dataService: DataService,
    private toastService: ToasterService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    
    if (change.orderedProducts?.currentValue) {
      console.log("orderedProducts=> "+this.orderedProducts.length)
      this.allProducts = this.allProducts.map((x) => {
        const orderedProduct = this.orderedProducts.some((pr) => pr.item_id === x.item_id );
        // if (orderedProduct?.item_status == 0)
        //   x.isDeleted = true;
        // else if (orderedProduct)
        x.isAdded = orderedProduct ? true : false;
        return x;
      });
      this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
      console.log("dispProducts => "+this.dispProducts.length)
    }
    if (change.allProducts?.currentValue) {
      this.allProducts = this.allProducts.map((product) => {
        product.schemes = this.dataService.getSchemes(
          product.item_id,
          product.unit_id,
          product.pref_id,
          this.productSchemes,
          this.selectedRetailer.type_id ||
            this.selectedRetailer.retailer_type_id,
          this.selectedRetailer.retailer_id
        );
        return product;
      });
      this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
    }
  }

  isNumber(event: KeyboardEvent, type: string = 'charges'): boolean {
    return this.dataService.isNumber(event, type);
  }

  checkAvailableQty(product: any): void {
    if (this.orderType === 'execution') {
      const toast: Toaster = {
        type: 'error',
        message: `Quantity (${product.stockQty}) should not be greater than available quantity (${product.available_qty})!`,
        title: 'Quantity Error:',
      };
      if (+product.stockQty > product.available_qty) {
        this.toastService.showToaster(toast);
      }
    }
  }

  addProductToOrder(): void {
    if (
      this.selectedProduct.selectedScheme && this.selectedProduct.selectedScheme.scheme_type !='bundle_offer' &&
      !this.selectedProduct.selectedScheme.applied
    ) {
      
      this.dataService.schemeCannotApplied();
      return;
    }
    if (
      +this.selectedProduct.stockQty > 0 &&
      (this.orderType !== 'execution' ||
        (this.orderType === 'execution' &&
          +this.selectedProduct.stockQty <= this.selectedProduct.available_qty))
    ) {
      this.allProducts  = this.dataService.applySlabDiscountValuesToItems(this.allProducts,this.discountSlabs)   
        
      
      this.selectedProduct.item_quantity_booker = 0;
      let prod = this.allProducts.find(
        (x) => x.item_id === this.selectedProduct.item_id
      );
      prod.isAdded = true;
      prod = this.dispProducts.find(
        (x) => x.item_id === this.selectedProduct.item_id
      );
      prod.isAdded = true;

      

     // let orderDetail:any  = this.selectedRetailer;
    // orderDetail.items    =  this.orderedProducts;
    // if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
    //   orderDetail.items   = this.dataService.applyBundleProductsScheme(product,orderDetail);
    // }
    // //console.log("COUNT BFR=>"+orderDetail.items.length)
    // orderDetail.items  = this.dataService.updateSchemeFreeProductItems(orderDetail,this.allProducts);
    // //console.log("COUNT AFR=>"+orderDetail.items.length)
    // //apply slabs to all items 
    // orderDetail.items  = this.dataService.applySlabDiscountValuesToItems(orderDetail.items,this.discountSlabs)   
    

      this.productSelected.emit(
        JSON.parse(JSON.stringify(this.selectedProduct))
      );

      document.getElementById('pl-qty-close').click();
      
    }
  }

  closeQuantityModal(event: Event): void {
    if (
      this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-quantity')
    ) {
      this.showQuantityModal = false;
      this.selectedProduct = JSON.parse(JSON.stringify({}));
    }
  }

  searchProduct(): void {
    if (this.productSearchText) {
      this.dispProducts = this.allProducts.filter(
        (prod) =>
          prod.item_name
            .toLowerCase()
            .includes(this.productSearchText.toLowerCase()) ||
          prod.item_sku
            .toLowerCase()
            .includes(this.productSearchText.toLowerCase())
      );
    } else {
      this.dispProducts = JSON.parse(JSON.stringify(this.allProducts));
    }
  }

  openQuantityModal(product: any): void {
    this.showQuantityModal = true;
    if (product.schemes?.length) {
      product.schemes = product.schemes.map((scheme) => {
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
  }

  clickedOutSide(event: Event): void {
    if (
      !this.showQuantityModal &&
      !(event.target as HTMLElement).classList.contains('dont-close-products')
    ) {
      this.closeProductsList();
    }
  }

  closeProductsList(): void {
    this.drawerClosed.emit(true);
  }

  setQuantity(product: any): void {
    
    if (
      +product.stockQty >
      +product?.current_load_allocated_qty - +product?.current_load_booked_qty
    ) {
      product.stockQty =
        +product?.current_load_allocated_qty -
        +product?.current_load_booked_qty;
    }
    if (product.item_trade_price) {
      
      this.calculateProductDiscounts(product);
      this.calculateProductPrice(product);
    }
  }

  calculateProductPrice(product): void {
    product.original_amount = this.dataService.calculateUnitPrice(
      +product.stockQty,
      product.item_trade_price
    );
    product.gross_amount =
      product.unit_price_after_scheme_discount * +product.stockQty;
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
      product.unit_price_after_scheme_discount = JSON.parse(
        JSON.stringify(product.item_trade_price)
      );
    }

    //Trade Discount
    if (this.productMerchantDiscount) { 
      product = this.dataService.applyMerchantDiscountForSingleProduct(
        this.productMerchantDiscount,
        product,
        1
      );
    } 
    // let orderDetail:any  = this.selectedRetailer;
    // orderDetail.items    =  this.orderedProducts;
    // if(product.selectedScheme && product.selectedScheme.scheme_type == 'bundle_offer'){
    //   orderDetail.items   = this.dataService.applyBundleProductsScheme(product,orderDetail);
    // }
    // //console.log("COUNT BFR=>"+orderDetail.items.length)
    // orderDetail.items  = this.dataService.updateSchemeFreeProductItems(orderDetail,this.allProducts);
    // //console.log("COUNT AFR=>"+orderDetail.items.length)
    // //apply slabs to all items 
    // orderDetail.items  = this.dataService.applySlabDiscountValuesToItems(orderDetail.items,this.discountSlabs)   
    

    // Special Discount
    product = this.calculateProductSpecialDiscount(product);

    // Extra Discount => Booker Discount
    product.extra_discount = 0;
    product.extra_discount_pkr = 0;
    
    product.unit_price_after_individual_discount = JSON.parse(
      JSON.stringify(product.unit_price_after_special_discount)
    );
     
    this.calculateNetAmountOfProduct(product);
  }

  calculateProductSpecialDiscount(product: any): any {
    return this.dataService.getSpecialDiscounts(
      this.selectedRetailer.segment_id,
      this.selectedRetailer.region_id,
      product,
      this.specialDiscounts
    );
  }

  calculateNetAmountOfProduct(product: any): any {
    product.net_amount = this.dataService.calculateUnitPrice(
      product.price,
      +product.stockQty
    );
    this.calculateProductTax(product);
  }

  calculateProductTax(product: any): void {
    if (product.tax_class_amount) {
      product.tax_amount_value =
        (product.tax_class_amount / 100) * product.item_retail_price;
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

  checkBundleScheme(scheme:any):boolean{
    
    
    //console.log(scheme.scheme_type);
    if(scheme.scheme_type == 'bundle_offer'){ 
      let itemCount  = 0; 
      const scheme_items      =   scheme.items.map(x=> {return x.item_id});
      this.orderedProducts.forEach(x=>{
        
        if(scheme_items.includes(x.item_id) && scheme.min_qty <= x.stockQty && (!x.scheme_id || x.scheme_id == 0)){ 
          ++itemCount;      
        }
       
      });
      //console.log(`COUNT ${scheme_items.length - 1} <= ${itemCount}` )
      if(scheme_items.length - 1 <= itemCount){
        //console.log(false);
          return false
      }else{
        //console.log(true);
        return true;
      }   
    
    }
    //console.log(false);
    return false;
  }

}
