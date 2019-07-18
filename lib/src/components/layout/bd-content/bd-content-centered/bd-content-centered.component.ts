/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, HostBinding, Input } from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
  selector: 'bd-content-centered, [bd-center]',
  templateUrl: './bd-content-centered.component.html',
})
export class BdContentCenteredComponent {
  baseClass: string = 'tmpl__content__centered';

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
