import { Injectable } from '@angular/core';
import {Account} from 'libs/common-lookup/Account';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public account!:Account
  // private showAccountId= new BehaviorSubject<number>(this.account);
  //
  // accountIdFill=this.showAccountId.asObservable();

  private showAccount= new BehaviorSubject<Account>(this.account)
  accountfill=this.showAccount.asObservable();

  constructor() { }

  // DataTransfer(accountId:number, last4SSN:bigint , vin:bigint){
  //   this.showAccountId.next(accountId);
  // }
  DataTransfer(account:Account){
    console.log("before show"+JSON.stringify(account))
    this.showAccount.next(account)
    console.log("Showaccount"+this.showAccount)
  }
}
