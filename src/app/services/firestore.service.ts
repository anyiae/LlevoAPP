import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  creatDoc() {
    this.firestore.collection('Usuarios')
  }

  getCollection() {
    console.log('Entrando a la lista de Usuarios')
    this.firestore.collection('Usuarios').get().subscribe((res) => {

    })
  };
}
