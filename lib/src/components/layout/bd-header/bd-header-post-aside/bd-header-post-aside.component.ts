
import {Component, HostBinding} from '@angular/core';
import {Bem} from '../../../../utils/bem';

@Component({
    selector: 'bd-header-post-aside, [bd-header-post-aside]',
    templateUrl: './bd-header-post-aside.component.html',
})
export class BdHeaderPostAsideComponent {

  baseClass = 'tmpl__header__post__aside';

  @HostBinding('class')
  get hostClasses(): string {

    const bem = new Bem(this.baseClass);
    return bem.setMods(this.baseClass, []);
  }

}
