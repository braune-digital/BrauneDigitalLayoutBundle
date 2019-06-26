/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, Input } from '@angular/core';

@Component({
    selector: 'bd-progress-bar',
    templateUrl: 'bd-progress-bar.component.html',
    host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
        '[attr.aria-valuenow]': 'progress',
        'class': 'progress-bar'
    },
})
export class BdProgressBarComponent {

    @Input('progress') progress: number = 0;

    applyWidth() {
        return { 'width' : this.progress + '%' };
    }
}
