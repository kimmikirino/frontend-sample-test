import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ UserComponent, LoadingComponent],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    UserComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
