/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-action-group-item, [bd-action-group-item]',
    templateUrl: 'bd-action-group-item.component.html'
})
export class BdActionGroupItemComponent {

    baseClass: string = 'action-group__item';

    @Input('type') type: string = null;
    @Input('spacing') spacing: string = null;
    @Input('hoverColor') hoverColor = null;


    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.type),
            bem.setModifier(this.spacing, 'spacing-'),
            bem.setModifier(this.hoverColor),
        ]);
    }

    constructor() {

    }
}
