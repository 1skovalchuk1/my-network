import { IUsersBase } from "../interfaces";

export const USERS:IUsersBase = {
  '1': {
      id: '1',
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
      palsChatRelationId: ['1','2']

  },
  '2': {
      id: '2',
      isOnline: true,
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
      palsChatRelationId: ['1','3']
  },
  '3': {
      id: '3',
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
      palsChatRelationId: []
  },
  '4': {
      id: '4',
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
      palsChatRelationId: ['2','4']
  },
  '5': {
      id: '5',
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
      palsChatRelationId: ['3','4']
  },
}
