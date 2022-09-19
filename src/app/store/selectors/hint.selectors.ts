import { createSelector } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { IHintState } from "../states/hint.state";

const selectHint = (state: IAppState) => state.hint;

export const selectHintMessage = createSelector(
  selectHint, (hintState:IHintState) => hintState.hint?.message || ''
)