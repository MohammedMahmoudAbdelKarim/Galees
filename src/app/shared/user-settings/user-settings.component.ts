import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  // Array to Select Gender
  genders: string[] = ["Female", "Male"];
  selectedGender: string;

  changeGender(gender) {
    this.selectedGender = gender;
  }

  // tslint:disable-next-line: member-ordering
  signup: FormGroup;
  // Array to push imgs
  addEducation() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("education").innerHTML += dummy;
  }
  addSpecialties() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("specialties").innerHTML += dummy;
  }
  addLanguages() {
    let dummy = '<input type="text" class="form-control my-2">';
    document.getElementById("languages").innerHTML += dummy;
  }
  urls = [];
  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    const pass = new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
      Validators.pattern(
        /^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
    ]);
    this.signup = this.formBuilder.group({
      fname: [""],
      lname: [""],
      email: [""],
      password: pass,
      password_confirmation: [
        null,
        [Validators.required, CustomValidators.equalTo(pass)]
      ],
      phone: ["", [Validators.required, CustomValidators.digits]],
      location: [""],
      birthdate: [""],
      gender: [""],
      bio: [
        ""
      ]
    });
  }

  onSubmit(form) { }

}

