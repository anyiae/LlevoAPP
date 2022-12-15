import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { UserC } from 'src/app/models/models';
import { Auth2Service } from 'src/app/services/auth2.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registrochofer',
  templateUrl: './registrochofer.page.html',
  styleUrls: ['./registrochofer.page.scss'],
})
export class RegistrochoferPage implements OnInit {

  datos: UserC = {
    nombre: null,
    capacidad: null,
    correo: null,
    uid: null,
    password: null,
    precio: null,
    patente: null,
    modelo: null,
    comuna: null,
    rut: null,
    imagen: null,
    perfil: 'chofer',
  }


  constructor(private auth: Auth2Service,
    private firestore: FirestoreService,
    private router: Router) { }

  ngOnInit() { }

  async registrar() {
    const res = await this.auth.registarChofer(this.datos).catch(error => {
      console.log('error');
    })
    if (res) {
      console.log('exito al crear el chofer');
      const path = 'Chofer';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null
      await this.firestore.createDoc(this.datos, path, id)
      this.router.navigate(['/menu2'])
    }
  }
    imagen: any
 
    async takePhoto(){
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.Base64
      });
    
      const imageUrl = image.base64String
      this.datos.imagen = 'data:image/jpeg;base64,' + imageUrl
    };
  
  }



