import { Injectable } from '@angular/core';
import {Account} from 'libs/common-lookup/Account';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public account!:number
  private showAccountId= new BehaviorSubject<number>(this.account);
  accountIdFill=this.showAccountId.asObservable();

  constructor() { }

  DataTransfer(accountId:number){
    this.showAccountId.next(accountId);
  }
}
