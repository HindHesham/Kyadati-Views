import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InsuranceCompaniesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'InsuranceCompaniesDetailsPage'
})
@Component({
  selector: 'page-insurance-companies-details',
  templateUrl: 'insurance-companies-details.html',
})
export class InsuranceCompaniesDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsuranceCompaniesDetailsPage');
  }

}
