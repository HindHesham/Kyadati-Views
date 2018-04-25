import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import {TabsPage, TabIconTextPage} from '../tabs/tabs.page';

@IonicPage({
  name: 'SignUpVerifyPage'
})
@Component({
  selector: 'page-sign-up-verify',
  templateUrl: 'sign-up-verify.html',
})
export class SignUpVerifyPage {
  public secret_code: string;
   Key1: any;
   Key2: any;
   Key3: any;
   Key4: any;
   Key5: any;
   Key6: any;
  public userNameParam: string;
  public phoneParam: string;
  public confirmationResult: any;
  public verifyCode: any;
  verifyForm: FormGroup;
  submitAttempt: boolean = false;
  public user: any;

  // input1: AbstractControl;
  // input2: AbstractControl;
  // input3: AbstractControl;
  // input4: AbstractControl;
  // input5: AbstractControl;
  // input6: AbstractControl;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private storage: Storage,
   ) {
     
      this.userNameParam = navParams.get('userName');
      this.phoneParam = navParams.get('phoneNumber');


  //     this.verifyForm = formBuilder.group({
  //       input1: ['', Validators.compose([Validators.required])],
  //       input2: ['', Validators.compose([Validators.required])],
  //       input3: ['', Validators.compose([Validators.required])],
  //       input4: ['', Validators.compose([Validators.required])],
  //       input5: ['', Validators.compose([Validators.required])],
  //       input6: ['', Validators.compose([Validators.required])]
  //   });
  // this.input1 = this.verifyForm.controls['verifycode'];
  // this.input2 = this.verifyForm.controls['verifycode'];
  // this.input3 = this.verifyForm.controls['verifycode'];
  // this.input4 = this.verifyForm.controls['verifycode'];
  // this.input5 = this.verifyForm.controls['verifycode'];
  // this.input6 = this.verifyForm.controls['verifycode'];

  }


  ionViewLoaded() {}
  
  onSearchChange1(searchValue : string ) {  
    console.log(searchValue);
    this.Key1 = searchValue;
  }
  onSearchChange2(searchValue : string ) {  
    console.log(searchValue);
    this.Key2 = searchValue;
  }
  onSearchChange3(searchValue : string ) {  
    console.log(searchValue);
    this.Key3 = searchValue;
  }
  onSearchChange4(searchValue : string ) {  
    console.log(searchValue);
    this.Key4 = searchValue;
  }
  onSearchChange5(searchValue : string ) {  
    console.log(searchValue);
    this.Key5 = searchValue;
  }
  onSearchChange6(searchValue : string ) {  
    console.log(searchValue);
    this.Key6 = searchValue;
  }
  moveFocus(nextElement) {
    nextElement.setFocus();
  }

  verify(input1, input2, input3, input4, input5, input6){
    var user:any;
    this.verifyCode = input6+input5+input4+input3+input2+input1;
    console.log(this.verifyCode);
    
    this.navCtrl.setRoot(TabsPage);
   
  }

}
