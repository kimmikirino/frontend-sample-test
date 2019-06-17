import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposListingComponent } from './repos-listing/repos-listing.component';

const routes: Routes = [
  {path: '', component: ReposListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
