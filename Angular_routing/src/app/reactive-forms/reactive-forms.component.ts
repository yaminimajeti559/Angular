import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  reactiveform: FormGroup;

  ngOnInit(){
    this.reactiveform=new FormGroup({
        firstname:new FormControl('',Validators.required),
        lastname:new FormControl('',Validators.required),
        emailid:new FormControl('',[Validators.required,Validators.email]),
        country:new FormControl(''),
        gender:new FormControl('')
    });
  }
  onSubmit(){
    
  }
}
