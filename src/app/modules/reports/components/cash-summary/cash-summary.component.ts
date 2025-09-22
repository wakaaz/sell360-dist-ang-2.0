import { Component, OnInit } from '@angular/core';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { environment } from 'src/environments/environment';
import { ReportsService } from '../../services/reports.service';

@Component({

    selector: 'app-cash-summary',
    templateUrl: 'cash-summary.component.html',
    styleUrls: ['./cash-summary.component.css'],
  standalone: false


})

export class CashSummaryComponent implements OnInit {

    selectedDate: string;
    selectedMonth: string;
    summaryUrl: string;
    distributorId: number;

    constructor(
      private reportService: ReportsService,
      private storageService: LocalStorageService,
      private toastService: ToasterService,
    ) {
    }

    ngOnInit(): void {
      this.distributorId = this.storageService.getItem('distributor').id;
      this.summaryUrl = `${environment.apiDomain}${API_URLS.CASH_SUMMARY}`;
    }

    generateDateWiseSummary(): void {
        if (this.selectedDate) {
          window.open(`${this.summaryUrl}/${this.distributorId}/date/${this.selectedDate}`);
        } else {
          this.toastService.showToaster({
            title: 'CSR Error:',
            message: 'Please select date to generate CSR!',
            type: 'error'
          });
        }
    }

    generateMonthWiseSummary(): void {
      if (this.selectedMonth) {
        window.open(`${this.summaryUrl}/${this.distributorId}/month/${this.selectedMonth}`);
      } else {
        this.toastService.showToaster({
          title: 'CSR Error:',
          message: 'Please select month to generate CSR!',
          type: 'error'
        });
      }
    }
}
