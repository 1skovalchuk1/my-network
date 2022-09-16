import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessageData } from './interfaces/error-message-data';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  isInvalidForm(form: FormGroup): boolean {
    if (form.invalid && (form.touched || !form.pristine)) {
      return true
    }
    return false
  }

  getErrorMessage(authForm: FormGroup,
                  controlErrorMessagesData: Array<ErrorMessageData>,
                  formErrorMessagesData: Array<ErrorMessageData> = []): string {
    const controlsData = controlErrorMessagesData.map((obj) => {
        return obj.validators.map((validator) => {
          return {
                    isError: authForm.get(obj.formControlName)?.errors?.[validator.type],
                    message: validator.message,
                 }
        })
    })
    if (authForm.errors) {
      const formData = formErrorMessagesData.map((obj) => {
        return obj.validators.map((validator) => {
          return {
                    isError: authForm.errors?.[validator.type],
                    message: validator.message,
                  }
        })
      })
      return controlsData.concat(formData).flat().find((item) => item.isError)?.message || ''
    }
    return controlsData.flat().find((item) => item.isError)?.message || ''
  }

}
