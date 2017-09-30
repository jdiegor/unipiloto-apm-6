import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StudentPage } from '../student/student';
import { StudentService} from '../../services/student-service';

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
export class StudentListPage implements OnInit {

  arrStudents: Array<any>; 
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private studentService: StudentService) {
  }

  ionViewDidLoad() {
    
    
  }

  createStudent() {
    this.navCtrl.push(StudentPage);
  }

  ngOnInit(){
/*
    this.storage.get('Students')
  	.then(result => {
      this.studentService.arrStudents
      this.arrStudents = result; 
    }) 
    .catch(error => console.error(error));
    */
    console.log('ionViewDidLoad StudentListPage');
  }
}
