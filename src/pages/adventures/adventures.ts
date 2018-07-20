import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AdventuresProvider } from "../../providers/adventures/adventures";
import { SpecificAdventurePage } from "../specific-adventure/specific-adventure";

@IonicPage()
@Component({
  selector: 'page-adventures',
  templateUrl: 'adventures.html',
})
export class AdventuresPage {

  adventures: any;
  specificAdventure: any = SpecificAdventurePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public adventuresProvider: AdventuresProvider,
    public toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    this.getAdventures();
  }

  getAdventures() {
    this.adventuresProvider.getAll()
    .subscribe((data: any) => {
      this.adventures = data;
    }, (error: any) => {
      const toast = this.toastCtrl.create({
        message: 'Error loading adventures, please try again!',
        duration: 3000
      });
      toast.present();
    });
  }

}
