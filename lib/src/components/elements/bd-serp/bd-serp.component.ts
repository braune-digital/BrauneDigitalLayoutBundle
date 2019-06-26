/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'bd-serp',
    templateUrl: 'bd-serp.component.html'
})
export class BdSerpComponent {

    baseUrl = '/';

    @Input('title') title: string = null;
    @Input('description') description: string = null;

    constructor() {

    }

    getUrl() {
        if (this.title) {
            let url = this.title;
            url = url.toLowerCase();
            url = url.toLowerCase();
            url = url.replace(/ä/g, 'ae');
            url = url.replace(/ö/g, 'oe');
            url = url.replace(/ü/g, 'ue');
            url = url.replace(/ß/g, 'ss');
            url = url.replace(/ /g, '-');
            url = url.replace(/\./g, '');
            url = url.replace(/,/g, '');
            url = url.replace(/\(/g, '');
            url = url.replace(/\)/g, '');
            return this.baseUrl + url;
        } else {
            return this.baseUrl;
        }
    }
}
