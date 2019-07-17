/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'bd-brand',
    templateUrl: 'bd-brand.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BdBrandComponent {

    @Input()
    brandSrc: string;

    @Input()
    svgCode: string;

    @Input()
    alt: string;

    @Input()
    label: string;
}
