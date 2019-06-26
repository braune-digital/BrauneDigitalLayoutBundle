/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from "../../../utils/bem";

@Component({
    selector: 'bd-bookmark, [bd-bookmark]',
    templateUrl: 'bd-bookmark.component.html'
})
export class BdBookmarkComponent {

    baseClass: string = 'bookmark';

    @Input('bookmark') bookmark: boolean = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.bookmark, 'active'),
        ]);
    }

    constructor() {

    }
}
