import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {
  rol: 'usuario' | 'chofer' = 'chofer';
  constructor() { }

  ngOnInit() {
  }

}
