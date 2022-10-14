import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { API_URLS } from 'src/app/core/constants/api-urls.constants';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { GeneralDataService } from 'src/app/modules/shared/services';
import { environment } from 'src/environments/environment';
import { ReportsService } from '../../services/reports.service';
import { LocalStorageService } from '../../../../core/services/storage.service';
import { localStorageKeys } from '../../../../core/constants/localstorage.constants';

@Component({
  selector: 'app-ds-report',
  templateUrl: './dsr.component.html',
  styleUrls: ['./dsr.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DSReportComponent implements OnInit {
  loading: boolean;
  orderDate: string;
  startOrderDate: string;
  endOrderDate: string;
  selecetdSalemanId: number;
  selectSalemans: Array<any> = [];
  selectedDSR: number;
  salesmen: Array<any> = [];
  salemanDSR: Array<any> = [];
  salemanCustomFilterDSR: Array<any> = [];
  dsrData: any;
  distributorId: number = 0;
  dtOptions: DataTables.Settings = {};

  constructor(
    private generalDataService: GeneralDataService,
    private toastService: ToasterService,
    private reportService: ReportsService,
    private localStorageService: LocalStorageService
  ) {
    this.dtOptions = {
      pagingType: 'simple_numbers',
    };
    const dist = localStorageService.getItem(localStorageKeys.distributor);
    this.distributorId = dist.id;
  }

  ngOnInit(): void {
    this.getAllSalesman();
  }

  getAllSalesman(): void {
    this.generalDataService.getAllSalesMen().subscribe(
      (res) => {
        if (res.status === 200) {
          this.salesmen = res.data;
        }
      },
      (error) => {
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            message: 'Salesmen not fetched, please try again later!',
            type: 'error',
          });
        }
      }
    );
  }

  getSaleReportsBySalemanAndDate(): void {
    if (this.orderDate && this.selecetdSalemanId) {
      this.reportService
        .getDailySaleReportBySalemanAndDate(
          this.selecetdSalemanId,
          this.orderDate
        )
        .subscribe(
          (res) => {
            if (res.status === 200) {
              this.salemanDSR = res.data;
            }
          },
          (error) => {
            if (error.status !== 1 && error.status !== 401) {
              this.toastService.showToaster({
                title: 'Error:',
                type: 'error',
                message:
                  'The DSR of selected saleman cannot be fetched, please try again later.',
              });
            }
          }
        );
    }
  }

  getSaleReportsBySalemanAndStartDateEndDate(): void {
    if (this.orderDate && this.selecetdSalemanId) {
      this.reportService
        .getDailySaleReportBySalemanAndDate(
          this.selecetdSalemanId,
          this.orderDate
        )
        .subscribe(
          (res) => {
            if (res.status === 200) {
              this.salemanDSR = res.data;
            }
          },
          (error) => {
            if (error.status !== 1 && error.status !== 401) {
              this.toastService.showToaster({
                title: 'Error:',
                type: 'error',
                message:
                  'The DSR of selected saleman cannot be fetched, please try again later.',
              });
            }
          }
        );
    }
  }

  getDSRDetail(dsrId: number): void {
    this.selectedDSR = dsrId;
    this.loading = true;
    this.reportService.getDSRDetail(dsrId).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 200) {
          this.dsrData = res.data;
        }
      },
      (error) => {
        this.loading = false;
        if (error.status !== 1 && error.status !== 401) {
          this.toastService.showToaster({
            title: 'Error:',
            type: 'error',
            message:
              'The DSR detail cannot be fetched, please try again later.',
          });
        }
      }
    );
  }

  generateDSR(): void {
    const url = `${environment.apiDomain}${API_URLS.DSR_PDF}/${this.selectedDSR}`;
    window.open(url);
  }

  generateDSRCustomPdfReport(): void {
    let dateQueryParams: string;
    let salesmanQueryParams: string;

    if (this.startOrderDate && this.endOrderDate) {
      dateQueryParams = `&start_date=${this.startOrderDate}&end_date=${this.endOrderDate}`;
    }

    if (this.selectSalemans && this.selectSalemans.length > 0) {
      const orderSalemans = this.selectSalemans.join(',');
      salesmanQueryParams = `&salesman_id=${orderSalemans}`;
    }
    const url = `${environment.apiDomain}${
      API_URLS.DSRS_PDF_REPORT
    }?distributor_id=${this.distributorId}${
      salesmanQueryParams ? salesmanQueryParams : ''
    }${dateQueryParams ? dateQueryParams : ''}`;
    window.open(url);
  }
}
