import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckinPage } from './checkin';

@NgModule({
  declarations: [
    CheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckinPage),
  ],
  exports: [
    CheckinPage
  ]
})
export class CheckinPageModule {}
