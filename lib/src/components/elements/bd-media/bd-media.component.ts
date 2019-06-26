/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Bem} from '../../../utils/bem';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Component({
    selector: 'bd-media',
    templateUrl: 'bd-media.component.html'
})
export class BdMediaComponent implements OnInit {

    baseClass = 'figure';

    videoHtml: SafeHtml;
    noCookie = true;

    youtubeUrl = 'https://www.youtube.com/embed/';
    youtubeUrlNoCookie = 'https://www.youtube-nocookie.com/embed/';
    vimeoUrl = 'https://player.vimeo.com/video/';

    // Style Specific stuff
    @Input('loading') loading = false;
    @Input('border') border: string = null;

    // Video Specific stuff
    // use identifiers
    @Input('plattformIdentifier') plattformIdentifier = 'youtube';
    @Input('videoIdentifier') videoIdentifier = null;
    // or just use an url
    @Input('url') url = null;

    // Audio Specific stuff
    @Input('onlyAudio') onlyAudio = false;
    @Input('audioFormat') audioFormat = 'audio/mp3';
    @Input('audioFilePath') audioFilePath = null;


    @HostBinding('class')
    get hostClasses(): string {

        const bem = new Bem(this.baseClass);

        return bem.setMods(this.baseClass, [
            bem.checkModifier(this.border, 'border'),
            bem.setModifier(this.border, 'border--'),
        ]);
    }


    constructor(
        private _sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
        if (this.url) {
            this.getVideoIdentifier();
        }
        this.setVideo();
    }

    setVideo() {
        let html = null;

        switch (this.plattformIdentifier) {
            case 'youtube':
                html = '<iframe src="' + this.generateYoutubeUrl() + '" frameborder="no" height="100%" width="100%" scrolling="no" allowfullscreen="yes">';
                this.videoHtml = this._sanitizer.bypassSecurityTrustHtml(html);
                break;
            case 'vimeo':
                html = '<iframe src="' + this.generateVimeoUrl() + '" frameborder="no" height="100%" width="100%" scrolling="no" allowfullscreen="yes">';
                this.videoHtml = this._sanitizer.bypassSecurityTrustHtml(html);
                break;
        }
    }

    generateVimeoUrl() {
        return this.vimeoUrl + this.videoIdentifier;
    }

    generateYoutubeUrl() {
        return (this.noCookie ? this.youtubeUrlNoCookie : this.youtubeUrl) + this.videoIdentifier;
    }

    safeURL(url) {
        return this._sanitizer.bypassSecurityTrustUrl(url);
    }

    getVideoIdentifier() {
        const youtube = /^.*(youtube)|(youtu.be)|(y2u.be).*/;
        const vimeo = /^.*(vimeo).*/;
        if (this.url.match(youtube)) {
            this.videoIdentifier = this.youtube_parser(this.url);
            this.plattformIdentifier = 'youtube';
        }
        if (this.url.match(vimeo)) {
            this.videoIdentifier = this.vimeo_parser(this.url);
            this.plattformIdentifier = 'vimeo';
        }
    }

    youtube_parser(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : '';
    }

    vimeo_parser(url) {
        const regExp = /^.*(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?.*/;
        const match = url.match(regExp);
        return match ? match[1] : '';
    }


}
