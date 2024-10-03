import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent {
    myobser=new Observable((observer)=>{
        console.log('starting...');
        observer.next("1");
        observer.next("2");
        //observer.error("error");
        observer.complete();
    })
    ngOnInit(){
      this.myobser.subscribe((val)=>{
          console.log(val);
      },(error)=>{
          alert('Error was raised');
      },()=>{
        alert('Completed');
      });
    }

    myobser2=Observable.create((observer1:any)=>{
      observer1.next("1");
      observer1.next("2");
    });
}
