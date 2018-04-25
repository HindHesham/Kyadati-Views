import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'MapPage'})
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  
}
