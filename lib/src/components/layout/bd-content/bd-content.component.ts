/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {Breakpoints} from '../../../utils/breakpoints';
import {DomSanitizer} from '@angular/platform-browser';

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

  height = 0;

  constructor() {

  }

  ngOnInit() {

    this.breakpoints = new Breakpoints();
    if (this.stickyAside) {
      this.heightString = window.innerHeight.toString() + 'px';
    } else {
      this.heightString = 'unset';
    }

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
