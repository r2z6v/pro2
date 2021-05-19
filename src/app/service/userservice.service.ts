import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { persone } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(
    private angularFirestore: AngularFirestore,
  ) { }
  create(user:persone){
this.angularFirestore.collection("user").add(user);
  }
  get(){
this.angularFirestore.collection("user").snapshotChanges();
  }
  getsigle(id:string){
this.angularFirestore.collection("user").doc(id).valueChanges;
  }
  update(id:string,user:persone){
this.angularFirestore.collection("user").doc(id).update(user);
  }
  delete(id:string){
this.angularFirestore.collection("user").doc(id).delete();
  }
}
