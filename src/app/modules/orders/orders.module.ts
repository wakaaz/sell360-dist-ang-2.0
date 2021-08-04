import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';

import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrdersListDetailsComponent } from './components/orders-list-details/orders-list-details.component';
import { CreateDispatchedComponent } from './components/create-dispatched/create-dispatched.component';
import { OrderExecutionListComponent } from './components/execution-list/execution-list.component';
import { ExecuteOrderComponent } from './components/execute-order/execute-order.component';
import { CompletedOrdersComponent } from './components/completed-orders/completed-orders.component';
import { CounterSaleComponent } from './components/counter-sale/counter-sale.component';
import { BookingVsExecutionComponent } from './components/booking-vs-execution/booking-vs-execution.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    NgSelectModule,
    DataTablesModule,
  ],
  declarations: [
      OrdersComponent,
      OrdersListComponent,
      OrdersListDetailsComponent,
      CreateDispatchedComponent,
      OrderExecutionListComponent,
      ExecuteOrderComponent,
      CompletedOrdersComponent,
      CounterSaleComponent,
      BookingVsExecutionComponent,
    ]
})
export class OrderModule { }
