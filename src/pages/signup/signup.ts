import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signUpForm: FormGroup;
  error_messages : any = {};
  isLoading: boolean = false;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.setupFormData();
  }

  ionViewDidLoad() {
  }

  setupFormData() {
    this.error_messages = {
      fullName: [
        { type: "required", message: 'FullName is Required' }
      ],
      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],
      mobileNumber: [
        { type: "required", message: 'Mobile number is Required' },
        { type: "minlength", message: '*Minimum length should be 10.' },
        { type: "maxlength", message: '*Maximum length should be 12.' }
      ],
      password: [
        { type: "required", message: 'Password is Required' },
        { type: "minlength", message: '*Minimum length should be 8' },
        { type: "maxlength", message: '*Maximum length should be 12' }
      ],
    };
    this.signUpForm = this.formBuilder.group(
      {
        fullName: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),
        mobileNumber: new FormControl(
          "", Validators.compose([Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(12)
          ])
        )
      },
    );
  }

  back() {
    this.viewCtrl.dismiss();
  }

  signUp() {
    this.navCtrl.setRoot('MenuPage');
  }
}
