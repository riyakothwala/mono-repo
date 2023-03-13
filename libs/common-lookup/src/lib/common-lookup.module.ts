import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLookupComponent } from './account-lookup/account-lookup.component';
import { ModalLookupComponent } from './modal-lookup/modal-lookup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(), FormsModule,HttpClientModule],
  declarations: [
    AccountLookupComponent,
    ModalLookupComponent,
  ],
  exports: [AccountLookupComponent, ModalLookupComponent],
})
export class CommonLookupModule {}
