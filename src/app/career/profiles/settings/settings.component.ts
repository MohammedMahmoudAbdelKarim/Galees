import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  passwordForm: FormGroup;
  emailForm: FormGroup;
  ngOnInit() {
    // Make Instant from Reactive Form
    // tslint:disable-next-line: max-line-length
    /*------------------ Password Form ------------------*/
    // tslint:disable-next-line: max-line-length
    const newPass = new FormControl('', [Validators.required, Validators.pattern(/^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]);
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: newPass,
      confirmPassword: ['', [Validators.required, CustomValidators.equalTo(newPass)]]
    });
    /*------------------ Email Form ------------------*/
    const newMail = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z_\.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/gi)]);
    this.emailForm = this.fb.group({
      newEmail: newMail,
      confirmEmail: ['', [Validators.required, CustomValidators.equalTo(newMail)]]
    });
  }
  /* -------------------------- Password Alert --------------------------*/
  updatePassword(myForm) {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your password has been changed successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }
  /* -------------------------- Email Alert --------------------------*/
  updateEmail(emailForm) {
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your email has been changed successfully',
      showConfirmButton: false,
      timer: 1500
    });
  }
  /* -------------------------- Delete Alert --------------------------*/
  deleteAccount(e) {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to delete your account ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#591AB4',
      cancelButtonColor: '#ECECEC',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted !',
          'Your Account has been deleted.',
          'success'
        );
      }
    });

  }
}
