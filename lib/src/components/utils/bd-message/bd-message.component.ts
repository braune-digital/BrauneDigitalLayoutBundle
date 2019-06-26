/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-message',
    templateUrl: 'bd-message.component.html'
})
export class BdMessageComponent{

    @Input('color') color: string;
    @Input('title') title: string = null;

    constructor() {

    }


}
