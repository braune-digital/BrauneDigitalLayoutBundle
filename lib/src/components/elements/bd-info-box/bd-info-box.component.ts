/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'bd-info-box, [bd-info-box]',
    templateUrl: 'bd-info-box.component.html'
})
export class BdInfoBoxComponent {


    @Input('topline') topline: null;

    constructor() {

    }
}
