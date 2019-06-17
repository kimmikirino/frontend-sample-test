import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ UserComponent, LoadingComponent],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    UserComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
