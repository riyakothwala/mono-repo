import { Injectable } from '@angular/core';
import { Employee } from 'libs/common-lookup/Employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  public employee!:Employee
  private ShowEmployee= new BehaviorSubject<Employee>(this.employee);
  TransferEmployee=this.ShowEmployee.asObservable();

  constructor() { }

  DataTransfer(employee:Employee){
    this.ShowEmployee.next(employee);
  }
}
