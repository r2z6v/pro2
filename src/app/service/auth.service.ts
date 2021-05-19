import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import auth  from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFirestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ruter: Router,
  ) { }
  login() {
this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider ()).then(()=> {
 return this.ruter.navigate(['pro2/home']).catch((error)=>console.error(error))
});
}
  }
