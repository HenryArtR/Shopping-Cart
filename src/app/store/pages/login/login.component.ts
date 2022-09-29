import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formulario, Login } from '../../interfaces/formulario.interface';
import { FirebaseService } from '../../services/firebase.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mError: boolean = false;
  registrado: boolean = true
  form: FormGroup
  constructor(private build: FormBuilder, private firestore: FirebaseService, private srvStore: StoreService, private router: Router) {
    this.form = this.build.group({
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    })
    
  }

  ngOnInit(): void {
  }

  enviar(valor: Login){
    this.firestore.loginUsuario().subscribe(doc => {
      doc.map((resp: any) => {
        if (valor.usuario == resp.usuario && valor.contrasena == resp.contrasena) {
          this.router.navigate(['home'])
          this.srvStore.cambiarNombreApellido(resp.nombre, resp.apellido)
          this.mError = false
          this.firestore.registrado$.next(true)
          this.firestore.registrado = true
        }
      })
      this.mError = true
      this.form.reset()

    })
  }

}
