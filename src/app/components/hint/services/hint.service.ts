import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import * as HintActions from 'src/app/store/actions/hint.actions'
import { Store } from '@ngrx/store';
import { USERS } from 'src/app/mock-data/users-base';
import { IAppState } from 'src/app/store/states/app.state';

export type HintControl = [string, Array<[string, string]>]
export type HintForm = [string, string]

@Injectable({
  providedIn: 'root'
})
export class HintService {

  email = 'email'

  // CONTROLS NAME
  controlUserName        = 'userName'
  controlEmail           = 'email'
  controlPassword        = 'password'
  controlConfirmPassword = 'confirmPassword'

  // VALIDATORS TYPE
  validatorUserName             = 'pattern'
  validatorEmail                = 'email'
  validatorRequired             = 'required'
  validatorMinLength            = 'minlength'
  validatorMaxLength            = 'maxlength'
  validatorAccountNotRegistered = 'accountNotRegistered'
  validatorPasswordsMatching    = 'passwordsMatching'
  validatorEmailCreated         = 'emailCreated'

  controlErrorMessagesData: Array<HintControl> = [
    [
      this.controlUserName, [
          [ this.validatorRequired,  'name is empty' ],
          [ this.validatorUserName,  'only latin chars' ],
          [ this.validatorMinLength, 'name is too short' ],
          [ this.validatorMaxLength, 'name is too long' ],
      ]
    ],
    [
      this.controlEmail, [
          [ this.validatorRequired, 'email is empty' ],
          [ this.validatorEmail,    'email is invalid' ],
      ]
    ],
    [
      this.controlPassword, [
          [ this.validatorRequired,  'password is empty' ],
          [ this.validatorMinLength, 'password is too short' ],
      ]
    ],
    [
      this.controlConfirmPassword, [
          [ this.validatorRequired,  'confirm password is empty' ],
          [ this.validatorMinLength, 'confirm password is too short' ],
      ]
    ]
  ]

  formErrorMessagesData:Array<HintForm> = [
    [this.validatorAccountNotRegistered, 'account is not registered' ],
    [this.validatorPasswordsMatching,    'passwords do not match' ],
    [this.validatorEmailCreated,         'email already in use' ],
  ]

  constructor(private store: Store<IAppState>) { }

  ///////////////////// VALIDATORS /////////////////////////

  isAccountNotRegistered(control: AbstractControl):ValidationErrors | null {
    const email = control.get('email')?.value
    if (email && !(email in USERS)) {
      return {accountNotRegistered: true}
    }
    return null
  }

  isPasswordsMatching(control: AbstractControl):ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password != confirmPassword) {
      return {passwordsMatching: true};
    }
    return null;
  }

  isEmailCreated(control: AbstractControl):ValidationErrors | null {
    const email = control.get('email')?.value
    if (email && email in USERS) {
      return {emailCreated: true}
    }
    return null
  }
  
  ///////////////////////////////////////////////////////////

  isInvalidForm(form: FormGroup): boolean {
    if (form.invalid && (form.touched || form.dirty)) {
      return true
    }
    return false
  }

  getFormHintMessage(form: FormGroup):string {
    const [control, validators] = this.controlErrorMessagesData.find(
      ([control, ]) => form.controls[control]?.errors) || ['',[['','']]]

    if (control) {
      const [, message] = validators?.find(
        ([validator, ]) => form.controls[control].errors?.[validator]) || ['','']
      return message
    }
    
    if (this.formErrorMessagesData) {
      const [, message] = this.formErrorMessagesData.find(([validator, ]) => form.errors?.[validator]) || ['','']
      return message
    }
    return ''
  }

  setHintMessage(form: FormGroup) {
    const message = this.getFormHintMessage(form)
    this.store.dispatch(HintActions.setHint({message}))
  }
}
