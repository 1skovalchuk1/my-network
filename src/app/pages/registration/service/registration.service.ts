import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ErrorMessageData } from '../../interfaces/error-message-data';
import { PagesService } from '../../pages.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // FORM NAME
  formName = 'registrationForm'

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

  inputData = [
    {id: '',         type: '',         formControlName: this.controlUserName,        placeholder: 'user-name'},
    {id: 'email',    type: 'email',    formControlName: this.controlEmail,           placeholder: 'email'},
    {id: 'password', type: 'password', formControlName: this.controlPassword,        placeholder: 'password'},
    {id: '',         type: 'password', formControlName: this.controlConfirmPassword, placeholder: 'confirm-password'},
  ]

  controlErrorMessagesData: Array<ErrorMessageData> = [
    {
      formControlName: this.controlUserName,
      validators: [
        { type: this.validatorRequired,  message: 'name is empty' },
        { type: this.validatorUserName,  message: 'only latin chars' },
        { type: this.validatorMinLength, message: 'name is too short' },
        { type: this.validatorMaxLength, message: 'name is too long' },
      ]
    },
    {
      formControlName: this.controlEmail,
      validators: [
        { type: this.validatorRequired, message: 'email is empty' },
        { type: this.validatorEmail,    message: 'email is invalid' },
      ]
    },
    {
      formControlName: this.controlPassword,
      validators: [
        { type: this.validatorRequired,  message: 'password is empty' },
        { type: this.validatorMinLength, message: 'password is too short' },
      ]
    },
    {
      formControlName: this.controlConfirmPassword,
      validators: [
        { type: this.validatorRequired, message:  'confirm password is empty' },
        { type: this.validatorMinLength, message: 'confirm password is too short' },
      ]
    },
  ]

  formErrorMessagesData:Array<ErrorMessageData> = [
    {
      formControlName: this.formName,
      validators: [
        { type: this.validatorPasswordsMatching, message:  'passwords do not match' },
      ]
    },
  ]

  constructor(private pagesService: PagesService) {}

  isPasswordsMatching(control: AbstractControl):ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password != confirmPassword) {
      return {passwordsMatching: true};
    }
    return null;
  }

  isInvalidForm = (authForm:FormGroup) => this.pagesService.isInvalidForm(authForm)

  getErrorMessage = (authForm: FormGroup,): string => {
    return this.pagesService.getErrorMessage(authForm, this.controlErrorMessagesData, this.formErrorMessagesData)
  }

}
