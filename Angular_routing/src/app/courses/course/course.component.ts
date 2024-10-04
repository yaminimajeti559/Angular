import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    course: any;
    courseid: any;
    editMode=false;
    constructor(private activeRoute:ActivatedRoute ,private service:CoursesService,private router:Router){      
    }
    appendQuery(){
        this.router.navigate(['/Courses/Course',this.courseid],{queryParams:{edit:true}});
    }
    ngOnInit(){
      this.courseid=this.activeRoute.snapshot.paramMap.get('id');
      this.course=this.service.courses.find(x=>x.id==this.courseid);
      //this.editMode=Boolean(this.activeRoute.snapshot.queryParamMap.get('edit'));
      
      this.activeRoute.queryParamMap.subscribe((param)=>{
          this.editMode=Boolean(param.get('edit'));
      })

    }
}
