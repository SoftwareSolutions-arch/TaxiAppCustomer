import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform,Events } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@Component({
  template: `<ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = 'LoginPage';

  @ViewChild(Nav) nav: Nav;

  constructor(private translate: TranslateService, platform: Platform, private config: Config,public events:Events,
     private statusBar: StatusBar, private splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
    this.initTranslate();

    events.subscribe('appLanguage', (value) => {
      this.initTranslate();
    });
  }

  initTranslate() {
    this.storage.get('appLanguage').then(data=>{
      if(data && data == 'sp'){
        this.translate.setDefaultLang('sp');
        this.translate.use('sp');
      }else {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
      }
      this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
      });
    });

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

}
