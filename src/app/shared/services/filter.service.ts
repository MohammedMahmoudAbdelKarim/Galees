import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterdata = [];
  filterList = new BehaviorSubject([]);
  filterListObs = this.filterList.asObservable();
  constructor() { }

  updateArr(value) {
    this.filterdata.push(value);
    this.filterList.next(this.filterdata);
  }
}
