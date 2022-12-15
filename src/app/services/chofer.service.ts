import { Injectable } from '@angular/core';
import { collectionData, docData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, Firestore, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { UserC } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  constructor(private firestore: Firestore) { }

  addUsuario(choferes:UserC) {
    const usuariosRef = collection(this.firestore,'choferes');
    return addDoc(usuariosRef,choferes);
  } 
  getUsuarios():Observable<UserC[]>{
    const usuariosRef = collection(this.firestore,'choferes');
    return collectionData(usuariosRef, {idField:'id'}) as Observable<UserC[]>;
  }

  getUsuarioById(id:string):Observable<UserC>{
    const usuarioRef = doc(this.firestore,`choferes/${id}`);
    return docData(usuarioRef, {idField:'id'}) as Observable<UserC>;
  }
  updateUsuario(choferes:UserC) {
    const usuarioRef = doc(this.firestore, `choferes/${choferes.id}`);
    return updateDoc(usuarioRef, 
      {
        name: choferes.name,
        precio: choferes.precio,
        capacidad: choferes.capacidad

      }
    );
  }
  deleteUsuario(choferes: UserC) {
    const usuarioRef = doc(this.firestore, `choferes/${choferes.id}`);
    return deleteDoc(usuarioRef);
  }
}

