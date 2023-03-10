import { Component } from '@angular/core';
import {BsModalRef,BsModalService} from "ngx-bootstrap/modal";
import { ModalLookupComponent } from '../modal-lookup/modal-lookup.component';
import { Employee } from 'libs/common-lookup/Employee';
import { DataTransferService } from '../data-transfer-service.service';


@Component({
  selector: 'mono-repo-employee-lookup',
  templateUrl: './employee-lookup.component.html',
  styleUrls: ['./employee-lookup.component.css'],
})
export class EmployeeLookupComponent{
  modalRef!: BsModalRef;
  employeeId!: number;

  constructor(private modalService:BsModalService,public dataTransferService:DataTransferService) {
  }
  ngOnInit(): void {
    this.dataTransferService.TransferEmployee.subscribe(employee=>{
      this.employeeId=employee.employeeId;
    });
  }
  openModal(){
    this.modalRef = this.modalService.show(ModalLookupComponent);
  }
}
