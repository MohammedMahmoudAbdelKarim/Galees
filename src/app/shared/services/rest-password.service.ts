import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestPasswordService {

  constructor() { }
  email = new BehaviorSubject([]);
  emailObs = this.email.asObservable();
  sendemail(email) {
    this.email.next(email);
  }
}
