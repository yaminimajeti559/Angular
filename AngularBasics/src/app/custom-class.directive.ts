import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomClass]'
})
export class CustomClassDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @Input() set display(value:object){
    let entries=Object.entries(value);
    for(let entry of entries){
      if(entry[1]){
        this.renderer.addClass(this.element.nativeElement,entry[0]);
      }
    }
  }
}
