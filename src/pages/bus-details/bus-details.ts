import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bus-details',
  templateUrl: 'bus-details.html',
})
export class BusDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusDetailsPage');
  }

  rememberMe(event) {
    console.log(event, "event")
  }


  // increment  product qty
  incrementQty() {

  }

  // decrement product qty
  decrementQty() {

  }

  bookNow() {
    this.navCtrl.push('PassengerDetailsPage');
  }

  ticket(){
    this.navCtrl.push('TicketPage');
  }
}
