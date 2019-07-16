/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-brand',
    templateUrl: 'bd-brand.component.html'
})
export class BdBrandComponent {

    @Input()
    brandSrc: string;

    @Input()
    alt: string;

    @Input()
    label: string;
}
