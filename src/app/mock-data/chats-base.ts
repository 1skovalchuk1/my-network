import { IChatsBase } from "../interfaces/chats";

export const CHATS: IChatsBase = {

  '1': {
    chatId: '1',
    palsId: ['1', '2'],
    messages: [
      {
        userId: '1',
        userName: 'Tom',
        userPic: 'bull',
        isRead: false,
        text: 'Hello from Tom 1',
      },
      {
        userId: '2',
        userName: 'Lucas',
        userPic: 'horse',
        isRead: false,
        text: 'Hello from Lucas 2',
      },
      {
        userId: '2',
        userName: 'Lucas',
        userPic: 'horse',
        isRead: false,
        text: 'Hello from Lucas 3',
      },
      {
        userId: '2',
        userName: 'Lucas',
        userPic: 'horse',
        isRead: false,
        text: 'Hello from Lucas 4',
      },
      {
        userId: '1',
        userPic: 'bull',
        userName: 'Tom',
        isRead: false,
        text: 'Hello from Tom 5',
      },
    ],
  },
  '2': {
    chatId: '2',
    palsId: ['1', '4'],
    messages: [
      {
        userId: '1',
        userPic: 'bull',
        userName: 'Tom',
        isRead: false,
        text: 'Hello from Tom 1',
      },
      {
        userId: '1',
        userPic: 'bull',
        userName: 'Tom',
        isRead: false,
        text: 'Hello from Tom 2',
      },
      {
        userId: '4',
        userPic: 'dolphin',
        userName: 'Mia',
        isRead: false,
        text: 'Hello from Mia 3',
      },
    ],
  },
  '3': {
    chatId: '3',
    palsId: ['2','5'],
    messages: [
      {
        userId: '5',
        userPic: 'cat',
        userName: 'Sophia',
        isRead: false,
        text: 'Hello from Sophia 1',
      },
      {
        userId: '5',
        userPic: 'cat',
        userName: 'Sophia',
        isRead: false,
        text: 'Hello from Sophia 2',
      },
      {
        userId: '2',
        userName: 'Lucas',
        userPic: 'horse',
        isRead: false,
        text: 'Hello from Lucas 3',
      },
    ]
  },
  '4': {
    chatId: '4',
    palsId: ['4','5'],
    messages: [],
  },
}