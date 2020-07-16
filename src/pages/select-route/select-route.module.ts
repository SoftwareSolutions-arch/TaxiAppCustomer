import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectRoutePage } from './select-route';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SelectRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(SelectRoutePage),FormsModule,ReactiveFormsModule,
    TranslateModule.forChild()
  ],
})
export class SelectRoutePageModule {}
