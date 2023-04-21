import { Component, TemplateRef, ViewChild } from '@angular/core';
import {BsModalRef,BsModalService} from "ngx-bootstrap/modal";
import { ModalLookupComponent } from '../modal-lookup/modal-lookup.component';
import { DataTransferService } from '../data-transfer.service';
import {Account} from "../../../Account";
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'mono-repo-account-lookup',
  templateUrl: './account-lookup.component.html',
  styleUrls: ['./account-lookup.component.css'],
})
export class AccountLookupComponent {
  modalRef!: BsModalRef;
  accounts: Account[] =[];
  dialogRef:any
  @ViewChild('myAlertDialog') alertDialog = {} as TemplateRef<string>;
  dialogRefAlert: any;


  constructor(public dialog:MatDialog,private modalService:BsModalService,public dataTransferService:DataTransferService) {
  }
  ngOnInit(): void {

    this.dataTransferService.accountfill.subscribe(account=>{
      if((this.accounts.find(value => value?.financialAccountNumber==account?.financialAccountNumber))==undefined){
        this.accounts.push(account);
      }
      else {
        this.dialogRefAlert = this.dialog.open(this.alertDialog,{
          width: '300px',
          height:'130px',
          role:'alertdialog',
          // position: {left:'300px', top: '100px'},
          // panelClass: 'custom-dialog-container'
        })
      }
    });
  }
  openModal(){
    // this.modalRef = this.modalService.show(ModalLookupComponent, {class: 'modal-lg'});
    this.dialogRef= this.dialog.open(ModalLookupComponent,{
        width: '600px',
        position: { top: '100px'}
      }
      )
  }
  closeDialog() {
    this.dialogRef.close();
  }
  closeAlertDialog() {
    this.dialogRefAlert.close();
  }

}


