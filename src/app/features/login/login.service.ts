import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: any) {
    return this.httpClient.post('https://api.escuelajs.co/api/v1/users/', user)
  }

  loginUser(authUser: any) {
    return this.httpClient.post('https://api.escuelajs.co/api/v1/auth/login', authUser)
  }

  getUserDetails() {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/auth/profile');
  }
}
