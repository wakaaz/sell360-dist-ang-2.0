import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cash-summary',
    templateUrl: 'cash-summary.component.html',
    styleUrls: ['./cash-summary.component.css']
})

export class CashSummaryComponent implements OnInit {

    selectedDate: string;
    selectedMonth: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    generateDateWiseSummary(): void {
        console.log('this.selectedDate', this.selectedDate);
    }

    generateMonthWiseSummary(): void {
        console.log('this.selectedMonth :>> ', this.selectedMonth);
    }
}
