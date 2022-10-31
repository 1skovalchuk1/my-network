import {TInfo, TUserPic} from './user'

export interface IPal {
  id: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  userInfo: TInfo
}

export interface IPalsBase {
  [id:string]: IPal
}