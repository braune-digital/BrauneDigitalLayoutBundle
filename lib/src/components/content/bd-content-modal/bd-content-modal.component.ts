/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'bd-content-modal',
  templateUrl: './bd-content-modal.component.html',
})
export class BdContentModalComponent {

    @Input('title') title: string;
    @Input('modalRef')modalRef: BsModalRef;
    @Output() modalClosed = new EventEmitter<boolean>();

}
