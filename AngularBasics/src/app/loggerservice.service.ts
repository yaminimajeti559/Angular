import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerserviceService {

  constructor() { }

  LogMessage(title:string){
    console.log(title+' has enrolled');
  }
}
