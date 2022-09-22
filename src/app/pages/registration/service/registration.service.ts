import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PagesService } from '../../pages.service';

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

  constructor(private pagesService: PagesService) {}

  isInvalidForm(registrationForm:FormGroup) {
    return this.pagesService.isInvalidForm(registrationForm)
  }

}
