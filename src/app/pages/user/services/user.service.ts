import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HintService } from 'src/app/hint/services/hint.service';
import { USERS, CHATS, SECRET_KEY_BASE, AUTHENTICATION, PALS_CHAT_RELATION } from 'src/app/mock-data';
import { IUser } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null = null;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private hintService: HintService,
    private router: Router,
    ) {
      if (localStorage.getItem( 'currentUser' )) {
        this.user = JSON.parse(localStorage.getItem( 'currentUser' ) || '')
      }
  }

  login(authForm: FormGroup) {
    const {email, password} = authForm.value
    if (email && password) {
      if (!this.hintService.isInvalidForm(authForm)) {
        this.router.navigate(['/user/home'])
      }
    }
  }

  authenticate({ email, password }: { email: string, password: string}) {
    if (AUTHENTICATION[email] && AUTHENTICATION[email].password === password) {
      const userId = AUTHENTICATION[email].id
      if (USERS[userId].isOnline) {
        return false
      }
      
      localStorage.setItem('currentUser', JSON.stringify(USERS[userId]))
      this.user = JSON.parse(localStorage.getItem( 'currentUser' ) || '')
      return true
    }
    return false
  }

  registrate(registrationForm: FormGroup) {
    const {email,password,userName} = registrationForm.value
    if (!this.hintService.isInvalidForm(registrationForm) && email && password && userName) {
      const id = `${Object.keys(AUTHENTICATION).length + 1}`
      AUTHENTICATION[email] = {
        id,
        password,
      }
      const newUser:IUser = {
        id,
        isOnline: false,
        userPic: 'bull' as const,
        userName,
        userInfo: [],
        palsChatRelationId: [],
      }
      USERS[id] =  newUser

    }
    this.router.navigate(['/'])
  }

  addPal(isDataSend:boolean, palSecretKey:string, uuid:string) {
    if (this.user && isDataSend) {
      const {id: userId } = this.user
      const newChatId = `${Object.keys(CHATS).length + 1}`
      SECRET_KEY_BASE[uuid] = {id:userId, palSecretKey}
      if (SECRET_KEY_BASE[palSecretKey]) {
        const addPalId = SECRET_KEY_BASE[palSecretKey].id
        CHATS[newChatId] = {
          chatId: newChatId,
          palsId: [addPalId, userId],
          messages: []
        }
        const palsChatRelationId = `${Object.keys(PALS_CHAT_RELATION).length + 1}`
        PALS_CHAT_RELATION[palsChatRelationId] = {
          palsId: [addPalId, userId],
          chatId: newChatId,
        }
        USERS[userId] = {...USERS[userId],
                     palsChatRelationId: [...USERS[userId].palsChatRelationId, palsChatRelationId]}

        USERS[addPalId] = {...USERS[addPalId],
                     palsChatRelationId: [...USERS[addPalId].palsChatRelationId, palsChatRelationId]}

        this.user = USERS[userId]
        console.log(PALS_CHAT_RELATION)
        localStorage.setItem('currentUser', JSON.stringify(USERS[userId]))
      }
    }
  }

  getPalInfo(relId:string) {
    if (this.user) {
      console.log(relId)
      const palId = PALS_CHAT_RELATION[relId].palsId.find((id) => id != this.user?.id) || ''
      const palInfo = USERS[palId].userInfo
      const palChatId = PALS_CHAT_RELATION[relId].chatId
      return {
        palId,
        palInfo,
        palChatId
      }
    }
    return {
      palId: null,
      palInfo: null,
      palChatId: null
    }
  }

  updateData(newUserData:IUser | null) {
    if (localStorage.getItem( 'currentUser' ) && newUserData) {
      const {id, userPic, userName, userInfo} = newUserData
      const newPalData = {...USERS[id], userPic, userName, userInfo}
      localStorage.setItem('currentUser', JSON.stringify(newUserData))
      USERS[id] = newPalData
      this.user = newUserData
      this.router.navigate(['/user/home'])
    }
  }

  parseMessages(chatId: string) {
    const userId = this.user?.id
    const messages = CHATS[chatId].messages
    return messages.map((i) => {
      const userName = USERS[i.userId].userName
      const userPic = USERS[i.userId].userPic
      return i.userId === userId ?
                          {...i, userName, userPic, isCurrentUser: true}:
                          {...i, userName, userPic, isCurrentUser: false}
    })
  }

  sendMessage(message:string, chatId: string) {
    const dispatchTime = formatDate(Date.now(), 'HH:mm:ss', this.locale)
    const trimMessage = message.trim()
    if (this.user && trimMessage) {
      CHATS[chatId].messages.push({
        userId: this.user.id,
        isRead: false,
        isEdit: false,
        dispatchTime,
        text: trimMessage})
    }
  }

  readMessage(chatId: string, idMessage: number) {
    CHATS[chatId].messages[idMessage].isRead = true
  }

  parsePalsData() {
    if (this.user) {
      return this.user.palsChatRelationId.map((relId) => {
        const chatId = PALS_CHAT_RELATION[relId].chatId
        const palId = PALS_CHAT_RELATION[relId].palsId.find((id) => id != this.user?.id) || ''
        const messages = CHATS[chatId].messages
        const lastMessage = messages[0] ? messages[messages.length - 1].text : ''
        const {isOnline, userPic, userName, userInfo} = USERS[palId]
        return {
          relId,
          palId,
          chatId,
          isOnline,
          userPic,
          userName,
          userInfo,
          lastMessage,
        }
      })
    }
    return null
  }

  removePal(relId:string) {
    if (this.user) {
      const id = this.user.id
      PALS_CHAT_RELATION[relId].palsId.map((userId) => {
        USERS[userId] = {
          ...USERS[userId],
          palsChatRelationId: USERS[userId].palsChatRelationId.filter((id) => relId != id)
        }
      })
      delete PALS_CHAT_RELATION[relId]
      localStorage.setItem('currentUser', JSON.stringify(USERS[id]))
      this.user = JSON.parse(localStorage.getItem( 'currentUser' ) || '')
      this.router.navigate(['/user/pals'])
    }
  }

  removeMessage(i:number, chatId:string) {
    CHATS[chatId].messages.splice(i,1)
  }

  editMessage(newEditText:string, messageId:number, chatId:string) {
    CHATS[chatId].messages[messageId].text = newEditText
    console.log(CHATS)
  }

}
