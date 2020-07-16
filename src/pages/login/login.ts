import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  error_messages : any = {};
  isLoading: boolean = false;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.setupLoginFormData();
  }

  setupLoginFormData() {
    this.error_messages = {
      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],

      password: [
        { type: "required", message: 'Password is Required' }
      ],
    };
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
          ])
        ),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
      },
    );
    this.loginForm.controls.email.setValue('test@gmail.com');
    this.loginForm.controls.password.setValue('12345678');
  }

  openForgotPassord() {
    // this.navCtrl.push('ForgotPasswordPage');

  }

  doLogin() {
    this.isLoading = true;
    setTimeout(()=>{
      this.navCtrl.setRoot('MenuPage');
    },500)
  }

  openSignUpPage() {
    this.navCtrl.push('SignupPage');
  }
}
