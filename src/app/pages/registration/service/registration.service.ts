import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HintService } from 'src/app/components/hint/services/hint.service';
import { USERS } from 'src/app/mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor (private hintService: HintService,
               private router: Router) {}

  registrationForm = new FormGroup({

    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),

  }, {validators: [this.hintService.isPasswordsMatching,
                   this.hintService.isEmailCreated]})

  registrate() {
    const {email,password,userName} = this.registrationForm.value
    if (!this.hintService.isInvalidForm(this.registrationForm) && email && password && userName) {
      const newUser = {
        id: `${Object.keys(USERS).length + 1}`,
        isLogined: false,
        password,
        userName,
        email,
      }
      USERS[email] = newUser
    }
    this.router.navigate(['/'])
  }

}
