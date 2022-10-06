import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(
      (navigationEvents) => {
        console.log(navigationEvents)
        if (navigationEvents instanceof NavigationEnd) {
          console.log(navigationEvents)
          if (navigationEvents.url !== '/login') {
            this.showHeader = true;
          }
        }
      }
    )
  }
}
