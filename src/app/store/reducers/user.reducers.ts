import { createReducer, on } from "@ngrx/store";
import * as UserActions from "../actions/user.actions";
import { initialUserState } from "../states/user.state";

export const userReducers = createReducer(
  initialUserState,
  on(UserActions.loginUserSuccess, (state, {currentUser}) => (
    {...state, currentUser: {...currentUser, isLogined: true}})),
    
  on(UserActions.logoutUser, () => ({currentUser: null}))
)