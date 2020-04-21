import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import { Register } from './ad'

@Injectable({
  providedIn: 'root'
})
export class AdService {
  private dbPath = '/register'
  RegisterRef: AngularFireList<Register> = null;
  constructor(private db: AngularFireDatabase) { 
this.RegisterRef = db.list(this.dbPath);

  }
  
  createRegistration(register:Register) : void {
    this.RegisterRef.push(register);
  }
}
