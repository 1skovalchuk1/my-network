import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';
import * as UserActions from '../actions/user.actions'


@Injectable()
export class UserEffects {

  login$ = createEffect(() => 
    this.actions$.pipe(
      ofType(UserActions.loginUser),
      switchMap((auth) => this.userService.login(auth).pipe(
        map(currentUser => UserActions.loginUserSuccess({currentUser})),
        catchError(() => of(UserActions.loginUserError()))
      ))
    )
  )

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
  
}