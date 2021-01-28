// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';

// Containers
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { HomeComponent } from './containers/home/home.component';

// Components
import { AppProgressSpinnerComponent } from './components/app-progress-spinner/app-progress-spinner.component';
import { AddressBookComponent } from './components/address-book/address-book.component';

@NgModule({
  declarations: [
    AppProgressSpinnerComponent,
    HomeLayoutComponent,
    HomeComponent,
    AddressBookComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    AppProgressSpinnerComponent,
    HomeComponent,
    HomeLayoutComponent,
  ]
})
export class CoreModule { }
