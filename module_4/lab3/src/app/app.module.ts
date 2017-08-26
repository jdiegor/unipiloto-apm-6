import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductDetailComponent} from '../pages/detail.component';

import { AppComponent } from './app.component';
import { CarShopComponent } from './car-shop/car-shop.component';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    CarShopComponent,
    ProductDetailComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
