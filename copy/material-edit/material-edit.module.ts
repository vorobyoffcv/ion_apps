import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialEditPage } from './material-edit';

@NgModule({
  declarations: [
    MaterialEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialEditPage),
  ],
})
export class MaterialEditPageModule {}
