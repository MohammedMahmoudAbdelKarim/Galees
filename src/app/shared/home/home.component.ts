import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profiles;
  constructor(private http: HttpClient) { }
  carouselOptions;
  fixedSitter;

  searchActivited = false;

  searchIsActive(e) {
    console.log(e.data);
    if (e.data === null) this.searchActivited = false;
    else this.searchActivited = true;
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      res => {
        console.log(res);
        this.profiles = res;
        this.fixedSitter = this.profiles.slice(0, 4);
      }
    );
    this.carouselOptions = {
      margin: 25,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1.5,
          nav: true,
          loop: true,
        },
        1500: {
          items: 1.5,
          nav: true,
        }
      }
    }
  }


}
