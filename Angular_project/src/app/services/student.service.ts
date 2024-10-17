import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addStudentRequest } from '../Models/add-student.model';
import { Observable } from 'rxjs';
import { getStudent } from '../Models/getstudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  addStudent(model:addStudentRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7281/api/Student',model);
}

getStudents():Observable<getStudent[]>{
  return this.http.get<getStudent[]>('https://localhost:7281/api/Student');
}

getStudent(id:any):Observable<getStudent>{
  return this.http.get<getStudent>('https://localhost:7281/api/Student/'+id);
}

updateStudent(id:any,updateStudent:getStudent):Observable<getStudent>{
    return this.http.put<getStudent>('https://localhost:7281/api/Student/'+id,updateStudent);
}

deleteStudent(id:any):Observable<getStudent>{
  return this.http.delete<getStudent>('https://localhost:7281/api/Student/' + id);
}
}
