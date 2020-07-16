import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

import { User } from '../../providers';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from "@ionic/storage";
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  title: string = '';
  laguage: any;
  constructor(public navCtrl: NavController, private translate: TranslateService, public storage: Storage, public user: User,
    public events: Events) {
    storage.get('appLanguage').then(data => {
      if (data) {
        this.translate.use(data);
        this.laguage = data;
      } else {
        this.translate.use('en');
        this.laguage = 'en';
      }
    })
  }

  ngOnInit() {
  }

  selectLanguage() {
    if (this.laguage == 'en') {
      this.translate.use('en');
      this.storage.set('appLanguage', 'en').then(() => {
        this.events.publish('appLanguage', 'en');
      });
    } else {
      this.translate.use('sp');
      this.storage.set('appLanguage', 'sp').then(() => {
        this.events.publish('appLanguage', 'sp');
      });
    }
    this.translate.get("SETTINGS_TITLE").subscribe(values => {
      console.log(values)
      this.title = values;
    });
  }

  ionViewDidLoad() {
  }
}
