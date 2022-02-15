import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario } from '../../interfaces/formulario.interface';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
  ]
})
export class SignUpComponent implements OnInit {

  numUsers: number = 11235813
  form: FormGroup
  constructor(private build: FormBuilder, private firestore: FirebaseService) {
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

  enviar(valor:Formulario){
    valor.nombre.toLowerCase()
    valor.apellido.toLowerCase()
    if(valor.contrasena == valor.contrasena2 ){
      valor.id = this.numUsers++
      valor.date = new Date()
      this.firestore.registrarUsuario(valor).then(() =>{
        console.log('Registrado Correctamente')
      }, error => {
        console.log(error)
      } )
      this.form.reset()
    }else{
      this.form.get('contrasena2')?.reset()
      this.form.get('contrasena2')?.markAsTouched()
    }
  }

}
