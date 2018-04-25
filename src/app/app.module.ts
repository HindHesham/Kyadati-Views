import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {CustomIconsModule} from 'ionic2-custom-icons';
import { Ionic2RatingModule } from 'ionic2-rating';
//import { ImagePicker } from '@ionic-native/image-picker';

import { IonicStorageModule } from '@ionic/storage';


import {MyApp} from './app.component';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';
import { DetailsAdsPage } from '../pages/details-ads/details-ads'



@NgModule({
   declarations: [
      MyApp,
      TabsPage,
      TabIconTextPage,
      DetailsAdsPage
   ],
   imports: [
      [HttpModule],
      BrowserModule,
      Ionic2RatingModule,
      IonicModule.forRoot(MyApp,{
        tabsHideOnSubPages: true,
        backButtonText: '',
        
      }), 
      IonicStorageModule.forRoot(),
      CustomIconsModule
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      TabsPage,
      TabIconTextPage,
      DetailsAdsPage
   ],
   providers: [
      StatusBar,
      SplashScreen,
     // ImagePicker,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
   ]
})
export class AppModule {
}
