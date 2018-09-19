import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../components/material-model';

@IonicPage()
@Component({
  selector: 'page-material-list',
  templateUrl: 'material-list.html',
})
export class MaterialListPage {

  selectedItem: any;
  icons: string[];
  items: Array<MaterialModel>;

//  storage: Storage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
//  }

//  constructor(public navCtrl: NavController, public navParams: NavParams, public aStorage: Storage) {
//    this.storage = aStorage;

    this.selectedItem = navParams.get('item');
    console.log(navParams.get('item'));

//    this.storage.ready().then(() => {
//      this.storage.get('materials').then((data: string) => {
//        if (data != null) this.items = JSON.parse(data);
//        else this.items = [];
//      });
//    });

    
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
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialListPage');
  }


}
