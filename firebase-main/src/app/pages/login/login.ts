import { Component } from '@angular/core';
import { Auth, AuthSettings } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

email:string=""
password:string=""  

  constructor( private route:Router , private auth:AuthService ){

  }


  login(){

this.auth.login(this.email,this.password)


  
  }
  signup(){

this.auth.login(this.email,this.password)

  
  }

signinwithgoogle(){

this.auth.signinwithgoogle()

  
  }
register(){

this.auth.signup(this.email,this.password)


}
}

