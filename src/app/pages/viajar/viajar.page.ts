import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { ViajarService } from 'src/app/services/viajar.service';

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {

  pageTitle = 'mapa';
  isNotHome = true;
  visible = false;
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};
  loading: HTMLIonLoadingElement;

  constructor(private alertController: AlertController, private viajarService: ViajarService, private renderer2: Renderer2,private loadingCtrl: LoadingController, private socket: Socket
    ) {
  }

  ngOnInit(): void {
    this.viajarService.buildMap()
      .then(({geocoder, map}) => {
        //this.asGeoCoder
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );


        console.log('Funcionando');
      })
      .catch((err) => {
        console.log('Error', err);
      });

    this.viajarService.cbAddress.subscribe((getPoint) => {
      
      if (this.modeInput === 'start') {
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end') {
        this.wayPoints.end = getPoint;
      }
    });
    this.socket.fromEvent('position')
      .subscribe(({coords}) => {
        console.log('******* DESDE SERVER ****', coords);
        this.viajarService.addMarkerCustom(coords);
      })
  }

  drawRoute(): void {
    console.log('Puntos de Origen y Destino', this.wayPoints)
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center,

    ];
    

    this.viajarService.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }
  cargarLoading(message: string) {
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
}

async buscarChofer() {
  const alert = await this.alertController.create({
    header: 'Chofer encontrado',
    subHeader: 'Nombre: Juan Gomez',
    message: 'Precio: 6000 y Capacidad: 3',
    buttons: ['Ok']
  });
  await alert.present();

  
}
testMarker(): void {
  this.viajarService.addMarkerCustom([-8.628139488926513, 41.159082702543635]);
}
}


export class WayPoints {
  start: any;
  end: any

}
