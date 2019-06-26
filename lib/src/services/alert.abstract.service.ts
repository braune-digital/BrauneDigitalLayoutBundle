/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/12/19 2:59 PM Braune Digital GmbH
 */

import {Subject} from 'rxjs';

export interface AlertInterface {
  type: string;
  title?: string;
  message?: string;
}

export abstract class AbstractAlertService {

  abstract alert$: Subject<AlertInterface>;

}
