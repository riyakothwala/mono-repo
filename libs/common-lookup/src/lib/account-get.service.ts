import {Injectable} from '@angular/core';
import {Account} from "../../Account";
// import accountList from "../../accounts.json"
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AccountGetService {

  body:any
  constructor(private http: HttpClient) {
  }

  getAccounts() {
    return this.http.get("http://localhost:8080/api/accounts")
    // // console.log("respone" + obs);
    // let accounts : Account[]=[];
    // obs.subscribe((response: any) => {
    //   accounts= this.process(response);
    //   console.log("Accounts: " + accounts.length)
    // })
    // console.log("Accounts before: " + accounts.length)
    // return accounts;
  }
  onSubmit(accountForm:NgForm){

    this.filterEmptyFields(accountForm.value);
    // console.log("formData" + formData);


    // Object.keys(accountForm.controls).forEach(field => {
    //   accountForm.
    //
    // });
    this.body= accountForm.value
    console.log("body: "+JSON.stringify(accountForm.value))
    // return this.http.post("http://localhost:8081/api",this.body)
    return this.http.get("http://localhost:8081/api")

  }

  filterEmptyFields(formData: any) {
    // Filter any fields that aren't empty & store in a new object
    Object.keys(formData).forEach(key => {
      if (formData[key] === '' || formData[key] == null) {
        delete formData[key];
      }
    });
  }
}
