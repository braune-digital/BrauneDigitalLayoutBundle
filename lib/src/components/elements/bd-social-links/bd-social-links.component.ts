/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';

@Component({
    selector: 'bd-social-links, [bd-social-links]',
    templateUrl: 'bd-social-links.component.html'
})
export class BdSocialLinksComponent {

    baseClass = 'social-links';

    @Input('title') title: string = null;

    @Input('facebook') facebook: string = null;
    @Input('twitter') twitter: string = null;
    @Input('instagram') instagram: string = null;
    @Input('website') website: string = null;
    @Input('crowdfunding') crowdfunding: string = null;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
        ]);
    }
}
