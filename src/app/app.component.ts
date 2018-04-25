import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  //rootPage = 'SignUpVerifyPage';
  pages: Array<{title: string, component: any, icon: string,tabComponent: string, index: number}>;

    constructor( public platform: Platform,  
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private storage: Storage) {

      this.platform.ready().then(() => {
         statusBar.styleDefault();
         splashScreen.hide();
      });

      this.pages = [
        { title: 'الصفحة الرئيسية', component: "HomePage", icon: "home", tabComponent: 'HomePage', index: 0},
        { title: 'بيع/شراء سيارات', component: "AdsPage", icon: "sell", tabComponent: 'AdsPage', index: 1 },
        { title: 'شركات تأمين', component: "InsuranceCompaniesPage", icon: "security", tabComponent: 'InsuranceCompaniesPage', index: 2},
        { title: 'فيديوهات تعليمية', component: "EducationalContentPage", icon: "videos", tabComponent: 'EducationalContentPage', index: 3},
        { title: 'إنفوجرافيك', component: "EducationalContentPage", icon: "infographics", tabComponent: 'EducationalContentPage', index: 4 },
        { title: 'أماكن تهمك', component: "ImportantPlacesPage", icon: "importantplace", tabComponent: 'ImportantPlacesPage', index: 5},
        { title: 'مدارس تعليمية', component: "DrivingSchoolsPage", icon: "drivingschools", tabComponent: 'DrivingSchoolsPage', index: 6}

      ];
   }
   
   openPage(page) {


    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.component, params);
    }
  }
 
  isActive(page) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.component) {
      return 'primary';
    }
    return;
  }
    
}
