import {Component, HostBinding, OnInit} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
  selector: 'bd-sidebar-main',
  templateUrl: './bd-sidebar-main.component.html',
})
export class BdSidebarMainComponent {

  baseClass = 'sidebar__main';

  @HostBinding('class')
  get hostClasses(): string {
    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }
}
