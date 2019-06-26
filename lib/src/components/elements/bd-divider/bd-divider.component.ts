/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-divider',
    templateUrl: 'bd-divider.component.html'
})
export class BdDividerComponent {


    baseClass = 'divider';

    @Input('size') size = null;
    @Input('wideSpacing') wideSpacing = null;


    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size),
            bem.checkModifier(this.wideSpacing, 'spacing'),
        ]);
    }

    constructor() {

    }
}
