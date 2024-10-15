import { Component, OnDestroy } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { addCourseRequest } from '../Models/add-course.model';
import { CourseService } from '../services/course.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnDestroy{
  model:addCourseRequest;
  private addCourseSubscription?:Subscription;
  constructor(private fb:FormBuilder,private courseservice:CourseService){
    this.model={
      courseName:'',
      description:'',
      price:0,
      duration:0
    };
  }
    
    courseForm=this.fb.group({
      courseName:['',Validators.required],
      description:['',Validators.required],
      price:[,[Validators.required,Validators.pattern('^[0-9]*$')]],
      duration:[,[Validators.required,Validators.pattern('^[0-9]*$')]]
    });

    addCourse(){
        this.model={
        courseName:this.courseForm.value.courseName,
        description:this.courseForm.value.description,
        price:this.courseForm.value.price,
        duration:this.courseForm.value.duration
      }
      this.addCourseSubscription=this.courseservice.addCourse(this.model)
      .subscribe({
        next:(res)=>{
         alert('Course added');
        },error:(error)=>{

        }
      });
      console.log(this.model);
      this.courseForm.reset();
    }
    ngOnDestroy(): void {
      this.addCourseSubscription?.unsubscribe();
    }
}

