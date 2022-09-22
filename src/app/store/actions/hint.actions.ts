import { createAction, props } from '@ngrx/store';

enum EHintActions {
  SetHint   = '[Hint] Set hint',
  ClearHint = '[Hint] Clear hint',
}

export const setHint = createAction(
  EHintActions.SetHint,
  props<{ message: string }>()
)

export const clearHint = createAction(
  EHintActions.ClearHint,
)