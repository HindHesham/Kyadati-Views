import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
/**
 * Generated class for the DrivingSchoolsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'ProfileDetailsPage'
})
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {
  pageNamePush: String;

  rate: any = 4;  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl: PopoverController) {
    this.pageNamePush = navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage');
    popover.present({
    });
  }

  saveUserRating(e) {
    console.log('clicked: ', e);
  }
  gotoMap(){
    //this.navCtrl.push('MapPage');
  }
}
