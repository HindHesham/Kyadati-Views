import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsAdsPage } from '../details-ads/details-ads'

/**
 * Generated class for the MyAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MyAdsPage'
})
@Component({
  selector: 'page-my-ads',
  templateUrl: 'my-ads.html',
})
export class MyAdsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAdsPage');
  }
  close(){
    this.navCtrl.pop();
  }
  createAds(){
    this.navCtrl.push('CreateAdsPage');
  }
  gotoAdsProfile(){
    this.navCtrl.push(DetailsAdsPage);
  }
}
