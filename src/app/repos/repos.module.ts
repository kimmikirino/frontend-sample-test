import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposListingComponent } from './repos-listing/repos-listing.component';
import { RepositoryComponent } from './repository/repository.component';
import { CommitsListingComponent } from './commits-listing/commits-listing.component';
import { CommitComponent } from './commit/commit.component';

@NgModule({
  declarations: [ReposListingComponent, RepositoryComponent, CommitsListingComponent, CommitComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReposRoutingModule
  ]
})
export class ReposModule { }
