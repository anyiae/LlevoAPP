import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistrarPage } from '../registrar/registrar.page';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(respuesta => {
      console.log(respuesta);
      this.usuarios = respuesta;
    });
  }

  async openDetailUsuario(usuario) {
    const modal = await this.modalCtrl.create({
      component: RegistrarPage,
      componentProps: { id: usuario.id },
      breakpoints: [0, 0.5, 0.8, 1],
      initialBreakpoint: 1
    });
    modal.present();
  }

  async addUsuario() {
    const alert = await this.alertCtrl.create({
      header: 'Ingresar chofer',
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Nombre"
        },
        {
          name: "lastname",
          type: "text",
          placeholder: "Apellido"
        },
        {
          name: "gender",
          type: "text",
          placeholder: "Sexo"
        },
        {
          name: "age",
          type: "number",
          placeholder: "Edad"
        },
        {
          name: "email",
          type: "email",
          placeholder: "correo@correo.com"
        },
        {
          name: "jornada",
          type: "text",
          placeholder: "Jornada"
        },
        {
          name: "direccion",
          type: "text",
          placeholder: "Direccion"
        },
        {
          name: "telefono",
          type: "text",
          placeholder: "Telefono"
        },
        {
          name: "rut",
          type: "text",
          placeholder: "Rut"
        },
        {
          name: "image",
          type: "url",
          placeholder: "Agregar foto"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          role: 'confirm',
          handler: (data) => {
            this.usuarioService.addUsuario(data);
            this.toasPresent('Chofer a??adido');
          }
        }
      ]
    });
    alert.present();
  }

  async toasPresent(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    toast.present();
  }

}
