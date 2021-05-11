/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/5/19 4:42 PM Braune Digital GmbH
 */

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertService } from "../../../services/alert.service";

@Component({
  selector: "bd-search-page-modal",
  templateUrl: "./bd-search-page-modal.component.html",
})
export class BdSearchPageModalComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  color = "grey-light";

  @Input("headers")
  headers: {};

  @Input()
  route = "";

  @Output("selectedPage")
  onSelectedPage: EventEmitter<any> = new EventEmitter<any>();

  modalIndex = 0;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private alert: AlertService
  ) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>, _index: number) {
    this.modalIndex = _index;
    this.modalRef = this.modalService.show(template);
  }

  handleSelect(_page: any): void {
    this.onSelectedPage.emit(_page);
    this.modalRef.hide();
  }
}
