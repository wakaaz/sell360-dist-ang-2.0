import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-rate-list',
    templateUrl: 'export-rate-list.component.html',
    styleUrls: ['./export-rate-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class RateListComponent implements OnInit {

    selectedSegment: string;
    selectedDivision: string;
    selectedProductStatus: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    downloadPDF(): void {
    }

    downloadExecel(): void {
    }

}
