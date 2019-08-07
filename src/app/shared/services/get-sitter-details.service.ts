import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSitterDetailsService {

  constructor() { }
  profileSitter
  sitterID;
  getDetails(profile, id) {
    console.log(profile);
    console.log(id);
    this.sitterID=id
    this.profileSitter = profile;
    console.log(this.profileSitter);
    // this.profileSitter.next(profile);
    // console.log(this.profileSitter);
    
    this.sitterID = id;
    localStorage.setItem('sitter',this.sitterID);
    // this.profileSitter.next(id);
    console.log(this.sitterID);

  }
}
