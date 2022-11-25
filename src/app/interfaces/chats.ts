import { TUserPic } from "./"

export interface IParseMessage {
  userId: string,
  userName: string,
  userPic: TUserPic,
  isCurrentUser: boolean,
  dispatchTime: string,
  isEdit: boolean,
  isRead: boolean,
  text: string,
}

export interface IMessage {
  userId: string,
  isRead: boolean,
  isEdit: boolean,
  dispatchTime: string,
  text: string,
}

export interface IChat {
  chatId: string,
  palsId: Array<string>,
  messages: Array<IMessage>,
}

export interface IChatsBase {
  [id:string]: IChat,
}

