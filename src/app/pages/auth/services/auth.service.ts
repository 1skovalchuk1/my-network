import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { USERS } from 'src/app/mock-data/mock-users';
import { IAppState } from 'src/app/store/states/app.state';
import * as HintActions from 'src/app/store/actions/hint.actions'
import * as UserActions from 'src/app/store/actions/user.actions'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HintService } from 'src/app/components/hint/services/hint.service';
import { selectUserData } from 'src/app/store/selectors/user.selectors';
import { Router } from '@angular/router';

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

  constructor(private store: Store<IAppState>,
              private hintService: HintService,
              private router: Router) {}

  login() {
    const {email, password} = this.authForm.value
    if (!this.hintService.isInvalidForm(this.authForm) && email && password) {
      this.store.dispatch(UserActions.loginUser({email, password}))
      this.store.select(selectUserData).subscribe((user) => {if (user) {this.id = user.id}})
      this.router.navigate(['/user/home'])
    }
  }

  authenticate({ email, password }: { email: string, password: string}) {
    if (USERS[email] && USERS[email].password == password) {
      if (USERS[email].isOnline) {
        this.store.dispatch(HintActions.setHint({message: 'user already login'}))
        return EMPTY
      }
      localStorage.setItem('currentUser', JSON.stringify(USERS[email]))
      return of(USERS[email])
    }
    this.store.dispatch(HintActions.setHint({message: 'email or password is incorrect'}))
    return EMPTY
  }

}
