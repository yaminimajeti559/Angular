import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchValue ='';
    changeValue(eventData:Event){
      //  console.log((<HTMLInputElement>eventData.target).value); 
       this.searchValue=(<HTMLInputElement>eventData.target).value;
    }

    @Output()
    textChange:EventEmitter<string>=new EventEmitter<string>();

    onTextChange(){
      this.textChange.emit(this.searchValue);
    }
}
