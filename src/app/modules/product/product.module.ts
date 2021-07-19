import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-detail/product-detail.component';

import { ProductService } from './product.service';

@NgModule({
    imports: [
        CommonModule,
        DataTablesModule,
        ProductRoutingModule,
    ],
    declarations: [
        ProductComponent,
        ProductDetailsComponent,
    ],
    providers: [
        ProductService,
    ],
})
export class ProductModule { }
