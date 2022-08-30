import { LocalStorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { RetailerService } from './../../services/retailer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent implements OnInit {
  filter = {
    orderBooker: null,
    route: null,
    segment: null,
    startDate: null,
    endDate: null,
  };
  retailerCore: any;
  loading: boolean;

  retailerSelected = null;

  constructor(
    private retailerService: RetailerService,
    private toastService: ToasterService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // this.loading = true
    this.retailerService.getRetailerCore().subscribe((data) => {
      this.retailerCore = data;
      // this.getRetailerListing();
    });
  }

  retailers = [];

  filterRetailers() {
    let params = '';
    params =
      params +
      (this.filter.orderBooker
        ? `order_booker=${this.filter.orderBooker}`
        : params + '');
    params = params.length
      ? this.filter.route
        ? params + `&route=${this.filter.route}`
        : params + ''
      : this.filter.route
      ? params + `route=${this.filter.route}`
      : params + '';
    params = params.length
      ? this.filter.segment
        ? params + `&segment=${this.filter.segment}`
        : params + ''
      : this.filter.segment
      ? params + `segment=${this.filter.segment}`
      : params + '';

    this.getRetailerListing(params);
  }

  getRetailerListing(queryParams = null): void {
    this.loading = true;
    this.retailerService.getRetailerListing(queryParams).subscribe((res) => {
      this.loading = false;
      this.retailers = res;
    });
  }

  generateLedger() {
    if (
      !this.retailerSelected ||
      !this.filter.startDate ||
      !this.filter.endDate
    ) {
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'Please select a retailer & provide start/end dates',
        type: 'error',
      });
    }

    window.open(
      `${environment.apiDomain}/distributor-api/retailerBalanceSheetPdf/${
        this.retailerSelected
      }/${this.filter.startDate}/${
        this.filter.endDate
      }?session=${this.storageService.getItem('dist_session')}`,
      '_blank'
    );
  }
}
