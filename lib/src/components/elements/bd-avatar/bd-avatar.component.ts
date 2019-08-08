/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {TagInterface} from '../../../models/TagInterface';
import {UserInterface} from '../../../models/UserInterface';

@Component({
    selector: 'bd-avatar, [bd-avatar]',
    templateUrl: 'bd-avatar.component.html'
})
export class BdAvatarComponent implements OnInit {

    baseClass = 'avatar';
    avatarColor;

    @Input('user') user: UserInterface = null;
    @Input('tags') tags: Array<TagInterface> = null;
    @Input('size') size: string = 'base';
    @Input('color') color: string = null;
    @Input('headlineType') headlineType: string = 'h4';
    @Input('vertical') vertical: false;


    @Input('linkToProfile') linkToProfile = false;

    @Input('enableMessage') enableMessage = false;
    @Input('enableFollow') enableFollow = false;

    @Input('hideName') hideName = false;
    @Input('showCompany') showCompany = false;
    @Input('showDescription') showDescription = false;
    @Input('showAuthorDescription') showAuthorDescription = false;

    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.setModifier(this.size),
            bem.checkModifier(this.linkToProfile, 'hover'),
            bem.checkModifier(this.vertical, 'column'),
        ]);
    }

    constructor(
        private _router: Router,
        private _translateService: TranslateService
    ) {}

    ngOnInit(): void {
        if (this.color === null) {
          this.avatarColor = this.getRandomColor();
        } else {
          this.avatarColor = this.color;
        }

    }

    getInitials(): string {
        const names = [this.user.firstname ? this.user.firstname : '', this.user.lastname ? this.user.lastname : ''];
        let initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    }

    getRandomColor() {
        const colors = ['fourthly', 'primary', 'secondary', 'tertiary'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    @HostListener('click') onClick() {
        if (this.linkToProfile) {
            this._router.navigate(['/', this._translateService.currentLang , 'community', 'profil', this.user.id]);
        }
    }

}
