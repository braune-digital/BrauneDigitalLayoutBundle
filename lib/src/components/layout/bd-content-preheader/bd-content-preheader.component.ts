/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';

@Component({
  selector: 'bd-content-preheader',
  templateUrl: './bd-content-preheader.component.html',
})
export class BdContentPreheaderComponent implements OnInit {

  breakpoints;

  ngOnInit() {
    this.breakpoints = new Breakpoints();
  }


}
