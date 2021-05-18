import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import auth  from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFirestore: AngularFirestore,
    public afAuth: AngularFireAuth,
  ) { }
  login() {
this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider())
  }
}

