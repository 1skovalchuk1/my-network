import { Injectable } from '@angular/core';

interface InputData {
  [type: string]: Array<{
    id: string,
    type: string,
    formControlName: string,
    placeholder: string,
  }>
}

interface ButtonData {
  [type: string]: Array<{
    imgSrc: string,
    imgClass: string,
    buttonType: string,
    link: string | Array<string>,
  }>
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  inputsData:InputData = {
    'auth': [
      {id: 'email',    type: 'email',    formControlName: 'email',    placeholder: 'email'},
      {id: 'password', type: 'password', formControlName: 'password', placeholder: 'password'},
    ],
    'registration': [
      {id: '',         type: '',         formControlName: 'userName',        placeholder: 'user-name'},
      {id: 'email',    type: 'email',    formControlName: 'email',           placeholder: 'email'},
      {id: 'password', type: 'password', formControlName: 'password',        placeholder: 'password'},
      {id: '',         type: 'password', formControlName: 'confirmPassword', placeholder: 'confirm-password'},
    ]
  }

  buttonsData:ButtonData = {
    'auth': [
      {imgSrc: 'assets/icons/login.svg',        imgClass: 'page-icon', buttonType: 'submit', link: []},
      {imgSrc: 'assets/icons/registration.svg', imgClass: 'page-icon', buttonType: 'button', link: ['/registration']},
    ],
    'registration': [
      {imgSrc: 'assets/icons/ok.svg',     imgClass: 'page-icon', buttonType: 'submit', link: []},
      {imgSrc: 'assets/icons/cancel.svg', imgClass: 'page-icon', buttonType: 'button', link: ['/']},
    ]
  }

  constructor() { }
}
