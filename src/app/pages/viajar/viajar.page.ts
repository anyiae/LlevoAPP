import { Firestore } from '@angular/fire/firestore';
import { ChoferService } from './../../services/chofer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserC } from 'src/app/models/models';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import { user } from '@angular/fire/auth';
import { ModalPage } from '../modal/modal.page';
import * as firebase from 'firebase/compat';
import { collection, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-viajar',
  templateUrl: './viajar.page.html',
  styleUrls: ['./viajar.page.scss'],
})
export class ViajarPage implements OnInit {

  info: UserC[] = [];

  constructor(private alertCtrl: AlertController,
    private modalCtrl: ModalController, private toastCtrl: ToastController, private firestoreService: FirestoreService, private firestore: Firestore) {
  }

  ngOnInit() {

  }
  async loadChofer() {
    const path = 'Chofer';
    (await this.firestoreService.getCollection<UserC>(path)).subscribe(res => {
      if (res) {
        this.info = res;
      }
      console.log('datos son ->', res)
    })
  }

}
