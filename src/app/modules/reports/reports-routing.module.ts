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
        component: PurchaseHisotryComponent
      },
      {
        path: 'purchase/:id',
        pathMatch: 'full',
        component: PurchasedDetailComponent
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
        path: 'dsr',
        pathMatch: 'full',
        component: DSReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
