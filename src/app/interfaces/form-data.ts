export interface InputData {
  [type: string]: Array<{
    id: string,
    type: string,
    formControlName: string,
    placeholder: string,
  }>
}

export interface ButtonData {
  [type: string]: {
    imgNamesSrc: Array<string>,
    types: Array<string>,
    links: Array<string | Array<string>>,
  }
}