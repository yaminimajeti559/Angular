import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { addStudentRequest } from '../Models/add-student.model';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  model:addStudentRequest;
  private addStudentSubscription?:Subscription;
  constructor(private fb:FormBuilder,private studentservice:StudentService,private router:Router){
    this.model={
      name:'',
      email:'',
      age:0
    };
  }
    
  studentForm=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      age:[,[Validators.required,Validators.pattern('^[0-9]*$')]]
    });

    addStudent(){
        this.model={
        name:this.studentForm.value.name,
        email:this.studentForm.value.email,
        age:this.studentForm.value.age
      }
      this.addStudentSubscription=this.studentservice.addStudent(this.model)
      .subscribe({
        next:(res)=>{
         alert('Student added');
         this.router.navigate(['/Admin/Students']);
        },error:(error)=>{

        }
      });
      console.log(this.model);
      this.studentForm.reset();
    }
    ngOnDestroy(): void {
      this.addStudentSubscription?.unsubscribe();
    }
}
