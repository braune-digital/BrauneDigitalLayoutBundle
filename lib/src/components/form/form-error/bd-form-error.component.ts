/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
    selector: 'bd-form-error',
    templateUrl: './bd-form-error.component.html',
})
export class BdFormErrorComponent {

    @Input('form')
    form: AbstractControl;

    get errors(): Array<string> {
        const errors = [];
        if (this.form
                && (this.form.touched)
                && this.form.errors
            ) {
            return Object.keys(this.form.errors).filter(_ => (this.form.errors[_])).map(key => {
                return 'form.errors.' + key;
            });
        }
        return [];
    }

}
