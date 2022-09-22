import { IUser } from "../interfaces/user";

export const USERS:{[email:string]: IUser} = {
  'testUser@gmail.com': {
    id: '1',
    isLogined: false,
    userName: 'testUser',
    email: 'testUser@gmail.com',
    password: '111111111'
  },
}
