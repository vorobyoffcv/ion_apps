import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../components/material-model';
import { MaterialEditPage } from '../material-edit/material-edit';

import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-materials',
  templateUrl: 'materials.html',
})
export class MaterialsPage {
  selectedItem: any;
  icons: string[];
//  items: Array<{ title: string, note: string, icon: string, length: number, height: number, depth: number, joint: number}>;
//  items: Array<{ title: string, note: string, length: number, height: number, depth: number, joint: number}>;
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

    /*
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: 0,
        title: 'Brick ' + i,
        note: 'Red...',
        length: 250,
        height: 60,
        depth: 120,
        joint: 12
      });
    }
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialsPage');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!

    //    this.navCtrl.push(MaterialsPage, {
    //      item: item
    //    });
//    this.navCtrl.push("MaterialEditPage", { material: item });
    
    let myModal = this.modalCtrl.create(MaterialEditPage, { material: item, materials: this.items });
    myModal.present();
//    this.navCtrl.setRoot(this.constructor.name, {
//      item: item
//    });


  }


}
