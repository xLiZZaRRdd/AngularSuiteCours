import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //ElementRef > Pour récupérer l'élément sur lequel est la directive
  constructor(private _elem : ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this._elem.nativeElement.style.backgroundColor = "darkblue";
      this._elem.nativeElement.style.color = "chartreuse";
    }

    @HostListener('mouseleave') onMouseLeave() {
      this._elem.nativeElement.style.backgroundColor = "transparent";
      this._elem.nativeElement.style.color = "black";
    }
  }
