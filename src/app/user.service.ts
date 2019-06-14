import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { send } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {
ApiEndPoint = 'localhost:3000';
  constructor(private http:HttpClient) { }
  studentReg(data){ 
    const body = JSON.stringify({first_name:data.fname, last_name:data.lname, 
      regno:data.regno, password:data.passwd,  email:data.email, project_id:data.project_id, year_of_study:data.yos});
console.log("before send...");
     
      return this.http.post( this.ApiEndPoint + '/student/addstudent', body, 
      {headers:new HttpHeaders({'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'})});
  }


}
