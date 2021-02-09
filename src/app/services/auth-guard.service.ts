import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {  map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }
  canActivate(route, state:RouterStateSnapshot ) {
    return this.auth.user$.map(user => {
      if(user) return true;

      this.router.navigate(['/login']);
      return false;
    });
     
  }
}
