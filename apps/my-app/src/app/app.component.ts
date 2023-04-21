import { Component } from '@angular/core';
import {Account} from "../../../../libs/common-lookup/Account";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Component({
  selector: 'mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  body:any
  res:any=[]



  constructor(private httpClient:HttpClient) {


  }


  onSubmit(accountForm:NgForm){
    let body= accountForm.value
    var response= this.httpClient.post("http://localhost:8081/api/accounts", body)
    response.subscribe(res=>{
      this.res=res;
    })

    console.log(this.res)
    // console.log(this.out)
    // console.log(accountForm.value)
    //this.body= JSON.stringify(accountForm)
  }
}
