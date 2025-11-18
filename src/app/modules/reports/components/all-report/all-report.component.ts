import { Component, OnInit } from '@angular/core';

interface ReportCard {
  title: string;
  route: string[];
  image: string;
  section: string;
}

@Component({

  selector: 'app-all-report',
  templateUrl: './all-report.component.html',
  styleUrls: ['./all-report.component.css'],
  standalone: false


})
export class AllReportComponent implements OnInit {

  searchTerm: string = '';
  
  allReports: ReportCard[] = [
    // Retail Reports
    { title: 'Retailers', route: ['../../retailer/list'], image: '../../../../../assets/images/retailers-report.svg', section: 'Retail Reports' },
    { title: 'Credit Aging', route: ['/reports/invoice-aging-report'], image: '../../../../../assets/images/credit-aging.svg', section: 'Retail Reports' },
    { title: 'Retailer Ledger', route: ['/retailer/ledger'], image: '../../../../../assets/images/retailer-ledger.svg', section: 'Retail Reports' },
    { title: 'Historical Ledgers', route: ['/retailer/historical-ledger'], image: '../../../../../assets/images/historical-retailer-ledger.svg', section: 'Retail Reports' },
    
    // Sales Reports
    { title: 'Daily Sales Reports', route: ['/reports/dsr'], image: '../../../../../assets/images/day-wise-sales-report.svg', section: 'Sales Report' },
    { title: 'Sale Order History', route: ['/reports/sale-order-history'], image: '../../../../../assets/images/sale-order-history.svg', section: 'Sales Report' },
    
    // Inventory Reports
    { title: 'Stock Report', route: ['/reports/stock-report'], image: '../../../../../assets/images/product-coverage-report.svg', section: 'Inventory Reports' },
    { title: 'Purchase History', route: ['/reports/purchase-history'], image: '../../../../../assets/images/daily-booking-report.svg', section: 'Inventory Reports' },
    { title: 'Product Rate List', route: ['/reports/export-rate-list'], image: '../../../../../assets/images/product-rate.svg', section: 'Inventory Reports' },
    { title: 'Allocated Stock Report', route: ['/reports/allocated-stock-report'], image: '../../../../../assets/images/product-coverage-report.svg', section: 'Inventory Reports' },
  ];

  get filteredReports(): ReportCard[] {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.allReports;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.allReports.filter(report => 
      report.title.toLowerCase().includes(term) ||
      report.section.toLowerCase().includes(term)
    );
  }

  get sections(): { title: string; reports: ReportCard[] }[] {
    const sectionMap = new Map<string, ReportCard[]>();
    
    this.filteredReports.forEach(report => {
      if (!sectionMap.has(report.section)) {
        sectionMap.set(report.section, []);
      }
      sectionMap.get(report.section)!.push(report);
    });

    return Array.from(sectionMap.entries()).map(([title, reports]) => ({
      title,
      reports
    }));
  }

  constructor() { }

  ngOnInit(): void {
  }

  onQuickFilterChanged(event: any): void {
    this.searchTerm = event.target.value;
  }

}
