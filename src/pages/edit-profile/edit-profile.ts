import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../providers';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  appLanguage: any;
  editForm: FormGroup;
  error_messages: any = {};
  isLoading: boolean = false;
  constructor(public actionSheetCtrl: ActionSheetController, public storage: Storage,
    public user: User, public navCtrl: NavController,
    public navParams: NavParams, public formBuilder: FormBuilder) {
    this.setupeditFormData();
  }
  ngOnInit() {
    this.initTranslate();
  }

  setupeditFormData() {
    this.error_messages = {
      fullname: [
        { type: "required", message: 'Full Name is Required' }
      ],

      email: [
        { type: "required", message: 'Email is Required' },
        { type: "pattern", message: 'Please Enter valid Email' }
      ],

      address: [
        { type: "required", message: 'Address is Required' }
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
        address: new FormControl(
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  initTranslate() {
    this.storage.get('appLanguage').then(data => {
      this.appLanguage = data;
      console.log(this.appLanguage, "this.appLanguage");
    });
  }

  presentActionSheet() {
    if (this.appLanguage == 'sp') {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Elige o toma una foto',
        buttons: [
          {
            text: 'Toma una foto',
            handler: () => {
              this.user.takePicture();
            }
          },
          {
            text: 'Elige fotos',
            handler: () => {
              this.user.aceesGallery();
            }
          }
        ]
      });
      actionSheet.present();
    }
    else {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Choose or take a picture',
        buttons: [
          {
            text: 'Take a picture',
            handler: () => {
              this.user.takePicture();
            }
          },
          {
            text: 'Choose pictures',
            handler: () => {
              this.user.aceesGallery();
            }
          }
        ]
      });
      actionSheet.present();
    }
  }

  save() {

  }
}
