import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersPage),
    TranslateModule.forChild()

  ],
})
export class FiltersPageModule {}
