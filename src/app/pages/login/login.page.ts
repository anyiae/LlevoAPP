import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonButton, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

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
      this.router.navigateByUrl('/home');
    }
    else {
      this.alertPresent('Registro fallido', 'Revise bien los datos ingresado e inténtelo nuevamente más rato...');
    }
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.AuthService.login(this.credentials.value.email, this.credentials.value.password);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home');
    }
    else {
      this.alertPresent('Ingreso fallido', 'Revise bien los datos ingresado e inténtelo nuevamente más rato...');
    }
  }

  async alertPresent(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }


}
