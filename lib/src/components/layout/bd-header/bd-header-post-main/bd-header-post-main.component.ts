
import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-header-post-main, [bd-header-post-main]',
    templateUrl: './bd-header-post-main.component.html',
})
export class BdHeaderPostMainComponent {

  baseClass = 'tmpl__header__post__main';

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }

}
