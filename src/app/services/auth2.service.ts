import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserC, UserI } from '../models/models';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor(private authfirebase: AngularFireAuth) { }

  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo, password)
  }

  logut() {
    this.authfirebase.signOut();
  }

  registarUser(datos: UserI) {
    return this.authfirebase.createUserWithEmailAndPassword(datos.email, datos.password);
  }
  registarChofer(datos: UserC) {
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo, datos.password);
  }

  stateUser() {
    return this.authfirebase.authState
  }

  async getUid() {
    const user = await this.authfirebase.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }



}
