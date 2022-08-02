import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
