import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HintService } from 'src/app/hint/services/hint.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from 'src/app/mock-data/users-base';
import { EMPTY, of } from 'rxjs';
import { PALS } from 'src/app/mock-data/pals-base';
import { IUser } from 'src/app/interfaces/user';
import { SECRET_KEY_BASE } from 'src/app/mock-data/secret-keys-base';
import { CHATS } from 'src/app/mock-data/chats-base';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  user: IUser | null = null;

  constructor(
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
    if (USERS[email] && USERS[email].password === password) {
      if (USERS[email].isOnline) {
        // this.store.dispatch(HintActions.setHint({message: 'user already login'}))
        return EMPTY
      }
      localStorage.setItem('currentUser', JSON.stringify(USERS[email]))
      this.user = JSON.parse(localStorage.getItem( 'currentUser' ) || '')
      return of(USERS[email])
    }
    // this.store.dispatch(HintActions.setHint({message: 'email or password is incorrect'}))
    return EMPTY
  }

  registrate(registrationForm: FormGroup) {
    const {email,password,userName} = registrationForm.value
    if (!this.hintService.isInvalidForm(registrationForm) && email && password && userName) {
      const newUser:IUser = {
        id: `${Object.keys(USERS).length + 1}`,
        email,
        password,
        isOnline: false,
        userPic: 'bull' as const,
        userName,
        userInfo: [],
        palsData: [],
      }
      USERS[email] =  newUser

      const newPal = {
        palId: newUser.id,
        isOnline: newUser.isOnline,
        userPic: newUser.userPic,
        userName,
        userInfo: [],
      }
      PALS[newUser.id] = newPal
    }
    this.router.navigate(['/'])
  }

  addPal(isDataSend:boolean, palSecretKey:string, uuid:string) {
    if (this.user && isDataSend) {
      const {id,email} = this.user
      const newChatId = `${Object.keys(CHATS).length + 1}`
      SECRET_KEY_BASE[uuid] = {id, palSecretKey}
      if (SECRET_KEY_BASE[palSecretKey]) {
        const addPalId = SECRET_KEY_BASE[palSecretKey].id
        CHATS[newChatId] = {
          chatId: newChatId,
          palsId: [addPalId, id],
          messages: []
        }
        USERS[email] = {...USERS[email],
                           palsData: [...USERS[email].palsData, {palId: addPalId, palChatId: newChatId}]}
        this.user = USERS[email]
        localStorage.setItem('currentUser', JSON.stringify(USERS[email]))
      }
    }
  }

  getPalInfo(id:string) {
    return PALS[id]
  }

  updateData(newUserData:IUser | null) {
    if (localStorage.getItem( 'currentUser' ) && newUserData) {
      const {id, userPic, userName, userInfo} = newUserData
      const newPalData = {...PALS[id], userPic, userName, userInfo}
      localStorage.setItem('currentUser', JSON.stringify(newUserData))
      PALS[id] = newPalData
      this.user = newUserData
    }
  }

  parseMessages(chatId: string) {
    const userId = this.user?.id
    const messages = CHATS[chatId].messages
    return messages.map((i) => {
      return i.userId === userId ? {...i, isCurrentUser: true} : {...i, isCurrentUser: false}
    })
  }

  sendMessage(message:string, chatId: string) {
    const trimMessage = message.trim()
    if (this.user && trimMessage) {
      CHATS[chatId].messages.push({
        userId: this.user.id,
        userName: this.user.userName,
        userPic: this.user.userPic,
        isRead: false,
        text: trimMessage})
    }
  }

  readMessage(chatId: string, idMessage: number) {
    CHATS[chatId].messages[idMessage].isRead = true
  }

  parsePalsData() {
    if (this.user) {
      return this.user.palsData.map((i) => {
        const {chatId, messages} = CHATS[i.palChatId]
        const lastMessage = messages[messages.length - 1]
        const {palId, isOnline, userPic, userName} = PALS[i.palId]
        return {
          palId,
          chatId,
          isOnline,
          userPic,
          userName,
          lastMessage,
        }
      })
    }
    return null
  }

  editMessage() {}

  removeMessage() {}

  removePal() {}

  loguot() {}

}
