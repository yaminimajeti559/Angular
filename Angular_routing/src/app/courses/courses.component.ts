import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    constructor(private service:CoursesService){}
    courses=this.service.getAllCourses().then((data:any)=>{
      this.courses=data;
    });
}