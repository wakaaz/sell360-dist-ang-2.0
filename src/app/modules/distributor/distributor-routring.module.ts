import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DistributorComponent } from './distributor.component';
import { DistributorDetailsComponent } from './distributor-details/distributor-details.component';
const routes: Routes = [
  {
    path: '',
    component: DistributorComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: 'distributor-details',
        pathMatch: 'full',
        component: DistributorDetailsComponent, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributorRoutingModule {}
