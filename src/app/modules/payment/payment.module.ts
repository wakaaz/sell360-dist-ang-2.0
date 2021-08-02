import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { PaymentRoutingModule } from './payment-routing.module';

import { PaymentComponent } from './payment.component';

@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        SharedModule,
        PaymentRoutingModule,
    ],
    declarations: [
        PaymentComponent,
    ],
    providers: [],
})
export class PaymentModule { }
