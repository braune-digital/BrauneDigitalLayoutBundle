/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-tab-head',
    templateUrl: 'bd-tab-head.component.html'
})
export class BdTabHeadComponent {

    @Input() headline: string = null;
    @Input() description: string = null;

}
