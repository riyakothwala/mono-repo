import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {Search} from "../../../search";
import {HttpClient} from "@angular/common/http";
import {AccountGetService} from "../account-get.service";
import {utils} from "prettier/doc";
import {json} from "@angular-devkit/core";
import {Account} from "../../../Account";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

const AccountsData: Account[]= [{financialAccountNumber:'HZ2X38D2AV6',name:'SKYWALKERLUKE',last4SSN:'5131',"vin":"1J8GR48K87C656160"},{"financialAccountNumber":"HZ2X38D2AV5","name":"SKYWALKERLUKE","last4SSN":"5141","vin":"1J8GR48K87C656170"}]
@Component({
  selector: 'mono-repo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  pageSize = 3;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 3, 5,7];
  // pageEvent!: PageEvent;
  //
  // handlePageEvent(e: PageEvent) {
  //   this.pageEvent = e;
  //   this.pageSize = e.pageSize;
  //   this.pageIndex = e.pageIndex;
  // }
  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }

  accounts: Account[] = [];
  displayedColumns:string[]=['financialAccountNumber','name','last4SSN','vin'];
  removable = true;
  selectedValues: Search[] | undefined;
  search: string[] = ['AccountNumber','FirstName', 'LastName','Last4SSN','Vin','LicenseNo']
  criteria: string=""
  inputValue: string=""

  criteriaMap : Map<string, string[]> = new Map<string,string[]>();
  tableData!: MatTableDataSource<Account>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private accountGetService:AccountGetService,private ref: ChangeDetectorRef) {
    // this.addCriteria("Account", "111"); // TODO: REMOVE ME
    // this.addCriteria("Name", "sdfsdf"); // TODO: REMOVE ME

  }

  onSubmit(searchForm: NgForm) {
    var json= JSON.stringify(this.criteriaMap)

    const jsonObject: {[index: string]:any} = {}
    this.criteriaMap.forEach((value, key) => {
      jsonObject[key] = value
    });
    let jsonString = JSON.stringify(jsonObject);

    console.log("Json = " + jsonString)
    this.accountGetService.onSubmit(searchForm).subscribe((res:any)=>{
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

      this.tableData =  new MatTableDataSource(this.accounts);
      this.ref.detectChanges();
      this.tableData.paginator= this.paginator;



    })

  }
  // addCriteria(criteria:string,inputValue:string) {
  //   let list:string[]=[]
  //   if(criteria.length>0 && inputValue.length>0){
  //     if(this.criteriaMap.get(criteria)==undefined){
  //       list.push(inputValue)
  //       this.criteriaMap.set(criteria,list)
  //     }
  //     else {
  //       let values= (this.criteriaMap.get(criteria))
  //       // @ts-ignore
  //       values.push(inputValue)
  //       // @ts-ignore
  //       this.criteriaMap.set(criteria,values);
  //     }
  // }
  // //   this.criteriaMap.set(criteria,inputValue)
  //     this.inputValue=''
  //     // console.log(this.criteriaMap.entries())
  // }

  addCriteria(criteria:string,inputValue:string) {

    if(criteria == undefined || criteria.length <=0 || inputValue == undefined || inputValue.length <= 0){
      return;
    }

    let selectedValues = this.criteriaMap.get(criteria);
    if (selectedValues == undefined) {
      selectedValues = [];
    }

    // Add new criteria in the list
    selectedValues.push(inputValue);

    // Add entry back to map
    this.criteriaMap.set(criteria, selectedValues);
    this.inputValue=''
  }

  removeCriteria(criteria:string){
    this.criteriaMap.delete(criteria)
    console.log(this.criteriaMap.entries())
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
  select(){
    this.inputValue=''
  }
}

// let inputs = this.criteriaMap.get(criteria);
//
// if (inputs == null){
//   inputs = new []String[]
// } else {
//   inputs.push(input)
// }
