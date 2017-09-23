import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }

   presentProfileModal() {
    let profileModal = this.modalCtrl.create(ProfilePage, { userId: 8675309, name: 'King Kong' });
    profileModal.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Alerta básica',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Alert Confirm',
      message: 'Alerta con opciones',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Click en aceptar');
          }
        }
      ]
    });
    alert.present();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Alert con Prompt',
      inputs: [
        {
          name: 'Usuario',
          placeholder: 'Cedula'
        },
        {
          name: 'Contraseña',
          placeholder: 'Contraseña',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Click en Cancelar');
          }
        },
        {
          text: 'Ingresar',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }
}
