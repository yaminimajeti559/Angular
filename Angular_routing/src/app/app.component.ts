import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authservice:AuthService){}
  title = 'Angular_routing';
  log:boolean=false;
  login(){
    this.authservice.login();
    this.log=true;
  }
  logout(){
    this.authservice.logout();
    this.log=false;
  }
}
