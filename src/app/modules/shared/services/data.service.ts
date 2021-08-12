import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor() { }

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

    getSchemes(itemId: number, unitId: number, prefId: number, schemes: Array<any>): Array<any> {
        const productSchemes = schemes.filter(scheme => {
            let productFound = [];
            productFound = scheme.items.filter(item => {
                if (item.item_id === itemId && item.unit_id === unitId && item.pref_id === +prefId) {
                    return item;
                }
            });
            if (productFound.length) {
                return scheme;
            }
        });
        return productSchemes;
    }

    /**
     * Get the total scheme discount to be applied on the item selected
     * @param itemTradePrice trade price of the item
     * @param userQty quantity added by the distributor
     * @param minimumQty Minimum quantity of the scheme to be applied, added by Admin
     * @param freeQty Free quantity of the scheme to be applied, added by Admin
     * @returns Total calculated discount of the scheme
     */
    getSDForTradePriceScheme(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number): number {
        const minQtyTradePrice = itemTradePrice * minimumQty;
        const schemeItems = freeQty + minimumQty;
        const discount = minQtyTradePrice / schemeItems;
        const tradePriceForSingleItem = itemTradePrice - discount;
        return tradePriceForSingleItem * userQty;
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
    getSDForHalfQtyDiscount(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number): number {
        const eligibleQty = Math.floor(minimumQty / 2);
        const freeQtyInterval = Math.floor(userQty / eligibleQty);
        const orderFreeQty = freeQtyInterval * freeQty;
        const schemeItems = minimumQty + orderFreeQty;
        const totalTPForMinQty = itemTradePrice * minimumQty;
        const discount = totalTPForMinQty / schemeItems;
        return (itemTradePrice - discount) * userQty;
    }

    /**
     * Check if the Minimum Quantity Restriction Discount is applicable on the given quantity
     * @param userQty Quantity added by the Distributor
     * @param minimumQty of the scheme to be applied, added by Admin
     * @returns true/false i.e. whether Minimum Quantity Restriction Discount is applicable or not
     */
    isQuantityRestrictionDiscEligible(userQty: number, minimumQty: number): boolean {
        return userQty >= minimumQty;
    }

    getSDForQtyRestrictionDiscount(itemTradePrice: number, userQty: number, minimumQty: number, freeQty: number): number {
        const freeQtyInterval = Math.floor(userQty / minimumQty);
        const orderFreeQty = freeQtyInterval * freeQty;
        const schemeItems = minimumQty + orderFreeQty;
        const totalTPForMinQty = itemTradePrice * minimumQty;
        const discount = totalTPForMinQty / schemeItems;
        return (itemTradePrice - discount) * userQty;
    }

}
