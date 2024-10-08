import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
    @ViewChild('myForm') form!: NgForm;
    firstname:string | undefined;
    lastName:string|undefined;
    emailid:string|undefined;
    onSubmit(){
      console.log(this.form);
    }
}
