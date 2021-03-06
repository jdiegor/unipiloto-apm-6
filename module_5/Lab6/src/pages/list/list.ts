import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {ProductServiceProvider} from "../../providers/product-service/product-service";
import {ProductModalPage} from "../product-modal/product-modal";
import {ProductDetailPage} from "../product-detail/product-detail";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  dataDB: string;
  showExport: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public productService: ProductServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  public itemSelected(item: any) {
    this.navCtrl.push(ProductDetailPage, {id: item.id});
  }

  public addProductModal() {
    let addProductModal = this.modalCtrl.create(ProductModalPage, {});
    addProductModal.onDidDismiss(data => {
      console.log(data);
    });
    addProductModal.present();
    this.showExport = false;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  public showBackupDB() {
    this.productService.getBackupdb()
    .then((data) => {
      this.dataDB = JSON.stringify(data);
      this.showExport = true;
    })
    .catch((error) => {
      this.dataDB = JSON.stringify(error);
    })
  }

}
