import { TUserPic } from "./user"

type TChat = Array<IMessage>
type TPalsId = Array<string>

export interface IParseMessage {
  userId: string,
  userName: string,
  userPic: TUserPic,
  isCurrentUser: boolean
  isRead: boolean,
  text: string,
}

export interface IMessage {
  userId: string,
  userPic: TUserPic,
  userName: string,
  isRead: boolean,
  text: string,
}

export interface IChat {
  chatId: string,
  palsId: TPalsId,
  messages: TChat,
}

export interface IChatsBase {
  [id:string]: IChat,
}

