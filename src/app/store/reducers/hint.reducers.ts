import { createReducer, on } from "@ngrx/store";
import * as HintActions from "../actions/hint.actions";
import { initialHintState } from "../states/hint.state";

export const hintReducers = createReducer(
  initialHintState,
  on(HintActions.setHint, (state, {message}) => (
    {...state, hint : {message}})),
    
  on(HintActions.clearHint, state => (
    {...state, hint : null}))
)
