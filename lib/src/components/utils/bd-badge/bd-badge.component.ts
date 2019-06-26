/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
  selector: 'bd-badge, [bd-badge]',
  templateUrl: './bd-badge.component.html'
})
export class BdBadgeComponent {

  baseClass: string = 'badge';

  @Input('size') size = null;
  @Input('text') text = false;
  @Input('color') color = null;
  @Input('pill') pill: boolean = false;
  @Input('hover') hover: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);

    let classNames = bem.setMods(this.baseClass, [
      bem.setModifier(this.size),
      bem.setModifier(this.color),
      bem.checkModifier(this.pill, 'pill'),
      bem.checkModifier(this.hover, 'hover')
    ]);

    if (this.text) {
      classNames += ' ' + this.baseClass + '--text';
    }

    if (this.size) {
      classNames += ' ' + this.baseClass + '--' + this.size;
    }

    return classNames;
  }

  constructor() {

  }


}
