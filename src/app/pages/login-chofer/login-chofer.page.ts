import { FirestoreService } from './../../services/firestore.service';
import { Auth2Service } from './../../services/auth2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonButton, LoadingController } from '@ionic/angular';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login-chofer',
  templateUrl: './login-chofer.page.html',
  styleUrls: ['./login-chofer.page.scss'],
})
export class LoginChoferPage implements OnInit {

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
  /*
    get email() {
      return this.credentials?.get('email');
    }
  
    get password() {
      return this.credentials?.get('password');
    }
  
    createForm() {
      this.credentials = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    }
  
    async register() {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const user = await this.AuthService.register(this.credentials.value.email, this.credentials.value.password);
      await loading.dismiss();
  
  
      if (user) {
        this.router.navigateByUrl('/menu2');
      }
      else {
        this.alertPresent('Registro fallido', 'Revise bien los datos ingresado e inténtelo nuevamente más rato...');
      }
    }
  
    */

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
      this.router.navigate(['/menu2'])
    }
  }



}
