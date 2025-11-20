import { Component, Input } from '@angular/core';
import { IDistributorInvoice } from '../distributor-details.utils';

@Component({
  selector: 'app-dist-details-reports-sidebar',
  standalone: false,
  templateUrl: './dist-details-reports-sidebar.component.html',
  styleUrl: './dist-details-reports-sidebar.component.css',
})
export class DistDetailsReportsSidebarComponent {
  @Input() invoices: IDistributorInvoice[] = [];
  openReport: boolean = false;
  
  getTotalRevenue(): number {
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => acc + invoice.invoice_amount, 0);
  }

  getTotalRevenueForCurrentMonth(): number {
    const currentMonth = new Date().getMonth();
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => {
      const invoiceMonth = new Date(invoice.invoice_date).getMonth();
      if (invoiceMonth === currentMonth) {
        return acc + invoice.invoice_amount;
      }
      return acc;
    }, 0);
  }

  getTotalRevenueForCurrentYear(): number {
    const currentYear = new Date().getFullYear();
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => {
      const invoiceYear = new Date(invoice.invoice_date).getFullYear();
      if (invoiceYear === currentYear) {
        return acc + invoice.invoice_amount;
      }
      return acc;
    }, 0);
  }
  getTotalPaidAmount(): number {
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => acc + invoice.paid_amount, 0);
  }
  getTotalPaidAmountForCurrentMonth(): number {
    const currentMonth = new Date().getMonth();
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => {
      const invoiceMonth = new Date(invoice.invoice_date).getMonth();
      if (invoiceMonth === currentMonth) {
        return acc + invoice.paid_amount;
      }
      return acc;
    }, 0);
  }
  getTotalPaidAmountForCurrentYear(): number {
    const currentYear = new Date().getFullYear();
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => {
      const invoiceYear = new Date(invoice.invoice_date).getFullYear();
      if (invoiceYear === currentYear) {
        return acc + invoice.paid_amount;
      }
      return acc;
    }, 0);
  }
  getTotalAmountDue(): number {
    return this.invoices.reduce((acc: number, invoice: IDistributorInvoice) => acc + invoice.amount_due, 0);
  }
  

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
