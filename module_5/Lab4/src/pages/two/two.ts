import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import {ListPage} from '../list/list';
/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

   /*
  *  La propiedad "rol" de un botón puede ser "destructive" o "cancel".
  *  Los botones sin una propiedad de función tendrán el aspecto predeterminado de la plataforma.
  *  Los botones con la función cancel siempre se cargarán como el botón inferior, no importa dónde estén en la matriz.
  *  Todos los demás botones se mostrarán en el orden en que se han agregado a la matriz de botones.
  *  Nota: Recomendamos que los botones destructivos sean siempre el primer botón de la matriz,
  *  ubincando el botón en la parte superior.
  *  Cuando descarta ActionShhet tocando el fondo de la pantalla,
  *  se activara el controlador del botón con la función de cancelación.
  * */

@IonicPage()
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class TwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoPage');
  }

  revealActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modificar alguna opción',
      buttons: [
        {
          text: 'Destructivo',
          role: 'destructive',
          handler: () => {
            console.log('Click en Destructive');
          }
        },
        {
          text: 'Alguna una opción',
          handler: () => {
            console.log('Alguna una opción');
          }
        },
        {
          text: 'Alguna otra opción',
          handler: () => {
            console.log('Alguna otra opción');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }
      ]
    });

    actionSheet.present();
  }




  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content:
      '<div class="custom-spinner-container">' +
      '<div class="custom-spinner-box">Cargando por 5 segundos</div>' +
      '</div>',
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Por favor espere...');
    });

    loading.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Por favor espere...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push(ListPage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }


}
