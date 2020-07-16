import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementRef, ViewChild } from '@angular/core';

declare var google;


@IonicPage()
@Component({
  selector: 'page-live-tracking',
  templateUrl: 'live-tracking.html',
})
export class LiveTrackingPage {
  lat1:any;
  long1:any;
  lat2:any;
  long2:any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.calculateAndDisplayRoute();
  }

  ionViewDidLoad() {
  }


  ngAfterViewInit(): void {

    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      mapTypeId:'roadmap',
      disableDefaultUI: true
    });
    let startMarker = new google.maps.Marker({  position: {
        lat:this.lat2,
        lng:this.long2
      }, map: map, icon: 'assets/img/locationgreen.png' });


    startMarker = new google.maps.Marker({  position: {
        lat:this.lat1,
        lng:this.long1
      }, map: map, icon: 'assets/img/greendot.png' });

    this.directionsDisplay.setMap(map,startMarker);
    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: '#5d5e5d'
      },
      suppressMarkers: true ,
    });

  }

  calculateAndDisplayRoute() {
    const that = this;
    this.directionsService.route({
      origin:'ujjain',
      destination: 'indore',
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.lat1=response['routes'][0]['bounds']['Za']['i'];
        this.long1=response['routes'][0]['bounds']['Ua']['i'];
        this.lat2=response['routes'][0]['bounds']['Za']['j'];
        this.long2=response['routes'][0]['bounds']['Ua']['j'];
        that.directionsDisplay.setDirections(response);
        this.ngAfterViewInit();
      } else {
        // window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
