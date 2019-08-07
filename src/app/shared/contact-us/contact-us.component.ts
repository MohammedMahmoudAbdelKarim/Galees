import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) { }
  hide = true;

  // tslint:disable-next-line: member-ordering
  signup: FormGroup;


  ngOnInit() {

    this.signup = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      lname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      addition: [''],

    });
  }

  onSubmit(form) {
    console.log(form.value);
  }
}