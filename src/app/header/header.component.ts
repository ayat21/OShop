import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  appUser:AppUser;
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser=appUser);

   }
  logout()
  {
   this.auth.logout();}
}
