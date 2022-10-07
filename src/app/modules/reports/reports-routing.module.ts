import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { PurchaseHisotryComponent } from './components/purchase-history/purchase-history.component';
import { DSReportComponent } from './components/dsr/dsr.component';
import { PurchasedDetailComponent } from './components/purchase-detail/purchase-detail.component';
import { CashSummaryComponent } from './components/cash-summary/cash-summary.component';
import { RateListComponent } from './components/export-rate-list/export-rate-list.component';
import { SpotSaleComponent } from './components/spot-sale/spot-sale.component';
import { StockOutReportComponent } from './components/stock-out-report/stock-out-report.component';
import { OrderBookerListComponent } from './components/order-booker-list/order-booker-list.component';
import { AllReportComponent } from './components/all-report/all-report.component';
import { InvoiceAgingReportComponent } from './components/invoice-aging-report/invoice-aging-report.component';


const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dsr',
      },
      {
        path: 'purchase-history',
        pathMatch: 'full',
        component: PurchaseHisotryComponent,
      },
      {
        path: 'purchase/:id',
        pathMatch: 'full',
        component: PurchasedDetailComponent,
      },
      {
        path: 'cash-summary',
        component: CashSummaryComponent,
      },
      {
        path: 'export-rate-list',
        component: RateListComponent,
      },
      {
        path: 'spot-sale',
        component: SpotSaleComponent,
      },
      {
        path: 'stock-report',
        component: StockOutReportComponent,
      },
      {
        path: 'sale-order-history',
        pathMatch: 'full',
        component: OrderBookerListComponent,
      },
      {
        path: 'dsr',
        pathMatch: 'full',
        component: DSReportComponent,
      },
      {
        path: 'all-reports',
        pathMatch: 'full',
        component: AllReportComponent,
      },
      {
        path: 'invoice-aging-report',
        pathMatch: 'full',
        component: InvoiceAgingReportComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
