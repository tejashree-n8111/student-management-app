import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/features/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getUserDetails().subscribe(
      (data) => {
        console.log(data);
        this.userDetails = data;
      }
    )
  }

  userName = localStorage.getItem('username');

  logoutFn() {
    //localStorage.clear()
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('username');
    this.router.navigateByUrl('login');
  }
}
