import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }

  registrationForm = new FormGroup({

    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),

  }, {validators: this.registrationService.isPasswordsMatching})

  ngOnInit(): void {
  }

  test() {
    console.log(this.registrationForm)
  }

}
