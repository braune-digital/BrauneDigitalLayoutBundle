/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, Input} from '@angular/core';
import {state, trigger, style, transition, animate} from '@angular/animations';
import {AlertService} from '../../../services/alert.service';
import {AlertInterface} from '../../../services/alert.abstract.service';

@Component({
  selector: 'bd-alert, [bd-alert]',
  templateUrl: './bd-alert.component.html',
  animations: [
    trigger('flash', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),

      transition('void => *', [
        animate('333ms ease', style({transform: 'translateY(0)', opacity: 1})),
      ]),
      transition('* => void', [
        animate('333ms ease', style({transform: 'translateY(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class BdAlertComponent {

  @Input()
  closeable = false;

  @Input()
  timeout = 6500;

  private _alerts: Array<AlertInterface> = [];

  get alert() {
    return this._alerts[this._alerts.length - 1];
  }

  constructor(private _alertService: AlertService) {

    this._alertService.alert$.subscribe(_alert => {
      this._alerts.push(_alert);
    });
  }

  removeSingleAlert(alert) {
    this._alerts = this._alerts.filter(obj => obj !== alert);
  }

  removeAlert(_event) {
    if (_event.toState !== 'void') {
      setTimeout(() => {
        this._alerts = [];
      }, this.timeout);
    }
  }

}
