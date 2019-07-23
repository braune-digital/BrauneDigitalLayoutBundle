/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-item, [bd-item]',
    templateUrl: 'bd-item.component.html'
})
export class BdItemComponent {

    baseClass = 'item';

    @Input()
    icon: string = null;

    @Input()
    image: string = null;

    @Input()
    iconFont = 'far';

    @Input()
    spin = false;

    @Input()
    text: string;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            this.spin ? 'fa-spin' : '',
        ]);
    }
}
