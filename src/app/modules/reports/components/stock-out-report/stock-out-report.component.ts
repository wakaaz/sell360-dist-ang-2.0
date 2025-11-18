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
    
    // Convert dates to UTC string format as required by the API
    const startDate = new Date(this.date.start);
    const endDate = new Date(this.date.end);
    
    const startDateStr = `
      ${startDate.toUTCString().split(",")[1].trim().split(" ")[0]}-${startDate.toUTCString().split(",")[1].trim().split(" ")[1]}-${startDate.toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
    const endDateStr = `
      ${endDate.toUTCString().split(",")[1].trim().split(" ")[0]}-${endDate.toUTCString().split(",")[1].trim().split(" ")[1]}-${endDate.toUTCString().split(",")[1].trim().split(" ")[2]}
    `;
    
    window.open(`
    ${environment.apiDomain}/distributor-stock-pdf-report?type=dateRange&dateFrom=${startDateStr.trim()}&dateTo=${endDateStr.trim()}&region=${dist.region_id}&distributor=${dist.id}`, "_blank");
  }

  onStartDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.date.start = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.date.start = null;
    } else if (typeof date === 'string') {
      this.date.start = date;
    }
  }

  onEndDateChange(date: any): void {
    // Convert Date object to string format 'yyyy-MM-dd' for storage
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      this.date.end = `${year}-${month}-${day}`;
    } else if (date === null || date === undefined) {
      this.date.end = null;
    } else if (typeof date === 'string') {
      this.date.end = date;
    }
  }

}
