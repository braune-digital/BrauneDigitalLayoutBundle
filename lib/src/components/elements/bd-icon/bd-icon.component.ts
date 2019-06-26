/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-icon, [bd-icon]',
    templateUrl: 'bd-icon.component.html'
})
export class BdIconComponent {

    baseClass = 'icon';

    @Input('icon') icon: string = null;
    @Input('font') font = 'far';

    @Input('spin') spin = false;
    @Input('size') size: string;
    @Input('color') color: string;

    constructor() {

    }

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size),
            bem.setModifier(this.color),
            this.spin ? 'fa-spin' : '',
        ]);
    }
}
