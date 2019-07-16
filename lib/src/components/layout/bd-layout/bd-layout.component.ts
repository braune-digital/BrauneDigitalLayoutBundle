/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'bd-layout',
  templateUrl: 'bd-layout.component.html'
})
export class BdLayoutComponent implements OnInit {

  @Input()
  sidebar = false;

  constructor(private metaSettings: Meta) {}

  ngOnInit() {
    this.metaSettings.updateTag({name: 'viewport', content: 'width=device-width, user-scalable=no'});
  }

}
