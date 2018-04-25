import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InsuranceCompaniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InsuranceCompaniesPage'
})
@Component({
  selector: 'page-insurance-companies',
  templateUrl: 'insurance-companies.html',
})
export class InsuranceCompaniesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceCompaniesPage');
  }
  gotoProfileDetails(){
    this.navCtrl.push('InsuranceCompaniesDetailsPage')
  }
}
