import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'person' },
    { title: 'Coversor', url: '/coversor', icon: 'construct' },
    { title: 'Clima', url: '/clima', icon: 'cloudy-night' },
    { title: 'Registrar', url: '/usuarios', icon: 'person-add' },

  ];

  constructor(private router: Router) { }
  goToHome() {
    this.router.navigate(['/home'])
  }

}

