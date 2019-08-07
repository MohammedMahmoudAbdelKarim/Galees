import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { MatStepper } from '@angular/material';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sitter-signup',
  templateUrl: './sitter-signup.component.html',
  styleUrls: ['./sitter-signup.component.scss']
})
export class SitterSignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  // Array to Select Gender
  genders: string[] = ['Female', 'Male'];
  // Array to Select Career
  careers: string[] = ['Baby Sitter', 'Eldery Sitter'];

  selectedCareer: string;
  selectedGender: string;

  // tslint:disable-next-line: member-ordering
  signup: FormGroup;

  arr = [];
  urls = {};

  changeGender(gender) {
    this.selectedGender = gender;
  }
  changeCareer(career) {
    this.selectedCareer = career;
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  ngOnInit() {
    const pass = new FormControl(null, [Validators.required, Validators.minLength(6),
    Validators.maxLength(12), Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])*.{0,}$/)]);

    this.signup = this.formBuilder.group({
      lname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      fname: ['', [Validators.required, Validators.pattern(/[a-zA-Z]+[0-9]*/)]],
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: pass,
      password_confirmation: [null, [Validators.required, CustomValidators.equalTo(pass)]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      location: [''],
      birthdate: [''],
      gender: [''],
      career: [''],
      imgID: [''],
      imgPolice: [''],
      imgPersonal: [''],
    });
  }
  onSelectFile(selected) {
    this.arr.push(selected);
    for (let i = 0; i < this.arr.length; i++) {
      const [file] = this.arr[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.urls['img' + (i + 1)] = reader.result;
      };
    }
  }

  onSubmit(form) {
    form.value.imgID = form.value.imgID ? this.urls['img1'] : null;
    form.value.imgPolice = form.value.imgPolice ? this.urls['img2'] : null;
    form.value.imgPersonal = form.value.imgPersonal ? this.urls['img3'] : null;

    this.authService.signUpUser(form.value).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
}
