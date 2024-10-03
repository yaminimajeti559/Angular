import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { LoggerserviceService } from '../loggerservice.service';

@Component({
  selector: 'app-angular-component',
  templateUrl: './angular-component.component.html',
  styleUrls: ['./angular-component.component.css']
})
export class AngularComponentComponent {
  title='Angular';

  constructor(private enrollservice:EnrollService,private loggersevice:LoggerserviceService){

  }
  OnEnroll(){
      //const enrollservice=new EnrollService();
      this.enrollservice.OnEnrollClick(this.title);
      this.loggersevice.LogMessage(this.title);
  }
}
