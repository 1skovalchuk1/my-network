import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/user';

enum EUserActions {
  LoginUser        = '[Main Page] Login User',
  LoginUserSuccess = '[Main Page] Login User Success',
  LogoutUser       = '[User Page] Logout User'
}

export const loginUser = createAction(
  EUserActions.LoginUser,
  props<{ email: string, password: string }>()
)

export const loginUserSuccess = createAction(
  EUserActions.LoginUserSuccess,
  props<{ currentUser: IUser }>()
)

export const logoutUser = createAction(
  EUserActions.LogoutUser,
)
