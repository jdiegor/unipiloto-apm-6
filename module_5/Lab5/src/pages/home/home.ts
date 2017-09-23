import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  constructor(public navCtrl: NavController, private storage: Storage, public formBuilder: FormBuilder) {
    this.myForm = this.createForm();
  }

    private createForm() {
      
    return this.formBuilder.group({
      name:       ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      last_name:  ['', Validators.required],
      email:      ['', Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')],
      date_birth: ['', Validators.required],
      passwd: this.formBuilder.group({
        password: ['', Validators.required],
        password_confirmation: ['', Validators.required]
      }),
      gender:     ['', Validators.required],
    });
  }

   saveForm(){
  	this.storage.set('form', this.myForm.value);
  	this.storage.get('form')
  	.then(result => {
			console.log(result)})
  	.catch(error => console.error(error));
  }

}
