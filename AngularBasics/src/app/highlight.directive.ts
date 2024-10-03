import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  ngOnInit(){
      this.renderer.setStyle(this.element.nativeElement,'color','red');
      //this.renderer.addClass(this.element.nativeElement,'container');
  }
}
