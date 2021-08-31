import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-order-items-list',
    templateUrl: 'order-items.component.html',
    styleUrls: ['./order-items.component.css'],
})

export class OrderItemsListComponent implements OnInit, OnChanges {

    @Input() orderDetail: any;

    showProducts: boolean;

    grossAmount: number;
    netAmount: number;
    totalBookerDiscount: number;
    totalSchemeDiscount: number;
    totalSpecialDiscount: number;
    totalMerchantDiscount: number;

    @Output() openDrawer: EventEmitter<boolean> = new EventEmitter();

    constructor(
    ) {
        this.grossAmount = 0;
        this.netAmount = 0;
        this.totalBookerDiscount = 0;
        this.totalSchemeDiscount = 0;
        this.totalSpecialDiscount = 0;
        this.totalMerchantDiscount = 0;
    }

    ngOnInit(): void {
        this.showProducts = false;
    }

    ngOnChanges(change: SimpleChanges): void {
        if (change.orderDetail?.currentValue) {}
    }

    openProductsList(event: Event): void {
        event.stopPropagation();
        this.openDrawer.emit();
    }

    deleteProduct(item: any): void {

    }
}
