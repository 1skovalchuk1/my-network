import { IMessage } from './'
import { TUserPic } from './'

export interface IParsePalData {
  palsDataId: number,
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
  userInfo: Array<{title:string, value:string}>,
}

export interface IPalsBase {
  [id:string]: IPal
}