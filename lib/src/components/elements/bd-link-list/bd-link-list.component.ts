/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-link-list, [bd-link-list]',
    templateUrl: 'bd-link-list.component.html'
})
export class BdLinkListComponent {

    @Input('title') title: string = null;
    @Input('inline') inline = false;
    @Input('vertical') vertical = false;
    @Input('hideMobile') hideMobile = false;

    @Input() collapseEnabled = false;
    @Input() collasped = false;
}
