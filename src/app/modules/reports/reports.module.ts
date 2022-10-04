import { RetailerService } from './../retailer/services/retailer.service';
import { OrdersService } from './../orders/services/orders.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReportsRoutingModule } from './reports-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ReportsComponent } from './reports.component';
import { PurchaseHisotryComponent } from './components/purchase-history/purchase-history.component';
import { DSReportComponent } from './components/dsr/dsr.component';
import { ReportsService } from './services/reports.service';
import { PurchasedDetailComponent } from './components/purchase-detail/purchase-detail.component';
import { CashSummaryComponent } from './components/cash-summary/cash-summary.component';
import { RateListComponent } from './components/export-rate-list/export-rate-list.component';
import { SpotSaleComponent } from './components/spot-sale/spot-sale.component';
import { StockOutReportComponent } from './components/stock-out-report/stock-out-report.component';
import { OrderBookerListComponent } from './components/order-booker-list/order-booker-list.component';
import { AllReportComponent } from './components/all-report/all-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    NgSelectModule,
    SharedModule,
    ReportsRoutingModule,
  ],
  declarations: [
    ReportsComponent,
    PurchaseHisotryComponent,
    PurchasedDetailComponent,
    DSReportComponent,
    CashSummaryComponent,
    RateListComponent,
    SpotSaleComponent,
    StockOutReportComponent,
    OrderBookerListComponent,
    AllReportComponent
  ],
  providers: [
    ReportsService, OrdersService, RetailerService
  ],
})
export class ReportsModule { }
