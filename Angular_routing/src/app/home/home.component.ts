import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private activatedRoute:ActivatedRoute){}
    ngOnInit(){
        this.activatedRoute.fragment.subscribe((value)=>{
          this.jumpTo(value);
        })
    }
    jumpTo(section: any){
      document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
    }
}
