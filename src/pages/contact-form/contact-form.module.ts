import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactFormPage } from './contact-form';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactFormPage),
    TranslateModule.forChild()

  ],
})
export class ContactFormPageModule {}
