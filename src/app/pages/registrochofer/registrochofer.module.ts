import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrochoferPageRoutingModule } from './registrochofer-routing.module';

import { RegistrochoferPage } from './registrochofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrochoferPageRoutingModule
  ],
  declarations: [RegistrochoferPage]
})
export class RegistrochoferPageModule {}
