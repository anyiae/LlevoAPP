import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserI } from 'src/app/models/models';
import { Auth2Service } from 'src/app/services/auth2.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-modificar-u',
  templateUrl: './modificar-u.page.html',
  styleUrls: ['./modificar-u.page.scss'],
})
export class ModificarUPage implements OnInit {

  uid: string = null;
  info: UserI = null;
  login: boolean = false;

  constructor(private authService: Auth2Service,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
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
    const path = 'Usuarios';
    const id = this.uid;
    this.firestoreService.getDoc<UserI>(path, id).subscribe(res => {
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
    const path = 'Usuarios';
    const id = this.uid;
    const updateDoc = {
    };
    updateDoc[name] = input;
    this.firestoreService.updateDoc(path, id, updateDoc).then(() => {
      this.interactionService.presentToast('actualizado con éxito')
      this.interactionService.closeLoading();
    })
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
