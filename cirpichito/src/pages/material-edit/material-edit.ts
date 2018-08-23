import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaterialEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-material-edit',
  templateUrl: 'material-edit.html',
})
export class MaterialEditPage {
  selectedMaterial: MaterialModel = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.selectedMaterial = navParams.get("material");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialEditPage');
  }
  onClicked(){
  }

  onSubmit(formValue: any){
    console.log(formValue);
  }

}
