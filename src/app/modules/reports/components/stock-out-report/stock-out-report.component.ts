import { ToasterService } from './../../../../core/services/toaster.service';
import { LocalStorageService } from './../../../../core/services/storage.service';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-stock-out-report',
  templateUrl: './stock-out-report.component.html',
  styleUrls: ['./stock-out-report.component.css'],
  standalone: false


})

export class StockOutReportComponent implements OnInit {

  date = {
    start: null,
    end: null,
  }
  currentYear: number = new Date().getFullYear();
  constructor(
    private storageService: LocalStorageService,
    private toastService: ToasterService,
  ) {
  }

  ngOnInit(): void {
  }

  generateStockReport() {
    if (!this.date.start || !this.date.end)
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'Please provide start/end dates',
        type: 'error'
      });
    const dist = this.storageService.getItem('distributor');
    this.date.start = `
      ${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[0]}-${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[1]}-${new Date(this.date.start).toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
    this.date.end = `
      ${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[0]}-${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[1]}-${new Date(this.date.end).toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
    window.open(`
    ${environment.apiDomain}/distributor-stock-pdf-report?type=dateRange&dateFrom=${this.date.start.trim()}&dateTo=${this.date.end.trim()}&region=${dist.region_id}&distributor=${dist.id}`, "_blank");
  }

}
