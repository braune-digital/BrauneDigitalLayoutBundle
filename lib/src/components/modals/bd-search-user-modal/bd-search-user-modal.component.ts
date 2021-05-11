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
import { AlertService } from "../../../services/alert.service";
import { UserInterface } from "../../../models/UserInterface";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: "bd-search-user-modal",
  templateUrl: "./bd-search-user-modal.component.html",
})
export class BdSearchUserModalComponent implements OnInit {
  @Input()
  color = "primary";

  @Input()
  title = "";

  @Input()
  type = "text";

  @Input()
  route = "";

  @Input("headers")
  headers: {};

  @Input()
  properties = ["firstName", "lastName", "email"];

  @Output("selectedUser")
  onSelectedUser: EventEmitter<UserInterface> = new EventEmitter<UserInterface>();

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

  handleSelect(_user: UserInterface): void {
    this.onSelectedUser.emit(_user);
    this.modalRef.hide();
  }
}
