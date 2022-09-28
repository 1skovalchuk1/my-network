 type TUserPic =
  'bear' |
  'bull' |
  'cat' |
  'deer' |
  'dog' |
  'dolphin' |
  'eagle' |
  'elephant' |
  'elk' |
  'frog' |
  'giraffee' |
  'horse' |
  'lion' |
  'penguin' |
  'rhinoceros' |
  'squirrel'

export interface IPal {
  id: string,
  isOnline: boolean,
  userPic: string,
  userName: string,
}

export interface IUser {
  id: string,
  isOnline: boolean,
  userName: string,
  userPic: TUserPic,
  email: string,
  password: string,
  pals: Array<string>
}
