import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students:any,filterText:string) {
    if(students.length===0 || filterText==='')
      return students;
    else{
      students.filter((student:any)=>{
          return student.gender.toLowerCase()===filterText.toLowerCase();
      })
    }
  }
}
