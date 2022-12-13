import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chofer } from './chofer';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {


  constructor(private firestore: Firestore) { }

  getChofer(): Observable<Chofer[]> {
    const ChoferRef = collection(this.firestore, 'usuarios');
    return collectionData(ChoferRef, { idField: 'id' }) as Observable<Chofer[]>;
  }

  getChoferById(id: string): Observable<Chofer> {
    const ChoferRef = doc(this.firestore, `usuarios/${id}`);
    return docData(ChoferRef, { idField: 'id' }) as Observable<Chofer>;
  }

  addChofer(chofer: Chofer) {
    const ChoferRef = collection(this.firestore, 'Chofer');
    return addDoc(ChoferRef, chofer);
  }

  updateUsuario(chofer: Chofer) {
    const ChoferRef = doc(this.firestore, `Chofer/${chofer.id}`);
    return updateDoc(ChoferRef,
      {
        name: chofer.name,
        lastname: chofer.lastname,
        gender: chofer.gender,
        age: chofer.age,
        patente: chofer.patente,
        modelo: chofer.modelo,
        direccion: chofer.direccion,
        email: chofer.email,
        rut: chofer.rut,
        image: chofer.image
      }
    );
  }

  deletChofer(chofer: Chofer) {
    const ChoferRef = doc(this.firestore, `chofer/${chofer.id}`);
    return deleteDoc(ChoferRef);
  }
}
