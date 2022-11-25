import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';
import { AUTHENTICATION, USERS } from 'src/app/mock-data';

export type HintControl = [string, Array<[string, string]>]
export type HintForm = [string, string]

@Injectable({
  providedIn: 'root'
})
export class HintService {

  hintMessage: Subject<string> = new Subject<string>()

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
  validatorIsUserOnline         = 'userOnline'

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
    [this.validatorIsUserOnline,         'user already login' ],
  ]

  constructor() { }

  ///////////////////// VALIDATORS /////////////////////////

  isAccountNotRegistered(control: AbstractControl):ValidationErrors | null {
    const email = control.get('email')?.value
    if (email && !(email in AUTHENTICATION)) {
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
    if (email && email in AUTHENTICATION) {
      return {emailCreated: true}
    }
    return null
  }

  isUserOnline(control: AbstractControl):ValidationErrors | null {
    const email = control.get('email')?.value
    const id = AUTHENTICATION[email]?.id
    if (USERS[id] && USERS[id].isOnline) {
      return {userOnline: true}
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
      const [, message] = this.formErrorMessagesData.find(([validator, ]) => {
        return form.errors?.[validator]}) || ['','']
      return message
    }
    return ''
  }

  setFormHintMessage(form: FormGroup) {
    this.hintMessage.next(this.getFormHintMessage(form))
  }

  clearHint() {
    this.hintMessage.next('')
  }
}
