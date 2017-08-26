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
    DriverDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }


