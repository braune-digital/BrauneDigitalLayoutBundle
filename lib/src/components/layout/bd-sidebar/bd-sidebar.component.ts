import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-sidebar',
    templateUrl: './bd-sidebar.component.html',
})
export class BdSidebarComponent {

    @Input()
    collapsed = false;
}
