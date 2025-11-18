import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributorComponent } from './distributor.component';
import { ListComponent } from './components/list/list.component';
import { DistributorRoutingModule } from './distributor-routring.module';
import { DistributorService } from './services/distributor.service';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [DistributorComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule,
    DistributorRoutingModule,
    DataTablesModule,
    AgGridModule,
  ],
  providers: [DistributorService],
})
export class DistributorModule {}
