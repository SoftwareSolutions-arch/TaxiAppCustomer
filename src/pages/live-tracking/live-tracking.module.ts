import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveTrackingPage } from './live-tracking';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LiveTrackingPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // IonicModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(LiveTrackingPage),
    TranslateModule.forChild()
  ],
})
export class LiveTrackingPageModule { }
