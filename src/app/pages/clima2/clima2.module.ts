import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clima2PageRoutingModule } from './clima2-routing.module';

import { Clima2Page } from './clima2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clima2PageRoutingModule
  ],
  declarations: [Clima2Page]
})
export class Clima2PageModule {}
