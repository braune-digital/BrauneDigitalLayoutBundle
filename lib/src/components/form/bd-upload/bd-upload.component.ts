/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {
  ChangeDetectorRef,
  Component, EventEmitter,
  Input,
  OnInit, Output,
  TemplateRef
} from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { AbstractControl } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../../services/alert.service';
import { HttpClient } from '@angular/common/http';

export interface UploaderClasses {
    main?: string;
    dropzone?: string;
    dropzoneHover?: string;
    dropzoneLegend?: string;
    btn?: string;
    queue?: string;
    queueItem?: string;
    queueItemImage?: string;
    queueItemProgress?: string;
    queueItemError?: string;
    progress?: string;
    progressBar?: string;
    loading?: string;
    actions?: string;
    action?: string;
    actionRemove?: string;
}

const defaultClasses: UploaderClasses = {
    main: 'uploader',
    dropzone: 'uploader__dropzone',
    dropzoneHover: 'uploader__dropzone--hover',
    dropzoneLegend: 'uploader__dropzone__legend',
    btn: 'uploader__button btn',
    queue: 'uploader__queue',
    queueItem: 'uploader__queue__item',
    queueItemImage: 'uploader__queue__items uploader__queue__item--image',
    queueItemProgress: 'uploader__queue__items uploader__queue__item--progress',
    queueItemError: 'uploader__queue__item--error',
    progress: 'uploader__progress',
    progressBar: 'uploader__progress__bar',
    loading: 'uploader__loading',
    actions: 'uploader__actions',
    action: 'uploader__action',
    actionRemove: 'uploader__action--remove',
};

@Component({
    selector: '<bd-upload>',
    templateUrl: './bd-upload.component.html',
    styleUrls: ['./bd-upload.component.scss']
})
export class BdUploadComponent implements OnInit {

    @Input('help')
    help: string;

    @Input('label')
    label: string;

    @Input('uploader')
    uploader: FileUploader = null;

    @Input('formAdditions')
    formAdditions = {};

    @Input('classNames')
    classNames: UploaderClasses = {};

    @Input('form')
    form: AbstractControl;

    @Input('multiple')
    multiple: boolean = false;

    @Input('isAudio')
    isAudio: boolean = false;

    @Input('isFile')
    isFile: boolean = false;

    @Output() fileRemoved = new EventEmitter<FileItem>();

    type: string = 'single';

    classes: UploaderClasses;
    isLoading = false;
    dropZoneHoverState = false;

    // Modal Specific
    modalIndex: number = 0;
    modalRef: BsModalRef;
    modalImageItem: FileItem;
    modalForm: FormGroup;
    isSendingRequest = false;
    showHelp = false;
    metaIsEmpty = false;
    @Input('disableMeta') disableMeta = false;

    // metaData to direct update in frontend after updating metadata of files
    metaData = [];

    constructor(
        private _changeDetector: ChangeDetectorRef,
        private modalService: BsModalService,
        private alert: AlertService,
        private translate: TranslateService,
        private router: Router,
        private http: HttpClient,
    ) {
    }

