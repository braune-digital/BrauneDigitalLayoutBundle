/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, Input, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'bd-loading',
    templateUrl: 'bd-loading.component.html',
    animations: [
      trigger('fadeInOut', [
        state('void', style({
          opacity: 0
        })),
        transition('void <=> *', animate('333ms ease')),
      ]),
    ]
})
export class BdLoadingComponent {

    @Input()
    isLoading = true;

    @Input()
    overlay = false;

    @Input()
    text = 'global.loading';
}
