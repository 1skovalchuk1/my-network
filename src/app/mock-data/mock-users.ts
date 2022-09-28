import { IUser, IPal } from "../interfaces/user";

export const PALS: {[id:string]: IPal} = {
  '1': {
    id: '1',
    isOnline: false,
    userPic: 'bull',
    userName: 'Tom',
  },
  '2': {
    id: '2',
    isOnline: false,
    userPic: 'horse',
    userName: 'Lucas',
  },
  '3': {
    id: '3',
    isOnline: false,
    userPic: 'deer',
    userName: 'Jimmy',
  },
  '4': {
    id: '4',
    isOnline: false,
    userPic: 'dolphin',
    userName: 'Mia',
  },
  '5': {
    id: '5',
    isOnline: false,
    userPic: 'cat',
    userName: 'Sophia',
  },
}

export const USERS:{[email:string]: IUser} = {
  'tom@test.com': {
    id: '1',
    isOnline: false,
    userPic: 'bull',
    userName: 'Tom',
    email: 'tom@test.com',
    password: '111111111',
    pals: ['2','4']
  },
  'lucas@test.com': {
    id: '2',
    isOnline: false,
    userPic: 'horse',
    userName: 'Lucas',
    email: 'lucas@test.com',
    password: '111111111',
    pals: ['1','5']
  },
  'jimmy@test.com': {
    id: '3',
    isOnline: false,
    userPic: 'deer',
    userName: 'Jimmy',
    email: 'jimmy@test.com',
    password: '111111111',
    pals: []
  },
  'mia@test.com': {
    id: '4',
    isOnline: false,
    userPic: 'dolphin',
    userName: 'Mia',
    email: 'mia@test.com',
    password: '111111111',
    pals: ['5','1']
  },
  'sophia@test.com': {
    id: '5',
    isOnline: false,
    userPic: 'cat',
    userName: 'Sophia',
    email: 'sophia@test.com',
    password: '111111111',
    pals: ['2','4']
  },
}
