import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-sidebar-pre',
    templateUrl: './bd-sidebar-pre.component.html',
})
export class BdSidebarPreComponent {

  baseClass = 'sidebar__pre';

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }
}
