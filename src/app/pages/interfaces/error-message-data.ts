interface ValidatorData {
  type: string,
  message: string
}

export interface ErrorMessageData {
  formControlname: string,
  validators: Array<ValidatorData>
}
