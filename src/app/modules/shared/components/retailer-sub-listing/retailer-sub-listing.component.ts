import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Toaster, ToasterService } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-retailer-sub-list',
  templateUrl: 'retailer-sub-listing.component.html',
  styleUrls: ['./retailer-sub-listing.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class RetailerSubListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() loading: boolean;
  @Input() currentTab: number;
  @Input() retailers: Array<any>;
  @Input() orderType: string;
  @Input() isSpotSaleActive: boolean;

  searchText: string;

  retailerDispList: Array<any>;

  @Output() retailerChanged: EventEmitter<any> = new EventEmitter();

  constructor(
    private toastService: ToasterService,
    private change: ChangeDetectorRef,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.retailers.currentValue) {
    this.retailerDispList = this.retailers;
    this.change.detectChanges();
    // }
  }

  searchByRetailer(): void {
    if (this.searchText) {
      this.retailerDispList = this.retailers.filter(ret => ret.retailer_name.toLowerCase().includes(this.searchText.toLowerCase()));
    } else {
      this.retailerDispList = this.retailers;
    }
  }

  getOrderDetails(retailer: any): void {
    if (this.orderType !== 'execution' || (this.orderType === 'execution' && !this.isSpotSaleActive)) {
      this.retailerDispList = this.retailerDispList.map(ret => {
        if (ret.isActive) {
          ret.isActive = false;
        }
        if (((this.orderType !== 'execution' || (this.orderType === 'execution' && this.currentTab === 1))
          && ret.id === retailer.id)
          || (this.orderType === 'execution' && this.currentTab === 2 && ret.retailer_id === retailer.retailer_id)) {
          ret.isActive = true;
        }
        return ret;
      });
      this.retailerChanged.emit(retailer);
    } else if (this.orderType === 'execution' && this.isSpotSaleActive) {
      const toast: Toaster = {
        type: 'error', message: 'Please save/cancel the current order to move forward!',
        title: 'Spot Sale Error:'
      };
      this.toastService.showToaster(toast);
    }
  }

  ngOnDestroy(): void {
    this.change.detach();
  }

}
