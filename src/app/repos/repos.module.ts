import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposListingComponent } from './repos-listing/repos-listing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReposListingComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
