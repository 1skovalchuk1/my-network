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


export interface IUser {
  id: string,
  isOnline: boolean,
  userPic: TUserPic,
  userName: string,
  userInfo: Array<{title:string, value:string}>,
  palsChatRelationId: Array<string>,
}

export interface IUsersBase {
  [id:string]: IUser
}

