import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  errorData = [
    ['email-required', 'email is empty'],
    ['email-email', 'email is invalid'],
    ['password-required', 'password is empty'],
    ['password-minlength', 'password is too small'],
  ]

  constructor() { }

  isInvalidForm(authForm:FormGroup): boolean | undefined {
   return (authForm.get('email')?.invalid && (
    authForm.get('email')?.dirty || authForm.get('email')?.touched)) || (
    authForm.get('password')?.invalid && (
    authForm.get('password')?.dirty || authForm.get('password')?.touched))
  }

  getErrorMessage(authForm:FormGroup): string {
    if (authForm.get('email')) {
      if (authForm.get('email')?.errors?.['required']) {
        return 'email-required'
      }
      if (authForm.get('email')?.errors?.['email']) {
        return 'email-email'
      }
    }
    if (authForm.get('password')) {
      if (authForm.get('password')?.errors?.['required']) {
        return 'password-required'
      }
      if (authForm.get('password')?.errors?.['minlength']) {
        return 'password-minlength'
      }
    }
    return ''
  }

}
