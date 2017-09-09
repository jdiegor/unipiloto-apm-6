import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

/**
 *  EJEMPLO DE USO DE FIREBASE PARA BASE DE DATOS NoSQL
 *  Documentación: https://github.com/angular/angularfire2
 *  Los datos para enlazar el app con el proyecto que se define en firebase se coloca en el archivo environments/environment.ts (esos datos se obtienen desde la pagina de firebase)
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  lastname: string;
  age: number;

  items: FirebaseListObservable<any[]>;
  item: FirebaseObjectObservable<any>;

  constructor(db: AngularFireDatabase) {
    //this.items = db.list('/items');
    this.item = db.object('/item');

    this.items = db.list('/items', {
      query: {
        orderByChild: 'firstname'
      }
    });
  }



  saveRecord() {
    this.item.set({ firstname: this.name, lastname: this.lastname, age: this.age });
    this.items.push( { firstname: this.name, lastname: this.lastname, age: this.age } );
    alert("GUARDO !");
  }

  updateAge() {
    this.item.update({age:this.age});
    alert("ACTUALIZO EDAD !");
  }
  
  saveFirstName(firstName: string) {
    this.item.set({ firstname: firstName });
  }
  saveLastName(lastName: string) {
    this.item.set({ lastname: lastName });
  }
  delete() {
    this.item.remove();
  }
  deleteItem(objItem){
    //alert(objItem.$key);
    this.items.remove(objItem.$key);
  }
}
