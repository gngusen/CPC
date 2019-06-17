import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(userLog){
    this.userService.studentLog(userLog).subscribe(
      (res) => {
        console.log(res);
        alert("Welcome ");
      }
    )
  }
}
