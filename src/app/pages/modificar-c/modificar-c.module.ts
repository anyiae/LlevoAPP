import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCPageRoutingModule } from './modificar-c-routing.module';

import { ModificarCPage } from './modificar-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCPageRoutingModule
  ],
  declarations: [ModificarCPage]
})
export class ModificarCPageModule {}
