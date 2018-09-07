import { Component } from '@angular/core';
import { NavParams, ViewController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MaterialModel } from '../../components/material-model';

@Component({
  selector: 'page-material-edit',
  templateUrl: 'material-edit.html',
})
export class MaterialEditPage {
  
  selectedMaterial: MaterialModel = null;
  material: MaterialModel = null;
  materials: Array<MaterialModel>;
  storage: Storage;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public aStorage: Storage) {
    //this.selectedMaterial = navParams.get("material");
    this.selectedMaterial = navParams.data.material;
    this.material = Object.assign({}, navParams.data.material);
    this.materials = navParams.data.materials;
    this.storage = aStorage;

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
    this.storage.ready().then(() => {
        this.storage.set('materials', JSON.stringify(this.materials));
    });
    this.viewCtrl.dismiss();
  }
  cancel() {
    this.viewCtrl.dismiss();
  }

}
