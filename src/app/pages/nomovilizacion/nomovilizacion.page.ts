import { Component, OnInit } from '@angular/core';
import { Firestore } from 'firebase/firestore';


@Component({
  selector: 'app-nomovilizacion',
  templateUrl: './nomovilizacion.page.html',
  styleUrls: ['./nomovilizacion.page.scss'],
})
export class NomovilizacionPage implements OnInit {

  constructor(private firestore: Firestore) { }

  ngOnInit() {
  }

}


