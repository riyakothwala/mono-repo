import { Component, Input } from '@angular/core';
import { Employee } from 'libs/common-lookup/Employee';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataTransferService } from '../data-transfer-service.service';
import { EmployeeService } from '../employee-service.service';

@Component({
  selector: 'mono-repo-modal-lookup',
  templateUrl: './modal-lookup.component.html',
  styleUrls: ['./modal-lookup.component.css'],
})
export class ModalLookupComponent {
  
  employees: Employee[] = [];

  constructor(public modalRef: BsModalRef, private employeeService: EmployeeService,public dataTransferService:DataTransferService) {
  }
  getEmployee(){
    this.employees=this.employeeService.getEmployee();
  }
  dataTransfer(employee:Employee){
    this.dataTransferService.DataTransfer(employee);
    this.modalRef.hide();
  }
}
