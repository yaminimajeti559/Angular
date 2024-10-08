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
    country:string|undefined;
    gen:string|undefined;
    gender=[
      {id:'1',value:'Male'},
      {id:'2',value:'female'}
    ];
    onSubmit(){
      console.log(this.form);

      this.firstname=this.form.value.personalDetails.firstname;
      this.lastName=this.form.value.personalDetails.lastName;
      this.emailid=this.form.value.personalDetails.emailid;
      this.gen=this.form.value.gender;
      this.country=this.form.value.country;

      // this.form.reset();
    }
    setDefault(){
      // this.form.value.personalDetails.firstname='john';
      // this.form.value.personalDetails.lastName='David';
      // this.form.value.personalDetails.emailid='john@gmail.com';
      this.form.setValue({
        // country: '',
        gender: '',
        personalDetails:{
          firstname:'John',
          lastName:'smith',
          emailid:'abc@gmail.com'
        }
      })
    }
}
