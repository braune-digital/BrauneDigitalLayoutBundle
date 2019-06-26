import {
    AfterContentInit,
    AfterViewInit,
    Directive,
    ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
    AnimationPlayer,
    AnimationBuilder,
} from '@angular/animations';


@Directive({
    selector: '[bd-masonry-item]'
})
export class BdMasonryItemDirective implements OnChanges, AfterViewInit, AfterContentInit, OnInit, OnDestroy {

    player: AnimationPlayer;
    onChanged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(public _elemRef: ElementRef, private builder: AnimationBuilder) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.onChanged$.next(true);
    }

    ngAfterContentInit(): void {
        setTimeout(_ => {
            this.onChanged$.next(true);
        }, 200);
    }

    ngAfterViewInit() {
        setTimeout(_ => {
            this.onChanged$.next(true);
        }, 200);
    }



    ngOnInit(): void {
        //this._elemRef.nativeElement.style.opacity = 0;
    }

    ngOnDestroy(): void {

    }



}
