import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassengerDetailsPage } from './passenger-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PassengerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PassengerDetailsPage),
    TranslateModule.forChild()

  ],
})
export class PassengerDetailsPageModule {}
