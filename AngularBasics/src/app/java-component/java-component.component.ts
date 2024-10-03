import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { LoggerserviceService } from '../loggerservice.service';

@Component({
  selector: 'app-java-component',
  templateUrl: './java-component.component.html',
  styleUrls: ['./java-component.component.css']
})
export class JavaComponentComponent {
  title='Java';
      constructor(private enrollservice:EnrollService,private logger:LoggerserviceService){}
      OnEnroll(){
          //const enrollservice=new EnrollService();
          this.enrollservice.OnEnrollClick(this.title);
          this.logger.LogMessage(this.title);
      }
}
