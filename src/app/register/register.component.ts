import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private userService: UserService ) { }

  ngOnInit() {
  }

  onRegister(userReg){
    this.userService.studentReg(userReg).subscribe(
      () => {
        console.log('arived');
        alert("Registered!!!!")
      }
    )


  }

}
