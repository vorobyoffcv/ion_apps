import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';

import { MaterialModel } from '../../components/material-model';

@Component({
  selector: 'page-material-edit',
  templateUrl: 'material-edit.html',
})
export class MaterialEditPage {
  
  selectedMaterial: MaterialModel = null;
  material: MaterialModel = null;
  

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    //this.selectedMaterial = navParams.get("material");
    this.material = new MaterialModel({});
    this.selectedMaterial = navParams.data.material;
    this.material = Object.assign(this.material, navParams.data.material);
//    this.material.fillFrom(navParams.data.material);

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
  save() {
    this.selectedMaterial = Object.assign(this.selectedMaterial, this.material);
//    this.selectedMaterial.fillFrom(this.material);

    this.viewCtrl.dismiss();
  }
  cancel() {
    this.viewCtrl.dismiss();
  }

}
