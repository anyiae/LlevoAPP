import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [RegisterPageModule.rootComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],

  exports: [RegisterPageModule.rootComponent],
  entryComponents: [RegisterPageModule.rootComponent],
})
export class RegisterPageModule {
  static rootComponent = RegisterPage
}
