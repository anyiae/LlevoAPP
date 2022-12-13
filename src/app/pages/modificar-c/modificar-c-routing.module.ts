import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCPage } from './modificar-c.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarCPageRoutingModule {}
