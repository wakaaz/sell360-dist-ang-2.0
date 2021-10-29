import { ToasterService } from './../../../../core/services/toaster.service';
import { environment } from './../../../../../environments/environment';
import { ReportsService } from './../../services/reports.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rate-list',
  templateUrl: 'export-rate-list.component.html',
  styleUrls: ['./export-rate-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RateListComponent implements OnInit {

  selectedSegment: string;
  selectedDivision: string = "All";
  selectedProductStatus: string = "All";
  loading = false;
  core = {
    segment: [],
    divisions: [],
    distributor_region: 0
  };

  constructor(private reportsService: ReportsService, private toastService: ToasterService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.reportsService.getRateListCore().subscribe(res => {
      this.core = res;
      this.loading = false;
    });
  }

  downloadPDF(): void {
    if (!this.selectedSegment || !this.selectedDivision)
      return this.toastService.showToaster({
        title: 'Error:',
        message: 'Please select a segment',
        type: 'error'
      });
    window.open(`${environment.apiDomain}/fpdf/special-discount.php?region=${this.core.distributor_region}&division=${this.selectedDivision}&active=${this.selectedProductStatus}&segment=${this.selectedSegment}`, "_blank")
  }

  downloadExecel(): void {
  }

}
