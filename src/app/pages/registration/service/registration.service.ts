import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HintService } from 'src/app/components/hint/services/hint.service';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor (private hintService: HintService,
               private userService: UserService) {}

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
    return this.userService.registrate(this.registrationForm)
  }

}
