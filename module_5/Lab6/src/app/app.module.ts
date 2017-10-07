import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';
import { Dialogs } from '@ionic-native/dialogs';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { Camera} from '@ionic-native/camera';
import {SQLite} from "@ionic-native/sqlite";
import { SQLitePorter } from '@ionic-native/sqlite-porter';

import { DbServiceProvider } from '../providers/db-service/db-service';
import { ProductServiceProvider } from '../providers/product-service/product-service';

import {ProductModalPage} from "../pages/product-modal/product-modal";
import {ProductDetailPage} from "../pages/product-detail/product-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductModalPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductModalPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Dialogs,
    Geolocation,
    Device,
    Camera,
    SQLite,
    SQLitePorter,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbServiceProvider,
    ProductServiceProvider
  ]
})
export class AppModule {}
