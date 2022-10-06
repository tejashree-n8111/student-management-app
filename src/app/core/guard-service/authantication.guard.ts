import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (localStorage.getItem('loggedInUser')) {
      return true
    } else {
      this.router.navigateByUrl('login')
      return false;
    }

  }
}

