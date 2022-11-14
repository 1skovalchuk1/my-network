import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HintService } from 'src/app/hint/services/hint.service';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id: string | null = ''

  authForm = new FormGroup({
    
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  }, {validators: [this.hintService.isAccountNotRegistered]})

  constructor(private hintService: HintService,
              private userService: UserService) {}

  login() {
    this.userService.login(this.authForm)
  }

  authenticate({ email, password }: { email: string, password: string}) {
    return this.userService.authenticate({ email, password })
  }

}
