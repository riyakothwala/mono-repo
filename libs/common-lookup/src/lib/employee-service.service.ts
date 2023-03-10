import { Injectable } from '@angular/core';
import { Employee } from '../../Employee';
import employeeList from '../../employees.json'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList:Employee[]=employeeList;

  constructor() { }

  getEmployee(){
    return this.employeeList;
  }
}
