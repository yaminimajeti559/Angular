import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private fb:FormBuilder){}
    
    courseForm=this.fb.group({
      courseName:['',Validators.required],
      description:['',Validators.required],
      price:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      duration:['',[Validators.required,Validators.pattern('^[0-9]*$')]]
    });

    addCourse(){

    }
}
