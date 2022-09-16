import { RouterReducerState } from "@ngrx/router-store";
import { IHintState, initialHintState } from "./hint.state";
import { initialUserState, IUserState } from "./user.state";


export interface IAppState {
  router?: RouterReducerState
  user: IUserState
  hint: IHintState
}

export const initialAppState:IAppState = {
  user: initialUserState,
  hint: initialHintState,
}

export function getInitialState():IAppState {
  return initialAppState
}