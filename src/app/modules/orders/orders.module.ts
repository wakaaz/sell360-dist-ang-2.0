import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from '../shared/shared.module';

import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersListDetailsComponent } from './components/orders-list-details/orders-list-details.component';
import { CreateDispatchedComponent } from './components/create-dispatched/create-dispatched.component';
import { OrderExecutionListComponent } from './components/execution-list/execution-list.component';
import { ExecuteOrderComponent } from './components/execute-order/execute-order.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { CounterSaleComponent } from './components/counter-sale/counter-sale.component';
import { BookingVsExecutionComponent } from './components/booking-vs-execution/booking-vs-execution.component';
import { CompletedOrdersDetailComponent } from './components/completed-orders-detail/completed-orders-detail.component';

import { OrdersService } from './services/orders.service';
import { OrderDispatchedComponent } from './components/order-dispatched/order-dispatched.component';
import { OrderBookerListComponent } from './components/order-booker-list/order-booker-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ClickOutsideModule,
    NgSelectModule,
    SharedModule,
    DataTablesModule,
  ],
  declarations: [
      OrdersComponent,
      OrdersListComponent,
      OrdersListDetailsComponent,
      CreateDispatchedComponent,
      OrderExecutionListComponent,
      OrderDispatchedComponent,
      ExecuteOrderComponent,
      CompletedOrdersComponent,
      CounterSaleComponent,
      BookingVsExecutionComponent,
      CompletedOrdersDetailComponent,
      OrderBookerListComponent,     
    ],
    providers: [
      OrdersService
    ],
})
export class OrderModule { }
