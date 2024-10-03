import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
      slogan='One more step';
      getSlogan(){
        return "Shopping";
      }
      source:string="/assets/leaveicon.png";
}
