import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-order-items-list',
    templateUrl: 'order-items.component.html',
    styleUrls: ['./order-items.component.css'],
})

export class OrderItemsListComponent implements OnInit {

    @Input() inventoryProducts: Array<any>;
    @Input() productsLoading: boolean;

    showProducts: boolean;

    @Output() openDrawer: EventEmitter<boolean> = new EventEmitter();

    constructor(
    ) {
    }

    ngOnInit(): void {
        this.showProducts = false;
    }

    openProductsList(event: Event): void {
        event.stopPropagation();
        this.openDrawer.emit();
    }
}
