import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetinvolvedPage } from './getinvolved';

@NgModule({
  declarations: [
    GetinvolvedPage,
  ],
  imports: [
    IonicPageModule.forChild(GetinvolvedPage),
  ],
  exports: [
    GetinvolvedPage
  ]
})
export class GetinvolvedPageModule {}
