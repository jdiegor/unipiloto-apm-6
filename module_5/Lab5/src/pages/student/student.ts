import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { StudentService} from '../../services/student-service';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

    StudentForm: FormGroup;
    //arrStudents: Array<any>;

  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder, private navParams: NavParams, private alertCtrl : AlertController, private studentService: StudentService) {
    //this.studentService.arrStudents = new Array<any>();
    this.StudentForm = this.createForm();
  }

    private createForm() {
      
    return this.formBuilder.group({
      name:       ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      last_name:  ['', Validators.required],
      email:      ['', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
      date_birth: ['', Validators.required],
      gender:     ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    
    this.storage.get('Students')
  	.then(result => {
      if(result) {
        this.studentService.arrStudents = result; 
      }
      else {
        this.studentService.arrStudents = []; 
      }
      
    }) 
    .catch(error => console.error(error));
    
    console.log('ionViewDidLoad StudentListPage');
  }

   saveForm(){
    this.studentService.arrStudents.push(this.StudentForm.value);
    this.storage.set('Students', this.studentService.arrStudents);
    
    this.presentAlert(); 
    
  	this.storage.get('Students')
  	.then(result => {
			console.log(result)})
  	.catch(error => console.error(error));
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Estudiante',
      subTitle: 'Guardado correctamente',
      buttons: ['Aceptar']
    });
    alert.present();

    this.navCtrl.pop();
  }
}
