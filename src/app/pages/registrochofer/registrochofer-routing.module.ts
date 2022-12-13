import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrochoferPage } from './registrochofer.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrochoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrochoferPageRoutingModule {}
