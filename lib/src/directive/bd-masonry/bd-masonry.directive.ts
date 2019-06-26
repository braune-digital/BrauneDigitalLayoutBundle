import {
    AfterContentInit,
    ContentChildren,
    Directive,
    ElementRef,
    HostListener,
    Input, OnDestroy,
    OnInit,
    QueryList
} from '@angular/core';
import {BdMasonryItemDirective} from './bd-masonry-item.directive';
import {Subscription, zip} from 'rxjs';
import {Breakpoints} from '../../utils/breakpoints';

@Directive({
    selector: '[bd-masonry]'
})
export class BdMasonryDirective implements OnInit, AfterContentInit, OnDestroy {

    @ContentChildren(BdMasonryItemDirective) items: QueryList<BdMasonryItemDirective>;


    @Input('gridGapRow')
    gridGapRow = '80px';

    @Input('gridGapColumn')
    gridGapColumn = '40px';

    @Input('gridAutoRows')
    gridAutoRows = '20px';

    @Input('gridTemplateColumns')
    gridTemplateColumns = 'repeat(auto-fill, minmax(350px,1fr))';

    @Input('selectorContent')
    selectorContent = '.masonry-size';

    subscriptions: Array<Subscription> = [];
    breakpoints;

    constructor(private _elemRef: ElementRef) {
    }

    ngOnInit(): void {
        this.breakpoints = new Breakpoints();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(_sub => {
            _sub.unsubscribe();
        });
        this.subscriptions = [];
    }

    ngAfterContentInit(): void {
        this.items.changes.subscribe(items => {
            items.forEach(_item => {
                let subscription = _item.onChanged$.subscribe(_ => {
                    if (_) {
                        this.resizeGridItem(_item);
                    }
                });
                this.subscriptions.push(subscription);
            });
        });
    }

    resizeGridItem(item: BdMasonryItemDirective) {
        const rowHeight = parseInt(this.gridAutoRows);
        const rowGap = parseInt(this.gridGapColumn);
        const rowSpan = Math.ceil((item._elemRef.nativeElement.querySelector(this.selectorContent).getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

        item._elemRef.nativeElement.style.gridRowEnd = 'span ' + rowSpan;
    }

    @HostListener('window:resize')
    resizeAllGridItems() {
        this.items.forEach(_item => {
            this.resizeGridItem(_item);
        });
    }


}
