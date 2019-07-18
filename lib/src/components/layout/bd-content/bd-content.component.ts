/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';

@Component({
    selector: 'bd-content, [bd-content]',
    templateUrl: './bd-content.component.html',
})
export class BdContentComponent implements OnInit{

  @Input('hasAside') hasAside = true;
  @Input('stickyAside') stickyAside = true;
  @Input('inline') inline = false;

  @Input()
  fadeOut = false;

  enableSticky = false;
  breakpoints;
  heightString;

  ngOnInit() {
    this.breakpoints = new Breakpoints();
    this.heightString = window.innerHeight;
    this.checkSticky();
  }

  checkSticky() {
    if (!this.stickyAside) { return; }
    this.enableSticky = !!this.breakpoints.up('lg');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkSticky();
    this.heightString = window.innerHeight;
  }
}
