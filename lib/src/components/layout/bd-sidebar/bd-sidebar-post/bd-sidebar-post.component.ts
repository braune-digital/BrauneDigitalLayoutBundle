import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-sidebar-post',
    templateUrl: './bd-sidebar-post.component.html',
})
export class BdSidebarPostComponent {

  baseClass = 'sidebar__post';

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }
}
