import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  ];

  constructor(private router: Router) { }
  goToHome() {
    this.router.navigate(['/inicio'])
  }

  goToMenu() {
    this.router.navigate(['/menu2'])
  }
  goToLogin() {
    this.router.navigate(['/login'])
  }

}
