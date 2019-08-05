/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';
import {HeightService} from '../../../services/height.service';

@Component({
  selector: 'bd-header, [bd-header]',
  templateUrl: './bd-header.component.html',
})
export class BdHeaderComponent implements OnInit {

  breakpoints;

  @Input()
  fadeOut: false;

  constructor(){}

  ngOnInit() {
    this.breakpoints = new Breakpoints();

    // this.heightService.height$.next(window.document.getElementById('bd-tmpl-header-pre').offsetHeight);
    // this.heightService.height$.next(window.document.getElementById('bd-tmpl-header').offsetHeight);
    // this.heightService.height$.next(window.document.getElementById('bd-tmpl-header-post').offsetHeight);
  }


}
