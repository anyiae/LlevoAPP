import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarUPageRoutingModule } from './modificar-u-routing.module';

import { ModificarUPage } from './modificar-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarUPageRoutingModule
  ],
  declarations: [ModificarUPage]
})
export class ModificarUPageModule {}
