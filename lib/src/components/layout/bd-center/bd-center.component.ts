/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, HostBinding, Input } from '@angular/core';
import { Bem } from '../../../utils/bem';

@Component({
  selector: 'bd-center',
  templateUrl: './bd-center.component.html',
})
export class BdCenterComponent {
  baseClass: string = 'center';

  @Input()
  spacing = null;

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);

    return bem.setMods(this.baseClass, [
      bem.setModifier(this.spacing, 'spacing-'),
    ]);
  }
}
