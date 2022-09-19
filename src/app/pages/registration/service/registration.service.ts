import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { HintService } from 'src/app/services/hint/hint.service';
import { PagesService } from '../../pages.service';
import { USERS } from 'src/app/mock-data/mock-users';

type HintControl = [string, Array<[string, string]>]
type HintForm = [string, string]


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // CONTROLS NAME
  controlUserName        = 'userName'
  controlEmail           = 'email'
  controlPassword        = 'password'
  controlConfirmPassword = 'confirmPassword'

  // VALIDATORS TYPE
  validatorUserName          = 'pattern'
  validatorEmail             = 'email'
  validatorRequired          = 'required'
  validatorMinLength         = 'minlength'
  validatorMaxLength         = 'maxlength'
  validatorPasswordsMatching = 'passwordsMatching'
  validatorEmailCreated      = 'emailCreated'

  inputData = [
    {id: '',         type: '',         formControlName: this.controlUserName,        placeholder: 'user-name'},
    {id: 'email',    type: 'email',    formControlName: this.controlEmail,           placeholder: 'email'},
    {id: 'password', type: 'password', formControlName: this.controlPassword,        placeholder: 'password'},
    {id: '',         type: 'password', formControlName: this.controlConfirmPassword, placeholder: 'confirm-password'},
  ]

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
    [this.validatorPasswordsMatching, 'passwords do not match' ],
    [this.validatorEmailCreated,      'email already in use' ]
  ]

  constructor(private pagesService: PagesService, public hintServise: HintService) {}

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

  isInvalidForm(registrationForm:FormGroup) {
    return this.pagesService.isInvalidForm(registrationForm)
  }

  getFormHintMessage(registrationForm: FormGroup) {
    return this.hintServise.getFormHintMessage(registrationForm,this.controlErrorMessagesData,this.formErrorMessagesData)
  }

}
