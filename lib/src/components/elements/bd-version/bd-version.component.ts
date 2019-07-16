
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bd-version',
  templateUrl: 'bd-version.component.html'
})
export class BdVersionComponent {

  @Input()
  version = '';

  @Input()
  text: string;
}
