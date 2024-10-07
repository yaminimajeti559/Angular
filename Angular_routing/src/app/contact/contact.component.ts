import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstname: any;
  lastname: any;
  subject: any;
  canExit(){
    if(this.firstname || this.lastname || this.subject){
      return confirm('You have unsaved changes.Do you really want to discard changes');
    }
    else{
      return true;
    }
  }
}
