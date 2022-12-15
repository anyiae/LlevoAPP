
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Auth2Service } from './services/auth2.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  rol: 'usuario' | 'chofer' = 'chofer';
  public appPages = [
    { title: 'About', url: '/about', icon: 'person' },
    { title: 'Coversor', url: '/coversor', icon: 'construct' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Viajar', url: '/viajar', icon: 'airplane' },
    { title: 'Registro Chofer', url: '/destino', icon: 'person-add' },

  ];

  constructor(private router: Router, private interaction: InteractionService, private authfirebase: AngularFireAuth, private Auth: Auth2Service) { }
  goToHome() {
    this.router.navigate(['/inicio'])
  }

  goToMenu() {
    this.router.navigate(['/menu2'])
  }
  goToLogin() {
    this.router.navigate(['/login'])
  }


  logut() {
    this.Auth.logut();
    this.interaction.presentToast('Sesion Finalizada, hasta luego!');
    this.router.navigate(['/inicio'])
  }
}
