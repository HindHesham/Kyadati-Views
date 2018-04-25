import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { ImagePicker } from '@ionic-native/image-picker';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the CreateAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'CreateAdsPage'
})
@Component({
  selector: 'page-create-ads',
  templateUrl: 'create-ads.html',
})
export class CreateAdsPage {
  public images = [];
  eventKey:any;
  address: any;
  carYear: any;
  mails: any;
  se3at: any;
  carPrice: any;
  
  createAdsForm: FormGroup;
  submitAttempt: boolean = false;

  addressFormName: AbstractControl;
  carYearFormName: AbstractControl;
  mailsFormName: AbstractControl;
  se3atFormName: AbstractControl;
  carPriceFormName: AbstractControl;

  constructor( public navCtrl: NavController, 
    public navParams: NavParams, 
    //private imagePicker: ImagePicker,
    public formBuilder: FormBuilder ) {
      this.createAdsForm = formBuilder.group({
        addressFormName: ['', Validators.compose([Validators.required])],
        carYearFormName: ['', Validators.compose([Validators.required])],
        mailsFormName: ['', Validators.compose([Validators.required])],
        se3atFormName: ['', Validators.compose([Validators.required])],
        carPriceFormName: ['', Validators.compose([Validators.required])],
    });
    this.addressFormName = this.createAdsForm.controls['addressFormName'];
    this.carYearFormName = this.createAdsForm.controls['carYearFormName'];
    this.mailsFormName = this.createAdsForm.controls ['mailsFormName'];
    this.se3atFormName = this.createAdsForm.controls ['se3atFormName'];
    this.carPriceFormName = this.createAdsForm.controls ['carPriceFormName'];    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdsPage');
  }
  onKeyPress(event) {
    console.log(event)
    //this.eventKey = event.key;
  }
  getPictures(){ 
    /*
    this.imagePicker.getPictures({ maximumImagesCount: 5 }).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.images.push(results[i]);results[i];    
          console.log("imageees", this.images)
      }
    }, (err) => { });
*/
  }
}
