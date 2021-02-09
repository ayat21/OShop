import { UserService } from './services/user.service';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private auth:AuthService, private route:Router,
    private userService:UserService){
    auth.user$.subscribe(user => {
      if(user){
        userService.save(user);

        let returnUrl=localStorage.getItem('returnUrl');
        this.route.navigateByUrl(returnUrl);     

      }  

    });
    
  }
}