    ngOnInit(): void {

        if (!this.form) {
            return;
        }

      this.classes = Object.assign({}, this.classNames, defaultClasses);

        this.type = (!this.multiple) ? 'single' : 'multiple';

        if (this.form && this.form.value) {
            if (this.type === 'single') {
                const _file = new FileItem(this.uploader, this.form.value as any, this.uploader.options);
                _file.isUploaded = true;
                _file.isSuccess = true;
                _file._file['isLoading'] = false;
                this.uploader.queue.push(_file);
                this.form.patchValue(this.form.value['id']);

                /*
                * Modal Specific check for metaData
                * Set metaData to detect changes when metaData is saved in modal
                */
                if (_file._file.hasOwnProperty('description') && _file._file.hasOwnProperty('copyright')) {
                    this.metaData.push({
                        id: _file._file['id'],
                        description: _file._file['description'],
                        copyright: _file._file['copyright'],
                        name: _file._file['name']
                    });
                    this.metaIsEmpty = true;
                    if ((!(_file._file['copyright']) || _file._file['copyright'] === '')
                        && (!(_file._file['description']) || _file._file['description'] === '')) {
                        this.showHelp = true;
                    }
                }

            } else if (this.type === 'multiple') {
                const values = this.form.value;
                this.form.patchValue([]);
                values.forEach(_image => {
                    const _file = new FileItem(this.uploader, _image as any, this.uploader.options);
                    _file.isUploaded = true;
                    _file.isSuccess = true;
                    _file._file['isLoading'] = false;
                    this.uploader.queue.push(_file);
                    this.form.markAsDirty();
                    this.form.value.push(_image['id']);

                    /*
                    * Modal Specific check for metaData
                    * Set metaData to detect changes when metaData is saved in modal
                    */
                    if (_file._file.hasOwnProperty('description') && _file._file.hasOwnProperty('copyright')) {
                        this.metaData.push({
                            id: _file._file['id'],
                            description: _file._file['description'],
                            copyright: _file._file['copyright'],
                            name: _file._file['name']
                        });
                        this.metaIsEmpty = true;
                        if ((!(_file._file['copyright']) || _file._file['copyright'] === '')
                            && (!(_file._file['description']) || _file._file['description'] === '')) {
                            this.showHelp = true;
                        }
                    }
                });

            }

        }

        // to get a real progress
        this.uploader.onProgressItem = () => this._changeDetector.detectChanges();

        this.uploader.onSuccessItem = (_item, response) => {
            _item._file = JSON.parse(response);
            _item._file['isLoading'] = false;
            //this._alertService.alert$.next({type: 'success', message: 'bd_content.elements.image.flash.upload'});
            if (this.type === 'single') {
                this.form.setValue(_item._file['id']);
            } else if (this.type === 'multiple') {
                this.form.value.push(_item._file['id']);
            }


            /* Modal Specific check for metaData
            *
            * Set metaData to detect changes when metaData is saved in modal
            */
            if (_item._file.hasOwnProperty('description') && _item._file.hasOwnProperty('copyright')) {
                this.metaData.push({
                    id: _item._file['id'],
                    description: _item._file['description'],
                    copyright: _item._file['copyright'],
                    name: _item._file['name']
                });
                this.metaIsEmpty = true;
                if ((!(_item._file['copyright']) || _item._file['copyright'] === '')
                    && (!(_item._file['description']) || _item._file['description'] === '')) {
                    this.showHelp = true;
                }
            }

            this._changeDetector.markForCheck();

        };

        this.uploader.onAfterAddingFile = f => {
            if (this.uploader.queue.length > 1 && this.type === 'single') {
                this.uploader.removeFromQueue(this.uploader.queue[0]);
            }
        };

        this.uploader.onErrorItem = (_item, response) => {
            if (response) {
                // this._alertService.alert$.next({type: 'error', message: JSON.parse(response).error});
            }
            setTimeout(() => {
                this.uploader.removeFromQueue(_item);
            }, 2500);
        };
    }

    onRemove(_item: FileItem): void {
        _item._file['isLoading'] = false;

        this.uploader.removeFromQueue(_item);

        this.fileRemoved.emit(_item);

        if (this.type === 'single') {
            this.form.patchValue(null);
        } else if (this.type === 'multiple') {
            const index = this.form.value.findIndex(image => image.id === _item._file['id']);
            this.form.patchValue(this.form.value.slice(index, 1));

        }
    }

    /*
    * For Files without image preview
    */
    checkIfFileIsImage(_file) {
        const regExp = /^.*(image).*/;
        if (_file._file.contentType && _file._file.contentType.match(regExp)) {
            return true;
        }
    }

    getFileType(_file) {
        const regExp = /\/(.*)/;
        if (_file._file.contentType) {
            return _file._file.contentType.match(regExp)[1];
        }
    }

    /*
    *   Modal Specific Functions
    */
    buildModalForm(_file: FileItem) {
        this.modalForm = new FormGroup({
            'copyright': new FormControl(this.filterByProperty(this.metaData, 'id', _file._file['id'])['copyright'], []),
            'description': new FormControl(this.filterByProperty(this.metaData, 'id', _file._file['id'])['description'], []),
            'name': new FormControl(this.filterByProperty(this.metaData, 'id', _file._file['id'])['name'], [])
        });
    }

    openModal(template: TemplateRef<any>, _index: number, _item: FileItem) {
        this.modalImageItem = _item;
        this.modalIndex = _index;
        this.buildModalForm(_item);
        this.modalRef = this.modalService.show(template);
    }

    handleModalSubmit(_id: number): void {
        /*
        * Set MetaData to refresh metadata directly when metadata is safed and modal closed without refreshing the whole page
        */
        const index = this.metaData.findIndex(_data => _data['id'] === _id);
        this.metaData[index]['copyright'] = this.modalForm.get('copyright').value;
        this.metaData[index]['description'] = this.modalForm.get('description').value;
        this.metaData[index]['name'] = this.modalForm.get('name').value;

        if (this.modalForm.valid) {
            this.isSendingRequest = true;
            this.http.patch('/content/upload/' + _id, this.modalForm.getRawValue()).subscribe(
                success => {
                    this.isSendingRequest = false;
                    this.alert.alert$.next({ type: 'success', message: this.translate.instant('form.messages.success_metaData') });
                    this.modalRef.hide();
                },
                error => {
                    this.isSendingRequest = false;
                }
            );
        }
    }

    filterByProperty(array, key, value) {
        let i, j, item;
        for (i = 0, j = array.length; i < j; i++) {
            item = array[i];
            if (typeof item[key] !== 'undefined' && item[key] === value) {
                return item;
            }
        }
    }
}
