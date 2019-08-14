import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Directive({
  selector:"[elementHeight]",
})
export class BdHeightDirective implements OnInit {

  @Output()
  getHeight: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    setTimeout( () => {
      this.getHeight.emit(this.el.nativeElement.offsetHeight);
    }, 50);
  }
}
