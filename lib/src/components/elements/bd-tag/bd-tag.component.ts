/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {TagInterface} from '../../../models/TagInterface';

@Component({
    selector: 'bd-tag, [bd-tag]',
    templateUrl: 'bd-tag.component.html'
})
export class BdTagComponent {

    @Input('tag') tag: TagInterface;
    @Input('disableLink') disableLink: false;

    constructor() {

    }
}
