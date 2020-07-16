import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusDetailsPage } from './bus-details';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BusDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusDetailsPage),
    TranslateModule.forChild()

  ],
})
export class BusDetailsPageModule {}
