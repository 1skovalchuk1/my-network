import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IHintState } from "../states/hint.state";

const selectUser = (state: IAppState) => state.user;

// export const selectUserData = createSelector(
//   selectUser, (userState:IHintState) => userState.currentUser
// )

// export const selectUserIsAuth = createSelector(
//   selectUser, (userState:IHintState) => userState.currentUser?.isLogined
// )