import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
    @ViewChild('dobinput') dateofBirth!: ElementRef;
    @ViewChild('ageinput') age!: ElementRef;
    calculateAge(){
      let birthyear=new Date(this.dateofBirth.nativeElement.value).getFullYear();
      let curyear=new Date().getFullYear();
      let age=curyear-birthyear;
      this.age.nativeElement.value=age;
    }
}
