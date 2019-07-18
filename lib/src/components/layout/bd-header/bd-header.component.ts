/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';

@Component({
  selector: 'bd-header, [bd-header]',
  templateUrl: './bd-header.component.html',
})
export class BdHeaderComponent implements OnInit {

  breakpoints;

  @Input()
  fadeOut: false;

  ngOnInit() {
    this.breakpoints = new Breakpoints();
  }


}
