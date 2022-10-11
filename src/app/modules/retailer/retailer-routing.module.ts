import { LedgerComponent } from './components/ledger/ledger.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerComponent } from './retailer.component';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';
import { RetailerProfileComponent } from './components/retailer-profile/retailer-profile.component';
import { OpeningBalanceComponent } from './components/opening-balance/opening-balance.component';
import { DistLedgerComponent } from './components/dist-ledger/ledger.component';
import { RetailersInvListComponent } from './components/retailers-invoices-list/retailers-invoices-list.component';
import { RetailerInvoicesComponent } from './components/retailer-invoices/retailer-invoices.component';

const routes: Routes = [
  {
    path: '',
    component: RetailerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: RetalersListComponent,
      },
      {
        path: 'profile/:id',
        pathMatch: 'full',
        component: RetailerProfileComponent,
      },
      {
        path: 'opening-balance',
        pathMatch: 'full',
        component: OpeningBalanceComponent,
      },
      {
        path: 'retailers-invoices-list',
        pathMatch: 'full',
        component: RetailersInvListComponent,
      },
      {
        path: 'credit-invoices/:retailerId',
        pathMatch: 'full',
        component: RetailerInvoicesComponent,
      },
      {
        path: 'ledger',
        pathMatch: 'full',
        component: LedgerComponent,
      },
      {
        path: 'historical-ledger',
        pathMatch: 'full',
        component: DistLedgerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerRoutingModule {}
