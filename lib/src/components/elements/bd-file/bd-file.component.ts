import {Component, HostBinding, Input} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-file',
    templateUrl: 'bd-file.component.html'
})
export class BdFileComponent {

    baseClass = 'file';
    @Input() file;
    @Input('size')
    size = 'base';

    // TODO CENTER

    @Input('center')
    center = false;


    @HostBinding('class')
    get hostClasses(): string {
      const bem = new Bem(this.baseClass);
      return bem.setMods(this.baseClass, [
        bem.setModifier(this.size),
        bem.checkModifier(this.center, 'center'),
      ]);
    }


  getFileType(_file) {
        const regExp = /\/(.*)/;
        if (_file.contentType) {
            if (_file.contentType.match(regExp)[1].length < 6){
                return _file.contentType.match(regExp)[1];
            } else {
                return _file.name.slice((_file.name.lastIndexOf('.') - 1 >>> 0) + 2);
            }
        }
    }

}
