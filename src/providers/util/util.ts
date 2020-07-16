import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";
import { Storage } from "@ionic/storage";

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {
  appLanguage: any;

  constructor(public http: HttpClient, private alertCtrl: AlertController, public storage: Storage) {
    console.log('Hello UtilProvider Provider');
  }

  ngOnInit() {
    this.initTranslate();
  }


  initTranslate() {
    this.storage.get('appLanguage').then(data => {
      this.appLanguage = data;
    });
  }

  presentConfirm(title, msg) {
    if (this.appLanguage == 'sp') {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          title: title,
          message: msg,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              handler: () => {
                reject();
              }
            },
            {
              text: 'Okay',
              handler: () => {
                resolve();
              }
            }
          ]
        });
        alert.present();
      })
    }
    else {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          title: title,
          message: msg,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                reject();
              }
            },
            {
              text: 'Ok',
              handler: () => {
                resolve();
              }
            }
          ]
        });
        alert.present();
      })
    }
  }
}
