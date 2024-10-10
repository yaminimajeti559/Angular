import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
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
