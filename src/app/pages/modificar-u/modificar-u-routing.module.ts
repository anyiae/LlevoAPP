import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarUPage } from './modificar-u.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarUPageRoutingModule {}
