import {Injectable} from '@angular/core';
import {Account} from "../../Account";
// import accountList from "../../accounts.json"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountGetService {

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
}
