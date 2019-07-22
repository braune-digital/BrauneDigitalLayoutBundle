import {Component, Input} from '@angular/core';

@Component({
    selector: 'bd-file',
    templateUrl: 'bd-file.component.html'
})
export class BdFileComponent {

    @Input() file;

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
