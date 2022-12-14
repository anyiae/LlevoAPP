import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {

  @Input() id: string;
  usuario: Usuario = null;

  constructor(private usuarioService: UsuarioService, private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getUsuario();;
  }

  getUsuario() {
    this.usuarioService.getUsuarioById(this.id).subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }

  async updateUsuario() {
    this.usuarioService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    this.toasPresent('Usuario actualizado');
  }

  async deleteUsuario() {
    const alert = await this.alertCtrl.create({
      header: 'Mensajes',
      message: '¿Esta seguro que deseas eliminar al usuario?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: () => {
            this.usuarioService.deleteUsuario(this.usuario);
            this.modalCtrl.dismiss();
            this.toasPresent('Usario eliminado');
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


