import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  segmentModel:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.segmentModel = "payment";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  segmentChanged(){
    console.log("segment changed");
  }

  openNotifications() {
    this.navCtrl.push('NotificationPage');
  }
}
