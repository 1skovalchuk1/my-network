import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

import { IAppState } from "../states/app.state";
import { hintReducers } from "./hint.reducers";
import { userReducers } from "./user.reducers";

export const appReducers:ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  user: userReducers,
  hint: hintReducers,
}