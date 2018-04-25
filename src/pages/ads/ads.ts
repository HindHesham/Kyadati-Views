import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsAdsPage } from '../details-ads/details-ads'

/**
 * Generated class for the AdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AdsPage'
})
@Component({
  selector: 'page-ads',
  templateUrl: 'ads.html',
})
export class AdsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdsPage');
  }
  createAds(){
    this.navCtrl.push('CreateAdsPage');
  }
  gotoFilter(){
    this.navCtrl.push('FilterAdsPage');
  }
  gotoAdsProfile(){
    this.navCtrl.push(DetailsAdsPage);
  }
  showMyAds(){
    this.navCtrl.push('MyAdsPage')
  }
}
