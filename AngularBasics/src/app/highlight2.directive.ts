import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.background') background:string='green';

}
