/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'bd-approval, [bd-approval]',
  templateUrl: './bd-approval.component.html'
})
export class BdApprovalComponent {

    @Input('color') color = null;

    @Input('title') title = null;
    @Input('helpText') helpText = null;

    // States
    @Input('isDeclined') isDeclined = false;
    @Input('isDisabled') isDisabled = false;
    @Input('isEnabled') isEnabled = false;
    @Input('isOpen') isOpen = false;
    @Input('isAccepted') isAccepted = false;
    @Input('isStatusMessage') isStatusMessage = false;

    @Output() acceptClicked = new EventEmitter<boolean>();
    @Output() declineClicked = new EventEmitter<boolean>();
    @Output() enableClicked = new EventEmitter<boolean>();
    @Output() disableClicked = new EventEmitter<boolean>();
    @Output() waitClicked = new EventEmitter<boolean>();

    baseClass = 'approval';

    @HostBinding('class')
    get hostClasses(): string {
        if ((this.isDisabled || this.isDeclined) && !this.color) {
            this.color = 'error';
        } else if (this.isOpen && !this.color) {
            this.color = 'warning';
        } else if (this.isAccepted && !this.color) {
            this.color = 'success';
        } else if (this.isStatusMessage && !this.color) {
            this.color = 'grey-dark';
        }

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.color),
        ]);
    }

}
