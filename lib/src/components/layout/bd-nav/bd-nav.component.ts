/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';
import {HeightService} from '../../../services/height.service';

@Component({
  selector: 'bd-nav, [bd-nav]',
  templateUrl: './bd-nav.component.html',
})
export class BdNavComponent implements OnInit {

  breakpoints;

  @Input()
  fadeOut: false;

  @Input()
  brand: string;

  ngOnInit() {
    this.breakpoints = new Breakpoints();
  }
}
