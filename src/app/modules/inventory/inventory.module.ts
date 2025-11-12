import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickOutsideModule } from 'ng-click-outside';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgGridModule } from 'ag-grid-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { InvenotryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InventoryComponent } from './inventory.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DistributorPurchaseComponent } from './components/distributor-purchase/distributor-purchase.component';
import { StockComponent } from './components/stock/stock.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';

import { InventoryService } from './services/inventory.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClickOutsideModule,
        DataTablesModule,
        NgSelectModule,
        AgGridModule,
        NzDatePickerModule,
        NzSelectModule,
        InvenotryRoutingModule,
        SharedModule,
    ],
    exports: [
    ],
    declarations: [
        InventoryComponent,
        GalleryComponent,
        StockComponent,
        DistributorPurchaseComponent,
        AddStockComponent
    ],
    providers: [
        InventoryService,
    ],
})
export class InventoryModule { }
