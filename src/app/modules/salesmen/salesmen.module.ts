import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickOutsideModule } from 'ng-click-outside';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';

import { SalemenRoutingModule } from './salesmen-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SalesmenComponent } from './salesmen.component';
import { SalesmenListComponent } from './components/salesmen-list/salesmen-list.component';
import { SalesmenLedgerComponent } from './components/salesmen-ledger/salesmen-ledger.component';
import { LedgerDetailsComponent } from './components/salesmen-ledger-details/salesmen-ledger-details.component';

import { SalesmenService } from './services/salesmen.service';

// NgRx Store
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule,
    NgSelectModule,
    SalemenRoutingModule,
    FormsModule,
    DataTablesModule,
    SharedModule,
    StoreModule.forFeature('salemen', reducers),
  ],
  declarations: [
    SalesmenComponent,
    SalesmenListComponent,
    SalesmenLedgerComponent,
    LedgerDetailsComponent,
  ],
  providers: [
    SalesmenService,
  ]
})
export class SalesmenModule { }
