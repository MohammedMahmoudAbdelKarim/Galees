import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  loggedIn;
  isAuthinticated() {
    this.loggedIn = localStorage.getItem("login");
    console.log(this.loggedIn)
    const promise = new Promise<string>(
      (resolve, reject) => {
        resolve(this.loggedIn)
      }
    )
    return promise;
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('login'));
    return user !== null;
  }

getCurrentClient(obj) {

}


  signUpUser(user) {
    return this.http.post('http://localhost:8000/api/auth/register', user)
  }

  signUpClientUser(user) {
    return this.http.post('http://localhost:8000/api/auth/client-register', user)
  }

  signInUser(user) {
    return this.http.post('http://localhost:8000/api/auth/login', user)
  }
}
