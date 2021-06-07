import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Flight } from '../flight';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  /*flight: Flight = new Flight();
registerUserData= {}  */

user: User = new User();

constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe( data => {
      console.log(data);
      this.gotoUserDetails();
    },
    error => console.log(error));
  }

  gotoUserDetails(){
    this.router.navigate(['./users'])
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();

  }
  /*registerUser() {
    console.log(this.registerUserData)
  }*/


}
