import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributorComponent } from './distributor.component';
import { ListComponent } from './components/list/list.component';
import { DistributorDetailsComponent } from './distributor-details/distributor-details.component';
import { DistibutorDetailsInfoComponent } from './distributor-details/distibutor-details-info/distibutor-details-info.component';
import { DistributorRoutingModule } from './distributor-routring.module';
import { DistributorService } from './services/distributor.service';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AgGridModule } from 'ag-grid-angular';
import { PrimaryOrdersService } from '../orders/primary-orders/services/primary-orders.service';

@NgModule({
  declarations: [DistributorComponent, ListComponent, DistributorDetailsComponent, DistibutorDetailsInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistributorRoutingModule,
    DataTablesModule,
    AgGridModule,
  ],
  providers: [DistributorService, PrimaryOrdersService],
})
export class DistributorModule {}
