import { Injectable } from '@angular/core';
import { ButtonData, InputData } from 'src/app/interfaces';

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
