/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {AlertService} from '../../../services/alert.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'bd-social-share, [bd-social-share]',
    templateUrl: 'bd-social-share.component.html'
})
export class BdSocialShareComponent {

    @Input('title') title: string = null;
    @Input('small') small = false;

    @Input('emailSubject') emailSubject = '';
    @Input('emailContent') emailContent = '';

    @Input('url') url: string = null;
    @Input('pageTitle') pageTitle: string = null;
    @Input('tags') tags: any;

    @Input('facebook') facebook = true;
    @Input('twitter') twitter = true;
    @Input('pinterest') pinterest = true;
    @Input('linkedin') linkedin = true;
    @Input('whatsapp') whatsapp = true;
    @Input('email') email = true;
    @Input('link') link = true;

    location: any;

    constructor(Location: LocationStrategy, private alert: AlertService, private translate: TranslateService) {
        this.location = Location;
    }

    public getUrl() {
        const uri = this.url ? this.url : this.location._platformLocation.location.href;
        return encodeURI(uri);
    }

    copyToClipboard() {

        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = this.getUrl();
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();

        if (document.execCommand('copy')) {
            this.alert.alert$.next({type: 'success', message: this.translate.instant('form.messages.success_copied_link')});
        }

        document.body.removeChild(selBox);
    }

    generateMailContent() {
        if (!this.emailSubject) {
            this.emailSubject = this.translate.instant('form.messages.social_email_subject');
        }
        if (!this.emailContent) {
            this.emailContent = this.translate.instant('form.messages.social_email_content') + '%0D%0A'  +  this.getUrl();
        }
    }

}
