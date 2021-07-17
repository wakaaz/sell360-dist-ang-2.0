import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { PurchaseHisotryComponent } from './components/purchase-history/purchase-history.component';
import { DSReportComponent } from './components/dsr/dsr.component';
import { PurchasedDetailComponent } from './components/purchase-detail/purchase-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
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
