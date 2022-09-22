import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as UserActions from '../actions/user.actions'
import * as HintActions from '../actions/hint.actions'
import { AuthService } from 'src/app/pages/auth/services/auth.service';


@Injectable()
export class UserEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      switchMap((data) => this.authService.authenticate(data).pipe(
        map(currentUser => UserActions.loginUserSuccess({currentUser})),
        catchError(() => of(HintActions.setHint({message: 'something wrong...'})))
      ))
    )
  })

  constructor(
    private actions$: Actions,
    public authService: AuthService,
  ) {}
  
}