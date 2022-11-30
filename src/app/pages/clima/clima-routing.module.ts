import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenweatherService } from 'src/app/services/openweather.service';

import { ClimaPage } from './clima.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaPageRoutingModule { }
