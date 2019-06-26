/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'bd-button, bd-btn, [bd-button], [bd-btn]',
    templateUrl: 'bd-button.component.html'
})
export class BdButtonComponent {

    baseClass: string = 'btn';

    @Input('loading') loading = false;
    @Input('size') size = null;
    @Input('color') color = null;
    @Input('type') type = null;
    @Input('block') block: boolean = false;
    @Input('outline') outline: boolean = false;
    @Input('inline') inline: boolean = false;
    @Input('disabled') disabled: boolean = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size),
            bem.setModifier(this.color),
            bem.setModifier(this.type),
            bem.checkModifier(this.outline, 'outline'),
            bem.checkModifier(this.inline, 'inline'),
            bem.checkModifier(this.block, 'block'),
            bem.checkModifier(this.loading, 'loading'),
            bem.checkModifier(this.disabled, 'disabled'),
        ]);
    }

    constructor() {

    }
}
