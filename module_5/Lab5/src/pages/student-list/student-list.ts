import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StudentPage } from '../student/student';

/**
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {

  arrStudents: Array<any>; 
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.storage.get('Students')
  	.then(result => {
      this.arrStudents = result; 
    }) 
    .catch(error => console.error(error));
    
    console.log('ionViewDidLoad StudentListPage');
  }

  createStudent() {
    this.navCtrl.push(StudentPage);
  }
}
