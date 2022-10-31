import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HintService } from 'src/app/components/hint/services/hint.service';
import { IAppState } from 'src/app/store/states/app.state';
import * as UserActions from 'src/app/store/actions/user.actions'
import * as HintActions from 'src/app/store/actions/hint.actions'
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

  user: IUser | null = null

  constructor(
    private hintService: HintService,
    private store: Store<IAppState>,
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
        this.store.dispatch(UserActions.loginUser({email, password}))
        this.router.navigate(['/user/home'])
      }
    }
  }

  authenticate({ email, password }: { email: string, password: string}) {
    if (USERS[email] && USERS[email].password === password) {
      if (USERS[email].isOnline) {
        this.store.dispatch(HintActions.setHint({message: 'user already login'}))
        return EMPTY
      }
      localStorage.setItem('currentUser', JSON.stringify(USERS[email]))
      this.user = JSON.parse(localStorage.getItem( 'currentUser' ) || '')
      return of(USERS[email])
    }
    this.store.dispatch(HintActions.setHint({message: 'email or password is incorrect'}))
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
        chats: [],
        pals: []
      }
      USERS[email] =  newUser

      const newPal = {
        id: newUser.id,
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
          id: newChatId,
          palsId: [addPalId, id],
          messages: []
        }
        USERS[email] = {...USERS[email],
                            pals:[...USERS[email].pals, addPalId],
                            chats:[...USERS[email].chats, newChatId]}
        this.user = USERS[email]
        localStorage.setItem('currentUser', JSON.stringify(USERS[email]))
      }
    }
  }

  sendMessage() {}

  editMessage() {}

  removeMessage() {}

  removePal() {}

  getUserData() {}

  loguot() {}

}
