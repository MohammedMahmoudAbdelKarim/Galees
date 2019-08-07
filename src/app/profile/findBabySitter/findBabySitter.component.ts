import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GetSitterDetailsService } from 'src/app/shared/services/get-sitter-details.service';

@Component({
  selector: 'app-findBabySitter',
  templateUrl: './findBabySitter.component.html',
  styleUrls: ['./findBabySitter.component.scss'],
  providers: [NgbRatingConfig]
})
export class FindBabySitterComponent implements OnInit {
  filtered: any;

  constructor(private http: HttpClient, private config: NgbRatingConfig, private route: Router, private getDetails: GetSitterDetailsService) {
    this.config.max = 5;
  }

  minAge = 22;
  maxAge = 45;
  // tslint:disable-next-line: variable-name
  options_age: Options = {
    floor: 22,
    ceil: 45,
    step: 1,
    noSwitching: true
  };
  minExp = 0;
  maxExp = 17;
  // tslint:disable-next-line: variable-name
  options_exp: Options = {
    floor: 0,
    ceil: 17,
    step: 1,
    noSwitching: true
  };


  babySitter: FormControl = new FormControl();
  nanny: FormControl = new FormControl();
  elderlySitter: FormControl = new FormControl();
  female: FormControl = new FormControl();
  male: FormControl = new FormControl();
  fac: FormControl = new FormControl();
  smoker: FormControl = new FormControl();
  hasChild: FormControl = new FormControl();
  hasCar: FormControl = new FormControl();
  hasRev: FormControl = new FormControl();
  revFrom = new FormControl('0');
  revTo = new FormControl('5');

  isBabySitter: string;
  isNany: string;
  isElderlySitter: string;
  isFemale: string;
  isMale: string;
  isFac = 0;
  isSmoker = 0;
  isHasChild = 0;
  isHasCar = 0;
  isHasRev = 0;


  profiles;
  display = [];
  rev(event) {
    console.log(event.target.value);
  }
  sitterFilter;
  pro;
  spec: FormGroup;
  gender: FormGroup;

  filters = {
    career: [],
    gender: [],
  }

  getDetail(profile, id) {
    console.log(profile);
    console.log(id);

    this.getDetails.getDetails(profile, id);
  }

  ngOnInit() {
    this.spec = new FormGroup({

      fac: new FormControl(''),
      smoker: new FormControl(''),
      hasCar: new FormControl(''),
      hasChild: new FormControl(''),
      hasRev: new FormControl(''),
    });

    this.gender = new FormGroup({
      female: new FormControl(''),
      male: new FormControl(''),
    });

    this.babySitter.valueChanges.subscribe(value => {
      if (value) {
        this.isBabySitter = "Baby Sitter";
      }
      else {
        this.isBabySitter = undefined;
      }
    });
    this.nanny.valueChanges.subscribe(value => {
      if (value) {
        this.isNany = 'Nany';
      }
      else {
        this.isNany = undefined;
      }
    });
    this.elderlySitter.valueChanges.subscribe(value => {
      if (value) {
        this.isElderlySitter = "Eldery Sitter";
      }
      else {
        this.isElderlySitter = undefined;
      }
    });
    this.female.valueChanges.subscribe(value => {
      if (value) {
        this.isFemale = 'Female';
      } else {
        this.isFemale = undefined;
      }
    });
    this.male.valueChanges.subscribe(value => {
      if (value) {
        this.isMale = 'Male';
      } else {
        this.isMale = undefined;
      }
    });
    this.fac.valueChanges.subscribe(value => {
      if (value) {
        this.isFac = 1;
      } else {
        this.isFac = 0;
      }
    });
    this.smoker.valueChanges.subscribe(value => {
      if (value) {
        this.isSmoker = 1;
      } else {
        this.isSmoker = 0;
      }
    });
    this.hasChild.valueChanges.subscribe(value => {
      if (value) {
        this.isHasChild = 1;
      } else {
        this.isHasChild = 0;
      }
    });
    this.hasCar.valueChanges.subscribe(value => {
      if (value) {
        this.isHasCar = 1;
      } else {
        this.isHasCar = 0;
      }
    });
    this.hasRev.valueChanges.subscribe(value => {
      if (value) {
        this.isHasRev = 1;
      } else {
        this.isHasRev = 0;
      }
    });

    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      // res => this.profiles = res
      res => {
        console.log(res);
        this.profiles = res;
      }
    );
  }
  searchActivited = false;

  searchIsActive(e) {
    console.log(e.data);
    if (e.data === null) this.searchActivited = false;
    else this.searchActivited = true;
  }
  flag = false;
  totalProfiles = this.profiles;
  fliter() {
    console.log(this.flag);
    this.flag = true;
    console.log(this.flag);

    const arr = this.profiles
      .filter(profile => {
        if (profile.age >= this.minAge && profile.age <= this.maxAge) return profile;
      })
      .filter(profile => {
        if (profile.experience >= this.minExp && profile.experience <= this.maxExp) return profile;
      })
      .filter(profile => {
        if (profile.gender === this.isFemale) {
          return profile;
        }
        else if (profile.gender === this.isMale) {
          return profile;
        }
        else if (this.isMale === undefined && this.isFemale === undefined) {
          return profile;
        }
      })
      .filter(profile => {
        if (profile.career === this.isBabySitter) {
          return profile;
        }
        else if (profile.career === this.isElderlySitter) {
          return profile;
        }
        else if (profile.career === this.isNany) {
          return profile;
        }
        else if (this.isBabySitter === undefined && this.isElderlySitter === undefined && this.isNany === undefined) {
          return profile;
        }
      })
      .filter(profile => {
        if (profile.reviewRate >= this.revFrom.value && profile.reviewRate <= this.revTo.value) return profile;
      })
    this.profiles = arr;
    console.log(arr);
  }
}
