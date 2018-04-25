import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImportantPlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ImportantPlacesPage'
})
@Component({
  selector: 'page-important-places',
  templateUrl: 'important-places.html',
})
export class ImportantPlacesPage {
  public placesType: String= "اماكن حكوميه";
  public status: String;
  rate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = 'اماكن حكوميه'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImportantPlacesPage');
  }

  gotoProfile(pageName){
    this.navCtrl.push('ProfileDetailsPage', {
      page: pageName
    });
  }

  saveUserRating(e) {
    console.log('clicked: ', e);
  }
}
