import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgZone } from '@angular/core';

declare var google;

@IonicPage()
@Component({
  selector: 'page-select-route',
  templateUrl: 'select-route.html',
})
export class SelectRoutePage {
  @ViewChild('map')
  mapElement: ElementRef;
  headerLocation: any = ''
  headerLocations: any = ''
  autocompleteItemsSearch: any = [];
  autocompleteItemsSearchs: any = [];
  service = new google.maps.places.AutocompleteService();
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
    public zone: NgZone,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectRoutePage');
  }

  onChangeLocation(event) {
    console.log('onChangeLocation ====', event);
    if (event == '') {
      this.autocompleteItemsSearch = [];
      return;
    }
    const me = this;
    this.service.getPlacePredictions({ input: event }, function (predictions, status) {
      me.autocompleteItemsSearch = [];
      me.zone.run(function () {
        if (predictions) {
          predictions.forEach(function (prediction) {
            me.autocompleteItemsSearch.push(prediction);
          });
        }
        console.log('autocompleteItemsSearch ====', me.autocompleteItemsSearch);
      });
    });
  }

  onChangeLocations(event) {
    console.log('onChangeLocation ====', event);
    if (event == '') {
      this.autocompleteItemsSearchs = [];
      return;
    }
    const me = this;
    this.service.getPlacePredictions({ input: event }, function (predictions, status) {
      me.autocompleteItemsSearchs = [];
      me.zone.run(function () {
        if (predictions) {
          predictions.forEach(function (prediction) {
            me.autocompleteItemsSearchs.push(prediction);
          });
        }
        console.log('autocompleteItemsSearch ====', me.autocompleteItemsSearchs);
      });
    });
  }

  chooseItemSource(sourceData: any) {
    this.headerLocation = sourceData.description;
    this.autocompleteItemsSearch = [];
  }

  chooseItemSources(sourceData: any) {
    this.headerLocations = sourceData.description;
    this.autocompleteItemsSearchs = [];
  }

  /*searchByLocation(loc) {
    if (loc == '') {
      this.AllProductsHomePage = this.fullListData;
      return;
    }
    this.AllProductsHomePage = this.fullListData.filter(item => {
      return (item['location'].toString().toLowerCase().includes(loc.toString().toLowerCase()));
    })
  }*/
}
