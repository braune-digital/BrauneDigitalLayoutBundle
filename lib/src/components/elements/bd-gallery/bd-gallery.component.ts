/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {MediaInterface} from '../../../models/MediaInterface';

@Component({
    selector: 'bd-gallery',
    templateUrl: 'bd-gallery.component.html'
})
export class BdGalleryComponent implements OnInit {

    baseClass = 'figure';

    // Style Specific stuff
    @Input('loading') loading = false;
    @Input('border') border: string = null;


    @Input('images') images: Array<MediaInterface> = [];


    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.border, 'border'),
            bem.setModifier(this.border, 'border--'),
        ]);
    }
    ngOnInit() {
    }

}
