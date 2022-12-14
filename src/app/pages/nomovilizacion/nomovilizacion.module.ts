import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NomovilizacionPageRoutingModule } from './nomovilizacion-routing.module';

import { NomovilizacionPage } from './nomovilizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NomovilizacionPageRoutingModule
  ],
  declarations: [NomovilizacionPage]
})
export class NomovilizacionPageModule {}
