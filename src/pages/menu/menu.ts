import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, Platform } from 'ionic-angular';
import { UtilProvider } from "../../providers/util/util";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from "@ionic/storage";
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'HomePage';
  laguage: any;
  appLanguage: any;

  constructor(public navCtrl: NavController,
    private translate: TranslateService, public storage: Storage, public user: User,
    public socialSharing: SocialSharing,
    public platform: Platform, public util: UtilProvider) {
  }


  ngOnInit() {
    this.initTranslate();
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }


  initTranslate() {
    this.storage.get('appLanguage').then(data => {
      this.appLanguage = data;
      console.log(this.appLanguage, "this.appLanguage");
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  exit() {
    if (this.appLanguage == 'sp') {
      this.util.presentConfirm('Confirmar salida', '¿Seguro que quieres salir de la aplicación?').then(() => {
        this.platform.exitApp();
      }).catch(err => {
      })
    }

    else {
      this.util.presentConfirm('Confirm Exit', 'Are you sure want to Exit the App?').then(() => {
        this.platform.exitApp();
      }).catch(err => {
      })
    }
  }

  shareApp() {
    this.socialSharing.share('message', 'subject', '', 'url').then((succ) => {
      console.log('success', succ);
    }).catch(err => {
      console.error(err);
    })
  }
}
