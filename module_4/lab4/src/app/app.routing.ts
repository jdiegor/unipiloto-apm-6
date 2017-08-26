import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {StudentComponent} from "./student/student.component";
import {ErrorComponent} from "./error/error.component";
import {DriverComponent} from './driver/driver.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },   //CON ESTE DEFINE LA RUTA POR DEFECTO 
  { path: 'home',  component:  HomeComponent},            //CON ESTE DEFINE LA RUTA A LA PAGINA HOME 
  { path: 'about',  component:  AboutComponent},          //CON ESTE DEFINE LA RUTA A LA PAGINA ABOUT
  { path: 'page-one', component: PageOneComponent },      //CON ESTE DEFINE LA RUTA A LA PAGINA PAGE ONE
  { path: 'page-two', component: PageTwoComponent },      //CON ESTE DEFINE LA RUTA A LA PAGINA PAGE TWO
  { path: 'student', component: StudentComponent },      //CON ESTE DEFINE LA RUTA A LA PAGINA PAGE student
  { path: 'driver', component: DriverComponent },      //CON ESTE DEFINE LA RUTA A LA PAGINA PAGE Driver
  { path: 'error', component: ErrorComponent },      //CON ESTE DEFINE LA RUTA A LA PAGINA PAGE ERROR
  { path: '**', redirectTo: '/error', pathMatch: 'full' }, //CON ESTE DEFINE LA RUTA CUANDO LA URL ES INVALIDA
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}