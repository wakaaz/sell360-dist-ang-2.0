import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';

import { SharedModule } from '../shared/shared.module';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';
import { RetailerRoutingModule } from './retailer-routing.module';

import { RetailerComponent } from './retailer.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DataTablesModule,
        NgSelectModule,
        RetailerRoutingModule,
    ],
    declarations: [
        RetailerComponent,
        RetalersListComponent,
    ],
    providers: [
    ],
})
export class RetailerModule { }
