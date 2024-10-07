import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private studservice:StudentService){}
  students=this.studservice.students;
  filterStudents=this.students;

  totalMarks=100;
  _filterText:any;

  get filterText(){
    return this._filterText;
  }
  set filterText(value:string){
      this._filterText=value;
      this.filterStudents=this.filterByGender(value);
  }

  filterByGender(filterTerm:string){
    if(this.students.length==0 || filterTerm==''){
      return this.students;
    }else{
      return this.students.filter((student)=>
      {
        return student.gender.toLowerCase()==filterTerm.toLowerCase();
      })
    }
  }

}
