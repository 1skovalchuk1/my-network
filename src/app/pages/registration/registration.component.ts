import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  inputData = [
    {id: '',         type: '',         formControlName: 'userName',      placeholder: 'user-name'},
    {id: 'email',    type: 'email',    formControlName: 'email',         placeholder: 'email'},
    {id: 'password', type: 'password', formControlName: 'password',      placeholder: 'password'},
    {id: 'password', type: 'password', formControlName: 'passwordAgain', placeholder: 'password-again'},
  ]

  registrationForm = new FormGroup({

    userName: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordAgain: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
