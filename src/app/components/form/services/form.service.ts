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
  [type: string]: {
    imgNamesSrc: Array<string>,
    types: Array<string>,
    links: Array<string | Array<string>>,
  }
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
      {id: 'userName',        type: '',         formControlName: 'userName',        placeholder: 'user-name'},
      {id: 'email',           type: 'email',    formControlName: 'email',           placeholder: 'email'},
      {id: 'password',        type: 'password', formControlName: 'password',        placeholder: 'password'},
      {id: 'confirmPassword', type: 'password', formControlName: 'confirmPassword', placeholder: 'confirm-password'},
    ]
  }

  buttonsData:ButtonData = {
    'auth': {
      types:       ['button',        'submit'],
      imgNamesSrc: ['registration',  'login'],
      links:       ['/registration', '']
    },
    'registration': {
      types:       ['button', 'submit'],
      imgNamesSrc: ['cancel', 'ok'],
      links:       ['/',      '']
    }
  }

  constructor() { }
}
