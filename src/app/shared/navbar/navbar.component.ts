import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navBar;
  constructor(private router: Router, private auth: AuthService, private user: UsersService) { }
  Currentuser;


  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  ngOnInit() {

    this.auth.isLoggedIn;
    this.Currentuser = JSON.parse(localStorage.getItem('user'));
    console.log(this.Currentuser.role);

    this.router.events.subscribe(val => {

      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home" || val.url === "/findBabySitter") {
          this.navBar = true;
          console.log(true);

        }
        else {
          this.navBar = false;
        }
      }
    })
  }
}
