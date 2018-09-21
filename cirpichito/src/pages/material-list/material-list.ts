import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../components/material-model';
import { MaterialEditPage } from '../material-edit/material-edit';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-material-list',
  templateUrl: 'material-list.html',
})
export class MaterialListPage {

  selectedItem: any;
  icons: string[];
  items: Array<MaterialModel>;

  storage: Storage;


  constructor(public modalCtrl: ModalController, public navParams: NavParams, public aStorage: Storage) {
    this.storage = aStorage;

    this.selectedItem = navParams.get('item');
    console.log(navParams.get('item'));

    this.storage.ready().then(() => {
      this.storage.get('materials').then((data: string) => {
        if (data != null) this.items = JSON.parse(data);
        else this.items = [];
      });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialListPage');
  }

  itemTapped(event, item) {
    let myModal = this.modalCtrl.create(MaterialEditPage, { material: item, materials: this.items });
    myModal.present();
  }

}
