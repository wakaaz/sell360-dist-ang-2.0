import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClickOutsideModule } from 'ng-click-outside';
import { DataTablesModule } from 'angular-datatables';
import { InvenotryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InventoryComponent } from './inventory.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DistributorPurchaseComponent } from './components/distributor-purchase/distributor-purchase.component';
import { StockComponent } from './components/stock/stock.component';

import { InventoryService } from './services/inventory.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClickOutsideModule,
        DataTablesModule,
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
    ],
    providers: [
        InventoryService,
    ],
})
export class InventoryModule { }
