import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventmapPage } from './eventmap';

@NgModule({
  declarations: [
    EventmapPage,
  ],
  imports: [
    IonicPageModule.forChild(EventmapPage),
  ],
  exports: [
    EventmapPage
  ]
})
export class EventmapPageModule {}
