import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  res;
  currentUser;
  constructor(private user: HttpClient) { }

  getUser(email) {
    return this.user.get('http://localhost:8000/current-user/' + email)
  }
  getCurrentUser() {
    return this.currentUser;
  }
  getProfileData(id: number) {
    return this.user.get('http://localhost:8000/get-profile-data/' + id)
  }
}

// return this.notificationHttp.get('http://localhost:8000/get-orders-num/'+id)
// .subscribe(res => this.res = res);
