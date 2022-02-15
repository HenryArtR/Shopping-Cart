import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, observable, Observable } from 'rxjs';
import { FirebaseService } from 'src/app/store/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  checkUser: boolean = false
  constructor(private loginGuard: FirebaseService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    this.loginGuard.getLogin().subscribe( result => this.checkUser = result)
    return this.checkUser
      
    }
    
  
}
