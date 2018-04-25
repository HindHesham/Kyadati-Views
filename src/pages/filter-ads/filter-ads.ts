import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'FilterAdsPage'
})
@Component({
  selector: 'page-filter-ads',
  templateUrl: 'filter-ads.html',
})
export class FilterAdsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterAdsPage');
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  close(){
    this.navCtrl.pop();
  }
}
