import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students=[
    {name:'Ram',course:'Java',marks:80,dob:'10/11/2001',gender:'male'},
    {name:'Sita',course:'C#',marks:85,dob:'17/01/2002',gender:'female'},
    {name:'Bhanu',course:'Angular',marks:83,dob:'10/10/2001',gender:'male'},
    {name:'Vishnu',course:'C#',marks:78,dob:'28/08/2001',gender:'male'},
    {name:'Priya',course:'Java',marks:80,dob:'10/09/2001',gender:'female'}
  ];
}
