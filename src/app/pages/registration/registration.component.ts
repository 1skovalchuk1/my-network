import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './service/registration.service';
import { IAppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import * as UserActions from '../../store/actions/user.actions'
import * as HintActions from '../../store/actions/hint.actions'
import { USERS } from 'src/app/mock-data/mock-users';
import { Router } from '@angular/router';
import { HintService } from 'src/app/components/hint/services/hint.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {

  constructor(public registrationService: RegistrationService,
              private hintService: HintService,
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

  }, {validators: [this.hintService.isPasswordsMatching,
                   this.hintService.isEmailCreated]})

  ngOnInit(): void {
    this.store.dispatch(HintActions.clearHint())
    this.store.dispatch(UserActions.logoutUser())
  }

  registrate() {
    const {email,password,userName} = this.registrationForm.value
    if (!this.hintService.isInvalidForm(this.registrationForm) && email && password && userName) {
      const newUser = {
        id: `${Object.keys(USERS).length + 1}`,
        isLogined: false,
        password,
        userName,
        email,
      }
      USERS[email] = newUser
    }
    this.router.navigate(['/'])
  }

  setHintMessage() {
    const message = this.hintService.getFormHintMessage(this.registrationForm)
    this.store.dispatch(HintActions.setHint({message}))
  }

}
