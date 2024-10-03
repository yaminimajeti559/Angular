import { Injectable } from '@angular/core';
import { LoggerserviceService } from './loggerservice.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(logger:LoggerserviceService) { }

  OnEnrollClick(title:string){
    alert('Thanks for enrolling to '+title);
  }
}
