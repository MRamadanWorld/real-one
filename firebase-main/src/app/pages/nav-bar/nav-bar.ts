import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {


 constructor( private route:Router , private auth:AuthService ){

  }

note(){
this.route.navigateByUrl("note")
  }


  login(){

 this.route.navigateByUrl("login")
  }

  logout(){
this.auth.logout();
  }
}
