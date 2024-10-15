import { Injectable } from '@angular/core';
import { addCourseRequest } from '../Models/add-course.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  addCourse(model:addCourseRequest):Observable<void>{
      return this.http.post<void>('https://localhost:7281/api/Course',model);
  }
}
