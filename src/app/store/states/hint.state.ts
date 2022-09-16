import { IHint } from "src/app/interfaces/hint";


export interface IHintState {
  hint: IHint | null
}

export const initialHintState: IHintState = {
  hint: null
}