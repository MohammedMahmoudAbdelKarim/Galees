import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from 'ng2-validation';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss']
})
export class ClientSignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authService: AuthService) { }
  hide = true;
  // Array to Select Gender
  genders: string[] = ['Female', 'Male'];
  selectedGender: string;
  // tslint:disable-next-line: member-ordering
  signup: FormGroup;
  // Array to push imgs
  urls = [];
  changeGender(gender) {
    this.selectedGender = gender;
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const pass = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])*.{0,}$/)]);
    this.signup = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]*')]],
      lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+[0-9]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: pass,
      password_confirmation: [null, [Validators.required, CustomValidators.equalTo(pass)]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      location: [''],
      birthdate: [''],
      gender: [''],
      imgID: [''],
    });
  }
  onSelectFile(selected) {
      const [file] = selected;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.urls[0] = reader.result;
      };
  }
  onSubmit(form) {
    if(form.valid) this.router.navigateByUrl('/home');
    form.value.imgID = form.value.imgID ? this.urls[0] : null;
    this.authService
      .signUpClientUser(form.value)
      .subscribe(res => console.log(res), error => console.log(error));
    console.log(form.value);
  }
}
