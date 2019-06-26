/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {UserInterface} from '../../../models/UserInterface';

@Component({
  selector: 'bd-user-profile, [bd-user-profile]',
  templateUrl: './bd-user-profile.component.html'
})
export class BdUserProfileComponent implements OnInit {

    @Input('user') user: UserInterface;

    baseClass = 'user-profile';

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            // bem.setModifier(this.color),
        ]);
    }

    constructor() {

    }

    ngOnInit(){
    }
}
