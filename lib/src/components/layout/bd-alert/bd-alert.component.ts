/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component } from '@angular/core';
import {state, trigger, style, transition, animate} from '@angular/animations';
import { AlertService } from '../../../services/alert.service';
import {AlertInterface} from '../../../services/alert.abstract.service';

@Component({
  selector: 'bd-alert, [bd-alert]',
  templateUrl: './bd-alert.component.html',
    animations: [
        trigger('flash', [
            state('void', style({
                transform: 'translateY(0)',
            })),
            transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate(125),
            ]),
            transition('* => void', [
                animate(125, style({transform: 'translateY(-100%)'}))
            ])
        ])
    ]
})
export class BdAlertComponent {

    private _alerts: Array<AlertInterface> = [];

    get alert() {
        return this._alerts[this._alerts.length - 1];
    }

    constructor(private _alertService: AlertService) {

        this._alertService.alert$.subscribe(_alert => {
            this._alerts.push(_alert);
        });
    }

    removeAlert(_event) {
        if (_event.toState !== 'void') {
            setTimeout(() => { this._alerts = []; }, 6500);
        }
    }

}
