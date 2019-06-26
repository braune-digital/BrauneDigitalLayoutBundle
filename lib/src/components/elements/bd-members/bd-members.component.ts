/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input} from '@angular/core';
import {UserInterface} from '../../../models/UserInterface';

@Component({
  selector: 'bd-members',
  templateUrl: './bd-members.component.html',
})
export class BdMembersComponent {

    @Input('title') title: string = '';
    @Input('members') members: Array<UserInterface>;
}

