import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { getCourse } from '../Models/getcourse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
      constructor(private courseservice:CourseService,private router:Router){}
      courses:getCourse[]=[];
      ngOnInit(){
          this.getCoursesList();
      }
      getCoursesList(){
          this.courseservice.getCourses().subscribe(
            res=>{
              this.courses=res;
            }
          )
      }

      deleteCourse(id: any){
        this.courseservice.deleteCourse(id).
        subscribe({
          next:(res)=>{
            alert('Course Deleted');
            this.router.navigate(['/Admin/Courses']);
          }
        });
      }
}
