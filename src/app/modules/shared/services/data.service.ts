import { Injectable } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';

@Injectable()
export class DataService {

    constructor(
        private toastService: ToasterService,
    ) { }

    calculateUnitPrice(unitPurchased: number, perUnitPrice: number): number {
        return unitPurchased * perUnitPrice;
    }

    calculateItemsBill(prices: Array<number>): number {
        let bill = 0;
        prices.forEach(price => {
            bill += price;
        });
        return bill;
    }

    calculateDiscount(discount: number, type: string, total: number): number {
        if (type === 'percentage') {
            return (discount / 100) * total;
        } else if (type === 'price') {
            return total - discount;
        }
    }

    /** Schemes Calculation and implementation */

    getSchemes(itemId: number, unitId: number, prefId: number, schemes: Array<any>, retailer: any): Array<any> {
        const productSchemes = schemes.filter(scheme => {
            let isRetailerEligible = false;
            scheme.assignment.filter(assigned => {
                if (assigned.retailer_type_id === retailer.type_id && !assigned.except_retailers.includes(retailer.id)) {
                    isRetailerEligible = true;
                    return assigned;
                }
            });
            let productFound = [];
            if (isRetailerEligible) {
                productFound = scheme.items.filter(item => {
                    if (item.item_id === itemId && item.unit_id === unitId && item.pref_id === +prefId) {
                        return item;
                    }
                });
            }
            if (productFound.length) {
                return scheme;
            }
        });
        return productSchemes;
    }

    applyFreeProductScheme(product: any): any {
        let productWithScheme: any = {};
        switch (product.selectedScheme.scheme_rule) {
            case 1:
                productWithScheme = this.applyFPDOTP(product);
                break;
            case 2:
                productWithScheme = this.applyFPHalfQtyDiscount(product);
                break;
            case 3:
                productWithScheme = this.applyFPMinQtyRestriction(product);
                break;

            default:
                productWithScheme = product;
                break;
        }
        return productWithScheme;
    }

    applyFPDOTP(product: any): any {
        const discounted = this.getSDForFPTradePriceScheme(product.item_trade_price, product.quantity,
            product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
        product.scheme_discount = discounted.schemeDiscount;
        product.price = discounted.singleItemPrice;
        product.unit_price_after_scheme_discount = discounted.singleItemPrice;
        return product;
    }

    applyFPHalfQtyDiscount(product: any): any {
        if (this.isHalfQuantityEligible(product.quantit, product.selectedScheme.min_qty)) {
            const discounted = this.getSDForFPHalfQtyDiscount(product.item_trade_price, product.quantity,
                product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
            product.scheme_discount = discounted.schemeDiscount;
            product.price = discounted.singleItemPrice;
            product.unit_price_after_scheme_discount = discounted.singleItemPrice;
        } else {
            product.scheme_discount = 0;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
        }
        return product;
    }

    applyFPMinQtyRestriction(product: any): void {
        if (this.isEligibleForMinimumQuantity(product.quantity, product.selectedScheme.min_qty)) {
            const discounted = this.getSDForFPQtyRestrictionDiscount(product.item_trade_price, product.quantity,
                product.selectedScheme.min_qty, product.selectedScheme.quantity_free);
            product.scheme_discount = discounted.schemeDiscount;
            product.price = discounted.singleItemPrice;
            product.unit_price_after_scheme_discount = discounted.singleItemPrice;
        } else {
            product.scheme_discount = 0;
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
        }
        return product;
    }

    getSchemeAmount(itemTP: number, minQty: number, freeQty: number): number {
        const totalTpMinQty = itemTP * minQty;
        const totalItemBeingGiven = freeQty + minQty;
        const discountOnEachItem = (totalTpMinQty / totalItemBeingGiven).toFixed(2);
        const schemeAmount = itemTP - Number(discountOnEachItem);
        return schemeAmount;
    }

    /**
     * Get the total scheme discount to be applied on the item selected
     * @param itemTradePrice trade price of the item
     * @param userQty quantity added by the distributor
     * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
     * @param freeQty Free quantity of the scheme to be applied, added by Admin
     * @returns Total calculated discount of the scheme
     */
    getSDForFPTradePriceScheme(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number)
        : { singleItemPrice: number, schemeDiscount: number } {
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, freeQty);
        const tradePriceForSingleItem = itemTradePrice - (schemeAmount / userQty);
        return { singleItemPrice: tradePriceForSingleItem,  schemeDiscount:  schemeAmount };
    }

    /**
     * Check if the Half Quantity Discount is applicable on the given quantity
     * @param userQty Quantity added by the Distributor
     * @param minimumQty of the scheme to be applied, added by Admin
     * @returns true/false i.e. whether Half Quantity Discount is applicable or not
     */
    isHalfQuantityEligible(userQty: number, minimumQty: number): boolean {
        const eligibleQty = Math.floor(minimumQty / 2);
        return userQty > eligibleQty;
    }

    /**
     * Get the total scheme discount to be applied on the item selected
     * @param itemTradePrice trade price of the item
     * @param userQty quantity added by the distributor
     * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
     * @param freeQty Free quantity of the scheme to be applied, added by Admin
     * @returns Total calculated discount of the scheme
     */
    getSDForFPHalfQtyDiscount(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number)
        : { singleItemPrice: number, schemeDiscount: number } {
        const freeQtyInterval = Math.floor(userQty / minimumQty);
        const orderFreeQty = freeQtyInterval * freeQty;
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, orderFreeQty);
        const singItemPrice = itemTradePrice - (schemeAmount / userQty);
        return { singleItemPrice: singItemPrice, schemeDiscount: schemeAmount };
    }

