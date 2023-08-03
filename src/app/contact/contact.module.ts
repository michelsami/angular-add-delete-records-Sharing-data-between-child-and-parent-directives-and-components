import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';


@NgModule({
  declarations: [
    ContactComponent,
    SingleContactComponent,
    AllContactsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
