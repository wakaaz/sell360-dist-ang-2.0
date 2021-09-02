import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-retailer-sub-list',
    templateUrl: 'retailer-sub-listing.component.html',
    styleUrls: ['./retailer-sub-listing.component.css'],
    encapsulation: ViewEncapsulation.None,
})

export class RetailerSubListComponent implements OnInit {
    @Input() retailers: Array<any>;

    @Output() retailerChanged: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    getOrderDetails(retailer: any): void {
        this.retailers = this.retailers.map(ret => {
            if (ret.isActive) {
                ret.isActive = false;
            }
            if (ret.id === retailer.id) {
                ret.isActive = true;
            }
            return ret;
        });
        this.retailerChanged.emit(retailer);
    }

}
