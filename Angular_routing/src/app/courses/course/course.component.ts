import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    course: any;
    courseid: any;
    constructor(private activeRoute:ActivatedRoute ,private service:CoursesService){      
    }

    ngOnInit(){
      this.courseid=this.activeRoute.snapshot.paramMap.get('id');
      this.course=this.service.courses.find(x=>x.id==this.courseid);
    }
}
