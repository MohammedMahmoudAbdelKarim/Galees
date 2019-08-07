import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
id;
reviews;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('user')).id;
    console.log(this.id);
    
    this.http.get('http://localhost:8000/get-received-reviews/' + this.id).subscribe(review => {
      this.reviews = review;
      console.log(review);
      
    })
    
  }

}
