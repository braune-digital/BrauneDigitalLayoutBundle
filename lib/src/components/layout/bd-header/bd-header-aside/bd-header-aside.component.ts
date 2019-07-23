/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-header-aside, [bd-header-aside]',
    templateUrl: './bd-header-aside.component.html',
})
export class BdHeaderAsideComponent {

  baseClass = 'tmpl__header__aside';

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }

}
