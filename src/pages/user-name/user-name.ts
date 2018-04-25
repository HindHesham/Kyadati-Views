import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the UserNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'UserNamePage'
})
@Component({
  selector: 'page-user-name',
  templateUrl: 'user-name.html',
})
export class UserNamePage {

  public eventKey: any;
  userNameRegisterForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder ) {
      this.userNameRegisterForm = formBuilder.group({
        usernameFormName: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserNamePage');
  }
  onSearchChange(searchValue : string ) {  
    console.log(searchValue);
    this.eventKey = searchValue;
  }
  /*
  onKeyPress(event) {
    this.eventKey = event.key;
    console.log("key ", event.target.value.length)
    
  }*/
  continue(userName){
    if(!this.userNameRegisterForm.valid){
      this.submitAttempt = true;
  } else {
      this.submitAttempt = false;
      console.log("name is:  ", userName);
        this.navCtrl.push('SignUpPage', {
          userNameParam: userName
        });
      }
  }
}
