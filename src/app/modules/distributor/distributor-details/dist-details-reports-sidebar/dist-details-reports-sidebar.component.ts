import { Component } from '@angular/core';

@Component({
  selector: 'app-dist-details-reports-sidebar',
  standalone: false,
  templateUrl: './dist-details-reports-sidebar.component.html',
  styleUrl: './dist-details-reports-sidebar.component.css',
})
export class DistDetailsReportsSidebarComponent {
  openReport: boolean = false;

  openSalesAndProductsReport(event: Event): void {
    event.stopPropagation();
    this.openReport = true;
    document.body.classList.add('no-scroll');
    const overlayEls = document.getElementsByClassName('overlay-blure');
    if (overlayEls && overlayEls.length > 0) {
      overlayEls[0].classList.add('d-block');
    }
    const profileEl = document.getElementById('distributor-details');
    if (profileEl) {
      profileEl.classList.add('blur-div');
    }
  }

  clickedOutSide(event: Event): void {
    if (
      this.openReport &&
      !(event.target as HTMLElement).classList.contains('paginate_button')
    ) {
      this.closeSalesAndProductsReport();
    }
  }

  closeSalesAndProductsReport(): void {
    this.openReport = false;
    document.body.classList.remove('no-scroll');
    const overlayEls = document.getElementsByClassName('overlay-blure');
    if (overlayEls && overlayEls.length > 0) {
      overlayEls[0].classList.remove('d-block');
    }
    const profileEl = document.getElementById('distributor-details');
    if (profileEl) {
      profileEl.classList.remove('blur-div');
    }
  }
}
