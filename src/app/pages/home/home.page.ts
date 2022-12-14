import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Auth2Service } from 'src/app/services/auth2.service';
import { AvatarService } from 'src/app/services/avatar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  profile: any = null;

  constructor(private authService: Auth2Service,
    private avatarService: AvatarService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router) {
    this.loadProfile();
  }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autplay: true,
  }
  logout() {
    this.authService.logut();
    this.router.navigateByUrl('/', { replaceUrl: true })
  }

  loadProfile() {
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta;
    });
  }

  async uploadAvatar() {
    const avatar = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    console.log(avatar);

    if (avatar) {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const respuesta = await this.avatarService.uploadAvatar(avatar);
      await loading.dismiss();

      if (!respuesta) {
        this.alertPresent('Upload failed', 'There was a problem uploading your avatar.');
      }
      else {
        this.toastPresent('Avatar uploaded!!!');
      }
    }
  }

  async toastPresent(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    await toast.present();
  }

  async alertPresent(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }


}
