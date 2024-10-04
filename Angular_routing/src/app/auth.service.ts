import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn: boolean=false;
  login(){
    this.loggedIn=true;
    // console.log(this.loggedIn);
  }
  logout(){
    this.loggedIn=false;
    //console.log(this.loggedIn);
  }
  isAuthenticate(){
    return this.loggedIn;
  }

}
