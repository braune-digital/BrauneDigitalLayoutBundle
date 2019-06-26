/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {TagInterface} from '../../../models/TagInterface';

@Component({
    selector: 'bd-tags, [bd-tags]',
    templateUrl: 'bd-tags.component.html'
})
export class BdTagsComponent {

    baseClass = 'tags';

    @Input() tags: Array<TagInterface>;
    @Input('title') title: string = null;
    @Input('inline') inline = false;
    @Input('disableLink') disableLink = false;

    @Input('maxItems') maxItems = null;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.inline, 'inline'),
        ]);
    }

    constructor() {

    }
}
