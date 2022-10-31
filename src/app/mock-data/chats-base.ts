import { IChatsBase } from "../interfaces/chats";

export const CHATS: IChatsBase = {

  '1': {
    id: '1',
    palsId: ['1', '2',],
    messages: [
      {
        user: {
          id: '1',
          isOnline: true,
          userPic: 'bull',
          userName: 'Tom',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Tom 1',
      },
      {
        user: {
          id: '2',
          isOnline: true,
          userPic: 'horse',
          userName: 'Lucas',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Lucas 2',
      },
      {
        user: {
          id: '2',
          isOnline: true,
          userPic: 'horse',
          userName: 'Lucas',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Lucas 3',
      },
      {
        user: {
          id: '2',
          isOnline: true,
          userPic: 'horse',
          userName: 'Lucas',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Lucas 4',
      },
      {
        user: {
          id: '1',
          isOnline: true,
          userPic: 'bull',
          userName: 'Tom',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Tom 5',
      },
    ],
  },
  '2': {
    id: '2',
    palsId: ['1', '4'],
    messages: [
      {
        user: {
          id: '1',
          isOnline: true,
          userPic: 'bull',
          userName: 'Tom',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Tom 1',
      },
      {
        user: {
          id: '1',
          isOnline: true,
          userPic: 'bull',
          userName: 'Tom',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Tom 2',
      },
      {
        user: {
          id: '4',
          isOnline: true,
          userPic: 'dolphin',
          userName: 'Mia',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Mia 3',
      },
    ],
  },
  '3': {
    id: '3',
    palsId: ['2','5'],
    messages: [
      {
        user: {
          id: '5',
          isOnline: true,
          userPic: 'cat',
          userName: 'Sophia',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Sophia 1',
      },
      {
        user: {
          id: '5',
          isOnline: true,
          userPic: 'cat',
          userName: 'Sophia',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Sophia 2',
      },
      {
        user: {
          id: '2',
          isOnline: true,
          userPic: 'horse',
          userName: 'Lucas',
          userInfo: []
        },
        isRead: false,
        text: 'Hello from Lucas 3',
      },
    ]
  },
  '4': {
    id: '4',
    palsId: ['4','5'],
    messages: [],
  },
}