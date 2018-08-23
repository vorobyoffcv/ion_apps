import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MaterialModel } from '../../components/material-model';
/**
 * Generated class for the MaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
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
    console.log('ionViewDidLoad MaterialsPage');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!

    //    this.navCtrl.push(MaterialsPage, {
    //      item: item
    //    });
    this.navCtrl.push("MaterialEditPage", { material: item });
//    this.navCtrl.setRoot(this.constructor.name, {
//      item: item
//    });


  }


}
