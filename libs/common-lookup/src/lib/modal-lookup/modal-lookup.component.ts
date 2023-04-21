import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import { Account } from 'libs/common-lookup/Account';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataTransferService } from '../data-transfer.service';
import {AccountGetService} from "../account-get.service";
import {respondToClient} from "nx/src/daemon/server/shutdown-utils";
import {json} from "@angular-devkit/core";
import {NgForm} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'mono-repo-modal-lookup',
  templateUrl: './modal-lookup.component.html',
  styleUrls: ['./modal-lookup.component.css'],
})
export class ModalLookupComponent {

  accounts: Account[] = [];
  dialogRef: any;

  constructor(public dialog:MatDialog, public modalRef: BsModalRef, private accountGetService: AccountGetService,public dataTransferService:DataTransferService) {
  }
  // getAccounts(){
  //   this.accountGetService.getAccounts().subscribe((response: any) => {
  //     this.accounts= this.process(response);
  //     // console.log("Accounts: " + accounts.length)
  //   })
  //   // console.log("Accounts before: " + accounts.length)
  //   //return accounts;
  // }

  // getAccounts(){
  //   this.accountGetService.getAccounts().subscribe((response:any)=>{
  //     console.log("response"+response)
  //     this.accounts= response;
  //   },
  //   error => {
  //     console.log("something wrong")
  //   })
  //
  // }


  // dataTransfer(accountId:number, last4SSN:bigint , vin:bigint){
  //   console.log("data"+accountId);
  //   this.dataTransferService.DataTransfer(accountId,last4SSN,vin);
  //   this.modalRef.hide();
  // }

  dataTransfer(account:Account){
    this.dataTransferService.DataTransfer(account);
    this.modalRef.hide();
  }

  // Opening Dialog created by ng-template
  @ViewChild('AlertDialog') alertDialog = {} as TemplateRef<string>;

  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.alertDialog,{
      width: '500px',
      role:'alertdialog',
      position: {left:'100px', top: '100px'}
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
  private process(response: any) {
    let list: Account[] = []
    response.forEach((ele: any) => list.push(ele));
    return list;
  }
  onSubmit(accountForm:NgForm){
    this.accountGetService.onSubmit(accountForm).subscribe((res:any)=>{
      // console.log("res: " + JSON.stringify(res));


      res.map((element:any) => {
            const account: Account = {
              financialAccountNumber: element.financialAccountNumber,
              name: element.customer.lastName +  element.customer.firstName,
              last4SSN: element.customer.listOfCoborrowers[0].last4SSN,
              vin: element.servicingAccount.payoffQuote.vin
            };
            this.accounts.push(account);
      })
      console.log("Accounts: " + JSON.stringify(this.accounts));
      // console.log(this.accounts)
    })

    // this.accountGetService.onSubmit(accountForm).subscribe((res:any)=>{
    //   res.map((mapping:any)=>{
    //
    //     parsed = JSON.parse(mapping);
    //     console.log("Map: " + mapping.last4SSN);
    //
    //     const account: Account = {
    //       financialAccountNumber: mapping.financialAccountNumber,
    //       last4SSN: mapping.last4SSN
    //     };
    //
    //     this.accounts.push(account);
    //   })
    //
    //   console.log("Accounts: " + JSON.stringify(this.accounts));
    // })
  }
}
