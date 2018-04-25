import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';



/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'SignUpPage'
})
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  public phoneNumber: string;
 
  public userNameParam: string;
  registerForm: FormGroup;
  submitAttempt: boolean = false;

  phone: AbstractControl;
  code: AbstractControl;
  phoneNum: any;
  codeNum: any;
  public confirmationResult: any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    public formBuilder: FormBuilder) {
      this.userNameParam = navParams.get('userNameParam'); 
      this.registerForm = formBuilder.group({
        phone: ['', Validators.compose([Validators.minLength(7), Validators.required])],
        code: ['', Validators.compose([Validators.minLength(2), Validators.required])],
    });
    this.phone = this.registerForm.controls['phone'];
    this.code = this.registerForm.controls['code'];
  }

  ionViewDidLoad() {
  }
  
  signup(code, phone){
    if(!this.registerForm.valid){
      this.submitAttempt = true;
  } else {
      this.submitAttempt = false;
      
      
      const phoneNumberString = "+" + code+phone;
      console.log("one ", phoneNumberString);
     
        this.navCtrl.push('SignUpVerifyPage',{
          userName: this.userNameParam,
          phoneNumber: phoneNumberString
        });
    }
  }

}
