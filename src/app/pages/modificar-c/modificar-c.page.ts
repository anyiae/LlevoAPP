import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { UserC } from 'src/app/models/models';
import { Auth2Service } from 'src/app/services/auth2.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-modificar-c',
  templateUrl: './modificar-c.page.html',
  styleUrls: ['./modificar-c.page.scss'],
})
export class ModificarCPage implements OnInit {

  uid: string = null;
  info: UserC = null;
  login: boolean = false;

  constructor(private authService: Auth2Service,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
    private router: Router,
    private interactionService: InteractionService) {
    this.authService.stateUser().subscribe(res => {
      if (res) {
        console.log('está logeado');
        this.login = true;
      } else {
        console.log('no está logeado');
        this.login = false;
      }
    })
  }

  async ngOnInit() {
    console.log('estoy en perfil');
    this.authService.stateUser().subscribe(res => {
      console.log('en perfil - estado autenticacion -> ', res);
      this.getUid();

    });
    this.getUid();

  }

  async getUid() {
    const uid = await this.authService.getUid();
    if (uid) {
      this.uid = uid;
      console.log('uid -> ', this.uid);
      this.getInfoUser();
    } else {
      console.log('no existe uid');

    }

  }

  getInfoUser() {
    const path = 'Chofer';
    const id = this.uid;
    this.firestoreService.getDoc<UserC>(path, id).subscribe(res => {
      if (res) {
        this.info = res;
      }
      console.log('datos son -> ', res);

    })

  }

  async editAtributo(name: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar ' + name,
      inputs: [
        {
          name,
          type: 'text',
          placeholder: 'Ingresa tu ' + name
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (ev) => {
            console.log('Confirm Ok -> ', ev);
            this.saveAtributo(name, ev[name])
          }
        }
      ]
    });

    await alert.present();
  }

  async saveAtributo(name: string, input: any) {
    await this.interactionService.presentLoading('actualizando...')
    const path = 'Chofer';
    const id = this.uid;
    const updateDoc = {
    };
    updateDoc[name] = input;
    this.firestoreService.updateDoc(path, id, updateDoc).then(() => {
      this.interactionService.presentToast('actualizado con éxito')
      this.interactionService.closeLoading();
    })
  }

  async eliminar(info: UserC) {
    const res = await this.interactionService.presentAlert('¿Seguro que deseas eliminar?');
    console.log('res ->', res);
    if (res) {
      const path = 'Chofer';
      await this.firestoreService.deletedoc(path, info.uid);
      this.interactionService.presentToast('Eliminado con éxito')
      this.router.navigate(['/inicio'])
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
    this.info.imagen = 'data:image/jpeg;base64,' + imageUrl
  };
}
