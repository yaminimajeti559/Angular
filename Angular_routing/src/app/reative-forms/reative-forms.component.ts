import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css']
})
export class ReativeFormsComponent {
  reactiveform!: FormGroup;

  ngOnInit(){
    this.reactiveform=new FormGroup({
        firstname:new FormControl(null),
        lastname:new FormControl(null),
        email:new FormControl(null),
        country:new FormControl(null),
        gender:new FormControl(null)
    });
  }
  onSubmit(){
    
  }
}
