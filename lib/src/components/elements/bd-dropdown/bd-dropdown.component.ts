import {Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'bd-dropdown',
  templateUrl: 'bd-dropdown.component.html',
  animations: [
    trigger('openNav', [
      transition(':enter', [
        style({height: '0'}),
        animate('333ms ease-in', style({height: '*'}))
      ]),
      transition(':leave', [
        style({height: '*'}),
        animate('333ms ease-in', style({height: '0'}))
      ])
    ])
  ]
})
export class BdDropdownComponent {

  collasped = false;

  @Input()
  position = 'left';

}
