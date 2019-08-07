import { RestPasswordService } from './../shared/services/rest-password.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  login: FormGroup;
  constructor(private Http: HttpClient, 
    private _formBuilder: FormBuilder, 
    private router: Router, 
    private user: UsersService, 
    private resetPassowrd: RestPasswordService) { }

  ngOnInit() {
    this.login = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
    })
  }
  loginData(form) {
    this.resetPassowrd.sendemail(form.controls.email.value);
    this.router.navigateByUrl('/submitPassword');
  }
}
