/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {ParamFilter} from '@braune-digital/angular-query-filter';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'bd-search-entity',
    templateUrl: './bd-search-entity.component.html',
})
export class BdSearchEntityComponent implements OnInit {

    @Input('route')
    route: string;

    @Input('properties')
    properties: Array<string>;

    @Input('headers')
    headers: {};

    @Input('searchTemplate')
    searchTemplate: TemplateRef<any>;

    @Input('resultsPerPage')
    resultsPerPage = 10;

    @Output('selected')
    onSelected: EventEmitter<any> = new EventEmitter<any>();

    @Output('add')
    onAdd: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('searchFilter', {static: false})
    searchFilter;

    filter: ParamFilter;
    results: any;

    constructor(private api: HttpClient) {
    }

    ngOnInit(): void {
        this.filter = new ParamFilter(this.route, this.api, {}, true, this.headers);
        this.filter.resultsPerPage = this.resultsPerPage;
        this.filter.responseEvent.subscribe((_results: Array<any>) => {
            this.results = _results;
        });
        this.filter.refresh();
    }


    handleClick(_result) {
        this.onSelected.emit(_result);
    }

    handleAddClick(): void {
        this.onAdd.emit(this.searchFilter.model);
    }
}
