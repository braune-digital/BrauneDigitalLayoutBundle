/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';

@Component({
  selector: 'bd-layout, [bd-layout]',
  templateUrl: 'bd-layout.component.html'
})
export class BdLayoutComponent {

  @Input()
  sidebar = false;

}
