import { Component, OnInit } from '@angular/core';

import { ToasterService } from './../../../../core/services/toaster.service';
import { environment } from './../../../../../environments/environment';
import { ReportsService } from './../../services/reports.service';
import { LocalStorageService } from './../../../../core/services/storage.service';

@Component({

  selector: 'app-allocated-stock-report',
  templateUrl: './allocated-stock-report.component.html',
  styleUrls: ['./allocated-stock-report.component.css'],
  standalone: false


})
export class AllocatedStockReportComponent implements OnInit {

  filter = {
    startDate: null,
    endDate: null,
  };
  loading: boolean;

  retailerSelected = null;

  constructor(
    private reportsService: ReportsService, 
    private storageService: LocalStorageService,
    private toastService: ToasterService
    ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.reportsService.getRateListCore().subscribe(res => {

      this.loading = false;
    });
  }

  

  generateAllocationReport() {
    if (
      !this.filter.startDate ||
      !this.filter.endDate
    ) {
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'Please select start/end dates',
        type: 'error',
      });
    }
    const dist = this.storageService.getItem('distributor');
    //https://marketer.sell360.app/distributor-stock-allocation-pdf-report?dateFrom=2023-12-12&dateTo=2023-12-13&distributor=32&region=1
    window.open(
      `${environment.apiDomain}/distributor-stock-allocation-pdf-report?dateFrom=${this.filter.startDate}&dateTo=${this.filter.endDate}&distributor=${dist.id}&region=${dist.region_id}`,
      '_blank'
    );
  }

  onStartDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.filter.startDate = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.filter.startDate = null;
    } else if (typeof date === 'string') {
      this.filter.startDate = date;
    }
  }

  onEndDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.filter.endDate = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.filter.endDate = null;
    } else if (typeof date === 'string') {
      this.filter.endDate = date;
    }
  }
}
