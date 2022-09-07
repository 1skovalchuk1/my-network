interface ValidatorData {
  type: string,
  message: string
}

export interface ErrorMessageData {
  formControlName: string,
  validators: Array<ValidatorData>,
}
