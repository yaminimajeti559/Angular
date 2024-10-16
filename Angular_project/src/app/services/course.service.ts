import { Injectable } from '@angular/core';
import { addCourseRequest } from '../Models/add-course.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { getCourse } from '../Models/getcourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  addCourse(model:addCourseRequest):Observable<void>{
      return this.http.post<void>('https://localhost:7281/api/Course',model);
  }

  getCourses():Observable<getCourse[]>{
    return this.http.get<getCourse[]>('https://localhost:7281/api/Course');
  }

  getCourse(id:any):Observable<getCourse>{
    return this.http.get<getCourse>('https://localhost:7281/api/Course/'+id);
  }

  updateCourse(id:any,updateCourse:getCourse):Observable<getCourse>{
      return this.http.put<getCourse>('https://localhost:7281/api/Course/'+id,updateCourse);
  }

  deleteCourse(id:any):Observable<getCourse>{
    return this.http.delete<getCourse>('https://localhost:7281/api/Course/' + id);
  }
}
