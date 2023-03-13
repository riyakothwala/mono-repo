import { Component } from '@angular/core';
import {BsModalRef,BsModalService} from "ngx-bootstrap/modal";
import { ModalLookupComponent } from '../modal-lookup/modal-lookup.component';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'mono-repo-account-lookup',
  templateUrl: './account-lookup.component.html',
  styleUrls: ['./account-lookup.component.css'],
})
export class AccountLookupComponent {
  modalRef!: BsModalRef;
  accountNo!: number;

  constructor(private modalService:BsModalService,public dataTransferService:DataTransferService) {
  }
  ngOnInit(): void {
    this.dataTransferService.accountIdFill.subscribe(accountNo=>{
      this.accountNo=accountNo;
    });
  }
  openModal(){
    this.modalRef = this.modalService.show(ModalLookupComponent);
  }
}
