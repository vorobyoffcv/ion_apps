import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

import { MaterialModel } from '../../components/material-model';

@Component({
  selector: 'page-material-edit',
  templateUrl: 'material-edit.html',
})
export class MaterialEditPage {
  
  material: MaterialModel = null;
  

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    //this.selectedMaterial = navParams.get("material");
    this.material = navParams.data.material;

  }

//  ionViewDidLoad() {
//    console.log('ionViewDidLoad MaterialEditPage');
//  }

//  onSubmit(formValue: any) {
//    console.log(formValue);
//  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
