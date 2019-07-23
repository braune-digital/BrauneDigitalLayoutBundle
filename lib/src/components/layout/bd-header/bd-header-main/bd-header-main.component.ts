/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-header-main, [bd-header-main]',
    templateUrl: './bd-header-main.component.html',
})
export class BdHeaderMainComponent {

  baseClass = 'tmpl__header__main';

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }

}
