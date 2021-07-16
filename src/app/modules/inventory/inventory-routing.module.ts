import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DistributorPurchaseComponent } from './components/distributor-purchase/distributor-purchase.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvenotryRoutingModule { }
