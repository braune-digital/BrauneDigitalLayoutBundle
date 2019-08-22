import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-sidebar-list-item, [bd-sidebar-list-item]',
    templateUrl: 'bd-sidebar-list-item.component.html'
})
export class BdSidebarListItemComponent {

  @Input()
  active = false;

}
