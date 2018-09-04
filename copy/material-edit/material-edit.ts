import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MaterialModel } from '../../components/material-model';

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
  
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams) {
    //this.selectedMaterial = navParams.get("material");
    this.selectedMaterial = navParams.data.material;

    this.credentialsForm = this.formBuilder.group({
      title: [this.selectedMaterial.title]
      // ,      password: ['']
    });
    this.credentialsForm.title = '123';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialEditPage');
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }

}
