import { Component } from '@angular/core';
import { getStudent } from '../Models/getstudent';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  studentDetails:getStudent={
    studentId:0,
    name:'',
    email:'',
    age:0,
    joiningDate:new Date('2001-01-01')
  };
    constructor(private route:ActivatedRoute,private studentservice:StudentService,private router:Router){}

    ngOnInit(){
      this.route.paramMap.subscribe({
        next:(params)=>{
         const id= params.get('id');
         console.log(id);

         if(id){
          this.studentservice.getStudent(id).
          subscribe({
            next:(res)=>{
                this.studentDetails=res;
            }
          })
         }
        }
      })
    }

    UpdateStudent(){
      this.studentservice.updateStudent(this.studentDetails.studentId,this.studentDetails)
      .subscribe({
        next:(res)=>{
          alert('updated student');
          this.router.navigate(['/Admin/Students']);
        }
      });
    }
}
