import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  courses=[
    { id:101,name:'Javascript',author:'John',duration:20,price:5.00,ratings:3.8},
    { id:102,name:'Angular',author:'Arjun',duration:25,price:7.00,ratings:3.5},
    { id:103,name:'React',author:'John',duration:22,price:8.00,ratings:4.5},
    { id:104,name:'.Net',author:'John',duration:24,price:10.00,ratings:4.2}
  ];

  getAllCourses():any{
    const courseList=new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.courses);
      }, 400);
    })
    return courseList;
  }
}
