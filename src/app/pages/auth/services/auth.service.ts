import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { USERS } from 'src/app/mock-data/mock-users';
import { IAppState } from 'src/app/store/states/app.state';
import { PagesService } from '../../pages.service';
import * as HintActions from '../../../store/actions/hint.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // INPUTS VALUE
  email    = 'email'
  password = 'password'

  // VALIDATORS TYPE
  validatorEmail                 = 'email'
  validatorRequired              = 'required'
  validatorMinLength             = 'minlength'
  validatorAccountNotRegistered  = 'accountNotRegistered'

  // CONTROLS NAME
  controlEmail    = 'email'
  controlPassword = 'password'

  inputDatas = [
    {id: this.email,    type: this.email,    formControlName: this.email,    placeholder: this.email},
    {id: this.password, type: this.password, formControlName: this.password, placeholder: this.password},
  ]

  constructor(private pagesService: PagesService,
              private store: Store<IAppState>) {}

  authenticate({ email, password }: { email: string, password: string}) {
    if (USERS[email] && USERS[email].password == password) {
      if (USERS[email].isLogined) {
        this.store.dispatch(HintActions.setHint({message: 'user already login'}))
        return EMPTY
      }
      return of(USERS[email])
    }
    this.store.dispatch(HintActions.setHint({message: 'email or password is incorrect'}))
    return EMPTY
  }

  isInvalidForm(authForm: FormGroup){
    return this.pagesService.isInvalidForm(authForm)
  }

}
