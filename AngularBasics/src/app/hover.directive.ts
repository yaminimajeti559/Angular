import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') onmousehover(){
    this.renderer.setStyle(this.element.nativeElement,'color','blue');
  }
  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.element.nativeElement,'color','red');
  }
}
