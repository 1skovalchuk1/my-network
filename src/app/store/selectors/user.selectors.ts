import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IUserState } from "../states/user.state";

const selectUser = (state: IAppState) => state.user;

export const selectUserData = createSelector(
  selectUser, (userState:IUserState) => userState.currentUser
)

export const selectUserIsAuth = createSelector(
  selectUser, (userState:IUserState) => userState.currentUser?.isLogined
)

