import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from 'src/app/store/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginGuard: FirebaseService, private router: Router){}
  canActivate(): boolean {
    if(this.loginGuard.registrado == false){
      this.router.navigate(['login'])
    }
    return this.loginGuard.registrado
  }
    
  
}
