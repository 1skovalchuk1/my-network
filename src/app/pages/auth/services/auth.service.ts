import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { USERS } from 'src/app/mock-data/mock-users';
import { IAppState } from 'src/app/store/states/app.state';
import * as HintActions from '../../../store/actions/hint.actions'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<IAppState>) {}

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

}
