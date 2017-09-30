import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StudentPage } from '../pages/student/student';
import { StudentListPage } from '../pages/student-list/student-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* Este plugin es propio de ionic  Puede utilizar WebSql, Indexdb o SQlite*/
import { IonicStorageModule } from '@ionic/storage';

import { StudentService } from '../services/student-service';

/* IMPORTANTE: 
   sin embargo, si sq quisiera emular la bd en el browser es probable que este otro plugin funsione. Seria con un provider paralelo al de SQLite
   https://github.com/Microsoft/cordova-plugin-websql  */

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StudentPage,
    StudentListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__my_form_db',
         driverOrder: ['websql','indexeddb', 'sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StudentPage,
    StudentListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StudentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
