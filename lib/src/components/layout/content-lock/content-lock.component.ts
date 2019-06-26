import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'content-lock',
    templateUrl: './content-lock.component.html',
})
export class ContentLockComponent implements OnInit, OnDestroy {

    @Input('text') text: string = 'content.lock.need_user';

    constructor(

    ) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }


}
