import { Component } from '@angular/core';

import { AdventuresPage } from "../adventures/adventures";
import { FavoritesPage } from "../favorites/favorites";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AdventuresPage;
  tab2Root = FavoritesPage;

  constructor() {

  }
}
