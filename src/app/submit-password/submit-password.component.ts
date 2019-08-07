import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestPasswordService } from '../shared/services/rest-password.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-submit-password',
  templateUrl: './submit-password.component.html',
  styleUrls: ['./submit-password.component.scss']
})
export class SubmitPasswordComponent implements OnInit {

  myForm: FormGroup;
  mail;

  constructor(private fb: FormBuilder, private user: UsersService, private Http: HttpClient, private router: Router, private restPassword: RestPasswordService) {
    this.restPassword.emailObs.subscribe(email => {
      this.mail = email;
    })
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      confirmpassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.password.value === frm.controls.confirmpassword.value ? null : { mismatch: true };
  }

  onSubmit(myForm) {
    console.log(myForm);
    // this.Http.post('localhost://8000/', myForm.controls.value);
this.router.navigateByUrl('/')

  }

}