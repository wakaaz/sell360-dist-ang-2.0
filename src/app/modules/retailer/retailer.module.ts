import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { ClickOutsideModule } from 'ng-click-outside';

import { SharedModule } from '../shared/shared.module';
import { RetailerRoutingModule } from './retailer-routing.module';

import { RetailerComponent } from './retailer.component';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';
import { RetailerProfileComponent } from './components/retailer-profile/retailer-profile.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DataTablesModule,
        ClickOutsideModule,
        NgSelectModule,
        RetailerRoutingModule,
    ],
    declarations: [
        RetailerComponent,
        RetalersListComponent,
        RetailerProfileComponent,
    ],
    providers: [
    ],
})
export class RetailerModule { }
