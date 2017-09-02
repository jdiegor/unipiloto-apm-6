import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from "./app.routing";
import { FormsModule } from '@angular/forms';
import {APP_BASE_HREF} from "@angular/common";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ErrorComponent } from './error/error.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { DriverComponent } from './driver/driver.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from "./service/products-service";
import { DriversService } from "./service/drivers-service";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PageOneComponent,
    PageTwoComponent,
    ErrorComponent,
    StudentComponent,
    StudentDetailComponent,
    DriverComponent,
    DriverDetailComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProductsService,
    DriversService,
    {
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }


