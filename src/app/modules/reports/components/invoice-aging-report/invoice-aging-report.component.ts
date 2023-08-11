import { Component, OnInit } from '@angular/core';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { localStorageKeys } from 'src/app/core/constants/localstorage.constants';
import { LocalStorageService } from 'src/app/core/services/storage.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { environment } from 'src/environments/environment';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-invoice-aging-report',
  templateUrl: './invoice-aging-report.component.html',
  styleUrls: ['./invoice-aging-report.component.css'],
})
export class InvoiceAgingReportComponent implements OnInit {
  creditedBookers: Array<any> = [];
  selectBookers: Array<any> = [];

  distributorId: number = 0;
  constructor(
    private reportService: ReportsService,
    private toastService: ToasterService,
    private localStorageService: LocalStorageService
  ) {
    const dist = localStorageService.getItem(localStorageKeys.distributor);
    this.distributorId = dist.id;
  }

  ngOnInit(): void {
    this.getAllCreditedBookers();
  }

  getAllCreditedBookers(): void {
    this.reportService.getAllCreditedBookers().subscribe(
      (res) => {
        this.creditedBookers = res.data;
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Bookers not fetched, please try again later!',
            type: 'error',
          });
        }
      }
    );
  }
  generateDSRWithCreditOrderBookers(): void {
    const orderBookers = this.selectBookers.join(',');
    const url = `${environment.apiDomain}${API_URLS.BOOKER_WISE_CREDIT_AGEING_REPORT}/${this.distributorId}?booker_ids=${orderBookers}`;
    window.open(url);
  }
}
