import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { UserC } from 'src/app/models/models';
import { ChoferService } from 'src/app/services/chofer.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() id: string;
  usuario: UserC = null;

  constructor(private choferService: ChoferService, private modalCtrl: ModalController,
    private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getUsuario();;
  }

  getUsuario() {
    this.choferService.getUsuarioById(this.id).subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }

  async updateUsuario() {
    this.choferService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    this.toasPresent('User updated!!!');
  }

  async deleteUsuario() {
    const alert = await this.alertCtrl.create({
      header: 'Mensajes',
      message: 'Estas seguro que deseas eliminar al usuario?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          role: 'confirm',
          handler: () => {
            this.choferService.deleteUsuario(this.usuario);
            this.modalCtrl.dismiss();
            this.toasPresent('User deleted!!!');
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
