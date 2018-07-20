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
  icon: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoritesProvider: FavoritesProvider
  ) {
  }

  ionViewDidLoad() {
    this.adventure = this.navParams.get("adventure");
    this.getFvorite();
  }

  getFvorite() {
    this.favoritesProvider.get(this.adventure)
    .then((data: any) => {
      this.icon = true;
    })
    .catch((error) => {
      this.icon = false;
    });
  }

  addFavorite() {
    this.favoritesProvider.add(this.adventure);
    this.icon = true;
  }

  removeFavorite() {
    this.favoritesProvider.remove(this.adventure);
    this.icon = false;
  }

}
