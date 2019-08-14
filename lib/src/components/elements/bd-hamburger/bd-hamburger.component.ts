import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'bd-hamburger, [bd-hamburger]',
  templateUrl: 'bd-hamburger.component.html'
})
export class BdHamburgerComponent {

  @Output()
  isActive: EventEmitter<boolean> = new EventEmitter<boolean>();

  burgerActive = false;

  switchBurger() {
    if (this.burgerActive) {
      this.isActive.emit(false);
      this.burgerActive = false;
    } else {
      this.isActive.emit(true);
      this.burgerActive = true;
    }
  }
}
