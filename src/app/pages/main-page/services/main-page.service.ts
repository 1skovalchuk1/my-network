import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessageData } from '../../interfaces/error-message-data';
import { PagesService } from '../../pages.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  inputDatas = [
    {id: 'email',    type: 'email',    formControlName: 'email',         placeholder: 'email'},
    {id: 'password', type: 'password', formControlName: 'password',      placeholder: 'password'},
  ]

  errorMessageDatas:Array<ErrorMessageData> = [
    {
      formControlname: 'email',
      validators: [
        { type: 'required', message: 'email is empty' },
        { type: 'email', message: 'email is invalid' },
      ]
    },
    {
      formControlname: 'password',
      validators: [
        { type: 'required', message: 'password is empty' },
        { type: 'minlength', message: 'password is too small' },
      ]
    },
  ]

  constructor(private pagesService: PagesService) { }

  isInvalidForm = (authForm:FormGroup) => this.pagesService.isInvalidForm(authForm, ['email', 'password'])

  getErrorMessage = (authForm: FormGroup,): string => {
    return this.pagesService.getErrorMessage(authForm, this.errorMessageDatas)
  }

}
