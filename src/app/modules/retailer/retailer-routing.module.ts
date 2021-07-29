import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetalersListComponent } from './components/retailers-list/retailers-list.component';

import { RetailerComponent } from './retailer.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailerRoutingModule { }
