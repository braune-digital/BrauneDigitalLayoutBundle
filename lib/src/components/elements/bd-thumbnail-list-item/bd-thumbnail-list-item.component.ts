/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-thumbnail-list-item, [bd-thumbnail-item-list-item]',
    templateUrl: 'bd-thumbnail-list-item.component.html'
})
export class BdThumbnailListItemComponent {

    baseClass = 'thumbnail-item';

    @Input('title') title: string = null;
    @Input('topline') topline: string = null;
    @Input('image') image: string = null;
    @Input('color') color: string = null;

    @Input('small') small = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.small, 'small'),
        ]);
    }

    constructor() {

    }


}
