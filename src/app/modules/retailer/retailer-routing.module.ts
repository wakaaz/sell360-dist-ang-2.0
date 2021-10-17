import { LedgerComponent } from './components/ledger/ledger.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerComponent } from './retailer.component';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';
import { RetailerProfileComponent } from './components/retailer-profile/retailer-profile.component';
import { OpeningBalanceComponent } from './components/opening-balance/opening-balance.component';

const routes: Routes = [
  {
    path: '',
    component: RetailerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
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
        path: 'ledger',
        pathMatch: 'full',
        component: LedgerComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailerRoutingModule { }
