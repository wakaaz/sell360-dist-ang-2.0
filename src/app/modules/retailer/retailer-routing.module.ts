import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerComponent } from './retailer.component';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';
import { RetailerProfileComponent } from './components/retailer-profile/retailer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: RetailerComponent,
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: RetalersListComponent,
      },
      {
        path: 'profile/:id',
        pathMatch: 'full',
        component: RetailerProfileComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailerRoutingModule { }
