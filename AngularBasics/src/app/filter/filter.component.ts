import { Component,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
    @Input() alls=0;
    @Input() av=0;
    @Input() nav=0;
    selectedRadio='allProducts';

    @Output()
    filterChange: EventEmitter<string>=new EventEmitter<string>();

    onradioChange(){
      this.filterChange.emit(this.selectedRadio);
    }
}
