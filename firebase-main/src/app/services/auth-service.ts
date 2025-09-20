import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor( private auth: Auth , private router: Router){

}

login( email:string, password:string){


  signInWithEmailAndPassword(this.auth, email, password)

  .then((userCredential) => {

    alert("logedin")
    this.router.navigateByUrl("home")
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("login")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}

//******** */
  logout( ){


  signOut(this.auth)

  .then((userCredential) => {

    alert("logedout")
    this.router.navigateByUrl("login")
  

   
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("home")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}




signup( email:string, password:string){


  createUserWithEmailAndPassword(this.auth, email, password)

  .then((userCredential) => {

    alert("logedin")
    this.router.navigateByUrl("home")
    const user = userCredential.user;

    console.log(user)
    // ...
  })
  .catch((error) => {
    alert("error")
    this.router.navigateByUrl("login")
    const errorCode = error.code;
    const errorMessage = error.message;
  })}
 provider = new GoogleAuthProvider();

 signinwithgoogle( ){
  signInWithPopup(this.auth, this.provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    
  });





}
}
