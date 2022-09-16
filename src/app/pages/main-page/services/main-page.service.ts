import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessageData } from '../../interfaces/error-message-data';
import { PagesService } from '../../pages.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  // INPUTS VALUE
  email    = 'email'
  password = 'password'

  // VALIDATORS TYPE
  validatorEmail     = 'email'
  validatorRequired  = 'required'
  validatorMinLength = 'minlength'

  // CONTROLS NAME
  controlEmail    = 'email'
  controlPassword = 'password'

  // CONTROLS ARRAY
  controls = [this.controlEmail, this.controlPassword]

  inputDatas = [
    {id: this.email,    type: this.email,    formControlName: this.email,    placeholder: this.email},
    {id: this.password, type: this.password, formControlName: this.password, placeholder: this.password},
  ]

  controlErrorMessagesData:Array<ErrorMessageData> = [
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
        { type: this.validatorMinLength, message: 'password is too small' },
      ]
    },
  ]

  constructor(private pagesService: PagesService) {}

  isInvalidForm = (authForm:FormGroup) => this.pagesService.isInvalidForm(authForm)

  getErrorMessage = (authForm: FormGroup,): string => {
    return this.pagesService.getErrorMessage(authForm, this.controlErrorMessagesData)
  }

}
