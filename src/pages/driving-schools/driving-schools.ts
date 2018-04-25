import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { Storage } from '@ionic/storage';

/**
 * Generated class for the DrivingSchoolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'DrivingSchoolsPage'
})
@Component({
  selector: 'page-driving-schools',
  templateUrl: 'driving-schools.html',
})
export class DrivingSchoolsPage {
  rate: any = 4;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrivingSchoolsPage');
  }
 

  gotoSchoolProfile(){
    //e.stopPropagation();
    this.navCtrl.push('ProfileDetailsPage', {
      page: 'drivingSchools'
    });
  }

  saveUserRating(e) {
    console.log('clicked: ', e);
  }
}
