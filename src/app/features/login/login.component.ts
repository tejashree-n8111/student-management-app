import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../module/student.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLoginForm = true;
  hideLoginComp = true;

  users: any;
  showHeader = true;

  userForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      avatar: new FormControl("www.google.com")

    }
  )

  constructor(private router: Router, private loginService: LoginService, private studentService: StudentService) { }

  ngOnInit(): void {

  }

  showRagisterFn() {
    this.showLoginForm = !this.showLoginForm
  }

  loginFn() {

    let user = this.userForm.value;
    //delete user.name;
    delete user.avatar;


    this.loginService.loginUser(user).subscribe(
      (authUser: any) => {
        console.log(authUser)

        if (authUser.access_token) {

          localStorage.setItem('loggedInUser', authUser.access_token)//in httpInterceptor using by localstorage

          this.router.navigateByUrl('students');

          this.hideLoginComp = false;

          // Toaster success
        }
      },
      (error) => {
        console.log(error);
        // Toaster error
      }
    )
  }



  registerFn() {
    this.loginService.createUser(this.userForm.value).subscribe(
      (user: any) => {
        console.log(user);
        localStorage.setItem('username', user.name)

        this.showLoginForm = !this.showLoginForm;
      },
      (error) => { console.log(error) }
    )


  }




}






