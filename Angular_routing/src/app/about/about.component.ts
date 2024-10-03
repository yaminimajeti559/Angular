import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABoutComponent {
  constructor(private route:Router){}
  ToHome(){
      this.route.navigate(['Home']);
  }
}
