import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private updateCount = new BehaviorSubject(0);
  updateCountObs = this.updateCount.asObservable();
  constructor() { }
  updateCartCount(count) {
    this.updateCount.next(++count);
  }
}
