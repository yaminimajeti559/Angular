import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { getStudent } from '../Models/getstudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private studentservice:StudentService,private router:Router){}
  students:getStudent[]=[];
  ngOnInit(){
      this.getstudentsList();
  }
  getstudentsList(){
      this.studentservice.getStudents().subscribe(
        res=>{
          this.students=res;
        }
      )
  }

  deleteStudent(id: any){
    this.studentservice.deleteStudent(id).
    subscribe({
      next:(res)=>{
        alert('Student Deleted');
        this.router.navigate(['/Admin/Students']);
      }
    });
  }
}
