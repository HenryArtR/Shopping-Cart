import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { random } from 'cypress/types/lodash';
import { MessageService } from 'primeng/api';
import { Formulario } from '../../interfaces/formulario.interface';
import { Productos } from '../../interfaces/store.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [MessageService]
})
export class SignUpComponent implements OnInit {

  numUsers: number = Math.floor(Math.random() * 9999999);
  user: Formulario[] = []

  form: FormGroup
  constructor(private build: FormBuilder, private firestore: FirebaseService, private mensaje: MessageService, private router: Router) {
    this.form = this.build.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]{2,3}$/)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      contrasena2: ['', [Validators.required, Validators.minLength(8)]],
    })
    
  }
  
  ngOnInit(): void {
  }

  obtenerUsuarios(){
    this.firestore.getUsuario().subscribe(doc => {
      doc.map((element:any) => {
        this.user = element.payload.doc.data()
      })
    })
  }

  enviar(valor:Formulario){
    this.obtenerUsuarios()

    valor.nombre.toLowerCase()
    valor.apellido.toLowerCase()

    if(valor.contrasena == valor.contrasena2 ){
      valor.id = this.numUsers
      valor.date = new Date()

      this.firestore.registrarUsuario(valor).then(()=>{
        this.mensaje.add({key:'bc', severity: 'info', summary: 'Registered User', icon: 'pi pi-check'})
      },err => {
        this.mensaje.add({key:'bc', severity: 'danger', summary: 'Error', icon: 'pi pi-cross'})
      })
      
      
      
    }else{
      this.form.get('contrasena2')?.reset()
      this.form.get('contrasena2')?.markAsTouched()
    }
  }

}
