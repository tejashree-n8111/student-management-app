import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authToken = localStorage.getItem('loggedInUser') || '';

    const modifiedReq = request.clone({
      setHeaders: { 'loggedInUser': authToken, 'Authorization': 'Bearer ' + authToken }
    });

    return next.handle(modifiedReq)
  }
}
