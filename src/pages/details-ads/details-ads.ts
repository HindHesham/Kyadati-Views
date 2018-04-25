import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-details-ads',
  templateUrl: 'details-ads.html',
})


export class DetailsAdsPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }
  
  
  ionViewDidLoad() {
  }
  ionViewDidEnter() {
    //
     this.slides._rtl = true 
    console.log("ionViewDidEnter");
  }
 
}
