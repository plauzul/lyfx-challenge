import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { AdventuresPage } from "../pages/adventures/adventures";
import { FavoritesPage } from "../pages/favorites/favorites";
import { SpecificAdventurePage } from "../pages/specific-adventure/specific-adventure";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdventuresProvider } from '../providers/adventures/adventures';
import { FavoritesProvider } from '../providers/favorites/favorites';

@NgModule({
  declarations: [
    MyApp,
    AdventuresPage,
    FavoritesPage,
    SpecificAdventurePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdventuresPage,
    FavoritesPage,
    SpecificAdventurePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdventuresProvider,
    FavoritesProvider
  ]
})
export class AppModule {}
