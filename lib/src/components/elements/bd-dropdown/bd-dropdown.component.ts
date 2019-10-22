import {Component, HostListener, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bd-dropdown',
  templateUrl: 'bd-dropdown.component.html',
  animations: [
    trigger('openNav', [
      transition(':enter', [
        style({opacity: '0', height: '0'}),
        animate('333ms ease', style({opacity: '1', height: '*'}))
      ]),
      transition(':leave', [
        style({opacity: '1', height: '*'}),
        animate('333ms ease', style({opacity: '0', height: '0'}))
      ])
    ])
  ]
})
export class BdDropdownComponent {

  collasped = false;

  @Input()
  position = 'left';
}
