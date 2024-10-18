import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CSEComponent } from '../cse/cse.component';
import { CivilComponent } from '../civil/civil.component';
import { ChemicalComponent } from '../chemical/chemical.component';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {
  enrollForm: FormGroup;
  departments=[
    { label: 'CSE', value: 'CSE' },
      { label: 'Civil', value: 'Civil' },
      {label:'Chemical', value:'Chemical'}
  ];
  selectedDept: string | null | undefined;

  constructor(private fb: FormBuilder,private viewcontainerref:ViewContainerRef) {
    this.enrollForm = this.fb.group({
      studentId: [''],
      dept: [null]
    });
  }

  onDeptChange(dept: string) {
    this.viewcontainerref.clear();
    this.selectedDept = dept;
    if(this.selectedDept === 'Cse')
      this.viewcontainerref.createComponent(CSEComponent);
    else if(this.selectedDept === 'Civil')
            this.viewcontainerref.createComponent(CivilComponent);
          else
            this.viewcontainerref.createComponent(ChemicalComponent);
  }   
}
