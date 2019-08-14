/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bd-nav, [bd-nav]',
  templateUrl: './bd-nav.component.html',
  animations: [
    trigger('openNav', [
      transition(':enter', [
        style({height: '0'}),
        animate('333ms ease', style({height: '*'}))
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate('333ms ease', style({height: '0'}))
      ])
    ])
  ]
})
export class BdNavComponent implements OnInit {

  breakpoints;

  @Input()
  fadeOut: false;

  @Input()
  brand: string;

  mobileNavOpen = false;

  ngOnInit() {
    this.breakpoints = new Breakpoints();
  }
}