    /**
     * Check if the Minimum Quantity Restriction Discount is applicable on the given quantity
     * @param userQty Quantity added by the Distributor
     * @param minimumQty of the scheme to be applied, added by Admin
     * @returns true/false i.e. whether Minimum Quantity Restriction Discount is applicable or not
     */
    isEligibleForMinimumQuantity(userQty: number, minimumQty: number): boolean {
        return userQty > minimumQty;
    }

    getSDForFPQtyRestrictionDiscount(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number)
        : { singleItemPrice: number, schemeDiscount: number } {
        const freeQtyInterval = Math.floor(userQty / minimumQty);
        const orderFreeQty = freeQtyInterval * freeQty;
        const schemeAmount = this.getSchemeAmount(itemTradePrice, minimumQty, orderFreeQty);
        const singleItemPrice = itemTradePrice - (schemeAmount / userQty);
        return { singleItemPrice, schemeDiscount: schemeAmount };
    }

    getSDForDOTP(product: any): any {
        if (this.isEligibleForMinimumQuantity(product.quantity, product.selectedScheme.min_qty)) {
            const units = product.units.sort((a, b) => {
                return b.item_trade_price - a.item_trade_price;
            });
            const percentageDiscount = (product.selectedScheme.disouct_on_tp / units[0].item_trade_price) * 100;
            const totalPrice = product.item_trade_price * product.quantity;
            const singleUnitDiscount = this.calculateDiscount(percentageDiscount, 'percentage', totalPrice);
            product.price = product.item_trade_price - singleUnitDiscount;
            product.unit_price_after_scheme_discount = product.item_trade_price - singleUnitDiscount;
            product.scheme_discount = product.quantity * singleUnitDiscount;
        } else {
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            product.scheme_discount = 0;
        }
        return product;
    }

    getSDForGift(product: any): any {
        if (this.isEligibleForMinimumQuantity(product.quantity, product.selectedScheme.min_qty)) {
            const totalItemsTradePrice = product.item_trade_price * product.quantity;
            product.scheme_discount = totalItemsTradePrice - product.selectedScheme.gift_value;
            product.gift_value = product.selectedScheme.gift_value;
        } else {
            product.price = product.item_trade_price;
            product.unit_price_after_scheme_discount = product.item_trade_price;
            product.scheme_discount = 0;
        }
        return product;
    }

    schemeAppliedSuccessfully(): void {
        const toast: Toaster = {
            title: 'Scheme Applied',
            message: 'Selected Scheme Applied Successfully to the product!',
            type: 'success'
        };
        this.toastService.showToaster(toast);
    }

    schemeCannotApplied(): void {
        const toast: Toaster = {
            title: 'Scheme Not Applied',
            message: 'Selected Scheme cannot applied to the product because of minimum quantity contraints!',
            type: 'error'
        };
        this.toastService.showToaster(toast);
    }
    /** Schemes End */

    /** Merchant Discount Start */
    applyMerchantDiscountForSingleProduct(merchantDiscount: any, product: any, orderTotal: number): any {
        let discountValuePKR = 0;
        if (merchantDiscount.flat !== null) {
            discountValuePKR = (merchantDiscount.flat.value / 100) * product.unit_price_after_scheme_discount;
            product.trade_discount = merchantDiscount.flat.value;
        } else if (merchantDiscount.slab?.length > 0) {
            const currentItemsPrice = product.unit_price_after_scheme_discount * product.quantity;
            const totalItemsPrice = currentItemsPrice + orderTotal;
            const selectedSlab = merchantDiscount.slab.find(slb => slb.range_from <= totalItemsPrice && slb.range_to >= totalItemsPrice);
            if (selectedSlab) {
                discountValuePKR = (selectedSlab.value / 100) * product.unit_price_after_scheme_discount;
                product.trade_discount = selectedSlab.value;
            } else {
                product.trade_discount = 0;
            }
        }
        product.trade_discount_pkr = discountValuePKR;
        product.price = product.unit_price_after_scheme_discount - discountValuePKR;
        product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        return product;
    }

    applySlabForTotal(product: any, merchantDiscount: any, orderTotal: number): any {
        const selectedSlab = merchantDiscount.slab.find(slb => slb.range_from <= orderTotal && slb.range_to >= orderTotal);
        const discountValuePKR = (selectedSlab.value / 100) * product.unit_price_after_scheme_discount;
        product.trade_discount = selectedSlab.value;
        product.trade_discount_pkr = discountValuePKR;
        product.price = product.unit_price_after_scheme_discount - discountValuePKR;
        product.unit_price_after_merchant_discount = JSON.parse(JSON.stringify(product.price));
        return product;
    }

    /** Merchant Discount END */

    /** Special Discount */
    getSpecialDiscounts(segmentId: number, regionId: number, product: any, specialDiscounts: Array<any>): any {
        const selectedSpecialDiscount = specialDiscounts.find(x =>
            segmentId === x.segment_id && regionId === x.region_id && +product.pref_id === x.pref_id);
        if (selectedSpecialDiscount) {
            product.price = product.unit_price_after_merchant_discount - selectedSpecialDiscount.discount;
            product.unit_price_after_special_discount = product.price - selectedSpecialDiscount.discount;
            product.special_discount = selectedSpecialDiscount.discount;
            product.special_discount_pkr = product.quantity * selectedSpecialDiscount.discount;
        } else {
            product.special_discount_pkr = 0.00;
            product.special_discount = 0.00;
            product.unit_price_after_special_discount = JSON.parse(JSON.stringify(product.unit_price_after_merchant_discount));
        }
        return product;
    }
    /** Special Discount End */

}
