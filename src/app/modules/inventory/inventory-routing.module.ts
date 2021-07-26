import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DistributorPurchaseComponent } from './components/distributor-purchase/distributor-purchase.component';
import { StockComponent } from './components/stock/stock.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvenotryRoutingModule { }
