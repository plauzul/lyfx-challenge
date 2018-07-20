import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesProvider } from "../../providers/favorites/favorites";

@IonicPage()
@Component({
  selector: 'page-specific-adventure',
  templateUrl: 'specific-adventure.html',
})
export class SpecificAdventurePage {

  adventure: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoritesProvider: FavoritesProvider
  ) {
  }

  ionViewDidLoad() {
    this.adventure = this.navParams.get("adventure");
  }

  favorite() {
    this.favoritesProvider.add(this.adventure);
  }

}
