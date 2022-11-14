import { IMessage } from './chats'
import {TInfo, TUserPic} from './user'

export interface IParsePalData {
  palId: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  lastMessage: IMessage,
}

export interface IPal {
  palId: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  userInfo: TInfo
}

export interface IPalsBase {
  [id:string]: IPal
}