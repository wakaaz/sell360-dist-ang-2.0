import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DistributorPurchaseComponent } from './components/distributor-purchase/distributor-purchase.component';
import { StockComponent } from './components/stock/stock.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
        {
            path: 'gallery',
            pathMatch: 'full',
            component: GalleryComponent,
        },
        {
            path: 'distributor-purchase',
            pathMatch: 'full',
            component: DistributorPurchaseComponent,
        },
        {
            path: 'stock',
            pathMatch: 'full',
            component: StockComponent,
        },
        {
            path: 'add-stock',
            pathMatch: 'full',
            component: AddStockComponent,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvenotryRoutingModule { }
