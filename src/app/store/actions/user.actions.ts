import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/user';

enum EUserActions {
  LoginUser               = '[Main Page] Login User',
  LoginUserSuccess        = '[Main Page] Login User Success',
  LoginUserError          = '[Main Page] Login User Error',

  LogoutUser              = '[User Page] Logout User'
}

// **************LOGIN***************************
export const loginUser = createAction(
  EUserActions.LoginUser,
  props<{ email: string, password: string }>()
)

export const loginUserSuccess = createAction(
  EUserActions.LoginUserSuccess,
  props<{ currentUser: IUser }>()
)

export const loginUserError = createAction(
  EUserActions.LoginUserError,
)

// ************LOGOUT**************************
export const logoutUser = createAction(
  EUserActions.LogoutUser,
)
