import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InphographicsFullSizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InphographicsFullSizePage'
})
@Component({
  selector: 'page-inphographics-full-size',
  templateUrl: 'inphographics-full-size.html',
})
export class InphographicsFullSizePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InphographicsFullSizePage');
  }
  gotoPrevPage(){
    this.navCtrl.pop();
  }
}
