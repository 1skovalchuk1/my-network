export type TUserPic =
  'bear'       |
  'bull'       |
  'cat'        |
  'deer'       |
  'dog'        |
  'dolphin'    |
  'eagle'      |
  'elephant'   |
  'elk'        |
  'frog'       |
  'giraffe'    |
  'horse'      |
  'lion'       |
  'penguin'    |
  'rhinoceros' |
  'squirrel'

export type IPalsData = {
  palId: string,
  palChatId: string
}
export type TPalsData = Array<IPalsData>
export type TInfo = Array<{title:string, value:string}>

export interface IUser {
  id: string,
  email: string,
  password: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  userInfo: TInfo,
  palsData: TPalsData,
}

export interface IUsersBase {
  [email:string]: IUser
}

