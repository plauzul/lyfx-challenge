import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesProvider } from "../../providers/favorites/favorites";
import { SpecificAdventurePage } from "../specific-adventure/specific-adventure";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites: any;
  specificAdventure: any = SpecificAdventurePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public favoritesProvider: FavoritesProvider
  ) {
  }

  ionViewWillEnter() {
    this.getFavorites();
  }

  getFavorites() {
    this.favoritesProvider.getAll()
    .then((data) => {
      this.favorites = data;
    })
    .catch((error) => {
      this.favorites = null;
    });
  }

}
