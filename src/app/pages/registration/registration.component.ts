import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import { IAppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/actions/user.actions'
import { USERS } from 'src/app/mock-data/mock-users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public registrationService: RegistrationService, 
              private store: Store<IAppState>,
              private router: Router,) { }

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
    this.store.dispatch(UserActions.logoutUser())
  }

  registrate() {
    const {email,password,userName} = this.registrationForm.value
    if (email && password && userName) {
      const newUser = {
        id: `${Object.keys(USERS).length + 1}`,
        isLogined: false,
        password,
        userName,
        email,
      }
      USERS[email] = newUser
    }
    this.registrationForm.reset()
    this.router.navigate(['/'])
  }

  cancel() {
    this.registrationForm.reset()
    this.router.navigate(['/'])
  }

}
