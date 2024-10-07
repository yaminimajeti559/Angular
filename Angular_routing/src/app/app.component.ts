import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Event, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayLoadingIndicator:boolean=false;
  constructor(private authservice:AuthService,private router:Router){}
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
  ngOnInit(){
    this.router.events.subscribe((routerEvent:Event) => {
        if(routerEvent instanceof NavigationStart){
            this.displayLoadingIndicator=true;
        }
        if(routerEvent instanceof NavigationEnd){
          this.displayLoadingIndicator=false;
      }
    });
  }


}
