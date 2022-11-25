import { IChatsBase } from "../interfaces";

export const CHATS: IChatsBase = {

  '1': {
    chatId: '1',
    palsId: ['1', '2'],
    messages: [
      {
        userId: '1',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:01',
        text: 'Hello from Tom 1',
      },
      {
        userId: '2',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:02',
        text: 'Hello from Lucas 2',
      },
      {
        userId: '2',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:03',
        text: 'Hello from Lucas 3',
      },
      {
        userId: '2',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:04',
        text: 'Hello from Lucas 4',
      },
      {
        userId: '1',
        isRead: false,
        isEdit: true,
        dispatchTime: '00:01:05',
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
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:01',
        text: 'Hello from Tom 1',
      },
      {
        userId: '1',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:02',
        text: 'Hello from Tom 2',
      },
      {
        userId: '4',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:03',
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
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:01',
        text: 'Hello from Sophia 1',
      },
      {
        userId: '5',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:02',
        text: 'Hello from Sophia 2',
      },
      {
        userId: '2',
        isRead: false,
        isEdit: false,
        dispatchTime: '00:01:03',
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