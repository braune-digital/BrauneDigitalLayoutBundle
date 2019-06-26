/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/12/19 2:57 PM Braune Digital GmbH
 */

import {Subject} from 'rxjs';
import {AbstractAlertService, AlertInterface} from './alert.abstract.service';


export class AlertService extends AbstractAlertService {

  public alert$: Subject<AlertInterface> = new Subject<AlertInterface>();

  constructor() {
    super();
  }
}
