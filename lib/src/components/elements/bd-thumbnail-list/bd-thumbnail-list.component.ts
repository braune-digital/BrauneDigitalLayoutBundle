/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-thumbnail-list, [bd-thumbnail-list]',
    templateUrl: 'bd-thumbnail-list.component.html'
})
export class BdThumbnailListComponent {

    baseClass = 'thumbnail-list';

    @Input('title') title: string = null;

    @Input('crop') crop = false;
    @Input('small') small = false;

    @Input('maxItems') maxItems = 3;
    @Input('disableNextElementButton') disableNextElementButton = true;


    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.crop, 'crop'),
            bem.checkModifier(this.small, 'small'),
        ]);
    }

    constructor() {

    }
}
