import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private firestore: Firestore) { }

  
  getUsuarios():Observable<Usuario[]>{
    const usuarioref = collection(this.firestore,'usuarios');
    return collectionData(usuarioref,{idField:'id'}) as Observable<Usuario[]>;
  }
  getUsuarioById(id:string):Observable<Usuario>{
    const usuarioRef = doc(this.firestore,`usuarios/${id}`);
    return docData(usuarioRef, {idField:'id'}) as Observable<Usuario>;
  }

  addUsuario(usuario:Usuario, enlace:string ,id:string) {
    const usuariosRef = collection(this.firestore,'usuarios');
    return addDoc(usuariosRef,usuario);
  }

  updateUsuario(usuario:Usuario) {
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.uid}`);
    return updateDoc(usuarioRef, 
      {
        name:usuario.name,
        lastname:usuario.lastname,
        gender:usuario.gender,
        age:usuario.age,
        email:usuario.email,
        comuna:usuario.comuna,
        rut:usuario.rut,
        disponible:usuario.disponible,
        image:usuario.image

      }
    );
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.uid}`);
    return deleteDoc(usuarioRef);
  }

}
