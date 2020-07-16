import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDatePage } from './select-date';
import { CalendarModule } from 'ionic3-calendar-en';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectDatePage,
  ],
  imports: [CalendarModule,    
    TranslateModule.forChild(),
    IonicPageModule.forChild(SelectDatePage),
  ],
})
export class SelectDatePageModule {}
