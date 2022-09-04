import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessageData } from './interfaces/error-message-data';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  isInvalidForm(nameForm: FormGroup, values: Array<string>): boolean {
    const f = (str:string):boolean => {
      return (nameForm.get(str)?.invalid && 
        (nameForm.get(str)?.dirty || nameForm.get(str)?.touched)) || false
    }
    return values.reduce((acc,i) => acc || f(i), false)
  }

  getErrorMessage(authForm: FormGroup, errorMessageDatas: Array<ErrorMessageData>): string {
    const parseData = errorMessageDatas.map((obj) => {
        return obj.validators.map((validator) => {
        return {
                  isError: !!authForm.get(obj.formControlname)?.errors?.[validator.type],
                  message: validator.message,
               }
      })});
    return parseData.flat(2).find((item) => item.isError)?.message || ''
  }

}
