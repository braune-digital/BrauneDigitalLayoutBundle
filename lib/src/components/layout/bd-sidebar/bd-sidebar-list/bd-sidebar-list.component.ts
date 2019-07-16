import {Component, Input} from '@angular/core';


@Component({
    selector: 'bd-sidebar-list, [bd-sidebar-list]',
    templateUrl: 'bd-sidebar-list.component.html'
})
export class BdSidebarListComponent {

    @Input('title') title: string = null;
    @Input('inline') inline = false;
    @Input('vertical') vertical = false;
    @Input('hideMobile') hideMobile = false;

    @Input() collapseEnabled = false;
    @Input() collasped = false;
}
