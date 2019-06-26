/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-image, [bd-image]',
    templateUrl: 'bd-image.component.html'
})
export class BdImageComponent {

    baseClass = 'figure';

    @Input('alt') alt: string = null;

    @Input('border') border: string = null;
    @Input('image') image: string = null;
    @Input('size') size: string = null;

    @Input('lightbox') lightbox: false;

    constructor() {

    }

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size),
            bem.checkModifier(this.border, 'border'),
            bem.setModifier(this.border, 'border--'),
        ]);
    }

}
