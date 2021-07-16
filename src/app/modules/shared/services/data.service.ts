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
}
