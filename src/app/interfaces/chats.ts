import { IPal } from "./pals"

type TChat = Array<IMessage>
type TPalsId = Array<string>

export interface IMessage {
  user: IPal,
  isRead: boolean,
  text: string,
}

export interface IChat {
  id: string,
  palsId: TPalsId,
  messages: TChat
}

export interface IChatsBase {
  [id:string]: IChat
}

