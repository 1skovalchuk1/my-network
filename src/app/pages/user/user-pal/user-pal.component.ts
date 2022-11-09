import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPal } from 'src/app/interfaces/pals';
import { IUser } from 'src/app/interfaces/user';
import { PALS } from 'src/app/mock-data/pals-base';
import { selectRouteParams } from 'src/app/store/selectors/router.selectors';
import { IAppState } from 'src/app/store/states/app.state';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-pal',
  templateUrl: './user-pal.component.html',
  styleUrls: ['./user-pal.component.css']
})
export class UserPalComponent implements OnInit {

  currentUser: IUser | null = null
  id:string = ''
  pal:IPal = {
    id: '',
    userName: '',
    userPic: 'bull',
    userInfo: [],
    isOnline: false
  }

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.user
    this.id = this.getChatId()
    this.store.select(selectRouteParams).subscribe((obj) => this.pal = PALS[obj['id']])
  }

  getChatId() {
    if (this.currentUser) {
      const index = this.currentUser?.pals.findIndex((i) => i === this.route.snapshot.params['id'])
      if (index.toString()) {
        return this.currentUser?.chats[index]
      }
    }
    return ''
  }

}
