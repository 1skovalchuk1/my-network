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

export type TPalsId = Array<string>
export type TChatsId = Array<string>
export type TInfo = Array<{title:string, value:string}>

export interface IUser {
  id: string,
  email: string,
  password: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  userInfo: TInfo,
  pals: TPalsId,
  chats: TChatsId,
}

export interface IUsersBase {
  [email:string]: IUser
}

