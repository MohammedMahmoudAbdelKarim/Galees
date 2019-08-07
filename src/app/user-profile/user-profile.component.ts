import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  user;
  id = localStorage.getItem('user');
review;
  
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    this.http.get('http://localhost:8000/get-received-reviews/' + this.id).subscribe(order => {
      console.log(order);
      this.review = order;
        console.log(this.review);
        
  
    })

  }

}
