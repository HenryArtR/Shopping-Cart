import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Formulario } from '../interfaces/formulario.interface';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private login$: Subject<boolean> = new Subject()

  constructor(private firestore: AngularFirestore) {
  }

  registrarUsuario(user: Formulario): Promise<any>{
    return this.firestore.collection('usuarios').add(user)
  }

  loginUsuario(): Observable<any>{
    return this.firestore.collection('usuarios').valueChanges()
  }

  changeLogin(valor: boolean){
    this.login$.next(valor)
  }

  getLogin(): Observable<boolean>{
    return this.login$.asObservable()
  }

}
