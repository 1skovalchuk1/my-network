import { IUsersBase } from "../interfaces/user";

export const USERS:IUsersBase = {
  'tom@test.com': {
      id: '1',
      email: 'tom@test.com',
      password: '111111111',
      isOnline: false,
      userPic: 'bull',
      userName: 'Tom',
      userInfo: [
        {
          title: 'tel',
          value: '+123-45-67-890'
        },
        {
          title: 'about',
          value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero alias quidem repudiandae? Maxime, blanditiis dolores exercitationem voluptate dolorum sint facilis hic, earum in quaerat voluptates saepe? Sequi, incidunt enim.'
        },
      ],
      palsData: [
        {
          palId: '2',
          palChatId: '1'
        },
        {
          palId: '4',
          palChatId: '2'
        },
      ]
  },
  'lucas@test.com': {
      id: '2',
      email: 'lucas@test.com',
      password: '111111111',
      isOnline: false,
      userPic: 'horse',
      userName: 'Lucas',
      userInfo: [
        {
          title: 'tel',
          value: '+123-45-67-890'
        },
        {
          title: 'about',
          value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero alias quidem repudiandae? Maxime, blanditiis dolores exercitationem voluptate dolorum sint facilis hic, earum in quaerat voluptates saepe? Sequi, incidunt enim.'
        },

      ],
      palsData: [
        {
          palId: '1',
          palChatId: '1'
        },
        {
          palId: '5',
          palChatId: '3'
        },
      ]
  },
  'jimmy@test.com': {
      id: '3',
      email: 'jimmy@test.com',
      password: '111111111',
      isOnline: false,
      userPic: 'deer',
      userName: 'Jimmy',
      userInfo: [
        {
          title: 'tel',
          value: '+123-45-67-890'
        },
        {
          title: 'about',
          value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero alias quidem repudiandae? Maxime, blanditiis dolores exercitationem voluptate dolorum sint facilis hic, earum in quaerat voluptates saepe? Sequi, incidunt enim.'
        },

      ],
      palsData: []
  },
  'mia@test.com': {
      id: '4',
      email: 'mia@test.com',
      password: '111111111',
      isOnline: false,
      userPic: 'dolphin',
      userName: 'Mia',
      userInfo: [
        {
          title: 'tel',
          value: '+123-45-67-890'
        },
        {
          title: 'about',
          value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero alias quidem repudiandae? Maxime, blanditiis dolores exercitationem voluptate dolorum sint facilis hic, earum in quaerat voluptates saepe? Sequi, incidunt enim.'
        },

      ],
      palsData: [
        {
          palId: '1',
          palChatId: '2'
        },
        {
          palId: '5',
          palChatId: '4'
        },
      ]
  },
  'sophia@test.com': {
      id: '5',
      email: 'sophia@test.com',
      password: '111111111',
      isOnline: false,
      userPic: 'cat',
      userName: 'Sophia',
      userInfo: [
        {
          title: 'tel',
          value: '+123-45-67-890'
        },
        {
          title: 'about',
          value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe libero alias quidem repudiandae? Maxime, blanditiis dolores exercitationem voluptate dolorum sint facilis hic, earum in quaerat voluptates saepe? Sequi, incidunt enim.'
        },

      ],
      palsData: [
        {
          palId: '2',
          palChatId: '3'
        },
        {
          palId: '4',
          palChatId: '4'
        },
      ]
  },
}
