import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { Auth2Service } from 'src/app/services/auth2.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  datos: UserI = {
    nombre: null,
    capacidad: null,
    correo: null,
    uid: null,
    password: null,
    sexo: null,
    comuna: null,
    motivo: null,
    telefono: null,
    rut: null,
    imagen: null,
    perfil: 'usuario',
  }

  constructor(private auth: Auth2Service,
    private firestore: FirestoreService,
    private router: Router) { }

  ngOnInit() { }

  async registrar() {
    const res = await this.auth.registarUser(this.datos).catch(error => {
      console.log('error');
    })
    if (res) {
      console.log('exito al crear el usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null
      await this.firestore.createDoc(this.datos, path, id)
      this.router.navigate(['/home'])
    }

  }

}
