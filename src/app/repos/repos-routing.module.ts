import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReposListingComponent } from './repos-listing/repos-listing.component';
import { CommitsListingComponent } from './commits-listing/commits-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ReposListingComponent
  },
  {
    path: ':user/:repo',
    component: CommitsListingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
