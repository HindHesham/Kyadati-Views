import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'EducationalContentPage'
})
@Component({
  selector: 'page-educational-content',
  templateUrl: 'educational-content.html',
})
export class EducationalContentPage {
  public learningType: String= 'فيديوهات';
  public status: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.status = 'فيديوهات'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationalContentPage');
  }
  showFullSize(){
    this.navCtrl.push('InphographicsFullSizePage')
  }
}
