import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public image: string;
    
  constructor(public navCtrl: NavController, private dialogs:Dialogs, private network:Network, private geolocation:Geolocation, private device:Device, private camera: Camera) {

  }

  getPicture() {
  	const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

  	this.camera.getPicture(options).then(imageData => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, err => {
        console.error(err);
    });
  }

  getPosition() {
     
    this.geolocation.getCurrentPosition({enableHighAccuracy:false, timeout: 50000, maximumAge:2000}).then((resp) => {

      this.dialogs.alert("Latitude: " + resp.coords.latitude + "Longitude: " + resp.coords.longitude)
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    // resp.coords.latitude
    // resp.coords.longitude
    }).catch((error) => {
      this.dialogs.alert("Error getting location" + JSON.stringify(error))
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    });
  }

  deviceInfo() {
    this.dialogs.alert('DISPOSITIVO: \n Plataforma: ' + this.device.platform + '\n Fabricante: ' + this.device.manufacturer + '\n Version: ' + this.device.version)
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
  }

  networkInfo() {
    this.dialogs.alert(this.network.type)
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
  }

  d_alert() {
    this.dialogs.alert('Alert con Dialog Nativo')
    .then(() => console.log('Dialog dismissed'))
    .catch(e => console.log('Error displaying dialog', e));
  }

  d_beep() {
    //El parametro es la cantidad de Bepps que va asonar. // Funciona en android
    this.dialogs.beep(2);
  }

}
