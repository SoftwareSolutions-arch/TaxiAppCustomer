import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-contact-form',
  templateUrl: 'contact-form.html',
})
export class ContactFormPage {

  editForm: FormGroup;
  error_messages : any = {};
  isLoading: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,public formBuilder: FormBuilder) {
    this.setupcontactFormData();
    }

    setupcontactFormData() {
    this.error_messages = {
      fullname:[
        { type: "required", message: 'Full Name is Required' }
      ],

      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],

      message: [
        { type: "required", message: 'Message is Required' }
      ],
      mobilenumber: [
        { type: "required", message: "Mobile Number  is required." },
        { type: "minlength", message: "minimun length should be 10 ." },
        { type: "maxlength", message: "maximum length should be 12 ." }
      ],
     /* gender: [
        { type: "required", message: 'Gender is Required' }
      ],*/
    };
    this.editForm = this.formBuilder.group(
      {
        fullname: new FormControl(
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
        mobilenumber: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ])
        ),
        message: new FormControl(
          "",
          Validators.compose([
            Validators.required,
          ])
        ),
        gender: new FormControl(
          "",
        ),
      },
    );
  }

}
