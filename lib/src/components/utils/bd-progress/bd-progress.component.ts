/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bd-progress',
    templateUrl: 'bd-progress.component.html'
})
export class BdProgressComponent implements OnInit {

    @Input('isLoading') isLoading = true;

    @Input('progress') progress: number = 0;
    @Input('title') title: string = null;

    percent: number = 0;

    ngOnInit() {
        this.percent = this.progress;
    }
}
