import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { USERS } from 'src/app/mock-data/mock-users';
import { HintService } from 'src/app/services/hint/hint.service';
import { PagesService } from '../../pages.service';

type HintControl = [string, Array<[string, string]>]
type HintForm = [string, string]

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  // INPUTS VALUE
  email    = 'email'
  password = 'password'

  // VALIDATORS TYPE
  validatorEmail                 = 'email'
  validatorRequired              = 'required'
  validatorMinLength             = 'minlength'
  validatorAccountNotRegistered  = 'accountNotRegistered'

  // CONTROLS NAME
  controlEmail    = 'email'
  controlPassword = 'password'

  inputDatas = [
    {id: this.email,    type: this.email,    formControlName: this.email,    placeholder: this.email},
    {id: this.password, type: this.password, formControlName: this.password, placeholder: this.password},
  ]

  controlErrorMessagesData:Array<HintControl> = [
    [
      this.controlEmail, [
        [ this.validatorRequired, 'email is empty' ],
        [ this.validatorEmail,    'email is invalid' ],
      ]
    ],
    [
      this.controlPassword, [
        [ this.validatorRequired,  'password is empty' ],
        [ this.validatorMinLength, 'password is too small' ],
      ]
    ],
  ]

  formErrorMessagesData:Array<HintForm> = [
    [this.validatorAccountNotRegistered, 'account is not registered' ],
  ]

  constructor(private pagesService: PagesService,
              private hintServise: HintService) {}

  isAccountNotRegistered(control: AbstractControl):ValidationErrors | null {
    const email = control.get('email')?.value
    if (email && !(email in USERS)) {
      return {accountNotRegistered: true}
    }
    return null
  }
  
  isInvalidForm(authForm: FormGroup){
    return this.pagesService.isInvalidForm(authForm)
  }

  getFormHintMessage(authForm: FormGroup) {
    return this.hintServise.getFormHintMessage(authForm, this.controlErrorMessagesData, this.formErrorMessagesData)
  }

}
