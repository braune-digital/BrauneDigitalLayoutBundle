/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'bd-grid, [bd-grid]',
    templateUrl: 'bd-grid.component.html'
})
export class BdGridComponent{

    baseClass: string = 'grid';

    @Input('layout') layout = null;
    @Input('alignItems') alignItems = null;
    @Input('largeGutter') largeGutter = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.layout),
            bem.setModifier(this.alignItems),
            bem.checkModifier(this.largeGutter, 'gutter-lg'),
        ]);
    }

    constructor() {

    }

}
