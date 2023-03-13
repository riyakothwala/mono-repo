import { Component, Input } from '@angular/core';
import { Account } from 'libs/common-lookup/Account';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataTransferService } from '../data-transfer.service';
import {AccountGetService} from "../account-get.service";

@Component({
  selector: 'mono-repo-modal-lookup',
  templateUrl: './modal-lookup.component.html',
  styleUrls: ['./modal-lookup.component.css'],
})
export class ModalLookupComponent {

  accounts: Account[] = [];

  constructor(public modalRef: BsModalRef, private accountGetService: AccountGetService,public dataTransferService:DataTransferService) {
  }
  getAccounts(){
    this.accountGetService.getAccounts().subscribe((response: any) => {
      this.accounts= this.process(response);
      // console.log("Accounts: " + accounts.length)
    })
    // console.log("Accounts before: " + accounts.length)
    //return accounts;
  }
  dataTransfer(accountId:number){
    console.log("data"+accountId);
    this.dataTransferService.DataTransfer(accountId);
    this.modalRef.hide();
  }

  private process(response: any) {
    let list: Account[] = []
    response.forEach((ele: any) => list.push(ele));
    return list;
  }
}
