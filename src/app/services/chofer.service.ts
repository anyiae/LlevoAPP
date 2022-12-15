import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { addDoc, collection, deleteDoc, doc, Firestore, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { UserC } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ChoferService {
  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<UserC[]> {
    const usuariosRef = collection(this.firestore, 'chofer');
    return collectionData(usuariosRef, { idField: 'uid' }) as Observable<UserC[]>;
  }

  getUsuarioById(uid: string): Observable<UserC> {
    const usuarioRef = doc(this.firestore, `chofer/${uid}`);
    return docData(usuarioRef, { idField: 'uid' }) as Observable<UserC>;
  }
  addUsuario(usuario: UserC) {
    const usuariosRef = collection(this.firestore, 'chofer');
    return addDoc(usuariosRef, usuario);
  }

  updateUsuario(usuario: UserC) {
    const usuarioRef = doc(this.firestore, `chofer/${usuario.uid}`);
    return updateDoc(usuarioRef,
      {
        nombre: usuario.nombre,
        capacidad: usuario.capacidad,
        correo: usuario.correo,
        precio: usuario.precio,
        patente: usuario.patente,
        modelo: usuario.modelo,
        comuna: usuario.comuna,
        rut: usuario.rut,
        imagen: usuario.imagen
      }
    );
  }

  deleteUsuario(usuario: UserC) {
    const usuarioRef = doc(this.firestore, `chofer/${usuario.uid}`);
    return deleteDoc(usuarioRef);
  }
}