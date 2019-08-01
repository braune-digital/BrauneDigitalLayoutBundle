/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';

@Component({
  selector: 'bd-content-header, [bd-content-header]',
  templateUrl: './bd-content-header.component.html',
})
export class BdContentHeaderComponent {
    @Input('title') title: string;
    @Input('titleHighlight') titleHighlight = false;
    @Input('image') image: string = null;
    @Input('imageBorder') imageBorder: string = null;

    @Input('center') center: false;
    @Input('inline') inline: false;
    @Input('hasAside') hasAside: true;

    @Input('specialClass') specialClass: string;

}
