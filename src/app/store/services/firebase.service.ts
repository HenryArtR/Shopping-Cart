import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Formulario } from '../interfaces/formulario.interface';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  registrado$: Subject<boolean> = new Subject()
  registrado: boolean = false;

  constructor(private firestore: AngularFirestore) {}

  registrarUsuario(user: Formulario): Promise<any>{
    return this.firestore.collection('usuarios').add(user)
  }

  loginUsuario(): Observable<any>{
    return this.firestore.collection('usuarios').valueChanges()
  }
  
  getUsuario(): Observable<any>{
    return this.firestore.collection('usuarios').snapshotChanges()
  }


  eliminarUsuario(): Observable<any>{
    return this.firestore.collection('usuarios').get()
  }


}
