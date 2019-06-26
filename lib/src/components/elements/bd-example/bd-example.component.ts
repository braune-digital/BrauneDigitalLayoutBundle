/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'bd-example',
  templateUrl: './bd-example.component.html',
})
export class BdExampleComponent {

    @Input('example') example: string;

    constructor() {}

}

