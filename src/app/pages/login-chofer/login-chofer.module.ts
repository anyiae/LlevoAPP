import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginChoferPageRoutingModule } from './login-chofer-routing.module';

import { LoginChoferPage } from './login-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginChoferPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginChoferPage]
})
export class LoginChoferPageModule { }
