import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NomovilizacionPage } from './nomovilizacion.page';

const routes: Routes = [
  {
    path: '',
    component: NomovilizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NomovilizacionPageRoutingModule {}
