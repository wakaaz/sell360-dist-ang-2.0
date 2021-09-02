import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-execute-order',
    templateUrl: 'execute-order.component.html',
    styleUrls: ['./execute-order.component.css']
})

export class ExecuteOrderComponent implements OnInit {

    dtOPtions: DataTables.Settings = {};
    currentTab: string;
    executionEnum = {
        orders: 'orders',
        spotSale: 'spotSale',
        recovery: 'recovery',
        final: 'final'
    };

    @Output() cancel: EventEmitter<boolean> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
        this.currentTab = this.executionEnum.orders;
        this.dtOPtions = {
            pagingType: 'simple_numbers',
        };
    }

    changeTab(selectedTab: string): void {
        this.currentTab = selectedTab;
    }

    cancelExecution(): void {
        this.cancel.emit();
    }
}
