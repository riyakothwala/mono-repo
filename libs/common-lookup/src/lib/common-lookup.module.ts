import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLookupComponent } from './employee-lookup/employee-lookup.component';
import { ModalLookupComponent } from './modal-lookup/modal-lookup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, ModalModule.forRoot(),FormsModule],
  declarations: [EmployeeLookupComponent, ModalLookupComponent],
  exports: [EmployeeLookupComponent, ModalLookupComponent],
})
export class CommonLookupModule {}
