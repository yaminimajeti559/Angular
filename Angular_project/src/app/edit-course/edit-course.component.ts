import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { getCourse } from '../Models/getcourse';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{
  courseDetails:getCourse={
    courseId:0,
    courseName:'',
    description:'',
    price:0,
    duration:0
  };
    constructor(private route:ActivatedRoute,private courseservice:CourseService,private router:Router){}

    ngOnInit(){
      this.route.paramMap.subscribe({
        next:(params)=>{
         const id= params.get('id');
         console.log(id);

         if(id){
          this.courseservice.getCourse(id).
          subscribe({
            next:(res)=>{
                this.courseDetails=res;
            }
          })
         }
        }
      })
    }

    UpdateCourse(){
      this.courseservice.updateCourse(this.courseDetails.courseId,this.courseDetails)
      .subscribe({
        next:(res)=>{
          alert('updated course');
          
        }
      });
    }
}
