import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clima2Page } from './clima2.page';

const routes: Routes = [
  {
    path: '',
    component: Clima2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Clima2PageRoutingModule {}
