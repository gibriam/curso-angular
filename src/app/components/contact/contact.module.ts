import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutigModule} from './contact-routig.module';
import {SharedModule} from './../../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutigModule
  ]
})
export class ContactModule { }
