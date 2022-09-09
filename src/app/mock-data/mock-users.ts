interface User {
  id: string,
  userName: string,
  email: string,
  password: string
}

export const USERS:{[email:string]: User} = {
  'testUser@gmail.com': {
    id: '1',
    userName: 'testUser',
    email: 'testUser@gmail.com',
    password: '91827364rR'
  },
}