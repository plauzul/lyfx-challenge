import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificAdventurePage } from './specific-adventure';

@NgModule({
  declarations: [
    SpecificAdventurePage,
  ],
  imports: [
    IonicPageModule.forChild(SpecificAdventurePage),
  ],
})
export class SpecificAdventurePageModule {}
