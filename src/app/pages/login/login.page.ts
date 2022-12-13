
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonButton, LoadingController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';
import { Auth2Service } from 'src/app/services/auth2.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credenciales = {
    correo: null,
    password: null
  }

  constructor(
    private AuthService: Auth2Service,
    private interaction: InteractionService,
    private router: Router

  ) { }

  ngOnInit() {
    // this.createForm();
  }

  async login() {
    await this.interaction.presentLoading('Ingresando...')
    console.log('credenciales -> ', this.credenciales);
    const res = await this.AuthService.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Correo o contraseña invalido')
    })
    if (res) {
      console.log('res -> ', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con exito!');
      this.router.navigate(['/home'])
    }
  }



}
