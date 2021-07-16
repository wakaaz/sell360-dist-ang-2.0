import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesmenComponent } from './salesmen.component';
import { SalesmenListComponent } from './components/salesmen-list/salesmen-list.component';
import { SalesmenLedgerComponent } from './components/salesmen-ledger/salesmen-ledger.component';
import { LedgerDetailsComponent } from './components/salesmen-ledger-details/salesmen-ledger-details.component';

const routes: Routes = [
  {
    path: '',
    component: SalesmenComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SalesmenListComponent
      },
      {
        path: 'salesmen-ledger',
        pathMatch: 'full',
        component: SalesmenLedgerComponent
      },
      {
        path: 'salesmen-ledger/:id',
        pathMatch: 'full',
        component: LedgerDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalemenRoutingModule { }
